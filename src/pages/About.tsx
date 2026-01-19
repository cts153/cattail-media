import Navbar from "@/components/Navbar";
import photo1 from "src/assets/about_photo1.png";
import photo2 from "src/assets/about_photo2.jpeg";
import photo3 from "src/assets/about_photo3.jpeg";
// import InstagramFeed from "@/components/InstagramFeed"; // Uncomment once ready

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Section */}
          <div className="max-w-3xl mx-auto mb-20 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              About Me!
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Hi, I'm Casey! I help local businesses get online without the stress. 
                I don’t just build websites—I come to your shop, sit down with you, 
                and get to know how your business really works.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Together, we figure out what you need and map out a plan that 
                actually makes sense for you. Most of all, I want you to feel confident 
                managing your own digital presence.
              </p>
              <p className="text-lg leading-relaxed">
                I teach you how to update your site, post on social media, 
                and share your story. Think of me as a partner in getting 
                your business online: I handle the tech, the visuals, and the 
                strategy, but you walk away with the know-how to make it your own.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img src="src\assets\about_photo1.png" alt="Photo of Casey and AJ" className="rounded-lg" />
                <img src="src\assets\about_photo2.jpeg" alt="Photo of Casey on her horse" className="rounded-lg" />
                <img src="src\assets\about_photo3.jpeg" alt="Photo of Casey with her snowboard" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div> 
  );
};

export default About;
