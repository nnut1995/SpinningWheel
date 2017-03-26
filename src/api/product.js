import Vue from 'vue'

export default {
  getCategory (callback) {
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt')}
    }
    Vue.$http.get('categories', config)
    .then(function (response) {
      callback(response.data)
      return response.dataconsole.log('1234567890')
    })
    .catch(function (response) {
      console.log('catchGetCategory')
    })
  },
  getSpin (callback) {
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt')}
    }
    Vue.$http.get('spins', config)
    .then(function (response) {
      callback(response.data)
      return response.dataconsole.log('1234567890')
    })
    .catch(function (response) {
      console.log('catchGetSpin')
    })
  },
  createSpin (name, tag, callback) {
    var spinParams = {
      spin: {
        name: name,
        tag: tag,
        category: [{
          id: category_id
        }]
      }
    }
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt')}
    }
    Vue.$http.post('spins', spinParams, config)
    .then(function (response) {
      callback(response.data)
      console.log(response.data)
    })
    .catch(function (response) {
      console.log('CatchSpin')
    })
  }

}
