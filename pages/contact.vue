<template>
  <div>
    <Navbar />
    <div class="space flex">
      <div class="item display-column p2">
        <input v-model="email" class="input" type="email" placeholder="Email">
        <textarea v-model="message" placeholder="Message..." />
        <button class="btn btn-black" @click="sendMessage">
          Send
        </button>
        <div v-if="error.length">
          <ul v-for="err in error" :key="err.id">
            <span class="fnt-error">{{ err }}</span>
          </ul>
        </div>
      </div>
      <div class="item p2 justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem debitis praesentium cum quisquam non. Delectus ut ipsa esse. Error omnis suscipit voluptas assumenda quia natus tempore eveniet quam nemo perferendis quis impedit libero, nesciunt itaque accusantium repudiandae magnam cum aliquid iusto nihil velit dolor enim mollitia facilis. In, expedita dolores!
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactPage',
  data () {
    return {
      email: null,
      message: null,
      error: []
    }
  },
  methods: {
    sendMSG (e) {
      this.error = []

      if (!this.email) {
        this.error.push('Email is required!')
      }
      if (!this.message) {
        this.error.push('Message is required!')
      }
      if (!this.error.length) {
        return true
      }
      e.preventDefault()
    },
    async sendMessage () {
      console.log(this.email)
      console.log(this.message)
      await axios.post('http://127.0.0.1:3001/contact', {
        email: this.email,
        message: this.message
      })
        .then((res) => {
          this.error = []
          if (res.data == null) {
            this.error.push('Sorry! Check your data and try again.')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }
}
</script>
