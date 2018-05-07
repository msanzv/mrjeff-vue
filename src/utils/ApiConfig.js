// import Server from 'Server'

module.exports = {
  CONFIG: {
    timeout: 5000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  // SERVER: Server,
  SERVER: 'https://jsonplaceholder.typicode.com',

  USERS_GET: '/users',
  USER_GET: '/users/:userId',
  USER_PUT: '/users/:userId',
  USER_DELETE: '/users/:userId'
}
