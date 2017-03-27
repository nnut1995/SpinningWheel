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
  getItems (callback) {
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt')}
    }
    Vue.$http.get('items', config)
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
    console.log(spinParams)
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
  createItem (name, description, spinId, callback) {
    var itemParams = {
      item: {
        name: name,
        description: description,
        spin: [{
          id: spinId
        }]
      }
    }
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt')}
    }
    Vue.$http.post('items', itemParams, config)
    .then(function (response) {
      console.log(response.data)
      callback(response.data)
    })
    .catch(function (response) {
      console.log('CatchSpin')
    })
  },
  catFilter (value) {
    return value.tag === localStorage.getItem('category')
  },
  spinFilter (value) {
    console.log('localStorage.getItem("currentSpin"): ' + localStorage.getItem('currentSpin'))
    console.log('value.spin_id: ' + value.spin_id)
    console.log(Number(value.spin_id) === Number(localStorage.getItem('currentSpin')))
    return Number(value.spin_id) === Number(localStorage.getItem('currentSpin'))
  }
}
