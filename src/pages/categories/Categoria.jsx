import "./categoria.css";

const Categorias = [
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
  {
    primary_name: "Arte",
    secundary: ["Arquitectura", "Danza", "Musica"],
  },
];
const categoria = Categorias.map(categoria => {
  return (
    <div className="category-container">
      <h3>{categoria.primary_name}</h3>

      {categoria.secundary.map(cat => {
        return <li className="sub-category">{cat}</li>;
      })}
    </div>
  );
});
const Catergoria = ({primaryCategory, secundaryCategories}) => {
  return <div className="all-categories">{categoria}</div>;
};

export default Catergoria;
