import React, { useState } from "react";
import { countries } from "./countries";

/**
 * Input field to choose the country
 */
function CountryInput() {
  const [value, setValue] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);

  /**
   * Filters Countries based on typing in input element and sets the countries suggestions
   * @param {event} event input event onChange
   */
  function filterCountries(event) {
    const subString = event.target.value;
    const regex = new RegExp(`^${subString}`, "i");
    const suggestions = countries.filter((country) => regex.test(country));

    console.log(suggestions);
    setCountrySuggestions(suggestions);
  }

  function renderSuggestions() {
    const list = countrySuggestions.map((country) => {
      return <div>dd</div>;
    });
    return list;
  }

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

export default CountryInput;
