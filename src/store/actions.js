const updateUser = (context, payload) => {
    context.commit('UPDATE_USER', payload);
};

const setView = (context, payload) => {
    context.commit('SET_VIEW', payload);
};

const addToCart = (context, payload) => {
    context.commit('ADD_TO_CART', payload);
};

const removeToCart = (context, payload) => {
    context.commit('REMOVE_FROM_CART', payload);
};


export default {
    updateUser,
    addToCart,
    setView,
    removeToCart

};