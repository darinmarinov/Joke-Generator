<template>
  <div class="joke">
      <h2>{{joke.setup}}</h2>
      <p><u>{{joke.punchline}}</u></p>
      <button class="remove" @click="removeJoke(index)">Remove joke</button>
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions} from 'vuex'

export default {
  name: 'Vue',
  props:['joke','index'],
  data () {
    return {
     
    }
  },
  methods:{
      ...mapActions({
          removeJoke:'removeOneJoke'
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joke{margin: 20px auto; border:2px solid #ccc}
.remove{display: block;margin: 20px auto}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
