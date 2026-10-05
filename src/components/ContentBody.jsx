import MovieCard from './MovieCard';
import { getAllMovies } from '../data/movies';

export default function ContentBody() {
  const movies = getAllMovies();

  return (
    <>
      {/* <!-- Content --> */}
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {/* <!-- Begin Card --> */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
          {/* <!-- End Card --> */}
        </div>
      </div>
    </>
  );
}
