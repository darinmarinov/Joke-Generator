<template>
  <div class="hello">
   <h2>{{title}}</h2>
   <button class="btn" @click="addJokes">ADD random 10 jokes</button>
   <button class="btn" @click="addOneJoke">ADD only one joke</button>
   <button class="btn" @click="removeThenJokes(index)">Remove then jokes</button>
   <div>
   <span class="checkboxes" v-for='type in types' :key="type.id">
     <label><input type="checkbox" :value="type" checked v-model="checkedTypes">{{type}}</label>
   </span>
   </div>
   <Joke v-for="(joke,index) in $store.state.jokes" :joke="joke" :index="index" :key="index" v-show="checkedTypes.includes(joke.type)"  />
  </div>
</template>

<script>
/* eslint-disable */
import Joke from "./Joke";
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      title:'Joke Generator',
      types: ["general", "knock-knock", "programming"],
      checkedTypes: ["general", "knock-knock", "programming"]
    };
  },
  methods: {
    ...mapActions({
      addJokes: "initJokes",
      addOneJoke: "addOneJoke",
      removeThenJokes: "removeThenJoke"
    })
  },
  components: {
    Joke
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.checkboxes{
  display: inline-block;
  margin: 10px;
}
</style>
