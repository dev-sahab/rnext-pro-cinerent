import Star from '../assets/star.svg';
export default function Rating({ value }) {
  const rating = Array(value).fill(Star);
  return (
    <>
      <div className="flex items-center space-x-1 mb-5">
        {rating.map((star, index) => (
          <img key={index} src={star} width="14" height="14" alt="star" />
        ))}
      </div>
    </>
  );
}
