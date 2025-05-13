import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const TopBar = () => {
  return (
    <div className="max-w-screen mx-auto py-2 md:py-2 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between">

        {/* Social Media */}
        <div className="hidden md:flex gap-4">
          <a href="" className="text-gray-400 hover:text-blue-600">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="" className="text-gray-400 hover:text-blue-600">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="" className="text-gray-400 hover:text-blue-600">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        <div className="hidden md:block text-sm text-center flex-grow">
          <span className="text-gray-700">We Ship Worldwide - Fast And Reliable Shipping! </span>
        </div>

        {/* Currency */}
        <div className="md:mr-4">
          <select name="" id="" className="text-sm hover:text-blue-600 cursor-pointer">
            <option value="USD">USD</option>
            <option value="OMR">OMR</option>
          </select>
        </div>

        <div className="block md:hidden text-[10px] md:text-sm text-center flex-grow">
          <span className="text-gray-700">We Ship Worldwide - Fast And Reliable Shipping! </span>
        </div>

        {/* Language */}
        <div>
          <select name="" id="" className="text-sm hover:text-blue-600 cursor-pointer">
            <option value="EN">English</option>
            <option value="AR">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
