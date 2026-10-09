import tag from '../assets/tag.svg';
export default function AddToCart({ movie, onCartAdd }) {
  return (
    <>
      <a
        onClick={(e) => onCartAdd(e, movie)}
        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm mt-auto"
        href="#"
      >
        <img src={tag} alt="" />
        <span>${movie.price} | Add to Cart</span>
      </a>
    </>
  );
}
