import React from "react";
//import { CgShoppingCart } from 'react-icons/cg'
import { Link } from "react-router-dom";
import Featuredproducts from "../components/featuredproducts";
//import Newarrivals from '../components/newarrivals'
//import banner from '../assets/images/banner/b17.jpg'
//import banner1 from '../assets/images/banner/b10.jpg'
//import blog1 from '../assets/images/blog/blog-1.jpg'
//import blog2 from '../assets/images/blog/blog-2.jpg'
//import blog3 from '../assets/images/blog/blog-3.jpg'
//import blog4 from '../assets/images/blog/blog-4.jpg'
//import Newsletter from '../components/newsletter';
import Hero from "../components/hero";

const home = () => {
  return (
    <div>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
              <span
                className="shadow-lg p-3 mt-3 
           text-white"
              >
                Trade in offer !!
              </span>
              <h1>Super Values Deals</h1>
              <h2>On all products</h2>
              <p className="p-3 n-0">Save more with Apneck</p>
              <Link className="button-link mb-3">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
            <Featuredproducts/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
