<template>
  <div class="blog-post">
  <h3>{{ post.title }}</h3>
  <button>
    Enlarge text
  </button>
  <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}

</script>
