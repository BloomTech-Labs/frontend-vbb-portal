import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE } from './AddUser.actions'

const initialState = {
  loading: false,
  user: [],
  error: ''
}

export const AddUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
      case ADD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          payload: action.payload
        }
        case ADD_USER_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload
          }
          default:
            return state
  }
}
