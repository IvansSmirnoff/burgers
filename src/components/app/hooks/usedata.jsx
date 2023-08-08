import { useEffect, useState } from 'react'
import {getData} from '../../../utils/api'

function useData(request){
	const [data, setData] = useState(void 0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	function execute(){
			setLoading(true);
			setError(false);
			getData(request.url)
			.then(res => {
				setData(res.data);
				setError(false);
			})
			.finally(() => setLoading(false));
	};

	useEffect(()=>{
		execute()
	}, []);

	return {
		data,
		loading,
		error
	}
}

export default useData;
