"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer style={{ background: "#111827", color: "white", }}>
        <div className="foot">
          <ul>
            <li className="animate">
              <Link
                    target="_blank"
                href={
                  "https://www.linkedin.com/in/ayesha-aziz-574780310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZzj2DGQ4QeSL8ja5onAIpA%3D%3D"
                }
              >
                <FaLinkedin />
              </Link>
            </li>

            <li className="animate"> 
              <Link
                
                target="_blank"
                href={
                  "https://www.linkedin.com/in/ayesha-aziz-574780310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZzj2DGQ4QeSL8ja5onAIpA%3D%3D"
                }
              >
                <FaGithub />
              </Link>
            </li>

            <li className="animate">
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/ayesha-aziz-574780310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZzj2DGQ4QeSL8ja5onAIpA%3D%3D"
                }
              >
                <FaSquareFacebook />
              </Link>
            </li>

            <li className="animate">
              <Link       
                target="_blank"
                href={
                  "https://www.linkedin.com/in/ayesha-aziz-574780310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZzj2DGQ4QeSL8ja5onAIpA%3D%3D"
                }
              >
                <MdEmail />
              </Link>
            </li>
          </ul>
        </div>

        <p id="copyright">
          Copyright &copy; 2024 Designed by Ayesha &#9829; All right Reserved
        </p>
      </footer>
    </div>
  );
}
