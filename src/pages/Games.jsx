import logo from "../assets/icons8-game-controller-100.png";
import useGames from "../Hooks/useGames";
import UseTitle from "../Hooks/UseTitle";
import GameCard from "./GameCard";

const Games = () => {
  UseTitle("Games");

  const { games, loading, error } = useGames();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-20 h-20 border-4 border-none animate-spin">
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        Failed to load plants.
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-xl font-bold">
        All Plant <span className="text-[#0B5E06]">({games.length})</span>
      </h1>
      <div className="min-h-[calc(100vh-285px)] grid grid-cols-3 mx-auto gap-5">
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
