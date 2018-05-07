<template>
  <div>
    <div class="container">
      <h2>Mr Jeff - User List</h2>
    </div>

    <section>
      <div class="container">
        <users-table :users="users" @deleteUser="deleteUser"></users-table>
      </div>
    </section>

  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
import UsersTable from '@/components/UsersTable'

export default {
  name: 'users-page',

  components: {
    UsersTable
  },

  methods: {
    deleteUser (userId) {
      UsersService.delete(userId)
        .then(() => {
          this.users = this.users.filter(user => user.id !== userId)
        })
    }
  },

  created () {
    UsersService.getAll()
      .then(users => {
        this.users = users
      })
  },

  data () {
    return {
      users: []
    }
  }
}
</script>

<style scoped>
</style>
