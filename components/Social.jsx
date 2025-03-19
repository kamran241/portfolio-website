import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram,FaKaggle} from "react-icons/fa";
// import { ReactComponent as HuggingFaceIcon } from './assets/huggingface.svg';
const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/kamran241" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kamran-akmal-34387a338/" },
    // { icon: <FaHuggingface />, path: "https://huggingface.co/kamran04" },
    { icon: <FaInstagram />, path: "https://instagram.com" },
    { icon: <FaKaggle />, path: "https://www.kaggle.com/" },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
