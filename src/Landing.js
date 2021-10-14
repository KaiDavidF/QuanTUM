import "./Landing.css";
import { SocialIcon } from "react-social-icons";
export default function Landing() {
  return (
    <div className="paragraph">
      <h1>What is QuanTUM</h1>
      QuanTUM is the first Hedgefund society founded at one of Germanys most
      excellent universities. <br />
      TU Munich has the brightest minds in fields including Mathematics,
      Computer Science, Engineering, Physics and Business. <br />
      We try to bring these minds together; to achieve outstanding results.
      <br />
      <h2>Our goal</h2>
      <p>
        We aim to give our students an overview and deeper understanding of
        quantitative & qualitative finance and different investment funds such
        as hedge funds. <br />
        QuanTUM offers various workshops and potential career opportunities with
        our sponsors and partnerships. <br />
        Meanwhile, we strongly encourage and support our members in realizing
        individual projects.
      </p>
      <p className="p1">
        <h2>Important</h2>
        When thinking about our members, we had three things in mind:
      </p>
      <h3>1. Your major does not matter.</h3>
      <p>We believe that true diversity comes from having diverse minds. </p>
      <h3>2. Your age does not matter.</h3>
      <p>
        You could be in the first year of your studies or in a Ph.D. program.
        <br /> We are interested in you personally.
      </p>
      <h3>3. You do not need any prior knowledge in finance</h3>
      <p>
        Breakthroughs happen through novel approaches; <br />
        which often come from people who have not worked in the respective field
        before.
        <br /> Still, having expertise in certain fields might help
        significantly.
      </p>
      <h3>What actually matters</h3>
      Our members should be ambitious, bright and open about learning new
      things. <br />
      This is highly important as we want to bring people together who might
      have never taken a single business course.
      <br /> However, applying your unique skills to financial problems requires
      an excellent ability in learning quickly.
      <h2>More Information</h2>
      You'll find more information on current events on our LinkedIn-page.
      <br />
      <br />
      <br />
      <SocialIcon
        className="icon"
        url="https://www.linkedin.com/company/quantum-hedge-fund-club/about/"
      />
    </div>
  );
}
