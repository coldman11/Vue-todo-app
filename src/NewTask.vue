<template>
    <md-list-item>
        <md-button @click="addTask" class="md-fab md-primary">
            <md-icon>add</md-icon>
        </md-button>
        <md-field>
            <label>New task</label>
            <md-input v-model="newTask" md-counter="30"></md-input>
        </md-field>
    </md-list-item>
</template>

<script>
export default {
    data () {
        return {
            newTask: ''
        }
    },
    props: {
        currentId: {
            type: Number,
            required: true
        }
    },
    methods: {
        addTask: function () {
            this.$emit('addTask', this.newTask);
            this.newTask = '';
        }
    }
}
</script>

