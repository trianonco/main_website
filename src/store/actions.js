const updateUser = (context,payload) => {
    context.commit('UPDATE_USER', payload);
};

const setView = (context,payload) => {
    context.commit('SET_VIEW', payload);
};


export default {
    updateUser,
    setView,
};