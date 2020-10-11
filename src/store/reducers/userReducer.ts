import { changeValues, currentCompoent } from '../actions/actions';

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

type UserAction = ReturnType<
  typeof currentCompoent | typeof changeValues
>;

export const userReducer = (state = initialState, action: UserAction): UserState => {
    const newState = { ...state };
    switch (action.type) {
        case 'CURRENT_COMPONENT':
            newState.currentComp = action.payload;
            localStorage.setItem("currentPage", action.payload);
            break;
        case 'CHANGE_VALUE': 
            newState.data = action.payload;
            break;
    }
    return newState;
};