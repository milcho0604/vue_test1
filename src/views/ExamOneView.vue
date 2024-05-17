<template>
  <div>
    <h1>ExamOne</h1>
    <p>202014036</p>
    <p>김창현</p>
    <p>{{ time }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'oneView',
  data() {
    return { time: null };
  },
  mounted() {
    let callback = () => {
      this.time = moment().format("HH:mm:ss");
      console.log(this.time);
    }
    callback();
    setInterval(callback, 1000);
  }
}
</script>
