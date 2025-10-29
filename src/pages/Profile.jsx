import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UseTitle from "../Hooks/UseTitle";
import { AuthContext } from "../Providers/AuthProvider";

const EditProfile = () => {
  UseTitle("Profile");

  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [priview, setPriview] = useState(user?.photoURL || "");

  const handleUrlChance = (e) => {
    const url = e.target.value;
    setPhoto(url);
    setPriview(url);
  };

  const handleUpdatePhoto = (e) => {
    e.preventDefault();
    updateUserProfile(name, photo);
  };

  // user log out
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md w-full">
          <p className="mb-4 text-gray-700">
            You must be logged in to edit your profile.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded bg-green-500 text-white"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg">
        {/* user profile */}
        <div className="mt-6 text-center">
          <div className="mt-3 flex justify-center">
            <img
              src={priview || user.photoURL || user.reloadUserInfo.photoURL}
              alt=" "
              className="w-24 h-24 rounded-full border-4 border-green-500 object-cover"
            />
          </div>
          <div>
            <p className="mt-2 text-gray-700 font-medium">
              {user?.displayName}
            </p>
            <p className="mt-2 text-gray-700 font-medium">{user?.email}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center mt-5">
          Edit Profile
        </h2>
        <form onSubmit={handleUpdatePhoto} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md outline-green-500"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Photo URL</label>
            <input
              type="url"
              value={photo}
              onChange={handleUrlChance}
              className="w-full px-4 py-2 border rounded-md outline-green-500"
              placeholder="update photo url"
            />
            <p className="text-sm text-gray-500 mt-1">
              Leave empty to remove photo (shows default avatar).
            </p>
          </div>

          <div className="flex justify-between items-center gap-3 mt-4">
            <button type="submit" className="px-4 py-2 rounded-md border ">
              Profile update
            </button>
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="px-4 py-2 rounded-md border border-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
