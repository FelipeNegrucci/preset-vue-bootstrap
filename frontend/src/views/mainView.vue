<script setup>
import { useBootstrapColorMode } from '@/composables/useBootstrapColorMode';
import fontComp from '../components/fontComp.vue'
import dataComp from '../components/dataComp.vue'

const { toggleBootstrapColorMode } = useBootstrapColorMode();
</script>

<template>
    <div class="container-fluid user-select-none">
        <div class="row row-cols-1 justify-content-center gap-3">
        
            <div @click="toggleBootstrapColorMode()" class="col-auto btn btn-primary mt-3">Toggle Bootstrap ColorMode</div>
            <fontComp class="col" />
            <dataComp class="col" />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
