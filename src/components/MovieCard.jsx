import { useContext, useState } from 'react';
import { MovieContext } from '../context';
import { GetImageURL } from '../utils/utils';
import AddToCart from './AddToCart';
import MovieDetailsModal from './MovieDetailsModal';
import Rating from './Rating';
export default function MovieCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [activeMovieData, setActiveMovieData] = useState(null);
  const handleOpenModal = () => {
    setActiveMovieData(data);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setActiveMovieData(null);
    setShowModal(false);
  };

  const { cartData, setCartData } = useContext(MovieContext);

  const handleAddToCart = (e, movie) => {
    e.preventDefault();
    const find = cartData.find((item) => item.id === movie.id);
    if (find) {
      alert('Movie already in cart');
      return;
    }

    setCartData([...cartData, movie]);
  };

  return (
    <>
      {/* <!-- Begin Card --> */}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl flex flex-col">
        <a href="#" onClick={handleOpenModal}>
          <img
            className="w-full object-cover"
            src={GetImageURL(data.cover)}
            alt={data.title}
          />
          {/* <span>{data.cover}</span> */}
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{data.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{data.genre}</p>
            <Rating value={data.rating} />
          </figcaption>
        </a>

        <AddToCart movie={data} onCartAdd={handleAddToCart} />
      </figure>
      {/* <!-- End Card --> */}
      {showModal && (
        <MovieDetailsModal
          onClose={handleCloseModal}
          movie={activeMovieData}
          onCartAdd={handleAddToCart}
        />
      )}
    </>
  );
}
