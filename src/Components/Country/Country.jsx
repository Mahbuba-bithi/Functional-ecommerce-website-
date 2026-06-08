//eita vid o theke eivabe api fetch korte paro ...eita shike niboooo 


// import axios from "axios";
// import { useEffect, useState, useTransition } from "react";

// const api = axios.create({
//   baseURL: "https://restcountries.com/v3.1",
// });

// // API থেকে data get করার function
// export const getAllCountries = () => {
//   return api.get("/all?fields=name,capital,population,flags");
// };

// const Country = () => {
//   const [countries, setCountries] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   useEffect(() => {
//     startTransition(async () => {
//       try {
//         const res = await getAllCountries();
//         console.log(res.data);
//         setCountries(res.data);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     });
//   }, []);

//   if (isPending) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div>
//       <h1>Total Countries: {countries.length}</h1>

//       {countries.map((country, index) => (
//         <div key={index}>
//           <h2>{country.name.common}</h2>
//           <p>Capital: {country.capital?.[0]}</p>
//           <p>Population: {country.population}</p>
//           <img
//             src={country.flags.png}
//             alt={country.name.common}
//             width="100"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Country;








//chatgpt
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getAllCountries = () => {
  return api.get("/all?fields=name,capital,population,flags");
};

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getAllCountries();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-950">
        <h1 className="text-3xl font-bold text-white animate-pulse">
          Loading Countries...
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Explore Countries
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Discover information about countries around the world
          </p>

          <div className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded-full text-white font-semibold">
            Total Countries: {countries.length}
          </div>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div
              key={country.name.common}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 border border-slate-800"
            >
              {/* Flag */}
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {country.name.common}
                </h2>

                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="font-semibold text-white">
                      Capital:
                    </span>{" "}
                    {country.capital?.[0] || "N/A"}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Population:
                    </span>{" "}
                    {country.population.toLocaleString()}
                  </p>
                </div>
                

               <NavLink to={`/country/${country.name.common}`} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition text-center block">
                  Learn More
                </NavLink>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Country;