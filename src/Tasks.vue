<template>
    <div>
        <md-list class="md-triple-line">
            <task
                v-for="task in tasks"
                :key="task.id"
                :task="task"
            />
        </md-list>
    </div>
</template>

<script>
import Task from './Task'


export default {
    data () {
        return {
            tasks: [
                {id: 1, text: 'Dokończyć apkę'},
                {id: 2, text: 'Zjeść obiad'}
            ]
        }
    },
    components: {
        Task
    }
}
</script>
