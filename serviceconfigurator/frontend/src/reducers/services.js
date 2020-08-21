import { GET_SERVICES, DELETE_SERVICE, ADD_SERVICE } from "../actions/types.js";

const initialState = {
  services: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter(
          (service) => service.id !== action.payload
        ),
      };
    case ADD_SERVICE:
      return {
        ...state,
        services: [...state.services, action.payload],
      };
    default:
      return state;
  }
}
