import React, { useContext, useState } from "react";
import { countries } from "./countries";
import { Context } from "../Context";

/**
 * Input field to choose the country
 */
function CountryInput(props) {
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const context = useContext(Context);

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
      const suggestions = countries.filter(country =>
        regex.test(country)
      );
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
          <button
            type="submit"
            key={i}
            className="btn btn-secondary"
            onClick={e => handleSubmit(e, country)}
          >
            {country}
          </button>
        ))}
      </ul>
    );
  }

  /**
   * Submits the form, clears the input field and lifts the country to parent Component (Main)
   * @param {event} e submit form event
   */
  function handleSubmit(e, country) {
    e.preventDefault();

    if (countries.includes(country)) {
      setInputValue("");
      setCountrySuggestions([]);
      props.onSubmit(country);
    } else {
      alert(`No ${country}  country yet!`);
    }
  }

  /* --------------------------------- Return --------------------------------- */
  return (
    <>
      <p className="lead">List most popular:</p>
      <form
        action=""
        onSubmit={e => handleSubmit(e, inputValue)}
        autoComplete="off"
      >
        <input
          onChange={filterCountries}
          value={inputValue}
          id="country"
          type="text"
          placeholder="Country"
          className="form-control w-75 mx-auto"
        />
        <div>{renderSuggestions()}</div>
      </form>
    </>
  );
}

export default CountryInput;
