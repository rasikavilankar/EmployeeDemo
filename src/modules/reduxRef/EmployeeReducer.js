import * as actionTypes from '../../../src/redux/Actions';

const initialState = {
  data: {},
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEE_DATA:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
