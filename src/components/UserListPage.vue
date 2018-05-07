<template>
  <div>
    <h2>Mr Jeff - Vue Version</h2>

    <section>
      <div class="container">
        <users-table :users="users"></users-table>
      </div>
    </section>

  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

import UsersTable from '@/components/UsersTable'

export default {
  name: 'HelloWorld',

  components: {
    UsersTable
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
