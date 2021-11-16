<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, ind) in tasks"
        :key="ind"
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-blue-1': task.done }"
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.done" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            flat
            round
            dense
            color="primary"
            icon="delete"
            @click.stop="deleteTask(ind)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [
        {
          title: "Groceries",
          done: false,
        },
        {
          title: "Clean kitchen",
          done: true,
        },
        {
          title: "Walk dog",
          done: false,
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #8a8989;
  }
}
</style>
