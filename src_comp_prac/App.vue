<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="componentSelected='appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="componentSelected='appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="componentSelected='appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="componentSelected">
                    <p>THis is a practice</p>
                </component>
                <!-- <app-blue>
                    
                </app-blue>
                <app-green>
                    <p>THis is a practice</p>
                </app-green>
                <app-red>
                    <p>THis is a practice</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data(){
            return {
                componentSelected:'appBlue',
            }
        }
    }
</script>

<style>
</style>
