<template>
  <header>
    <nav>
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <nuxt-link to="/search">
        search
      </nuxt-link>
      <nuxt-link to="/about">
        about
      </nuxt-link>
      <nuxt-link to="/contact">
        contact
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:10em;
  background-color: green;

  nav{
    height:10em;
    @media only screen and (max-width:600px){
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap:20px;
    }
    @media only screen and (min-width:600px){
      position: absolute;
      right:20px;
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap:20px;
    }
    a{
      text-transform: uppercase;
      text-decoration: none;
      color:white;
    }
  }
}
</style>
