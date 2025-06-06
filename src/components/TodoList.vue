<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: ""
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <input 
      v-model="newTask"
      @keyup.enter="addTask"
      class="form-control"
      placeholder="Digite uma tarefa"
    >
    <ul class="list-group mt-3">
      <li 
        v-for="(task, index) in tasks"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ task }}
        <button @click="removeTask(index)" class="btn btn-sm btn-danger">X</button>
      </li>
    </ul>
  </div>
</template>