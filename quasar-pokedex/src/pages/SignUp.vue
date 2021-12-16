<template>
  <q-page class="flex flex-center q-pa-lg">
    <q-card class="login-form">
      <q-banner class="bg-purple-2 text-center q-py-lg q-mb-md">
        <div class="text-h4">Sign Up</div>
      </q-banner>
      <q-form
        v-if="view == 'signup'"
        @submit.prevent="signUp"
        class="q-gutter-md q-pa-md"
      >
        <q-input
          filled
          type="email"
          v-model="email"
          label="Your email *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Password *"
          lazy-rules
        />

        <q-input
          filled
          v-model="phone"
          label="Telephone Number *"
          mask="(###) ### - ####"
          :rules="[(val) => !!val || 'Phone number is required']"
        />

        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
            size="lg"
            class="q-my-lg"
          />
        </div>
      </q-form>

      <q-form
        v-else-if="view == 'confirm'"
        @submit.prevent="confirmSignUp"
        class="q-gutter-md q-pa-md"
      >
        <q-input
          filled
          type="text"
          v-model="code"
          label="Confirmation code"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
            size="lg"
            class="q-my-lg"
          />
        </div>
      </q-form>

      <q-card-section v-else-if="view == 'success'">
        <h4>Success!</h4>
        Please return to the
        <router-link to="/login">login page </router-link>and sign-in with your
        credentials.
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  data() {
    return {
      email: "",
      password: "",
      phone: "",
      view: "signup", // options: 'confirm', 'success'
      code: "",
    };
  },
  methods: {
    formatPhone(phoneNum) {
      let updatedNum = phoneNum.replace(/[^0-9]/gi, "");
      return "+1" + updatedNum;
    },
    async signUp() {
      console.log("Signing up...");
      try {
        const { user } = await Auth.signUp({
          username: this.email,
          password: this.password,
          attributes: {
            email: this.email,
            phone_number: this.formatPhone(this.phone),
          },
        });
        if (user) {
          this.view = "confirm";
        }
      } catch (error) {
        console.log("error signing up:", error);
      }
    },
    async confirmSignUp() {
      try {
        const res = await Auth.confirmSignUp(this.email, this.code);
        console.log(res);
        this.view = "success";
      } catch (error) {
        console.log("error confirming sign up", error);
      }
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
