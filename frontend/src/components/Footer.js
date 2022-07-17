import React from "react";
import { useSelector } from "react-redux";
import ChatBox from "./ChatBox";

const footer = [
  {
    title: "Get to Know Us",
    list: ["Career", "Blog", "About ShopX"],
  },

  {
    title: "Make Money With Us",
    list: ["Sell on ShopX", "Ship with Us", "Become an Affiliate", "Advertise with Us"],
  },
  {
    title: "Payment",
    list: ["PayPal", "ShopXPay", "AmazonPay", "ShopXPOS"],
  },
  {
    title: "Let Us Help You",
    list: ["Covid 19", "Return & Refund", "Replacement", "Customer care"],
  },
  {
    title: "Download App",
    list: ["Android", "iPhone", "Windows"],
  },
];

function Footer() {
  const List = ({ list }) => {
    return list ? list.map((l, i) => <li key={i}>{l}</li>) : null;
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div className="footer-body">
      <div className="footer-wrap max-width">
        <div className="footer-one">
          {footer.map((c) => (
            <>
            <div className="footer-options">
              <h1>{c.title}</h1>
              <ul>
                <List list={c.list} />
              </ul>
            </div>
          </>
          ))}
          <div className="chabot">
            <footer className="row center">
              {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
            </footer>
          </div>
        </div>
        <div className="footer-newsletter">
          <h2>Subscribe to our Newsletter</h2>
          <div className="newsletter">
            <input type='text' placeholder="email adress"></input>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-copyright">Created by Ifeanyi Victor. All right reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
