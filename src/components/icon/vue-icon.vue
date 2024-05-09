<template>
    <i
        v-if="name"
        :class="iconClasses"
        :style="{ fontSize: size, color }"
    ></i>
  </template>
<script lang="ts">

export default {
    name: 'FbIcon',
    props: {
        name: String,
        size: {
        type: [Number, String],
        default: '1rem'
        },
        color: {
        type: String,
        default: '#fff'
        },
        className: {
        type: String,
        default: ''
        }
    },
    computed: {
        iconClasses(): string[] {
            return ['mdi', `${this.name}`, this.className];
        },
  }
}
</script>

<style scoped>
</style>
