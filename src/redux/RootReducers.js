import { combineReducers } from 'redux';

import { employeeReducer } from '../modules/reduxRef/EmployeeReducer';

export default combineReducers({
    employeeReducer: employeeReducer,
})