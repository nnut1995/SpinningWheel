import Vue from 'vue'

export default {
  getCategory (callback) {
    Vue.$http.get('categories')
    .then(function (response) {
      callback(response.data)
      return response.dataconsole.log('1234567890')
    })
    .catch(function (response) {
      console.log('catchGetCategory')
    })
  },
  getSpin (callback) {
    Vue.$http.get('spins')
    .then(function (response) {
      callback(response.data)
      return response.dataconsole.log('1234567890')
    })
    .catch(function (response) {
      console.log('catchGetSpin')
    })
  },
  createSpin (name, tag, callback) {
    var loginParams = {
      spin: {
        name: name,
        tag: tag
      }
    }
    console.log(loginParams)
    Vue.$http.post('spins', loginParams)
    .then(function (response) {
      callback(response.data)
      console.log(response.data)
    })
    .catch(function (response) {
      console.log('CatchSpin')
    })
  }

}
