import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import DwellingInfo from "../pages/DwellingInformation";
import About from "../pages/About";
import Error from "../pages/Error";

function Roads() {
    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dwelling/:id" element={<DwellingInfo />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default Roads;
