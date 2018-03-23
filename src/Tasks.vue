<template>
    <div>
        <md-list class="md-triple-line">
            <task
                v-for="task in tasks"
                :key="task.id"
                :task="task"
            />
            <new-task
                @addTask="addTask"
                :currentId="currentId"
            />
        </md-list>
    </div>
</template>

<script>
import Task from './Task'
import NewTask from './NewTask'


export default {
    data () {
        return {
            tasks: [],
            currentId: 0
        }
    },
    components: {
        Task,
        NewTask
    },
    methods: {
        addTask: function (task) {
            this.tasks.push({id: this.currentId, text: task});
            this.currentId ++;
            console.log(this.tasks);
        }
    }
}
</script>
