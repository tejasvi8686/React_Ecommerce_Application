import React from "react";
//import { CgShoppingCart } from 'react-icons/cg'
import { Link } from "react-router-dom";
import Featuredproducts from "../components/featuredproducts";
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'
//import blog1 from '../assets/images/blog/blog-1.jpg'
//import blog2 from '../assets/images/blog/blog-2.jpg'
//import blog3 from '../assets/images/blog/blog-3.jpg'
//import blog4 from '../assets/images/blog/blog-4.jpg'
//import Newsletter from '../components/newsletter';
import Hero from "../components/hero";

const home = () => {
  return (
    <div>
      <section className="banner mb-3">
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

      <section className="repair-services p-5">
      <div className="container-xxl">
        <div className="row ">
          <div className="repair-details text-center align-items-center">
            <h5 className='mb-3 text-white'>Repair Services</h5>
            <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
            <button className="button-repair">Explore Now</button>
          </div>
        </div>
      </div>
    </section>

    <section className="new-products p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>New Arrivals</h1>
          <p>Your Best Designer Outfits</p>
        </div>
        <Newarrivals />
      </div>
    </div>
  </section>

  <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hot Deals</h5>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Season-In</h5>
                  <h2 className="card-text mb-2">All Weather Attire</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default home;
