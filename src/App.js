import React, { Fragment, useContext } from "react";
import AuthContext from "./components/store/auth-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const ctx = useContext(AuthContext);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useEffect(() => {
  // const storedUserLogedInInformation = localStorage.getItem("isLoggedIn");
  // if (storedUserLogedInInformation === "1") {
  //   setIsLoggedIn(true);
  //  }
  //}, []);

  // const loginHandler = (email, password) => {
  // We should of course check email and password
  // But it's just a dummy/ demo anyways
  //    localStorage.setItem("isLoggedIn", "1");
  //    setIsLoggedIn(true);
  //  };

  //const logoutHandler = () => {
  // localStorage.removeItem("isLoggedIn");
  //setIsLoggedIn(false);
  //};

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
