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
  USERS_DELETE: '/users/:userId'
}
