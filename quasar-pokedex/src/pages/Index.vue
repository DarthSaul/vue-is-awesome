<template>
  <q-page class="flex column flex-center">
    <q-btn to="/login" class="q-mb-xl q-px-xl bg-green-3" size="xl">
      LOGIN
    </q-btn>
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
