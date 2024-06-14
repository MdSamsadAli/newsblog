import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./common/NewHeader";
import TopHeader from "./common/TopHeader";
import MidHeading from "./common/MidHeading";

function App() {
  return (
    <>
      <Router>
        <TopHeader />
        <MidHeading />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
