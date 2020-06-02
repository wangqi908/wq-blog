<template>
  <div class="login">
    <my-form />
  </div>
</template>

<script>
import MyForm from './MyForm'
export default {
  components: { MyForm }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #4c6983;
  padding: 20px;
}
</style>