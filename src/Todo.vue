<template>
    <div>
        <md-app style="min-height: 100vh;">
            <md-app-toolbar class="md-accent">Todo</md-app-toolbar>
            <md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>
                <md-list>
                    <md-list-item @click="changeAppContent('Tasks')">
                        <md-icon>assignment</md-icon>
                        <span class="md-list-item-text">Tasks</span>
                    </md-list-item>
                    <md-list-item @click="changeAppContent('Settings')">
                        <md-icon>settings</md-icon>
                        <span class="md-list-item-text">Settings</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <div :is="appContent"></div>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
import Tasks from './Tasks'
import Settings from './Settings'

export default {
    data () {
        return {
            appContent: 'Tasks'
        }
    },
    components: {
        Tasks,
        Settings
    },
    methods: {
        changeAppContent: function (content) {
            this.appContent = content;
        }
    }
}
</script>



