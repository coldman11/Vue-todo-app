<template>
    <md-card>
        <md-card-header><div class="md-title">New task</div></md-card-header>
        <md-card-content>
            <md-field>
                <label>New task</label>
                <md-input v-model="newTask" md-counter="30"></md-input>
            </md-field>
        </md-card-content>
        <md-card-actions>
            <md-button class="md-raised md-accent" @click="addTask">
                Add
            </md-button>
        </md-card-actions>
    </md-card>
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

