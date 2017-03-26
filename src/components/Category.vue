<template lang="html">
  <div class="category">
    <el-button type="button" @click="dialogFormVisible = true">Add the product</el-button>
    <el-dialog title="Shipping address" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Product Name" :label-width="formLabelWidth">
          <el-input v-model="form.Postname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Category" :label-width="formLabelWidth">
          <el-select v-model="form.Postcategory" placeholder="Choose category">
            <el-option label="Fashion" value="Fashion"></el-option>
            <el-option label="Wearable" value="Wearable"></el-option>
            <el-option label="Games" value="Games"></el-option>
            <el-option label="Sport" value="Sport"></el-option>
            <el-option label="Collectibles" value="Collectibles"></el-option>
            <el-option label="Home" value="Home"></el-option>
            <el-option label="Books" value="Books"></el-option>
            <el-option label="Beauty" value="Beauty"></el-option>
          </el-select>
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
            <span> {{ item.tag }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="navigateTo('main.Spinning')">See the products</el-button>
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
        Postcategory: '',
        CategoryId: 0
      }
    }
  },
  methods: {
    navigateTo (nav) {
      router.push({ name: nav })
    },
    createSpin () {
      var app = this
      if (app.form.Postcategory === 'Fashion') {
        app.form.CategoryId = 1
      } else if (app.form.Postcategory === 'Wearable') {
        app.form.CategoryId = 2
      } else if (app.form.Postcategory === 'Games') {
        app.form.CategoryId = 3
      } else if (app.form.Postcategory === 'Sport') {
        app.form.CategoryId = 4
      } else if (app.form.Postcategory === 'Collectibles') {
        app.form.CategoryId = 5
      } else if (app.form.Postcategory === 'Home') {
        app.form.CategoryId = 6
      } else if (app.form.Postcategory === 'Books') {
        app.form.CategoryId = 7
      } else if (app.form.Postcategory === 'Beauty') {
        app.form.CategoryId = 8
      }
      product.createSpin(this.form.Postname, this.form.Postcategory, this.form.CategoryId, _response => {
        this.dialogFormVisible = false
        location.reload()
      })
    }
  },
  mounted () {
    console.log('========')
    product.getSpin(_response => {
      this.items = _response
      console.log(this.items)
    })
    // console.log(product.x)
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
