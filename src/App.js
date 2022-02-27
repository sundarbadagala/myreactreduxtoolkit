import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from 'react-redux'

import Local from "./pages/local";
import Movies from "./pages/movies";
import Store from "./pages/store";
import Posts from "./pages/posts";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Mobiles from './pages/mobiles'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="local" element={<Local/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="store" element={<Store/>} />
        <Route path="posts" element={<Posts/>} />
        <Route path="mobiles" element={<Mobiles/>} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
