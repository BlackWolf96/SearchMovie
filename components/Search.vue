<template>
  <div class="wrapper">
    <div class="container spacer">
      <input v-model="search" type="search" placeholder="Search,,,">
      <button class="btn btn-black" @click="submitSearch">
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
          <div class="div-poster">
            {{ result.movie_poster }}
          </div>
          <div>
            <div class="div-movie">
              {{ result.movie_name }}
            </div>
            <div class="div-actress">
              {{ result.actress_name }}
            </div>
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
    searchValidation (e) {
      this.error = []
      if (!this.search) {
        this.error.push('This label cannot be empty')
      }
      if (!this.error.length) {
        return true
      }
      e.preventDefault()
    },
    async submitSearch () {
      await axios.post('http://127.0.0.1:3001/search-post', {
        search: this.search
      })
        .then((res) => {
          if (res.data == null) {
            this.error = []
            this.error.push('There is no data about actress')
          } else {
            this.results = res.data
          }
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
  .container-box{
    width:100%;
    .item{
      box-shadow: 1px 2px 6px grey;
      width:90%;
      height:150px;
      display: flex;
      flex-wrap: wrap;
      .div-poster{
        flex:2;
        background-color: red;
      }
      div{
        flex:3;
        .div-movie{
        }
        .div-actress{
        flex:1;
        background-color: yellow;
      }
      }
    }
  }
}
</style>
