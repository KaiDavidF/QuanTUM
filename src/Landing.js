import "./Landing.css";
import { SocialIcon } from "react-social-icons";

export default function Landing() {
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
          We aim to give our students a deeper understanding of quantitative &
          qualitative finance. This includes implementations (e.g. Hedgefunds).{" "}
          <br />
          QuanTUM offers various workshops and potential career opportunities
          with our partnerships. <br />
          Meanwhile, we strongly encourage and support our members in realizing
          individual projects. The projects will be in the context of
          competitions, research projects with our partners as well as projects
          we implement ourselves.
          <br /> Possible outcomes include spin-offs in the form of private
          ventures (e.g. start-ups) or research groups. Finally, QuanTUM is
          about learning to work with people who have very different abilities.
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
        <div>
          <h2>More Information</h2>
          <br />
        </div>
        <div className="rowC">
          <SocialIcon
            className="icon"
            url="https://www.linkedin.com/company/quantum-hedge-fund-club/about/"
          />
          <button
            className="shrink-border"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://lanfjm1shdy.typeform.com/to/NNS3OHkT";
            }}
          >
            {" "}
            Become a member
          </button>
        </div>
      </div>
    </div>
  );
}
