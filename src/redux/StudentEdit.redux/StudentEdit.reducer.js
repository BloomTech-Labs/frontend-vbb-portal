


const userEditInitialState = {
    editing: false
}

export const editUser = (state = userEditInitialState, action) => {
    switch (action.type) {
        case EDIT_USER:
            return {
                ...state,
                editing: true
            }
            default:
                return state;
    }
}