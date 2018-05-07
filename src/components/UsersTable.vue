<template>
  <table ref="users-table" class="table table-striped table-hover users-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <th>{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.website }}</td>
        <td>
          <a href="#" @click.prevent="$emit('deleteUser', user.id)">Delete</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'users-table',

  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css">

</style>
