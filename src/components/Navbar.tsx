import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/books">Books</Link></li>
  </ul>
);

export default Navbar;
