<template>
  <q-page class="flex flex-center q-pa-lg">
    <q-card class="login-form">
      <q-banner class="bg-purple-2 text-center q-py-lg q-mb-md">
        <div class="text-h4">Login</div>
      </q-banner>
      <q-form @submit="onSubmit" class="q-gutter-md q-pa-md">
        <q-input
          filled
          type="email"
          v-model="email"
          label="Your email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Password"
          lazy-rules
          :rules="[(val) => val < 8 || 'Password is at least 8 characters.']"
        />

        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
            size="lg"
            class="q-mb-md"
          />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("Logging in...");
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 100%;
  max-width: 500px;
}
</style>
