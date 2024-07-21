<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

var data = ref(null)

const getUsers = (size) => {
    axios.get(`https://dummyjson.com/users?limit=${size || 10}&select=id,firstName,lastName,age,gender,phone,height,weight`)
        .then(response => {
            data.value =  response.data.users
        })
}

onMounted(() => {
    getUsers()
})
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 mx-auto">
                <div class="row justify-content-center">
                    <div v-for="user in data" :key="user.id" class="col-12 px-0">
                        <div class="hstack gap-3">
                            <div>id: {{ user.id }}</div>
                            <div>name: {{ user.firstName }} {{ user.lastName }}</div>
                            <div>age: {{ user.age }}</div>
                            <div>gender: {{ user.gender }}</div>
                            <div>phone: {{ user.phone }}</div>
                            <div>height: {{ user.height }}</div>
                            <div>weight: {{ user.weight }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
