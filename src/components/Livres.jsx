import { useState } from "react";

const Livres = () => {
  const [livre, setLivre] = useState({
    isbn: "12542145",
    titre: "Symfony",
    auteur: "Romain Rissouan",
    annedition: 2021,
    prix: 33,
    couverture:
      "https://res.cloudinary.com/esps/image/upload/v1696624892/bibliotheque/9782409031588_internet_w290_mf3rdm.jpg",
  });
  const [livres, setLivres] = useState([
    {
      isbn: "42368756",
      titre: "ReactJS",
      auteur: "Romain Rissouan",
      annedition: 2021,
      prix: 33,
      couverture: "https://m.media-amazon.com/images/I/61vg+0-1yGL._SY466_.jpg",
    },
    {
      isbn: "123698745",
      titre: "Les VPNS",
      auteur: "Stephan@gmail.com",
      annedition: 2020,
      prix: 55,
      couverture:
        "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-7741-6",
    },
    {
      isbn: "54894",
      titre: "Techniques de Référencement Web",
      auteur: "Patrick Wampe",
      annedition: 2020,
      prix: 55,

      couverture:
        "https://blog.internet-formation.fr/wp-content/themes/blogIF/img/Techniques-referencement-web-audit-suivi-seo-5e-edition.jpg",
    },
    {
      isbn: "5464sf",
      titre: "VueJS",
      auteur: "Alexandra Martin",
      annedition: 2020,
      prix: 20,

      couverture: "https://m.media-amazon.com/images/I/718QqTspltL._SY466_.jpg",
    },
    {
      isbn: "65465445",
      titre: "Laravel",
      auteur: "Eric Sarrion",
      annedition: 2020,
      prix: 50,
      couverture:
        "https://images.booksense.com/images/132/218/9798554218132.jpg",
    },
  ]);
  const addlivre = () => {
    setLivres([livre, ...livres]);
  };

  const handleDelete = (isbn) => {
    setLivres(livres.filter((liv) => liv.isbn !== isbn));
  };
  return (
    <div>
      <button className="btn btn-success" onClick={() => addlivre()}>
        Ajouter
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
            <th>Couverture</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((l, index) => (
            <tr key={index}>
              <td>{l.isbn}</td>
              <td>{l.titre}</td>
              <td>{l.auteur}</td>
              <td>{l.prix}</td>
              <td>
                <img src={l.couverture} width={80} height={80} />
              </td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(l.isbn)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Livres;
