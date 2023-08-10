<template>
  <h2>Sign Up</h2>
  <form class="flex flex-column gap-3">
    <div class="p-inputgroup flex-1">
      <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
      </span>
      <InputText type="email" v-model="email" placeholder="Your Email" />
    </div>
    <div class="p-inputgroup flex-1">
      <span class="p-inputgroup-addon">
        <i class="pi pi-at"></i>
      </span>
      <InputText type="password" v-model="password" placeholder="Password" />
    </div>
    <div class="flex flex-column gap-3">
      <Button label="Signup" @click="signup" />
      <span
        >Are you already registered?
        <router-link to="/signin">Sign in</router-link></span
      >
    </div>
  </form>
  <div>{{ userInfo }}</div>
  <div>{{ errorMesage }}</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const store = useStore();

const userInfo = computed(() => {
  return store.state.userInfo;
});
const errorMesage = computed(() => {
  return store.state.error;
});

const email = ref("");
const password = ref("");

const signup = async () => {
  await store.dispatch("signUp", {
    email: email.value,
    password: password.value,
  });
};
</script>
