<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="rot" mode="out-in">
                    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
                    </transition>    
                    
        
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';

    export default {
        data() {
            return {
                mode: 'app-question'
            }
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
              } else {
                  this.mode = 'app-question';
                  alert('Wrong, try again!');
              }
          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }
</script>
<style>
    .rot-enter {
        /* transform: rotate3d(0, 1, 0, 180deg);
        opacity: 0; */
    }
    .rot-enter-active {
        /* transform: rotate3d(0, 1, 0, 0deg);
        transition:opacity 1s,rotate3d 1s; */
        animation: flip-in 25s ease-out forwards;
    }
    .rot-leave-active {
        /* opacity: 0;
        transform: rotate3d(0, 1, 0, 180deg);
        transition:opacity 1s,rotate3d 1s; */
        animation: flip-out 25s ease-out forwards;
    }

    @keyframes flip-in {
        from {
            transform:rotateY(90deg);
        }
        to {
            transform:rotateY(0deg);
        }
    }

    @keyframes flip-out {
        from {
            transform:rotateY(0deg);
        }
        to {
            transform:rotateY(90deg);
        }
    }

</style>


