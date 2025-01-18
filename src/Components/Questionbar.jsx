import Icon1 from "../assets/Icon wrap1.png";
import Icon2 from "../assets/Icon wrap2.png";
import Group from "../assets/Avatar group.png";

const QuestionCard = ({ icon, question, children }) => (
  <div className="w-full flex justify-between items-center p-4 border-b">
    <div>
      <h3 className="text-lg md:text-xl text-gray-900">{question}</h3>
      <p className="text-gray-600 mt-2">{children}</p>
    </div>
    <img className="w-12 h-12" src={icon} alt={question} />
  </div>
);

const Questionbar = () => {
  return (
    <div className="flex justify-center items-center flex-col p-6 gap-4">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold leading-snug text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="py-5 text-gray-900">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-6 p-2 w-full max-w-5xl">
        <QuestionCard className='font-bold' icon={Icon2} question="Is there a free Trial available?">
          <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized <br/> 30-minute onboarding call to get you up and running as soon as possible.</p>
        </QuestionCard>

        <QuestionCard className icon={Icon1} question="Can I Change My Plan Later?">
        
        </QuestionCard>

        <QuestionCard icon={Icon1} question="What is your cancellation policy?">
 
        </QuestionCard>

        <QuestionCard icon={Icon1} question="Can other info be added to an invoice?">
          
        </QuestionCard>

        <QuestionCard icon={Icon1} question="How does billing work?">
         
        </QuestionCard>

        <QuestionCard icon={Icon1} question="How do I change my account email?">
          
        </QuestionCard>
      </div>


      <div className="py-12 w-full bg-slate-50 opacity-1 flex flex-col items-center text-center justify-center">
  <div className="max-w-lg w-full space-y-6">
    <img src={Group} alt="Support" className="mx-auto" />
    <h1 className="text-3xl font-bold text-gray-900">
      Still Have a Question?
    </h1>
    <p className="text-lg text-gray-600">
      Can’t find the answer you’re looking for? Please chat with our friendly team.
    </p>
    <button className="bg-[#E63F3A]  text-white py-2 px-8 rounded-lg shadow-md hover:bg-[#5f2ac1] transition focus:outline-none focus:ring-2 focus:ring-[#D22F2C] transition duration-300 ease-in-out">
      Get In Touch
    </button>
  </div>
</div>

    </div>
  );
};

export default Questionbar;
