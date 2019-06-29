import axios from 'axios';

export const traerPublicaciones = () => async(dispatch) => {

		const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
		dispatch({
			type: 'traerPublicaciones',
			payload: respuesta.data
		});
	
	
};