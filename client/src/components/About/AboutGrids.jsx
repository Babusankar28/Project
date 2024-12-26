import React from "react";
import videoOne from "../../assets/About/Shopping_img_1.mp4";
import videoTwo from "../../assets/About/Shopping_vdo_2.mp4";
function AboutGrids() {
  return (
    <>
      <div className=" grid md:grid-cols-5 grid-cols-1 my-10">
        <div className="col-span-3  md:order-1 order-2 flex items-center">
          <div className="md:w-2/3 w-full mx-auto px-5 ">
            <h1 className="font-bold text-2xl mb-5">Why choose us ?</h1>
            <p
              className="text-justify font-base text-gray-500"
              style={{ textIndent: "50px" }}
            >
              We are committed to offering an exceptional shopping experience,
              which is why we go above and beyond to meet your needs. Our
              carefully curated selection features only the highest quality
              products, ensuring that you receive the best value for your money.
              We prioritize your satisfaction with fast and reliable shipping,
              and a hassle-free return policy, so you can shop with confidence.
            </p>
          </div>
        </div>
        <div className="col-span-2 p-10 md:order-2 ore flex items-center justify-center py-10">
          <video className="rounded-3xl" loop autoPlay muted>
            <source src={videoOne} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className=" grid md:grid-cols-5 grid-cols-1 my-10">
        <div className="col-span-2 p-10 flex items-center order-1 justify-center py-10">
          <video className="rounded-3xl" autoPlay loop muted>
            <source src={videoTwo} type="video/mp4" />
          </video>
        </div>
        <div className="col-span-3 order-2 flex items-center">
          <div className="md:w-2/3 w-full mx-auto px-5">
            <h1 className="font-bold text-2xl mb-5">Trusted online shopping</h1>
            <p
              className="text-justify font-base text-gray-500"
              style={{ textIndent: "50px" }}
            >
              We understand that trust is key when it comes to online shopping.
              That's why we've made it our mission to provide a safe, secure,
              and reliable shopping experience for all our customers. Our
              website is equipped with the latest encryption technology,
              ensuring your personal and payment details are always protected.
              With a focus on quality, fast shipping, and exceptional customer
              service, we strive to deliver your orders promptly and without
              hassle.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutGrids;
