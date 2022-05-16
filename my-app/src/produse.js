import PropTypes from "prop-types";
const Produse = (props) => {
  return (
    <div>
      <div>Denumire: {props.denumire}</div>
      <div>Pret: {props.pret}</div>
      <div style={{ color: props.culoare }}>Categorie: {props.categorie}</div>
    </div>
  );
};
Produse.propTypes = {
  categorie: PropTypes.string,
  denumire: PropTypes.string,
  pret: PropTypes.string,
};
Produse.defaultProps = {
  denumire: "Denumire inexistenta",
  pret: "Pret inexistent",
  categorie: "Categorie inexistenta",
  culoare: "",
};
export default Produse;