<template>
  <!-- <h1>Registration Form</h1>
  <form @submit.prevent="Register">
    <label>Email</label>
    <input type="text" placeholder="Enter your email" v-model="email" />

    <label>Password</label>
    <input
      type="password"
      placeholder="Enter your password"
      v-model="password"
    />
    <button>Register</button>
    <br />
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </form> -->
  <h1>Register Form</h1>
  <form @submit.prevent="Register">
    <label>Email</label>
    <input type="text" v-model="email" required />
    <label>Password</label>
    <input type="password" v-model="password" required />
    <button>Register</button>
    <br />
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </form>
</template>

<script>
// import { ref } from "vue";
// import firebase from "firebase";
// export default {
//   setup() {
//     const email = ref("");
//     const password = ref("");

//     const Register = () => {
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(email.value, password.value)
//         .then((user) => console.log(user))
//         .catch((err) => console.log(err.message));
//     };
//     return {
//       Register,
//       email,
//       password,
//     };
//   },
// };
import { ref } from "vue";
import firebase from "firebase";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          console.log("Registered Successfully");
          console.log(email, password);
        })
        .then((data) => console.log(data));
    };
    return {
      email,
      password,
      Register,
    };
  },
};
</script>

<style>
p {
  color: #2c3e50;
}
a {
  color: #00ce89;
}
form {
  background: white;
  padding: 20px;
  margin-top: 50px;
  border-radius: 10px;
  max-width: 600px;
  margin: 50px auto;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
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
