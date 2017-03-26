<template lang="html">
  <div class="spinning">
    <h1>Items List</h1>
    <div class="button-add">
      <el-button type="button" @click="dialogFormVisible = true">Add item</el-button>
    </div>
    <el-dialog title="Add Item" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="form.Postname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth">
          <el-input v-model="form.Postdescription" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createItem()">Confirm</el-button>
      </span>
    </el-dialog>
    <el-row>
      <el-col :span="8" v-for="item in items">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.photo" class="image" height="300">
            <div style="padding: 14px;">
              <h3><span> {{ item.name }}</span><br></h3>
              <span> {{ item.description }}</span><br>
              <span> {{ item.spin_id }}</span>
            </div>
          </el-card>
      </el-col>
    </el-row>
    <div class="play-box">
      <h1>hello</h1>
      <el-button type="primary">Start Rolling The Item</el-button>
    </div>
  </div>
</template>

<script>
import router from '../router'
import product from '../api/product.js'
export default {
  data () {
    return {
      items: [],
      formLabelWidth: '120px',
      dialogTableVisible: false,
      dialogFormVisible: false,
      currentSpin: localStorage.getItem('currentSpin'),
      form: {
        Postname: '',
        Postdescription: ''
      }
    }
  },
  methods: {
    navigateTo (nav) {
      console.log('==== navigate ====')
      router.push({ name: nav })
    },
    createItem () {
      var app = this
      product.createItem(app.form.Postname, app.form.Postdescription, localStorage.getItem('currentSpin'), _response => {
        this.dialogFormVisible = false
      })
    }
  },
  mounted () {
    console.log('========')
    product.getItems(_response => {
      this.items = _response
      console.log(this.items)
      console.log(localStorage.getItem('category'))
      // this.items = this.items.filter(product.catFilter)
      console.log(this.items)
    })
  }
}
</script>

<style lang="css">
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.button-add {
  margin-bottom: 20px
}

.play-box {
  margin-top: 40px
}
</style>
