import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import "./styles/global.css";

function App() {
  const [cookies, setCookies] = useCookies(["token"]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (cookies.token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [cookies]);

  function setToken(token) {
    setCookies("token", token);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            setToken={setToken}
            authenticated={authenticated}
          />
        </Route>
        <Route path="/signin">
          <Signin setToken={setToken} />
        </Route>
        <Route path="/signup">
          <Signup setToken={setToken} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
