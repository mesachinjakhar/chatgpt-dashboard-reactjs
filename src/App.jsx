import Dashboard from "./components/Dashboard";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </>
  );
}

export default App;
