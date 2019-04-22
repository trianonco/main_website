
const currentView = state => state.view;

const prop1 = state => state.someObj.prop2;
const prop2 = state => state.someObj.prop2;

export default {
    currentView,
    prop1,
    prop2,
};