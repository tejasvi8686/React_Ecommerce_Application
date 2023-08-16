import React from "react";
import { BiPhoneCall } from "react-icons/bi";
//import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../assets/images/apneck.png";
import { HiOutlineInbox } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";


const header = () => {
 
  return (
    <>
      <header className="header-top-strip p-1 px-4 shadow-md">
        <div className="container xxl">
          <div className="row algin-items-center">
            <div className="col-6">
              <p>The trending outfit at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+254708118414">Call us at +1 (234) 567-890</a>
              </div>
              <div>
                <Link>
                  <BiPhoneCall className="fs-3 mx-4" />
                </Link>
                <Link>
                  <AiOutlineMail className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper px-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 m-auto text-center">
              <Link to="/">
              <img src={logo} alt="" className="img-fluid logo" />
              </Link>
            </div>

            <div className="col-3 align-items-center d-flex mt-2">
              <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  All
                </span>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Search Products"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>

            <div className="nav-links col-4 d-flex align-items-center justify-content-between m-auto text-center">
              <Link>Home</Link>
              <Link to={"shop"}>Shop</Link>
              <Link to={"blog"}>Blog</Link>
              <Link to={"about"}>About</Link>
              <Link to={"contact"}>Contact</Link>
            </div>
            <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
              <Link to={"wishlist"} className="d-flex">
                <HiOutlineInbox className="fs-3 mx-2 " />
                <p>Wishlist</p>
              </Link>
              <Link to={"login"}className="d-flex">
                <VscAccount className="fs-3 mx-2 " />
                <p>Account</p>
              </Link>
              <Link to={"cart"} className="d-flex">
                <CgShoppingCart className="fs-3 mx-2 " />
                <p>Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
