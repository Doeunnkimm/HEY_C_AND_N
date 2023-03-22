import { Axios } from 'axios'

const PATH = 'movie'
const API_KEY = process.env.REACT_APP_API_KEY

const MovieApi = {
	getSearch({ title }) {
		return Axios.get(`/search/${PATH}`, {
			params: { api_key: API_KEY, query: title },
		})
	},

	getContent({ category, page }) {
		return Axios.get(`/${PATH}/${category}`, {
			params: { api_key: API_KEY, page },
		})
	},

	getDetailContent({ movieId }) {
		return Axios.get(`/${PATH}/${movieId}`, {
			params: { api_key: API_KEY, page },
		})
	},

	getTrailerVideo({ movieId }) {
		return Axios.get(`/${PATH}/${movieId}/videos`, {
			params: { api_key: API_KEY },
		})
	},
}
export default MovieApi
