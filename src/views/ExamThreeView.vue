<template>
    <div><h1>ExamThree</h1></div>
    <div>
        <select v-model="color">
      <option>yellow</option>
      <option>green</option>
      <option>blue</option>
      <option>red</option>
    </select>
    </div>
  <div class="box" v-bind:class="color">
    <p>ExamThreeChild</p>
  </div>
</template>

<script>
export default {
  name: 'threeView',
  data() {
    return {
      color: "yellow"
    };
  }
}
</script>

<style scoped>
  div.box { display: inline-block; padding: 20px; width: 600px; 
        border: 1px solid gray; box-shadow: 5px 5px 5px #aaa; }
  select { padding: 5px; font-size: 15pt; width: 150px; margin: 10px; }
  .yellow { background-color: #ffa; }
  .green { background-color: #bfb; }
  .blue { background-color: #bbf; }
  .red { background-color: #fbb; }
</style>
