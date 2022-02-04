<template>
<div>
  <Navbar />
  <Slider />
  <Search />
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'IndexPage'
}
</script>
