<template>
<div>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card class="pb-1">
      <v-card-title class="heading green white--text">
      Add Todo List
      </v-card-title>
      <div class="pa-5 pb-0">
        <v-text-field label="Blog title" :rules="nameRules" placeholder="Blog title" outlined></v-text-field>
        <v-text-field label="Writer Name" :rules="nameRules" placeholder="Writer name" outlined></v-text-field>
        <v-textarea label="write your story" :rules="description" placeholder="Write the story" outlined></v-textarea>

<!--        <span class="font-weight-bold primary&#45;&#45;text">Add Task:</span>
        <div class="mt-1">
          <v-text-field
              class="my-0"
              outlined dense
              label="Important"
              v-for="task in taskList"
              :key="task.id"
              append-icon="mdi-close"
              clearable
          >
          </v-text-field>
        </div>
        <div>
          <v-btn small class="mb-5 primary" @click="addTask()">Add new Task</v-btn>
        </div>-->
      </div>
      <v-card-actions>
        <v-btn class="green white--text" dense  block @click="snackbar = true">save</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
</div>
</template>

<script>
export default {
name: "AddPopup",
  data(){
  return{
    date: new Date().toISOString().substr(0, 10),
    time: '',
    dialog:true,
    menu1: false,
    menu2: false,
    snackbar: false,
    text: 'My timeout is set to 2000.',
    timeout: 2000,
    taskList: [{id: 0, checked: false, task: ''}],
    nameRules: [
      v => !!v || 'Project name is required',
      v => (v && v.length > 4) || 'Project name must be less than 4 characters',
    ],
    description: [
      v => !!v || 'Project description is required',
      v => (v && v.length > 10) || 'Project description must be less than 10 characters',
    ],
    Date: [
      v => !!v || 'Date is required',
    ]

  }

  },
  methods: {
  addTask() {
    this.taskList.push({
      id: this.taskList.length, checked: false, task: ''
    })
  }
  }
}
</script>

<style scoped>

</style>