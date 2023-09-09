import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { IconContext } from "react-icons";
import ChartImg from "../assets/illustration-dashboard.png";

function Chart() {
  return (
    <main>
      <div className="Chart">
        <img src={ChartImg} alt="data" />
      </div>
      <div className="SocialIconsBox">
        <IconContext.Provider value={{ className: "SocialIconBox-Icon" }}>
          <div>
            <FaFacebookF />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "SocialIconBox-Icon" }}>
          <div>
            <FaTwitter />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "SocialIconBox-Icon" }}>
          <div>
            <FaInstagram />
          </div>
        </IconContext.Provider>
      </div>
      <p className="Copyright">&copy; Copyright Ping. All rights reserved.</p>
    </main>
  );
}
export default Chart;
