import React, { useState } from "react";
const Facture = () => {
  const [fact, setFact] = useState({
    codeFact: 1,
    dateFact: "12/12/2024",
    mtFact: 500,
  });
  const handleChange = () => {
    setFact({ ...fact, codeFact: 2, mtFact: 200 });
  };
  return (
    <>
      <div>
        <h1>Code facture : {fact.codeFact}</h1>
        <h2>date facture : {fact.dateFact}</h2>
        <h3>montant facture : {fact.mtFact}</h3>
      </div>
      <button className="btn btn-primary" onClick={() => handleChange()}>
        Modifier
      </button>
    </>
  );
};

export default Facture;
