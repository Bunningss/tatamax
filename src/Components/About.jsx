import "../Styles/About.css";
import phone from "../Images/phone.png";
import ButtonPrimary from "./ButtonPrimary";

const About = () => {
  return (
    <div className="about">
      <h2 className="header about_header">
        Welcome to tatamax web: you demand we develop
      </h2>
      <div className="about_content">
        <div className="col default_padding">
          <h2 className="header about_content_header">introducing tatamax</h2>
          <p className="about_content_text text_regular">
            <span className="bold">
              All products Designed by TATAMAX in United Kingdom
            </span>
            <br />
            Our products are designed in United Kingdom,drawing inspiration from
            forms and elements that express an inspiration and a typically
            european vision. The assembly takes place at installations located
            in the East with an industrial production capable of guaranteeing a
            high level of technology with excellent value for money. <br />{" "}
            <br />
            <span className="bold">
              TATAMAX is a telecom operator which provides affordable and
              easy-to-use telecommunications services to residential and small
              business customers. TATAMAX offers products and services in fixed
              & mobile telephony and on the Internet for the european market.
            </span>
            <br />
            <br />
            TATAMAX Founded by group of marketing expert in 2004, the TATAMAX is
            a global enterprise, headquartered in Singapore, comprising over 10
            independent operating companies. The group operates in more than 40
            countries across 4 continents, with a mission 'To improve the
            quality of life of the communities we serve globally, through
            long-term stakeholder value creation based on Leadership with
            Trust'.Our story begins in 2000, with the production of high
            technology for the consumer electronics and computing products.
          </p>
          <ButtonPrimary text={"brand exclusivity"} />
        </div>
        <div className="col default_padding">
          <img className="about_content_img" src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
