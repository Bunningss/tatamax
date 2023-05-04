import "../Styles/Slider.css";
import slider from "../Images/slider.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider_img_container">
        <img className="slider_img" src={slider} alt="" />
      </div>
    </div>
  );
};

export default Slider;
