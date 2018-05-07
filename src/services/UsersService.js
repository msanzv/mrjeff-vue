import axios from 'axios'
import API from '@/utils/ApiConfig'

export default {
  getAll: () => axios.get(API.SERVER + API.USERS_GET, API.CONFIG)
    .then(res => res.data)
    .catch(err => { throw err }),

  delete: (userId) => axios.delete(API.SERVER + API.USERS_DELETE.replace(':userId', userId), API.CONFIG)
    .then(res => res.data)
    .catch(err => { throw err })
}
