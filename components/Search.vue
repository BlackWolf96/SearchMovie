<template>
  <div class="wrapper">
    <div class="container spacer">
      <input type="search" name="" id="">
      <button>Search</button>
    </div>
    <!--
    <div class="results spacer" v-if="results != ''">
      <div class="container" v-for="result in results" :key="result.id">
        <div class="img">{{ result.img }}</div>
        <div class="title">{{ result.title }}</div>
        <div class="description">{{ result.description }}</div>
      </div>
    </div>
    <div class="result spacer" v-else>
      nothing there
    </div>
    -->
    <div v-if="results" class="container-box spacer">
      <div class="results p1">
        <div class="item"></div>
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
      results: [
        { img: '/static/ssd.png', title: 's', description: 's' },
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
  .container-box{
    width:100%;
    min-height:200px;
    display:flex;
    flex-direction: row;
    gap:5%;
    .results{
      width:70%;
      .item{
        width:90%;
        height:100px;
        box-shadow: 1px 2px 2px grey;
      }
    }
    .slider{
      width:25%;
      background-color: red;
    }
  }
}
</style>
