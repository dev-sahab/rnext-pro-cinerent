import tag from '../assets/tag.svg';
export default function AddToCart({ price = '100' }) {
  return (
    <>
      <a
        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm mt-auto"
        href="#"
      >
        <img src={tag} alt="" />
        <span>${price} | Add to Cart</span>
      </a>
    </>
  );
}
