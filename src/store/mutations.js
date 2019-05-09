
const UPDATE_USER = (state, payload) => {
    state.user = payload;
};

const SET_VIEW = (state, payload) => {
    state.view = {
        id: payload.id,
        name: payload.name
    }
}

const ADD_TO_CART = (state, payload) => {

    const item = payload;
    const items = state.cart.items;
    items.push(item);
    state.cart.items = items;
}

const REMOVE_FROM_CART = (state, payload) => {
    const item = payload;
    const itemsWithNoItem = state.cart.items.filter(kItem => kItem.id !== item.id);
    const itemsWithItem = state.cart.items.filter(kItem => kItem.id === item.id);
    itemsWithItem.pop();

    const newItems = [...itemsWithNoItem, ...itemsWithItem];

    state.cart.items = newItems;

}

export default {
    UPDATE_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_VIEW
};