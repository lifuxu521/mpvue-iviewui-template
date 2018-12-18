<template>
  <div class="container">
    {{motto}}
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  mpType: 'page',
  data () {
    return {
      motto: 'Hello World'
    }
  },

  components: {
    card
  },

  methods: {
  },

  created () {
  }
}
</script>

<style lang="less" scoped>
</style>
