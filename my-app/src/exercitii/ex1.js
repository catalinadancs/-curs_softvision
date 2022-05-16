import Produse from "../produse";
const Exercitiu1 = () => {
  return (
    <div className="exercitiu">
      Exercitiu1
      <div>
    <div className="d-flex">
      <div className="exercitiu">
        <Produse
          denumire="Unt"
          pret="5lei"
          categorie="Lactate"
          culoare="BLUE"
        /></div>
        <div className="exercitiu">
        <Produse
          denumire="Piept de pui"
          pret="2.2lei/100g"
          categorie="Carne"
          culoare="PURPLE"
        /></div>
        <div className="exercitiu">
        <Produse 
        denumire="Cafea" 
        culoare="GREEN"
        /></div>
      </div>
      </div>
    </div>

  );
};

export default Exercitiu1;