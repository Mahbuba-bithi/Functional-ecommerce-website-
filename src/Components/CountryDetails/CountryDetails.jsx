// import { useParams } from "react-router-dom";

// export const CountryDetails = () => {
//   const { id } = useParams(); 
//   console.log(params);

//   return ( 
//     <h1>
//         mahbuba bithi
//     </h1>     
//   );
// };  



import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        Country Details Page
      </h1>

      <p className="text-xl">
        Country ID: {id}
      </p>
    </div>
  );
};

export default CountryDetails;