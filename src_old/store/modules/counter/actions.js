export const actions = {
    incrementAction(context, payload) {
        console.log(payload)
        context.commit('increaseCounter', payload)
    },
    decrementAction(context, payload) {
        context.commit('decreaseCounter', payload)
    },
    asycIncrement(context, payload) {
        setTimeout(() => {
            context.commit('increaseCounter', payload.by)
        }, payload.delay)
    },
    // eslint-disable-next-line space-before-function-paren
    asycDecrement(context, payload) {
        setTimeout(() => {
            context.commit('decreaseCounter', payload.by)
        }, payload.delay)
    }
}