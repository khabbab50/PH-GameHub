import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelForget = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    forgetPassword(email)
      .then(() => {
        navigate("/login");

        toast.success("Password reset email sent!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <form
        onSubmit={handelForget}
        className="flex-col justify-center text-center"
      >
        <input className="border" type="email" name="email" />
        <button className="bg-green-600 px-5 py-2 rounded-md text-white">
          Forget Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
