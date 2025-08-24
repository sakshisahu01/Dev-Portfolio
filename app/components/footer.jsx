// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 py-6 lg:py-10 text-center">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="text-center">
          <p className="text-md">
            © Developer Portfolio by <Link target="_blank" href="http://www.linkedin.com/in/sakshi-sahu-7a2357277/" className="text-[#16f2b3]">Sakshi sahu</Link>
          </p>
        </div>
      </div>
    </div >
  );
};

export default Footer;