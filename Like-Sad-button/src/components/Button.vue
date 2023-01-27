<template>
  <button type="button" class="btn btn-sm btn-outline-secondary" @click="countLike">
    <i class="fa fa-thumbs-up" style="margin-right: 3px"></i>
    {{like}}
  </button>

  <button type="button" class="btn btn-sm btn-outline-secondary" @click="countSad">
    <i class="fas fa-sad-tear" aria-hidden="true" style="margin-right: 3px"></i>
    {{sad}}
  </button>
</template>

<script setup>
import {ref} from "vue";
const like = ref(0);
const sad = ref(0);
function countLike(){
    like.value++;
}
function countSad(){
    sad.value++;
}
</script>

<script>
export default {
    name: "Count"
};
</script>
