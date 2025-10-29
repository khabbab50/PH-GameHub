import { Link, useLocation, useNavigate } from 'react-router';
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithEmailPass, signinWithGoogle, user } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  // google sign in
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
  // redirect logged in

  const location = useLocation();
  const from = location.state || '/';

  const handelLogForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailPass(email, password)
      .then((result) => {
        e.target.reset();
        navigate(from);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || 'Login failed');
      });
  };

  return (
    <div className="min-h-[calc(100vh-285px)] bg-[#B9F8CF] flex justify-center items-center px-4 py-8">
      {/* Card: responsive widths */}
      <div className="bg-white rounded-md shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#0B5E06] p-6">Login Here</h1>

        <form onSubmit={handelLogForm} className="space-y-4 px-5 pb-4">
          <input
            className="w-full text-sm sm:text-base px-4 py-3 rounded outline-none focus:ring-2 focus:ring-green-300 border border-[#B9F8CF]"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            aria-label="email"
          />

          <div className="relative">
            <input
              className="w-full text-sm sm:text-base px-4 py-3 rounded outline-none focus:ring-2 focus:ring-green-300 border border-[#B9F8CF]"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter Your password"
              required
              aria-label="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <FaRegEye size={18} /> : <FaEyeSlash size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0B5E06] text-white py-3 rounded text-sm sm:text-base hover:opacity-95 transition">
            Login
          </button>
        </form>

        <div className="px-5 pb-4 flex md:flex-col flex-col sm:items-center sm:justify-between gap-3">
          <Link
            to={'/forgetpassword'}
            className="text-sm text-[#0B5E06] font-semibold hover:underline self-end sm:self-auto"
          >
            Forget Password?
          </Link>

          {/* Google signin: full width on small, inline on larger */}
          <button
            onClick={handleGoogleRegister}
            className="mt-0 sm:mt-0 w-full sm:w-auto flex justify-center items-center gap-3 border rounded-full py-2 px-6 border-gray-300 cursor-pointer mx-auto"
          >
            <FcGoogle size={20} />
            <span className="text-sm sm:text-base">Signin With Google</span>
          </button>
        </div>

        <div className="px-5 pb-6 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#0B5E06] hover:underline font-semibold">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
