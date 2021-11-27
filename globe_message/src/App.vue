<template>
  <div id="app">
    <div style="display:flex;justify-content: center;">
      <img  alt="Vue logo" src="./assets/logo.png">
    </div> 
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    console.log('this:',this)
    console.log('message:',this.$Message)
    let obj = this.$Message({text:'hello'}).init()
    console.log('obj:',obj)
  }
}
</script>

<style>

</style>
