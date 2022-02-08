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
            <div class="div-movie p2">
              <span class="fnt-bold">Title:</span> {{ result.movie_name }}
            </div>
            <div class="div-actress p2">
              <span class="fnt-bold">Actress:</span> {{ result.actress_name }}
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
          this.error = []
          if (res.data == null) {
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
      width:100%;
      box-shadow: 1px 2px 6px grey;
      height:250px;
      display: flex;
      flex-wrap: wrap;
      .div-poster{
        flex:2;
        img{ width:100%; height:250px;}
      }
      div{
        flex:6;
        .div-movie{
          flex:1;
          background-color: yellow;
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
