<template>
<div>
    <div class="form-group">
                        <label for="firstname">FirstName</label>
                        <input
                                type="text"
                                id="fullname"
                                class="form-control"
                                :value="value.firstName"
                                @input="changeFirstName"
                                >
                    </div>
                    <div class="form-group">
                        <label for="lastname">Lastname</label>
                        <input
                                type="text"
                                id="lastname"
                                class="form-control"
                               :value="value.lastName"
                               @input="changeLastName"
                                >
                    </div>    
</div>
    
</template>
<script>
export default {
    props:['value'],
    data(){
        return {
            userName:this.value
        }
    },
    methods:{
        changeFirstName($event) {
            this.userName.firstName = $event.target.value;
            this.$emit('input',this.userName);
        },
        changeLastName($event) {
            this.userName.lastName = $event.target.value;
            this.$emit('input',this.userName);
        }
    }
}
</script>
<style scoped>

</style>


