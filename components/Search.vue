<template>
  <div class="wrapper">
    <div class="container spacer">
      <input type="search" name="" id="">
      <button>Search</button>
    </div>
    <div class="results spacer" v-if="results">
      <div v-for="result in results" :key="result.id">
        <div>{{ result. img }}</div>
        <div>{{ result. title }}</div>
        <div>{{ result. description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  results: [
    { img: '', title: '', description: '' }
  ]
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
    background-color: yellow;
    min-height:200px;
    border:1px solid black;
    border-radius: 5px;
  }
}
</style>
