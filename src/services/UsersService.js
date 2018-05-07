import axios from 'axios'
import API from '@/utils/ApiConfig'

export default {
  getAll: () => axios.get(API.SERVER + API.USERS_GET, API.CONFIG)
    .then(res => res.data)
    .catch(err => { throw err })
}
