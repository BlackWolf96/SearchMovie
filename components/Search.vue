<template>
  <div class="wrapper">
    <div class="container spacer">
      <input v-model="search" type="search" name="" id="">
      <button @click="searchMethod" class="btn btn-black">Search</button>
    </div>
    <div v-if="results" class="container-box spacer">
      <div class="results p1">
        <div v-for="result in results" :key="result.id" class="item">
          <div>{{ result.img }}</div>
          <div>{{ result.title }}</div>
          <div>{{ result.description }}</div>
        </div>
      </div>
      <div class="slider p1">d</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data () {
    return {
      search: null,
      results: [
        { img: '/static/ssd.png', title: 's', description: 's' },
        { img: '~/static/w.jpg', title: 's', description: 's' },
        { img: '~/static/w.jpg', title: 's', description: 's' },
        { img: '~/static/w.jpg', title: 's', description: 's' },
        { img: '~/static/w.jpg', title: 's', description: 's' }
      ]
    }
  },
  methods: {
    searchMethod () {
      console.log(this.search)
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
    min-height:200px;
    display:flex;
    flex-direction: row;
    gap:5%;
    .results{
      width:70%;
      .item{
        margin-top:25px;
        width:90%;
        height:100px;
        box-shadow: 2px 2px 6px grey;
      }
    }
    .slider{
      margin-top:25px;
      width:25%;
      height:100px;
      box-shadow: 2px 2px 6px grey;
    }
  }
}
</style>
