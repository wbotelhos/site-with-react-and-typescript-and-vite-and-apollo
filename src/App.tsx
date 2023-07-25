import Books from "./components/Books";
import Home from "./components/Home";
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <div style={{ maxWidth: 1800 }}>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home message="Welcome to the Bible" />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
