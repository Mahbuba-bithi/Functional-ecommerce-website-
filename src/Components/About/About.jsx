import React from "react";
import { Link } from "react-router-dom";

const countries = [
  {
    id: 1,
    countryName: "Australia",
    capital: "Canberra",
    population: 25687041,
    interestingFact:
      "Australia is home to the Great Barrier Reef, the largest coral reef system in the world.",
    flag: "https://flagcdn.com/w320/au.png",
  },
  {
    id: 2,
    countryName: "Brazil",
    capital: "Brasilia",
    population: 213993437,
    interestingFact:
      "Brazil is home to the Amazon Rainforest, the largest tropical rainforest in the world.",
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    id: 3,
    countryName: "France",
    capital: "Paris",
    population: 67407241,
    interestingFact:
      "The Eiffel Tower in Paris was once the tallest man-made structure in the world.",
    flag: "https://flagcdn.com/w320/fr.png",
  },
  {
    id: 4,
    countryName: "Japan",
    capital: "Tokyo",
    population: 125800000,
    interestingFact:
      "Japan has over 6,800 islands and is famous for cherry blossoms and technology.",
    flag: "https://flagcdn.com/w320/jp.png",
  },
  {
    id: 5,
    countryName: "Canada",
    capital: "Ottawa",
    population: 38929902,
    interestingFact: "Canada has the longest coastline in the world.",
    flag: "https://flagcdn.com/w320/ca.png",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
        🌍 Interesting Facts About Countries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) =>
          country.id === 1 ? (
            <Link key={country.id} to="/australia">
              <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg p-5 hover:scale-105 transition duration-300 cursor-pointer h-full">
                <img
                  src={country.flag}
                  alt={country.countryName}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {country.countryName}
                </h2>

                <p className="text-gray-300">
                  <span className="font-semibold text-white">Capital:</span>{" "}
                  {country.capital}
                </p>

                <p className="text-gray-300 mt-1">
                  <span className="font-semibold text-white">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>

                <p className="text-gray-400 mt-3">
                  {country.interestingFact}
                </p>
              </div>
            </Link>
          ) : (
            <div
              key={country.id}
              className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg p-5 h-full"
            >
              <img
                src={country.flag}
                alt={country.countryName}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                {country.countryName}
              </h2>

              <p className="text-gray-300">
                <span className="font-semibold text-white">Capital:</span>{" "}
                {country.capital}
              </p>

              <p className="text-gray-300 mt-1">
                <span className="font-semibold text-white">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>

              <p className="text-gray-400 mt-3">
                {country.interestingFact}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default About;