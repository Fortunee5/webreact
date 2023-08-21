import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Tree Of Life</h1>
          <p>Choose to walk with God</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-whatsapp-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Message</h4>
          <a href="/">The Message</a>
          <a href="/">The Mandate</a>
          <a href="/">The Miracles</a>
          <a href="/">The Message</a>
        </div>
        <div>
          <h4>Prayer</h4>
          <a href="/">The Message</a>
          <a href="/">The Mandate</a>
          <a href="/">The Miracles</a>
          <a href="/">The Message</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">The Message</a>
          <a href="/">The Mandate</a>
          <a href="/">The Miracles</a>
          <a href="/">The Message</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">The Message</a>
          <a href="/">The Mandate</a>
          <a href="/">The Miracles</a>
          <a href="/">The Message</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
