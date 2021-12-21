<template>
<h1> De {{resource}} die u zoekt bestaat niet meer!</h1>
  <router-link class="btn btn-success" :to="{name:'Home'}"> Home</router-link>
</template>

<script>
export default {
 props:{
   resource:{
     type:String,
     required:true,
     default:'pagina'
   }
 }
}
</script>

<style scoped>

</style>