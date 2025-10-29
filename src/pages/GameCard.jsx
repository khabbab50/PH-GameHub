import { Link } from "react-router";

const GameCard = ({ game }) => {
  const { title, coverPhoto, category, ratings, description, id } = game;
  const isTopRated = Number(ratings) >= 4.5;

  const rounded = Math.round(Number(ratings));
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className="leading-3">
      {i < rounded ? "⭐" : "☆"}
    </span>
  ));

  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {isTopRated && (
        <div className="absolute z-20 top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Top Rated
        </div>
      )}

      <div className="w-full overflow-hidden">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full object-cover transform transition-transform duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105 origin-center h-48 sm:h-56 md:h-64 lg:h-72"
        />
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2 text-sm text-gray-700">
          <p className="text-center sm:text-left">
            Category:
            <span className="text-green-700 font-semibold">{category}</span>
          </p>
          <div className="flex items-center gap-2 text-yellow-500">
            <div className="text-sm tracking-wide">{stars}</div>
            <span className="text-gray-500 text-xs">({ratings})</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm text-center sm:text-left line-clamp-3">
          {description}
        </p>

        <Link
          to={`/gamedetails/${id}`}
          className="block w-full text-center bg-green-700 text-white mt-2 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
