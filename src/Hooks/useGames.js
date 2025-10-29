import axios from "axios";
import { useEffect, useState } from "react";

const useGames = () => {
  const [games, setGams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/data.json")
      .then((data) => setGams(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { games, loading, error };
};

export default useGames;
