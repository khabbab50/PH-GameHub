import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/icons8-game-controller-100.png";
import useGames from "../Hooks/useGames";
import UseTitle from "../Hooks/UseTitle";

const PlantDetails = () => {
  UseTitle("Game Details");
  const { id } = useParams();
  const { games = [], loading } = useGames();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-20 h-20 border-4 border-none animate-spin">
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }

  const filtaredGame = games.find((p) => String(p.id) === String(id));

  if (!games) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-semibold mb-4">Plant not found</h2>
        <Link to="/" className="text-white bg-green-700 px-4 py-2 rounded">
          Back to Home
        </Link>
      </div>
    );
  }

  const {
    title,
    coverPhoto,
    developer,
    ratings,
    description,
    category,
    inStock,
    careLevel,
    providerName,
    downloadLink,
  } = filtaredGame;

  const rounded = Math.round(Number(ratings) || 0);
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className="text-yellow-500 text-lg leading-none">
      {i < rounded ? "★" : "☆"}
    </span>
  ));

  const isTopRated = Number(ratings) >= 4.5;
  const isValidEmail = (em) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(em).toLowerCase());

  const handleConsultationSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name is required.");
      return;
    }
    if (!email.trim()) {
      toast.error("Email is required.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Consultation booked successfully!");
      setName("");
      setEmail("");
    }, 600);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="mb-6">
        <Link
          onClick={() => history.back()}
          className="text-sm text-green-700 hover:underline"
        >
          ← Back
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full relative group overflow-hidden">
            {isTopRated && (
              <div className="absolute top-4 left-4 z-20 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                Top Rated
              </div>
            )}

            <img
              src={coverPhoto}
              alt={title}
              className="w-full h-64 sm:h-80 md:h-full object-cover transform transition-transform duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
            />
          </div>

          <div className="md:w-1/2 w-full p-6 md:p-8 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <p className="text-sm text-gray-500">Category: {category}</p>
            <div className="flex items-center gap-3">{stars}</div>
            <p className="text-green-700 font-semibold text-xl">
              Development By: {developer}
            </p>
            <p>{description}</p>
            <a className="btn btn-success" target="_blank" href={downloadLink}>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
