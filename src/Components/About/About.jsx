import React from "react";

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
  {
    id: 6,
    countryName: "Germany",
    capital: "Berlin",
    population: 83200000,
    interestingFact:
      "Germany is known for its engineering, cars, and Oktoberfest festival.",
    flag: "https://flagcdn.com/w320/de.png",
  },
  {
    id: 7,
    countryName: "India",
    capital: "New Delhi",
    population: 1408000000,
    interestingFact:
      "India is the world’s largest democracy and has the Taj Mahal.",
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    id: 8,
    countryName: "United States",
    capital: "Washington, D.C.",
    population: 331900000,
    interestingFact:
      "The USA has 50 states and is home to Hollywood and Silicon Valley.",
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    id: 9,
    countryName: "Bangladesh",
    capital: "Dhaka",
    population: 173000000,
    interestingFact:
      "Bangladesh has the world’s longest natural sea beach, Cox’s Bazar.",
    flag: "https://flagcdn.com/w320/bd.png",
  },
  {
    id: 10,
    countryName: "Egypt",
    capital: "Cairo",
    population: 104000000,
    interestingFact:
      "Egypt is famous for the ancient pyramids and the Nile River.",
    flag: "https://flagcdn.com/w320/eg.png",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 lg:px-10 py-8 sm:py-10">

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10">
        🌍 Interesting Facts About Countries
      </h1>

      {/* Grid */}
      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <div
            key={country.id}
            className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-4 sm:p-5 border border-gray-800"
          >
            {/* Flag */}
            <img
              src={country.flag}
              alt={country.countryName}
              className="w-full h-36 sm:h-40 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
            />

            {/* Country Name */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-blue-400">
              {country.countryName}
            </h2>

            {/* Info */}
            <p className="text-xs sm:text-sm text-gray-300 mb-1">
              <span className="font-semibold text-white">Capital:</span>{" "}
              {country.capital}
            </p>

            <p className="text-xs sm:text-sm text-gray-300 mb-1">
              <span className="font-semibold text-white">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>

            <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">
              {country.interestingFact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;