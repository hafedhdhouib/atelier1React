import React, { useState } from "react";
import Facture from "./Facture";

const Client = () => {
  const [nom, setNom] = useState("IIT");
  const [code, setcode] = useState(10);
  const [ville, setVille] = useState("Sfax");
  const [adresse, setAdresse] = useState("route Tunis");
  const handleChange = () => {
    setAdresse("Ghazela");
    setVille("ariana");
    setcode(200);
    setNom("Esprit");
  };
  return (
    <div>
      <Facture />
      <h1>code client : {code}</h1>
      <h1>le nom est :{nom}</h1>
      <h1>la ville est :{ville}</h1>
      <h1>adresse est {adresse}</h1>
      <button className="btn btn-success" onClick={() => handleChange()}>
        Modifier
      </button>
    </div>
  );
};

export default Client;
