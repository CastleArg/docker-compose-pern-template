<script>
export default {
  data: () => ({
    messages: [{id:'1',message:'please wait'}]
  }),

  created() {
    // fetch on init
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const url = `${process.env.VUE_APP_API_URL}/messages`
      this.messages = await (await fetch(url)).json()
    }
  }
}
</script>

<template>
  <h1>Messages</h1>
  <h2>This is a VueJs App. hit vue ui</h2>
  <template v-bind:key="message.id" v-for="message in messages">
    <div>{{message.message}}</div>
  </template>
</template>

<style>

</style>