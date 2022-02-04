<template>
  <div>
    <div class="container">
      <input type="search" name="" id="">
      <button>Search</button>
    </div>
    <div class="results">

    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent'
}
</script>

<style lang="scss" scoped>
$btn-hover: rgba(0,0,0, 0.7);

.wrapper{
  display: flex;
  flex-direction: column;
  
  .container{
    input{
      width:250px;
      height:40px;
      border-style:none;
      border-bottom: 1px solid black;
    }
    button{
      width:100px;
      height:40px;
      background-color: black;
      border-color:black;
      color:white;
    }
    button:hover{
      background-color: $btn-hover;
      border-color: $btn-hover;
    }
  }
  .results{
    width:100%;
    min-height:200px
  }
}
</style>
