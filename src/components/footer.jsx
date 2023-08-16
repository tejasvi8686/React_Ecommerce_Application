import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import google from "../assets/images/pay/play.jpg";
import app from "../assets/images/pay/app.jpg";
import pay from '../assets/images/pay/pay.png';
const footer = () => {
  return (
    <footer className="footer p-5">
      <div className="container-xxl">
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-4 d-flex flex-column">
            <h2 className="footer-title mb-3">
              <b>Contact</b>
            </h2>

            <div className="footer-details">
              <div className="mb-3">
                <p>
                  <b>Address:</b> Thika town, Naltex building, 2nd floor
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <b>Phone:</b>
                  <a className="footer-tel" href="tel:+1234567890">
                    Call us at +1 (234) 567-890
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <p>
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <b>Follow the developer</b>
                </p>
              </div>
              <div className="col-5 social-icons mb-3 d-flex justify-content-around ">
                <Link>
                  <AiFillTwitterCircle className="fs-4" />
                </Link>
                <Link>
                  <BsFacebook className="fs-4" />
                </Link>
                <Link>
                  <BsInstagram className="fs-4" />
                </Link>
                <Link>
                  <BsLinkedin className="fs-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
            <h2 className="footer-title mb-3">
              <b>About</b>
            </h2>
            <div className="mb-3">
              {" "}
              <Link to="/about" id="footer-links">
                About Us
              </Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link to="checkout" id="footer-links">
                Delivery
              </Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link id="footer-links">Privacy Policy</Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link id="footer-links">Terms & Conditions</Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link id="footer-links">Fee Policy</Link>{" "}
            </div>
          </div>
          <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
            <h2 className="footer-title mb-3">
              <b>Account</b>
            </h2>
            <div className="mb-3">
              {" "}
              <Link to="/login" id="footer-links">
                Profile
              </Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link to="/cart" id="footer-links">
                View Cart
              </Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link to="/contact" id="footer-links">
                Help
              </Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link id="footer-links">Payments</Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link id="footer-links">My Wishlist</Link>{" "}
            </div>
            <div className="mb-3">
              {" "}
              <Link id="footer-links">Coupons</Link>{" "}
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <h2 className="footer-title mb-3">
              <b>Install App</b>
            </h2>
            <p className="mb-3">
              Available On Google Play Services & App Store
            </p>
            <div className="pay">
              <Link>
                <img src={google} alt="" className="img-fluid p-4 my-3 " />
              </Link>
              <Link>
                <img src={app} alt="" className="img-fluid p-4 my-3" />
              </Link>
            </div>
            <p className="mb-3">Payment Method</p>
            <Link className="pay">
              <img src={pay} alt="" className="img-fluid p-3" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-around">
          <div className="col-3">
            <p> &copy; Developed by Eclar Developers 2023</p>
          </div>
          <div className="col-3 d-flex justify-content-between">
            <Link className="text-black">Privacy Policy</Link>
            <Link className="text-black">Terms of use</Link>
            <Link className="text-black">Contact Me</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
