<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'this is the text'"></p>
            </div>
        </div>
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-styling:background.delay="'red'">Let use custom directive</p>
                <p v-local-styling:background.delay="'red'">Let use custom directive</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            'local-styling':{
                bind (el, binding, vNode) {
    console.log(el)
    console.log(binding)
    console.log(vNode)
    let delay = 0
    if (binding.modifiers.delay) {
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
            }
        }
    }
</script>

<style>

</style>
