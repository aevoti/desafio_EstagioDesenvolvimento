import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import getWSData from "../services/weatherstack";
import removeAccents from "remove-accents";
import { MdAdd } from "react-icons/md";

import "../styles/components/forminput.css";

import "react-toastify/dist/ReactToastify.css";
import "../styles/toast.css";

function FormInput({ addLocation }) {
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formattedQuery = formatQuery(query);

    const newLocation = (await getWSData([formattedQuery]))[0];
    // verifica se o retorno não é undefined
    if (newLocation) {
      const locationAdded = await axios
        .post(`location?name=${formattedQuery}`)
        .catch((err) => {
          toast(err.response.data.message);
        });
      // verifica se o local foi adicionado no banco de dados
      if (locationAdded) {
        addLocation(newLocation);
      }
    }

    setQuery("");
  }

  function formatQuery(query) {
    const queryWithoutAccents = removeAccents(query);
    const queryLowerCased = queryWithoutAccents.toLowerCase();
    const queryCapitalized = queryLowerCased.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );

    return queryCapitalized;
  }

  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar pauseOnHover limit={1} />
      <form className="form form-input">
        <input
          className="input"
          type="text"
          placeholder="Location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="add-button" onClick={handleSubmit}>
          <MdAdd size={16} color="#4F4F4F" />
        </button>
      </form>
    </>
  );
}

export default FormInput;
