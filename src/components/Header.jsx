import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

function Header({ hidden }) {
  return (
    <motion.header
      initial={{ y: "100%", opacity: 0 }}
      animate={hidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0 }}
      className="h-[100px] fixed top-0 w-full z-50 bg-olive flex items-center px-12"
    >
      <img src={Logo} className="max-w-[333px] max-h-[35px]" alt="" />

      <nav className="ml-[15rem]">
        <ul className="flex items-center justify-start gap-5">
          <li>
            <a href="#">Why Philosophy</a>
          </li>
          <li>
            <a href="#">Seeker Space</a>
          </li>
          <li>
            <a href="#">Think Tank</a>
          </li>
          <li>
            <a href="#">Get involved</a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
