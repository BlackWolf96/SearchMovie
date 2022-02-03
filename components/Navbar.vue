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

  @media only screen and (max-width:600px){
  }
  @media only screen and (min-width:600px){
  }
}
</style>
