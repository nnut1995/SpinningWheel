<template lang="html">
  <div class="spinning">
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
export default {
}
</script>

<style lang="css">
</style>
