import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const TopNav = () => {
  return (
    <nav className="top_nav">
      <ul>
        <li>About</li>
        <li>Home</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>
          <FaFacebookF />
        </li>

        <li>
          <FaInstagram />
        </li>

        <li>
          <FaTiktok />
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
