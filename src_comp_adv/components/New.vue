<template>
    <div>
        <p>This is new component</p>
    </div>
</template>
<script>
    export default {
        destroyed(){
            console.log('destroyed');
        },
        activated(){
            console.log('activated');
        },
        deactivated(){
            console.log('deactivated');

        }
    }
</script>