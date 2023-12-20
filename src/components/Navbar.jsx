import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import axios from "axios";
import { server } from "..";
import { toast } from "react-toastify";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const { isAuthenticated, setIsAuthenticated, loading, setloading } =
    useContext(Context);
  const navigate = useNavigate();

  const logoutHandler = async (event) => {
    setloading(true);
    toast.success("Logged Out Successfully");
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      navigate("/");

      toast.success("Logged Out ");

      setIsAuthenticated(false);
      setloading(false);
    } catch (error) {
      setIsAuthenticated(true);
      toast.error(error.response.data.message);
      setloading(false);
    }
  };
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <span className="text-xl ">BODHI BAKERY</span>
            {/* <img src="../logo.png" className="h-14" /> */}
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-black mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          {isAuthenticated ? (
            <button type="button" disabled={loading} onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <p>Login</p>
            </NavLink>
          )}

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
