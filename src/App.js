import axios from "axios";
import { useState } from "react";
import CreateBurger from "./components/CreateBurger";
import Home from "./components/Home";
import Login from "./components/Login";
import ViewOrder from "./components/ViewOrder";
import "./css/app.css";
import loginBG from "./images/login-bg.jpg";

function App() {
  const [loggedIn, , setLoggedIn] = useState("");
  const [userLogged, setUserLogged] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resStatus, setResStatus] = useState("val");
  const [token, setToken] = useState("");
  const [ingredients, setIngredients] = useState();

  const url = `https://xm-crm-react-exercise-server.herokuapp.com`;
  const authAxios = axios.create({
    baseURL: "https://xm-crm-react-exercise-server.herokuapp.com",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // LOGIN TO API
  const loginApi = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${url}/login`, {
        name: username,
        password: password,
      });
      let token = await res.data.token;
      setToken(token);
      setResStatus(true);
      setTimeout(() => {
        setResStatus("val");
        setUserLogged(true);
        console.log("signed in");
        console.log(token);
        console.log(res);
      }, 2000);
    } catch {
      setResStatus(false);
      console.log("failed");
      setTimeout(() => {
        setResStatus("val");
      }, 2000);
    }
  };
  //CALL TO API TO GET INGREDIENTS
  const fetchIngredients = async () => {
    try {
      const result = await authAxios.get(`/ingredients`);
      setIngredients(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <img className="background" src={loginBG} alt="" />
      <div className="container">
        {userLogged ? (
          <Home
            fetchIngredients={fetchIngredients}
            user={username}
            ing={ingredients}
          />
        ) : (
          <Login
            func={loginApi}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            resStatus={resStatus}
          />
        )}
      </div>
    </div>
  );
}

export default App;
