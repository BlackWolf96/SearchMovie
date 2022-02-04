<template>
  <div class="wrapper">
    <div class="container spacer">
      <input type="search" name="" id="">
      <button>Search</button>
    </div>
    <div class="results spacer" v-if="results != ''">
      <div class="container" v-for="result in results" :key="result.id">
        <div class="img"><img :src="'localhost:3000'+result.img"></div>
        <div class="title">{{ result.title }}</div>
        <div class="description">{{ result.description }}</div>
      </div>
    </div>
    <div class="result spacer" v-else>
      nothing there
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data () {
    return {
      results: [
        { img: '~/static/w.jpg', title: 's', description: 's' },
        { img: '~/static/w.jpg', title: 's', description: 's' },
        { img: '~/static/w.jpg', title: 's', description: 's' },
        { img: '~/static/w.jpg', title: 's', description: 's' },
        { img: '~/static/w.jpg', title: 's', description: 's' }
      ]
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
    button{
      width:100px;
      height:40px;
      background-color: black;
      border-color:black;
      color:white;
      &:hover{
        background-color: $btn-hover;
      }
    }
  }
  .results{
    width:90%;
    min-height:200px;
    border:1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    padding:10px;
    .container{
      width:90%;
      height:200px;
      background-color: green;
      .img { grid-area: img; }
      .title { grid-area: title; }
      .description { grid-area: description; }
      display:grid;
      grid-template-areas:
      'img title title title'
      'img description description description';
    }
  }
}
</style>
