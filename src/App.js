import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={Login} path="/login" exact />
          <Route component={ChatRoom} path="/" />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
