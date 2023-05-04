import "../Styles/Toppanel.css";
import mail from "../Images/icons/mail.png";
import facebook from "../Images/icons/facebook.png";
import twitter from "../Images/icons/twitter.png";
import pinterest from "../Images/icons/pinterest.png";
import linkedin from "../Images/icons/linkedin.png";
import dribble from "../Images/icons/dribbble.png";

const Toppanel = () => {
  return (
    <div className="toppanel default_padding">
      <div className="col">
        <a className="mail_container" href="mailto:tatamax@tatamax.com">
          <img src={mail} alt="Email" className="mail_icon" />
          <p>tatamax@tatamax.com</p>
        </a>
      </div>
      <div className="col">
        <a target="_blank" href="" className="panelicon_container">
          <img className="panelicon" src={facebook} alt="" />
        </a>
        <a target="_blank" href="" className="panelicon_container">
          <img className="panelicon" src={twitter} alt="" />
        </a>
        <a target="_blank" href="" className="panelicon_container">
          <img className="panelicon" src={pinterest} alt="" />
        </a>
        <a target="_blank" href="" className="panelicon_container">
          <img className="panelicon" src={linkedin} alt="" />
        </a>
        <a target="_blank" href="" className="panelicon_container">
          <img className="panelicon" src={dribble} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Toppanel;
