import useSWR from 'swr';
import { fetcher, http } from '../helpers/http';

const useHome = () => {
	const { data, error } = useSWR('/entries', fetcher);

	return {
		home: data,
		isLoading: !error && !data,
		error,
	};
};

const createHome = async (body) => {
	const { data } = await http.post('/entries', body);

	return data;
};

export const homeRepository = {
	useHome,
	createHome,
};
