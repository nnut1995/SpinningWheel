// import Vue from 'vue'
import usersApi from './users'

export default {
  sendResult (itemId, callback) {
    console.log('Games Api')
    var currentUser = callback(usersApi.checkCurrentUser())
    console.log(currentUser)
    // var config = {
    //   headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt')}
    // }
    // var resultParams = {
    //   game: {
    //     user: [{
    //       id: itemId
    //     }],
    //     item: [{
    //       id: usersApi.checkCurrentUser()
    //     }]
    //   }
    // }
    // Vue.$http.post('/games', config)
  }
}
