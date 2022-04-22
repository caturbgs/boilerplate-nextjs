export const objectToQueryString = (obj) => {
	return Object.keys(obj)
		.filter((key) => obj[key])
		.map((key) => {
			return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
		})
		.join('&');
};
