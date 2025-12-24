import React, { useContext } from "react";
import { ShopContext } from "../Context/shopContext";

const ErrorFetch = (props) => {
  const { error } = useContext(ShopContext);
  //   console.log("Error: ", error);
  return (
    <>
      {error && (
        <div>
          <p className="text-red-500 text-center">
            Failed to fetch product data!
          </p>
        </div>
      )}
    </>
  );
};

export default ErrorFetch;
