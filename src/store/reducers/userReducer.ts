const initialState: UserState = {
    currentComp: 1,
    data: {
        firstName: "",
        lastName: "",
        Email: "",
        dob: "",
        agreement1: false,
        agreement2: false
    }
}
const userReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case 'CURRENT_COMPONENT':
            newState.currentComp = action.value;
            break;
        case 'CHANGE_VALUE': {
            console.log('action.value', action.value)
            newState.data = {
                ...newState.data,
                [action.value.target.name]: action.value.target.value
            };
        }
            break;
    }
    return newState;
};
export default userReducer;