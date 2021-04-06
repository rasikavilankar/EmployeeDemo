import * as actionTypes from '../../../src/redux/Actions'

export const fetchEmpData = (token) => ({
	type: actionTypes.FETCH_EMPLOYEE_DATA,
	payload: token,
})
