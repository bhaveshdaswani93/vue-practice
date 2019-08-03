<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <!-- <select v-model="dynamicAnimation">
                    <option value="my-trans">Opacity</option>
                    <option value="my-ani">Slide</option>
                </select> -->
                <!-- <button @click="toShow = !toShow">Click</button> -->
                <!--<transition :name="dynamicAnimation">
                <p class="p-demo" v-if="toShow">Hello this is a great Animations</p>
                </transition> -->
                <!-- <transition name="my-ani" mode="out-in"  appear
                >
                    <p key="info" class="alert alert-info" v-if="toShow">Hello this is a great Animations</p>
                    <p key="warn" class="alert alert-warning" v-else>Hello this is a great Animations</p>
                </transition> -->
                <!-- <transition name="my-ani" type="animation" appear>
                    <p class="p-demo" v-if="toShow">Hello this is a great Animations</p>
                </transition> -->
                <!-- <hr>
                <button @click="load = !load">Change</button>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancel="enterCancle"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancel="leaveCancel"
                    :css="false"
                >
                    <div v-if="load" class="box-green"></div>
                </transition>
                <hr>
                <button @click="selectedComponent === 'app-animate-blue'?selectedComponent='app-animate-red':selectedComponent='app-animate-blue' ">Change Comp</button>
                <transition name="my-ani" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition> -->
                <hr>
                <button @click="addItem">Add Item</button>
                <ul class="group-item">
                    <transition-group name="my-ani">
                        <li class="list-group-item" style="cursor:pointer" @click="removeItem(index)" v-for="(number,index) in numbers" :key="number">{{ number }}</li>
                    </transition-group>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import { clearInterval } from 'timers';
    import AnimateBlue from "./components/AnimateBlue.vue";
    import AnimateRed from "./components/AnimateRed.vue";
    export default {
        data() {
            return {
                toShow:false,
                dynamicAnimation:'my-trans',
                load:false,
                intialWidth:100,
                selectedComponent:'app-animate-blue',
                numbers:[1,2,3,4,5]
            }
        },
        methods: {
            removeItem(index){
                this.numbers.splice(index,1);
            },
            addItem(){
                let pos = Math.floor(Math.random()*this.numbers.length);
                this.numbers.splice(pos,0,this.numbers.length+1);
            },
            beforeEnter(el){
                console.log('before enter');
                this.intialWidth=100;
            },
            enter(el,done) {
                console.log('enter event');
                // console.log(done);
                let round = 1;
                const increaseWidthBy = 10;
                const interval = setInterval(() => {
                    el.style.width = (this.intialWidth + round*increaseWidthBy)+'px';
                    round++;
                    if(round > 20) {
                        
                        clearInterval(interval);
                        done();
                    }
                }, 200);
                // done();
            },
            afterEnter(el) {
                console.log('after enter event');
            },
            enterCancle(el) {
                console.log('enter cancel');
            },

            beforeLeave(el) {
                console.log('Before leave');
                this.intialWidth=300;
                el.style.width=this.intialWidth+'px';
            },
            leave(el,done) {
                console.log('leave');
                let round = 1;
                const increaseWidthBy = 10;
                const interval = setInterval(() => {
                    el.style.width = (this.intialWidth - round*increaseWidthBy)+'px';
                    round++;
                    if(round > 20) {
                        clearInterval
                        clearInterval(interval);
                        done();
                    }
                }, 200);
            },
            afterLeave(el) {
                console.log('After leave');
            },
            leaveCancel(el) {
                console.log('leave cancel');
            }

            
        
        },
        components: {
            appAnimateRed:AnimateRed,
            appAnimateBlue:AnimateBlue
        },

    }
</script>

<style>
.box-green {
    height: 100px;
    width: 100px;
    background-color: green;
    margin-top:10px;
}
.my-trans-enter{
 opacity: 0;
}
.my-trans-enter-active {
    transition: opacity 2s;
}
.my-trans-enter-to {
    opacity: 1;
}
.my-trans-leave {
}
.my-trans-leave-active {
    opacity: 0; 
    transition: opacity 2s;
}

.my-ani-enter {
    opacity: 0;
}

.my-ani-enter-active {
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    animation: bhavesh 2s ease-out;
    transition: opacity 2s;
}

.my-ani-enter-to {

}

.my-ani-leave {

}

.my-ani-leave-active {
    opacity: 0;
    animation: slide-out 2s ease-out;
    transition: opacity 2s;
    position:absolute;
}

.my-ani-leave-to {

}

.my-ani-move {
    transition:transform 1s;
}

.p-demo {
    padding: 50px;
    background-color:brown;
    color:rgb(214, 214, 214);
}
@keyframes bhavesh {
    from {
        transform:translateY(20px);
        /* opacity: 0; */
    }
    to {
        transform:translateY(0);
        /* opacity: 1; */
    }
}

@keyframes slide-out {
    from {
        transform:translateY(0);
    }
    to {
        /* opacity: 0; */
        transform:translateY(20px);
    }
}
</style>
