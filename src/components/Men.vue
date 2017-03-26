<template>
  <div class="men">
    <el-row>
      <el-col :span="8" v-for="item in items">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.path" class="image" height="300">
          <div style="padding: 14px;">
            <span> {{ item.title }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="navigateTo('main.Category', item.title)">See the category</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
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

<script>
import router from '../router'
import productsApi from '../api/product.js'

export default {
  data () {
    return {
      items: [
      ]
    }
  },
  methods: {
    navigateTo (nav, title) {
      console.log('==== navigate ====')
      router.push({ name: nav })
      localStorage.setItem('category', title)
    }
  },
  mounted () {
    // app.items = product.getCategory()
    // console.log(app.items)
    // console.log('eiei')
    productsApi.getCategory(_response => {
      this.items = _response
      console.log(this.items)
    })
    // console.log(product.x)
  }
}
</script>
