<template>
    <div>
        <md-list-item>
            <md-icon></md-icon>
            <span class="md-list-item-text">{{task.text}}</span>
        </md-list-item>
        <md-divider></md-divider>
    </div>
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
