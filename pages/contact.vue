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
        <span v-if="error">{{ error }}</span>
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
      email: '',
      message: '',
      error: ''
    }
  },
  methods: {
    sendMSG (e) {
      console.log(this.email)
      console.log(this.message)
      this.error = 'This message will be send'
      e.preventDefault()
    }
  }
}
</script>
