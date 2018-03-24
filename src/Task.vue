<template>
    <md-table-row>
        <md-table-cell>{{task.id}}</md-table-cell>
        <md-table-cell>{{task.text}}</md-table-cell>
        <md-table-cell><md-button class="md-raised md-accent">Remove</md-button></md-table-cell>
    </md-table-row>
</template>

<script>
export default {
    data () {
        return {}
    },
    props: {
        task: {
            type: Object,
            required: true
        }
    }
}
</script>
