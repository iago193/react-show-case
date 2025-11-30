import { Header } from "./components/header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";
import Gallery from "./components/gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Gallery /> */}
        <Header />
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
