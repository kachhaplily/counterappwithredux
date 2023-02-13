
export default (state = 0, { type }) => {
    switch (type) {

        case "increment": return state + 1;
        case "decrement": return state - 1;

        default:
            return state
    }
}
