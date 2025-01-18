import Image1 from "../assets/cardim1.png";
import Image2 from "../assets/cardimg2.png";
import Image3 from "../assets/cardim3.png";
import Arrow1 from "../assets/Arrow.png";
import olivia from "../assets/Olivia.png";
import phoenix from "../assets/Phoenix.png";
import lana from "../assets/Lana.png";
import MainImage from "../assets/mainimage.png";

const BlogPost = ({ image, category, title, description, authorImage, authorName, date }) => {
    return (
      <div className="flex flex-col bg-white p-4 rounded-lg w-full sm:w-80"> 
        <img src={image} alt="Blog" className="w-full h-60 object-cover mb-4 rounded-md" />
        <p className="text-orange-600 font-semibold mb-2">{category}</p>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <img src={Arrow1} alt="Arrow" className="w-6 h-6" />
        </div>
        
      
        <p className="text-gray-600 mb-4 text-left text-base leading-relaxed">{description}</p>
    
        <div className="flex items-center gap-3">
          <img src={authorImage} alt="Author" className="w-8 h-8 rounded-full" />
          <div>
            <p className="font-semibold">{authorName}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    );
  };
  
  
  
  const Blog = () => {
    return (
      <div className="px-6 py-8 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-orange-600 font-bold text-2xl">Our blog</h1>
          <button className="bg-[#E63F3A] hover:bg-[#5f2ac1] transition text-white px-4 py-2 rounded-md">
            View All Posts
          </button>
        </div>
        <p className="text-gray-600 mb-8">
          Tools and strategies modern teams need to help their companies grow
        </p>
    
        
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
         
          <BlogPost
            image={Image1}
            category="Design"
            title="Ux review Presentation"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            authorImage={olivia}
            authorName="Olive Rnye"
            date="20 Jan 2024"
          />
    
          <BlogPost
            image={Image2}
            category="Product"
            title="Ux review Presentation"
            description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            authorImage={phoenix}
            authorName="Olive Rnye"
            date="20 Jan 2024"
          />
  
          <BlogPost
            image={Image3}
            category="Software Engineering"
            title="Ux review Presentation"
            description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
            authorImage={lana}
            authorName="Olive Rnye"
            date="20 Jan 2024"
          />
        </div>


        <div className="w-full bg-slate-100 flex flex-col items-center justify-center py-8 pt-5 mt-8 h-80">
  <h1 className="font-bold text-3xl text-center mb-4">Start Your Free Trial</h1>
  <p className="text-center text-gray-600 mb-6">Join over 4,000+ startups already growing with Untitled</p>

  <div className="flex gap-4">
    <button className="bg-transparent border border-gray-500 px-6 py-2 rounded-md text-gray-700 hover:bg-gray-200">Learn More</button>
    <button className="bg-[#E63F3A] text-white px-6 py-2 rounded-md hover:bg-[#5f2ac1] transition">Get Started</button>
  </div>
</div>


      </div>
    );
  };
    
  export default Blog;
  