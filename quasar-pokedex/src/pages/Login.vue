<template>
  <q-page class="flex flex-center q-pa-lg">
    <q-card class="login-form">
      <q-banner class="bg-purple-2 text-center q-py-lg q-mb-md">
        <div class="text-h4">Login</div>
      </q-banner>
      <q-card-section v-if="loading"> Loading... </q-card-section>
      <q-card-section v-else-if="userUnconfirmed">
        <div>
          You have not yet confirmed your email yet. Please provide the email
          you signed up for an account with and resend yourself a code. Then
          enter it below.
        </div>

        <q-btn
          @click="resendCode"
          class="q-px-lg q-mt-lg q-mb-xl bg-primary text-white col"
        >
          Resend Code
        </q-btn>

        <div v-if="confSent" class="q-mb-xl">
          A new verification code has been sent to the email you provided.
        </div>

        <div class="row items-end q-gutter-md q-mb-sm">
          <q-input v-model="confCode" class="col-8" label="Confirmation code" />
          <q-btn @click="codeVerify" class="q-px-lg bg-primary text-white col">
            Confirm
          </q-btn>
        </div>
      </q-card-section>
      <q-form
        v-else-if="!user"
        @submit.prevent="signIn"
        class="q-gutter-md q-pa-md"
      >
        <div v-if="errorMsg">
          <p class="text-red-9 text-body1">{{ errorMsg }}</p>
        </div>
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
        />

        <div class="q-mb-xl">
          Don't have an account yet?
          <router-link to="/sign_up">Sign up here</router-link>.
        </div>

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
      <q-card-section v-else>
        <div>
          <p>You are logged in.</p>
          <p>Email: {{ user.attributes.email }}</p>
          <p>Email: {{ user.attributes.phone_number }}</p>
        </div>
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
      user: null,
      loading: false,
      errorMsg: null,
      userUnconfirmed: null,
      confSent: null,
      invalidEmail: null,
      confCode: "",
    };
  },
  methods: {
    async signIn() {
      try {
        this.loading = true;
        const user = await Auth.signIn(this.email, this.password);
        this.user = user;
        this.loading = false;
        // console.log(this.user);
      } catch (error) {
        console.dir(error);
        this.loading = false;
        if (error.code == "UserNotConfirmedException") {
          return (this.userUnconfirmed = true);
        } else this.errorMsg = "Incorrect username or password.";
      }
    },
    async resendCode() {
      try {
        const res = await Auth.resendSignUp(this.email);
        console.log(res);
        if (res) {
          console.log("code resent successfully");
          this.confSent = true;
        }
      } catch (error) {
        if (error.code == "UserNotFoundException") {
          this.invalidEmail = true;
        }
        console.log("error resending code: ", error);
      }
    },
    async codeVerify() {
      try {
        await Auth.confirmSignUp(this.email, this.code);
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
