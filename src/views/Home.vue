<template>
    <h1>Welcome, {{ name }}</h1>
    <router-link to="/login">
        <button @click="Logout">Logout</button>
    </router-link>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import firebase from "firebase";

export default {
    setup() {
        const name = ref("");
        onBeforeMount(() => {
            const user = firebase.auth().currentUser;
            if (user) {
                name.value = user.email.split("@")[0];
                console.log(name);
            }
        });
        const Logout = () => {
            firebase
                .auth()
                .signOut()
                .then(() => console.log("Logout Successfully"));
        };
        return { name, Logout };
    },
};
</script>

<style>
</style>