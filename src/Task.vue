<template>
    <md-table-row>
        <md-table-cell><md-checkbox v-model="task.done"></md-checkbox></md-table-cell>
        <md-table-cell :class="{'task-text-done': task.done, 'task-text': !task.done}">{{task.text}}</md-table-cell>
        <md-table-cell><md-button class="md-raised md-accent" @click="removeTask">Remove</md-button></md-table-cell>
    </md-table-row>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        removeTask: function () {
            this.$emit('removeTask', this.task.id);
        }
    },
    props: {
        task: {
            type: Object,
            required: true
        }
    },
}
</script>

<style>
.task-text-done {
    text-decoration: line-through;
    color: gray;
}
.task-text {
    text-decoration: none;
}
</style>

