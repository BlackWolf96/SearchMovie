<template>
  <div>
    <Navbar />
    <div class="space flex">
      <div class="item display-column p2">
        <input v-model="email" class="input" type="email" placeholder="Email">
        <textarea v-model="message" placeholder="Message..." />
        <button class="btn btn-black" @click="sendMSG">
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
      e.preventDefault()
    }
  }
}
</script>
