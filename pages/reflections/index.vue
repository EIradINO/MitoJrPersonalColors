<template>
<div>
  <li v-for="(rf, index) in rfs" :key="index">
    {{rf.sentence}}
  </li>
  <li v-for="(result, index) in results" :key="index">
    {{result.title}}
  </li>
  {{ none }}
</div>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const data = await $http.$get('/api/reflections')
    return {
      rfs: data.reflections,
      results: data.results,
      none: data.none
    }
  },
  head () {
    return {
      title: 'Reflections'
    }
  }
}
</script>
