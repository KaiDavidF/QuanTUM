import "./Landing.css";
import { SocialIcon } from "react-social-icons";

export default function Landing() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted your email. See you at the next event!");
  };

  return (
    <div>
      <div className="paragraph">
        <h1>What is QuanTUM</h1>
        QuanTUM is the first quantitative finance society founded at one of
        Germanys most excellent universities. <br />
        TU Munich has the brightest minds in fields including Mathematics,
        Computer Science, Engineering, Physics and Business. <br />
        We try to bring these minds together; to achieve outstanding results.
        <br />
        <h2>Our goal</h2>
        <p>
          We aim to give our students an overview and deeper understanding of
          quantitative & qualitative finance and different investment funds such
          as hedge funds. <br />
          QuanTUM offers various workshops and potential career opportunities
          with our sponsors and partnerships. <br />
          Meanwhile, we strongly encourage and support our members in realizing
          individual projects. The projects will be in the context of
          competitions, research projects with our partners as well as projects
          we implement ourselves.
        </p>
        <h2>What matters</h2>
        Our members should be ambitious, bright and open about learning new
        things. <br />
        This is highly important as we want to bring people together who might
        have never taken a single business course.
        <br /> Novell approaches often come from people who have not worked in
        the respective fields before.
        <br /> However, applying your unique skills to financial problems
        requires an excellent ability in learning quickly.
        <div className="rowC">
          <h2>More Information</h2>
          <SocialIcon
            className="icon"
            url="https://www.linkedin.com/company/quantum-hedge-fund-club/about/"
          />
        </div>
      </div>
    </div>
  );
}
