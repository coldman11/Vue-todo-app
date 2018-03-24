<template>
    <div>
        <md-table>
            <md-table-row>
                <md-table-head>ID</md-table-head>
                <md-table-head>text</md-table-head>
                <md-table-head>options</md-table-head>
            </md-table-row>
            <task
                v-for="task in tasks"
                :key="task.id"
                :task="task"
            />
        </md-table>
        <new-task
            @addTask="addTask"
            :currentId="currentId"
        />
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
