<template>
  <v-app>
    <v-content>
      <dark-template-container />
    </v-content>
  </v-app>
</template>

<script>
import DarkTemplateContainer from '@/views/dark-template/Container'

export default {
  name      : 'App',
  components: { DarkTemplateContainer },
  data () {
    return { prompt: false }
  },
  created () {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.prompt = true
      })
    }
  },
  methods: {
    async update () {
      this.prompt = false
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' })
    },
  },
}
</script>
