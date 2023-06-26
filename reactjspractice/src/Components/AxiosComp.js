import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const AxiosComp = () => {
  const [prod, setProd] = useState([]);
  const url = "https://course-api.com/react-store-products";

  const fetchData = async () => {
    try {
      const response = await axios(url);
      // console.log(response);
      const data = response.data;
      setProd(data);
      // console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(prod);
  return (
    <>
      <div id="main">
        {prod.map((item) => {
          return (
            <div key={item.id} id="prod_section">
              <img id="prod_img" src={item.image} alt="" />
              <h2>{item.name}</h2>
              <h2>{item.price}</h2>
              <h2>{item.shipping}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AxiosComp;
