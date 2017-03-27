<template lang="html">
  <div class="category">
    <h1>Choose a Wheel</h1>
    <div class="button-add">
      <el-button type="button" @click="dialogFormVisible = true">Add spin</el-button>
    </div>
    <el-dialog title="Add Spin" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Product Name" :label-width="formLabelWidth">
          <el-input v-model="form.Postname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Category" :label-width="formLabelWidth">
          <el-select v-model="form.Postcategory" placeholder="Choose category">
            <el-option label="Fashion" value="Fashion"></el-option>
            <el-option label="Wearables" value="Wearables"></el-option>
            <el-option label="Games" value="Games"></el-option>
            <el-option label="Sport" value="Sport"></el-option>
            <el-option label="Collectibles" value="Collectibles"></el-option>
            <el-option label="Home" value="Home"></el-option>
            <el-option label="Books" value="Books"></el-option>
            <el-option label="Beauty" value="Beauty"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createSpin()">Confirm</el-button>
      </span>
    </el-dialog>
    <el-row>
      <el-col :span="8" v-for="item in items">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/holder.png" class="image" height="250">
          <div style="padding: 14px;">
            <h3><span> {{ item.name }}</span><br></h3>
            <span> {{ item.tag }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="navigateTo(item.id)">Choose this spin</el-button>
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
        Postcategory: ''
      }
    }
  },
  methods: {
    navigateTo (id) {
      localStorage.setItem('currentSpin', id)
      router.push({ name: 'main.Spinning' })
    },
    createSpin () {
      var categoryDict = {}
      categoryDict['Fashion'] = 1
      categoryDict['Wearables'] = 2
      categoryDict['Games'] = 3
      categoryDict['Sport'] = 4
      categoryDict['Collectibles'] = 5
      categoryDict['Home'] = 6
      categoryDict['Books'] = 7
      categoryDict['Beauty'] = 8
      console.log('this.form.Postcategory: ' + this.form.Postcategory)
      console.log('categoryDict: ' + categoryDict)
      product.createSpin(this.form.Postname, this.form.Postcategory, categoryDict[this.form.Postcategory], _response => {
        this.dialogFormVisible = false
      })
    }
  },
  mounted () {
    console.log('========')
    product.getSpin(_response => {
      this.items = _response
      // console.log(this.items)
      // console.log(localStorage.getItem('category'))
      this.items = this.items.filter(product.catFilter)
      // console.log(this.items)
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
</style>
