import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const About = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="p-20 text-justify space-y-5">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">About Us</h2>
                    <p>Welcome to Pulse Times, your trusted source for the latest news and insights from around the globe. At Pulse Times, we believe in the power of information and its ability to shape opinions, spark conversations, and drive change.</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">Our Mission</h2>
                    <p>Our mission is simple: to provide accurate, timely, and engaging news that keeps you informed about the events that matter most. We are committed to delivering a balanced perspective on current affairs, politics, technology, entertainment, and more, ensuring our readers stay ahead of the curve.</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">What We Do</h2>
                    <p>We cover a wide range of topics, from breaking news to in-depth feature stories, providing context and clarity in an ever-changing world. Our content is designed to be accessible to everyone, whether you are a news junkie, a casual reader, or someone looking for a fresh perspective.</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">Who We Are</h2>
                    <p>Pulse Times was founded by a group of passionate journalists, tech enthusiasts, and creative storytellers who saw a need for a more dynamic and interactive approach to news. Our team comprises experienced reporters, analysts, and editors who are dedicated to bringing you in-depth coverage and expert analysis on the topics you care about.</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">Our Values</h2>
                    <p>Integrity, transparency, and accuracy are at the core of everything we do. We strive to uphold the highest standards of journalism, ensuring that every story we publish is thoroughly researched and fact-checked. We value our readers trust and work tirelessly to earn and maintain it.</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">Join the Conversation</h2>
                    <p>At Pulse Times, we believe news is not just about reporting—it is about engaging with our audience. We encourage you to share your thoughts, opinions, and insights with us, whether through comments, social media, or by contacting our editorial team directly.</p>
                </div>
            </div>
        </div>
    );
};

export default About;