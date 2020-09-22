import React, { useState } from "react";
import { countries } from "./countries";

/**
 * Input field to choose the country
 */
function CountryInput() {
  const [inputValue, setInputValue] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);

  /* -------------------------------- Functions ------------------------------- */
  /**
   * Filters Countries based on typing in input element and sets the countries suggestions
   * @param {event} event input event onChange
   */
  function filterCountries(event) {
    const subString = event.target.value;
    setInputValue(subString);

    if (subString !== "") {
      const regex = new RegExp(`^${subString}`, "i");
      const suggestions = countries.filter((country) => regex.test(country));
      setCountrySuggestions(suggestions);
    } else {
      setCountrySuggestions([]);
    }
  }

  /**
   * Selects the country as input value if user clicks on it in suggestions
   * @param {String} country clicked on country
   */
  function selectCountry(country) {
    setInputValue(country);
    setCountrySuggestions([]);
  }

  /**
   * Renders the current country suggestions list
   */
  function renderSuggestions() {
    return (
      <ul className="list-group">
        {countrySuggestions.map((country, i) => (
          <li
            key={i}
            className="list-group-item"
            onClick={() => selectCountry(country)}
          >
            {country}
          </li>
        ))}
      </ul>
    );
  }

  /* --------------------------------- Return --------------------------------- */
  return (
    <div className="w-50 mx-auto mt-5 text-center">
      <p className="lead">Choose Country:</p>
      <form action="" autoComplete="off">
        <input
          onChange={filterCountries}
          value={inputValue}
          id="country"
          type="text"
          placeholder="Country"
          className="form-control"
        />
      </form>
      <div>{renderSuggestions()}</div>
    </div>
  );
}

export default CountryInput;
