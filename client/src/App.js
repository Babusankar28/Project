import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import { Alert, Box, CircularProgress, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { close } from "./slices/toastMsgSlice";
import Login from "./pages/Login";
import { useEffect } from "react";
import axios from "axios";
import { authenticated } from "./slices/authUserSlice";
import { startLoading, stopLoading } from "./slices/loadingSlice";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);
  const { isLoading } = useSelector((state) => state.loading);
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const authUser = async () => {
    try {
      dispatch(startLoading());
      const response = await axios
        .get("/user/auth-user")
        .then((res) => res.data);
      if (response.success) {
        dispatch(authenticated(response.user));
      }
    } catch (err) {
    } finally {
      dispatch(stopLoading());
    }
  };

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          flexDirection="column"
        >
          <CircularProgress />
          <p className="text-center font-base">Please wait...</p>
        </Box>
      ) : (
        <>
          <Snackbar
            open={toast.isOpen}
            autoHideDuration={1500}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={() => dispatch(close())}
          >
            <Alert
              variant="filled"
              severity={toast.varient}
              onClose={() => dispatch(close())}
            >
              {toast.message}
            </Alert>
          </Snackbar>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/signup"
              element={isAuthenticated ? <Navigate to={"/"} /> : <Signup />}
            />
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to={"/"} /> : <Login />}
            />
            <Route
              path="/profile"
              element={!isAuthenticated ? <Navigate to={"/"} /> : <Profile />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
