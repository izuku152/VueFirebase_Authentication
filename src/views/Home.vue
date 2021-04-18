<template>
  <!-- <h1>Welcome, {{ name }}</h1>
  <br />
  <button><router-link to="/about">Go to About</router-link></button>
  <button @click="Logout">Logout</button> -->
  <h1>Home Page</h1>
  <button><router-link to="/about">Go to About</router-link></button>
  <button @click="Logout">Logout</button>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";
export default {
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed Out"))
        .catch((err) => console.log(err.message));
    };

    return {
      name,
      Logout,
    };
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
