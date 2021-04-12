import * as actionTypes from '../../../src/redux/Actions'

export const addEmpDetails = (token) => ({
	type: actionTypes.ADD_EMP_DETAILS,
	payload: token,
})
