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


  @media only screen and (max-width:600px){
    nav{
      height:10em;
      display:flex;
      flex-direction: column;
      a{ text-decoration: none; color:white; }
    }
  }
  @media only screen and (min-width:600px){
    nav{
      height:10em;
      display:flex;
      flex-direction: row;
      a{ text-decoration: none; color:white; }
    }
  }
}
</style>
