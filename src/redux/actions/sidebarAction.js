export const showAction = (state) => {
    return {
        type: "show",
        payload: state
    };
};

export const hideAction = (state) => {
    return {
        type: "hide",
        payload: state
    };
};