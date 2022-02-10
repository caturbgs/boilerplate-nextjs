import axios from 'axios';

const http = axios.create({
	baseURL: 'https://api.publicapis.org',
});

http.interceptors.request.use(
	(config) => {
		// config.headers = { ...config.headers, Authorization: `Bearer ${localStorage}` };

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

http.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// if (error.response) {
		// 	if ([401, 403].includes(error.response.status)) {
		// 		localStorage.clear();
		// 		window.location.href = '/login';
		// 	}
		// }

		return Promise.reject(error);
	},
);

const fetcher = async (url) => {
	const { data } = await http.get(url);

	return data;
};

export { fetcher, http };
