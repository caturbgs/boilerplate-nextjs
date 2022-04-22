import useSWR from 'swr';
import { objectToQueryString } from '../helpers/helpers';
import { fetcher, http } from '../helpers/http';

const useHome = (params) => {
	const { data, error } = useSWR(`/entries?${objectToQueryString(params) || ''}`, fetcher);

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
