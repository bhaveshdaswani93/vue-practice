export const FruitMixinConst = {
    data() {
        return {
            fruits: ['Bango', 'Banana', 'Apple'],
            searchText: ""
        }
    },
    computed: {
        computedFruit() {
            return this.fruits.filter((fruit) => {
                return fruit.match(this.searchText)
            });
        }
    },
    created(){
        console.log('created from mixin');
    }

}