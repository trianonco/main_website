
const UPDATE_USER = (state, payload) => {
    state.user = payload;
};

const SET_VIEW = (state, payload) => {
    state.view = {
        id : payload.id,
        name: payload.name
    }
}

export default {
    UPDATE_USER,
    SET_VIEW
};