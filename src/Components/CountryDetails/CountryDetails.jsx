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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndviData } from "../../api/postApi";

const CountryDetails = () => {
  const { id } = useParams();

  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await getCountryIndviData(id);
        setCountry(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-950">
        <h1 className="text-3xl text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 flex justify-center items-center">
      {country.map((currCountry) => {
        const {
          flags,
          name,
          capital,
          population,
          region,
          subregion,
          languages,
          currencies,
        } = currCountry;

        return (
          <div
            key={name.common}
            className="bg-slate-900 p-8 rounded-xl text-white max-w-md"
          >
            <img
              src={flags.png}
              alt={name.common}
              className="w-full h-52 object-cover rounded-lg"
            />

            <h1 className="text-3xl font-bold mt-4">{name.common}</h1>

            <p>Capital: {capital?.[0]}</p>
            <p>Population: {population.toLocaleString()}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>

            <p>
              Languages: {Object.values(languages || {}).join(", ")}
            </p>

            <p>
              Currency:{" "}
              {Object.values(currencies || {})
                .map((curr) => curr.name)
                .join(", ")}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default CountryDetails;