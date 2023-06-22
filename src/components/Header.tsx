import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

const Header: React.FC = () => {
  return (
    <div className="flex justify-end tex-sm pr-4 pt-3 space-x-4 items-center">
      <Link href="https://mail.google.com" className="hover:underline text-sm">
        Gmail
      </Link>
      <Link href="https://image.google.com" className="hover:underline text-sm">
        Images
      </Link>
      <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full" />
      <FcGoogle className="text-4xl hover:bg-gray-200 p-2 rounded-full" />
    </div>
  );
};

export default Header;
