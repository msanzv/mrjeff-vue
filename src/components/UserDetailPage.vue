<template>
  <div>
    <div class="container">
      <router-link to="/">&lt; Back</router-link>
      <br>
      <br>
    </div>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2">
            <h2>User {{ user.id }} Details</h2>

            <form class="form" @submit.prevent="save">
              <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputName" placeholder="Name" v-model="user.name">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputUsername" placeholder="Username" v-model="user.username">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="user.email">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputWebsite" class="col-sm-2 col-form-label">Website</label>
                <div class="col-sm-10">
                  <input type="tel" class="form-control" id="inputWebsite" placeholder="Website" v-model="user.website">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-10">
                  <input type="tel" class="form-control" id="inputPhone" placeholder="Phone" v-model="user.phone">
                </div>
              </div>
              <p class="text-success" v-if="feedbackMessage.length">{{ feedbackMessage }}</p>
              <button type="submit" class="btn btn-primary btn-lg">Save</button>
            </form>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  name: 'user-detail-page',

  methods: {
    fetch () {
      return UsersService.get(this.$route.params.userId)
        .then(user => {
          this.user = user
        })
    },

    save () {
      return UsersService.put(this.user.id)
        .then(res => {
          this.feedbackMessage = 'The changes were successfully saved!'
        })
    }
  },

  created () {
    this.fetch()
  },

  data () {
    return {
      feedbackMessage: '',
      user: {}
    }
  }
}
</script>

<style scoped>
</style>
