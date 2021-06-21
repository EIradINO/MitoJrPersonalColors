<template>
  <ul class="users">
    <li v-for="(user, index) in users" :key="index" class="user">
      {{ user.content }}
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const data = await $http.$get('/api/reflections')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>
