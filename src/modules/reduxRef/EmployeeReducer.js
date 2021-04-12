import * as actionTypes from '../../../src/redux/Actions';

const initialState = {
  data: {},
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMP_DETAILS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
