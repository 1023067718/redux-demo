
const tiger = 10000;

const reducer = (state = tiger, action) => {
    switch (action.type) {
        case "涨工资":
            state += 100;
            break;
        case "扣工资":
            state -= 100;
            break;
        default:
            break;
    }
    return state;
}
export default reducer;
