<template lang="html">
  <div class="spinning">
    <el-button type="button" @click="dialogFormVisible = true">Add item</el-button>
    <el-dialog title="Shipping address" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="form.Postname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth">
          <el-input v-model="form.Postdescription" auto-complete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="Image url" :label-width="formLabelWidth">
          <el-input v-model="form.url" auto-complete="off"></el-input>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createSpin()">Confirm</el-button>
      </span>
    </el-dialog>
    <el-row>
      <el-col :span="8" v-for="item in items">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.photo" class="image" height="300">
          <div style="padding: 14px;">
            <h3><span> {{ item.name }}</span><br></h3>
            <span> {{ item.description }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="navigateTo('main.Spinning')">Choose this spin</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
    createSpin () {
      product.createSpin(this.form.Postname, this.form.Postdescription, _response => {
        this.dialogFormVisible = false
        location.reload()
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
</style>
