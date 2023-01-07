import { BrowserRouter } from "react-router-dom";
import Router from "../router";
import "./App.css";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
