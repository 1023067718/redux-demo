import moment from 'moment'

class Info {
    message;
    date;
}

class Recard {
    tiger = 10000;
    infos = [];
}

const recard = new Recard();

const reducer = (state = recard, action) => {
    let info = new Info();
    switch (action.type) {
        case "涨工资":
            state.tiger += 100;
            info.message = "涨100工资";
            info.date = moment().format('YYYY-MM-DD HH:mm:ss');
            state.infos.push(info);
            break;
        case "扣工资":
            state.tiger -= 100;
            info.message = "扣100工资";
            info.date = moment().format('YYYY-MM-DD HH:mm:ss');
            state.infos.push(info);
            break;
        default:
            break;
    }
    let newRecard = new Recard();
    newRecard.tiger = state.tiger;
    newRecard.infos = state.infos;
    return newRecard;
}
export default reducer;
