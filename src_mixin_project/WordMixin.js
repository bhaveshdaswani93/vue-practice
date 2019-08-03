export const WordMixin = {
    data() {
        return {
            dummyText: "hello world"
        }
    },
    filters: {
        reverseText(value) {
            console.log(value);
            console.log(typeof value);
            return value.split('').reverse().join('')
        }
    },
    computed: {
        reverseTextComputed() {
            return this.dummyText.split('').reverse().join('')
        },
        calCulateWordLength() {
            return `${this.dummyText} (${this.dummyText.length})`
        }
    }
}