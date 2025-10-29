import { useContext, useState } from 'react';
import { FaEyeSlash, FaGithub, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserPass, signinWithGoogle } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  // signin google
  const handleGoogleRegister = () => {
    signinWithGoogle(provider)
      .then((result) => {
        toast.success('Signed in with Google');
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Google sign-in failed');
      });
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const fullName = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 6 characters and include uppercase, lowercase, number and special character.');
      return;
    }

    createUserPass(email, password)
      .then((result) => {
        // update displayName & photo
       updateProfile(result.user,{ displayName: fullName, photoURL: photo })
          .then(() => {
            toast.success('Register successful');
            e.target.reset();
            navigate('/');
          })
          .catch((err) => {
            console.error(err);
            toast.error('Profile update failed');
          });
      })
      .catch((err) => {
        console.error('Error', err);
        toast.error(err.message || 'Registration failed');
      });
  };

  return (
    <div className="min-h-screen bg-[#B9F8CF] flex justify-center items-center">
      <div className="bg-white rounded-md shadow-md p-8 w-full max-w-md">
        <h1 className="text-center text-3xl font-bold text-[#0B5E06] mb-6">Register Here</h1>

        <form onSubmit={handleRegisterForm} className="space-y-4">
          <input
            className="w-full px-4 py-2 rounded border border-[#B9F8CF] outline-green-500"
            type="text"
            name="name"
            placeholder="Enter Full Name"
            required
          />

          <input
            className="w-full px-4 py-2 rounded border border-[#B9F8CF] outline-green-500"
            type="text"
            name="photo"
            placeholder="Photo url"
            required
          />

          <input
            className="w-full px-4 py-2 rounded border border-[#B9F8CF] outline-green-500"
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <div className="relative">
            <input
              className="w-full px-4 py-2 rounded border border-[#B9F8CF] outline-green-500"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              required
            />
            {showPassword ? (
              <FaRegEye
                onClick={() => setShowPassword(false)}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              />
            )}
          </div>

          <button type="submit" className="w-full bg-[#0B5E06] text-white py-2 rounded">
            Register Now
          </button>
        </form>
        <div className="flex flex-col text-center p-5 space-y-2">
          <button
            onClick={handleGoogleRegister}
            className=" flex justify-center items-center gap-3 border rounded-full py-2 px-10 border-gray-300 cursor-pointer"
          >
            <FcGoogle size={24} />
            Signin With Google
          </button>
        </div>
        <div className="text-center mt-5">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-[#0B5E06] font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
