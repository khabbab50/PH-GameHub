import { Link } from "react-router";
import logo from "../assets/icons8-game-controller-100.png";
import Newsletter from "../componets/Newsletter";
import Slider from "../componets/Slider";
import useGames from "../Hooks/useGames";
import UseTitle from "../Hooks/UseTitle";
import GameCard from "./GameCard";

const Home = () => {
  UseTitle("Home");

  const { games, loading } = useGames();
  const highestRating = games
    .filter((game) => game.ratings > 4.6)
    .slice(0, 3)
    .reverse();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-20 h-20 border-4 border-none animate-spin">
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Slider></Slider>
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center my-10">
          Popular Games
        </h2>
        <div className="min-h-[calc(100vh-285px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 mt-10">
          {highestRating?.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
      <div className="flex justify-center text-center mt-5 mb-10">
        <Link
          to="/plant"
          className="bg-[#0B5E06] text-white text-xl font-semibold px-7 py-1 rounded-md"
        >
          See All
        </Link>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
