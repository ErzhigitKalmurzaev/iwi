import { inctance } from "../utils/axios";

const useSinglePageService = () => {

    const getFilm = async (id) => {
        const res = await inctance.get(`movie/${id}`);
        return _transformFilm(res.data);
    }

    const _transformFilm = (item) => {
        return {
            name: item?.name,
            id: item.id,
            des: item.description,
            genre: item.genres,
            year: item.year,
            poster: item.poster.url,
            persons: item.persons,
            length: item.movieLength,
            rating: item?.rating?.imdb,
            similar: item.similarMovies,
            trailer: item?.videos.trailers.filter(item => item.site === 'youtube'),
            country: item?.audience[0]?.country[0]?.name
        }
    }

    return {getFilm}
};

export default useSinglePageService;