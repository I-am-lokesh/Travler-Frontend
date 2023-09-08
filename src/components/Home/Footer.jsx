import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import img from "../../assets/myPicCrop.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 h-64">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="flex items-center space-x-4 mr-5">
          <a
            href="https://www.linkedin.com/in/lokesh-choudhary-742299217"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
          >
            <LinkedInLogoIcon />
          </a>
          <a
            href="https://twitter.com/hi_i_am_Lokesh"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
          >
            <TwitterLogoIcon />
          </a>
          <a
            href="https://www.instagram.com/x__lokesh__x"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
          >
            <InstagramLogoIcon />
          </a>
        </div>

        <div className="flex-shrink-0 mt-4 md:mt-0 ml-6">
          {/* Replace the URL with your profile image */}
          <img
            src={img}
            alt="Lokesh Choudhary"
            className=" h-40 w-40 rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
