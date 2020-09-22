import React, { useState } from "react";
import { countries } from "./countries";

/**
 * Input field to choose the country
 */
function CountryInput() {
  /* -------------------------------------------------------------------------- */
  /*                                   States                                   */
  /* -------------------------------------------------------------------------- */
  const [value, setValue] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  /**
   * Filters Countries based on typing in input element and sets the countries suggestions
   * @param {event} event input event onChange
   */
  function filterCountries(event) {
    const subString = event.target.value;

    if (subString !== "") {
      const regex = new RegExp(`^${subString}`, "i");
      const suggestions = countries.filter((country) => regex.test(country));
      setCountrySuggestions(suggestions);
    } else {
      setCountrySuggestions([]);
    }
  }

  /**
   * Renders the current country suggestions list
   */
  function renderSuggestions() {
    return (
      <ul className="list-group">
        {countrySuggestions.map((country, i) => (
          <li key={i} className="list-group-item">
            {country}
          </li>
        ))}
      </ul>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                   Return                                   */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="w-50 mx-auto mt-5 text-center">
      <p className="lead">Choose Country:</p>
      <form action="" autoComplete="off">
        <input
          onChange={filterCountries}
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

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export default CountryInput;
