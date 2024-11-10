import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link className="li" href={"/about"}>
            {" "}
            About{" "}
          </Link>
        </li>

        <li>
          <Link className="li" href={"#"}>
            {" "}
            Service{" "}
          </Link>
        </li>

        <li>
          <Link className="li" href={"projects"}>
            {" "}
            Project{" "}
          </Link>
        </li>

        <li>
          <Link className="li" href={"/contact"}>
            {" "}
            Contact{" "}
          </Link>
        </li>
      </ul>

      <p className="copyright">@ All rights Reserved | Ayesha Aziz</p>
    </footer>
  );
};

export default Footer;
