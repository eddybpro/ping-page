import { useState } from "react";
import Logo from "../assets/logo.svg";

function Header() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9~!$%^&*{}|_+\-.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!emailRegex.test(email)) {
      event.preventDefault();
      setError((err) => (err == false ? (err = true) : err));
    }
  };
  return (
    <header>
      <a href="#" className="Logo">
        <img src={Logo} alt="ping" />
      </a>
      <h1 className="HeaderTitle">
        We are launching <span>soon!</span>
      </h1>
      <p className="HeaderPara">Subscribe and get notified</p>
      <form action="#" method="POST" noValidate onSubmit={handleSubmit}>
        <label htmlFor="email" className={error ? "emailError" : ""}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address..."
            onChange={handleChange}
            value={email}
          />
        </label>
        <button type="submit" className="FormBtn">
          Notify Me
        </button>
      </form>
    </header>
  );
}
export default Header;
