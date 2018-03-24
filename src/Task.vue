<template>
    <md-table-row>
        <md-table-cell>{{task.id}}</md-table-cell>
        <md-table-cell>{{task.text}}</md-table-cell>
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
    }
}
</script>
