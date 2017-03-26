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
  createSpin (name, tag, categoryId, callback) {
    var spinParams = {
      spin: {
        name: name,
        tag: tag,
        category: [{
          id: categoryId
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
  },
  catFilter (value) {
    console.log('value.tag: ' + value.tag)
    console.log('local: ' + localStorage.getItem('category'))
    console.log(value.tag === localStorage.getItem('category'))
    return value.tag === localStorage.getItem('category')
  }
}
