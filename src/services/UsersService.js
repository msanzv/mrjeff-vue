import axios from 'axios'
import API from '@/utils/ApiConfig'

export default {
  getAll: () => axios.get(API.SERVER + API.USERS_GET, API.CONFIG)
    .then(res => res.data)
    .catch(err => { throw err }),

  get: (userId) => axios.get(API.SERVER + API.USER_GET.replace(':userId', userId), API.CONFIG)
    .then(res => res.data)
    .catch(err => { throw err }),

  put: (userId, data) => axios.put(API.SERVER + API.USER_PUT.replace(':userId', userId), JSON.stringify(data), API.CONFIG)
    .then(res => res.data)
    .catch(err => { throw err }),

  delete: (userId) => axios.delete(API.SERVER + API.USER_DELETE.replace(':userId', userId), API.CONFIG)
    .then(res => res.data)
    .catch(err => { throw err })
}
