import React, { useState } from "react";
import { CurrencyRupee, TuneOutlined } from "@mui/icons-material";
import { Button, Rating, Slider } from "@mui/material";

function ProductsSideBar() {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(2000);
  return (
    <div className="lg:w-96 w-80 hidden rounded shadow-md md:block  bg-gray-200 p-8">
      <h3 className="text-2xl flex items-center font-bold uppercase">
        <TuneOutlined className="mr-3" />
        Filter By
      </h3>
      <div className="my-3">
        <h4 className="font-bold text-base uppercase mb-1">Availability</h4>
        <div className="ps-4">
          <label htmlFor="allStock" className="block text-gray-600">
            <input
              type="checkbox"
              id="allStock"
              name="allStock"
              className="mr-2"
            />
            All
          </label>
          <label htmlFor="inStock" className="block  text-gray-600">
            <input
              type="checkbox"
              id="inStock"
              name="inStock"
              className="mr-2"
            />
            In Stock
          </label>
        </div>
      </div>
      <div className="my-3">
        <h4 className="font-bold text-base uppercase mb-1">Price</h4>
        <div className="px-4">
          <Slider
            size="small"
            valueLabelDisplay="auto"
            value={[minPrice, maxPrice]}
            min={500}
            max={20000}
            onChange={(e) => {
              const [min, max] = e.target.value;
              if (min !== minPrice && min > 500 && max && 20000) {
                setMinPrice(min);
              }
              if (max !== maxPrice && min > 500 && max && 20000) {
                setMaxPrice(max);
              }
            }}
          />
          <div className="flex justify-center gap-10">
            <div className="flex text-center items-center bg-white">
              <CurrencyRupee sx={{ fontSize: "15px" }} />
              <input
                type="number"
                className="w-20 bg-transparent"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                }}
              />
            </div>
            <div className="flex text-center items-center bg-white">
              <CurrencyRupee sx={{ fontSize: "15px" }} />
              <input
                type="number"
                className="w-20 bg-transparent"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h4 className="font-bold text-base uppercase mb-1">Category</h4>
        <div className="ps-4">
          <label htmlFor="electronics" className="block  text-gray-600">
            <input
              type="checkbox"
              id="electronics"
              name="electronics"
              className="mr-2"
            />
            Electronics
          </label>
          <label htmlFor="accessories" className="block  text-gray-600">
            <input
              type="checkbox"
              id="accessories"
              name="accessories"
              className="mr-2"
            />
            Accessiories
          </label>
          <label htmlFor="phones" className="block  text-gray-600">
            <input type="checkbox" id="phones" name="phones" className="mr-2" />
            Smart phones
          </label>
          <label htmlFor="wathces" className="block text-gray-600">
            <input
              type="checkbox"
              id="wathces"
              name="wathces"
              className="mr-2"
            />
            Smart wathces
          </label>
        </div>
      </div>
      <div className="my-3">
        <h4 className="font-bold text-base uppercase mb-1">Ratings</h4>
        <div className="ps-4">
          <label htmlFor="5star" className=" text-gray-600 flex items-center">
            <input type="checkbox" id="5star" name="5star" className="mr-2" />
            <Rating readOnly value={5} />
          </label>
          <label htmlFor="4star" className=" text-gray-600 flex items-center">
            <input type="checkbox" id="4star" name="4star" className="mr-2" />
            <Rating readOnly value={4} />
          </label>
          <label htmlFor="3star" className=" text-gray-600 flex items-center">
            <input type="checkbox" id="3star" name="3star" className="mr-2" />
            <Rating readOnly value={3} />
          </label>
          <label htmlFor="2star" className=" text-gray-600 flex items-center">
            <input type="checkbox" id="2star" name="2star" className="mr-2" />
            <Rating readOnly value={2} />
          </label>
          <label htmlFor="1star" className=" text-gray-600 flex items-center">
            <input type="checkbox" id="1star" name="1star" className="mr-2" />
            <Rating readOnly value={1} />
          </label>
        </div>
      </div>
      <div className="my-3">
        <h4 className="font-bold text-base uppercase mb-1">Sort By</h4>
        <div className="ps-4">
          <label htmlFor="ratings" className="block  text-gray-600">
            <input type="radio" id="ratings" name="sort" className="mr-2" />
            Ratings
          </label>
          <label htmlFor="high_to_low" className="block  text-gray-600">
            <input type="radio" id="high_to_low" name="sort" className="mr-2" />
            Price high to low
          </label>
          <label htmlFor="low_to_high" className="block  text-gray-600">
            <input type="radio" id="low_to_high" name="sort" className="mr-2" />
            Price low to high
          </label>
        </div>
      </div>
      <Button variant="contained" fullWidth>
        Reset
      </Button>
    </div>
  );
}

export default ProductsSideBar;
