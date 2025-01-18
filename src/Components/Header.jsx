import RightArrow from "../assets/right-arrow.png";
import Play from "../assets/Play.png";
import MainImage from "../assets/mainimage.png";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col p-6 gap-4">
     
      <button className="bg-orange-100 text-white border-2 border-orange-500 px-6 py-3 rounded-full flex items-center gap-3 sm:px-4 sm:py-2 xs:px-3 xs:py-1">
        
        <span className="border-2 border-orange-500 px-3 py-1 rounded-full text-orange-500 text-xs sm:text-sm">
          New Feature Added
        </span>

        
        <span className="border-3 border-orange-500 flex items-center gap-1 px-3 py-1 rounded-full text-orange-500 text-xs sm:text-sm">
          Check Out The Team Dashboard
          <img className="w-3 h-3" src={RightArrow} alt="Right Arrow" />
        </span>
      </button>

      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-8">
          Beautiful analytics to grow smarter
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600 py-8">
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <br />
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
      
        <button className="bg-[#f7f5f5] text-xl text-black px-6 py-2 rounded-full flex items-center justify-center gap-2 transition">
        
          <img className="w-5 h-5" src={Play} alt="Play Icon" />
          Demo
        </button>

        <button className="bg-[#E63F3A] text-white px-6 py-2 rounded-full hover:bg-[#5f2ac1] transition">
          Sign up
        </button>
      </div>

     
      <div className="w-full max-w-4xl mx-auto">
        <img className="m-5 w-full h-auto" src={MainImage} alt="Main Illustration" />
      </div>

   
      <div className="text-xl text-center my-6">
        <p>Join 4,000+ companies already growing</p>
      </div>

      <div className="flex gap-5 flex-wrap justify-center md:flex-nowrap">
        <div className="w-20 sm:w-32 md:w-40">
          <img className="w-full h-auto" src={company1} alt="Company 1" />
        </div>
        <div className="w-20 sm:w-32 md:w-40">
          <img className="w-full h-auto" src={company2} alt="Company 2" />
        </div>
        <div className="w-20 sm:w-32 md:w-40">
          <img className="w-full h-auto" src={company3} alt="Company 3" />
        </div>
        <div className="w-20 sm:w-32 md:w-40">
          <img className="w-full h-auto" src={company4} alt="Company 4" />
        </div>
        <div className="w-20 sm:w-32 md:w-40">
          <img className="w-full h-auto" src={company5} alt="Company 5" />
        </div>
        <div className="w-20 sm:w-32 md:w-40">
          <img className="w-full h-auto" src={company6} alt="Company 6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
