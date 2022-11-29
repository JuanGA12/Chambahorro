const initialState = {
    show: false,
};

const sidebarReducer = (state = initialState, action) => {
    switch(action.type){
        case "show" :
            return {
                ...state,
                show: true,
            };

        case "hide":
            return {
                ...state,
                show: false,
            };
        
        default:
            return state;
    }
}

export default sidebarReducer;