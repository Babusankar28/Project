import React from "react";
import AboutGrids from "../components/About/AboutGrids";
import aboutImage from "../assets/About/2727507.jpg";
function About() {
  return (
    <div className="p-5">
      <div className="container">
        <img
          src={aboutImage}
          alt="e-commerce website"
          className="object-cover md:w-2/3 w-full block mx-auto"
        />
        <h1 className="text-3xl font-bold text-center my-5">About us</h1>
        <p
          className="text-justify text-gray-600 text-base font-medium lg:px-20 px-3"
          style={{ textIndent: "150px" }}
        >
          Welcome to MegaMart, your one-stop online shop where convenience meets
          quality. We are passionate about offering an exceptional shopping
          experience by providing a diverse range of products tailored to meet
          the needs of every customer. Whether you're looking for the latest
          fashion trends, innovative gadgets, home essentials, or unique gifts,
          we have something for everyone. Founded on the principles of trust,
          integrity, and innovation, we aim to redefine the way people shop
          online. Our team is committed to sourcing only the best products,
          ensuring that you receive top-notch quality every time you make a
          purchase. We understand that shopping online should be easy, fast, and
          secure, which is why we've designed our platform to be user-friendly
          and intuitive. At [Your Company Name], customer satisfaction is at the
          heart of everything we do. From browsing our site to receiving your
          order, we make every step of your shopping journey simple and
          enjoyable. Our team works tirelessly to ensure timely shipping and
          responsive customer service to assist you with any questions or
          concerns. We take great pride in offering a personalized experience,
          where every interaction feels special. Whether you're a first-time
          buyer or a returning customer, we are here to provide you with
          top-quality products and support. We value your trust and are
          dedicated to continually improving to serve you better.
        </p>
      </div>
      <hr className="my-5" />
      <AboutGrids />
    </div>
  );
}

export default About;
