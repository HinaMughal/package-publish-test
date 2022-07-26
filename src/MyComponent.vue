<template>
<div>
    <h1 class="el-h1">Hello {{ name }}</h1>
</div>
  
</template>

<script>
export default {
  data() {
    return { name: 'Jane Doe' }
  }
}
</script>

<style scoped>
.el-h1 {
  color: #fff4;
}
</style>