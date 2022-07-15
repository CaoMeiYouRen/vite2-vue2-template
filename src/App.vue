<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'App',
    props: {},
    setup(props, ctx) {
        return {
        }
    },
})
</script>

<style lang="scss" scoped>
</style>
