import TopNav from "./components/header/TopNav";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/loading/ProductDetail";

const App = () => {
  return (
    <>
      <Router>
        <TopNav />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
