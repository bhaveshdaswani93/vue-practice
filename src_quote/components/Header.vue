<template>
    <div class="row">
        <div class="progress">
            <div class="progress-bar" role="progressbar" :aria-valuenow="currentNumberOfQuote" aria-valuemin="0" :aria-valuemax="maxQuote" :style="{width: sideBarWidth}">
            {{currentNumberOfQuote}}/{{maxQuote}}
        </div>
        </div>
    </div>   
</template>

<script>
export default {
    props:['currentNumberOfQuote','maxQuote'],
    computed:{
        sideBarWidth() {
            return this.currentNumberOfQuote*10 + '%';
        }
    }
}
</script>

<style>

</style>


