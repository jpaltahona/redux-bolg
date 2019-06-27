export const traertodos = () => (dispatch) => {
	dispatch({
		type: 'traer_usuarios',
		payload: [1, 2, 3]
	});
};