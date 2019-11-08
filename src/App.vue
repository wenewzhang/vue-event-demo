<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
    ></blog-post>
  </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BlogPost from './components/BlogPost'
export default {
  name: 'app',
  components: {
    HelloWorld,
    BlogPost
  },
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue', content: 'a' },
        { id: 2, title: 'Blogging with Vue', content: 'b' },
        { id: 3, title: 'Why Vue is so fun', content: 'c' }
      ],
      postFontSize: 1,
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
