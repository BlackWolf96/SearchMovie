<template>
  <div class="wrapper">
    <div class="container spacer">
      <input v-model="search" type="search" placeholder="Search,,,">
      <button class="btn btn-black" @click="searchMethod" @submit="submitSearch">
        Search
      </button>
      <div v-if="error.length">
        <ul v-for="err in error" :key="err.id">
          <li>{{ err }}</li>
        </ul>
      </div>
    </div>
    <div v-if="results" class="container-box spacer">
      <div class="results p1">
        <div v-for="result in results" :key="result.id" class="item">
          <div>
            {{ result.img }}
          </div>
          <div>
            {{ result.title }}
          </div>
          <div>
            {{ result.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchComponent',
  data () {
    return {
      search: null,
      error: [],
      results: []
    }
  },
  methods: {
    searchMethod (e) {
      this.error = []
      if (!this.search) {
        this.error.push('This label cannot be empty')
      }
      if (!this.error.length) {
        return true
      }
      e.preventDefault()
    },
    submitSearch () {
      console.log('eo')
      axios.push('/search', {
        data: this.search
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$btn-hover: rgba(0,0,0, 0.7);

.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container{
    input{
      width:250px;
      height:40px;
      border-style:none;
      border-bottom: 1px solid black;
      &:hover{
        outline: none;
      }
    }
  }
}
</style>
