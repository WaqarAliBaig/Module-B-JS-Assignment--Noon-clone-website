import dealCard_1 from "../assets/mega-deal-1.jpg";
import dealCard_2 from "../assets/mega-deal-2.jpg";
import dealCard_3 from "../assets/mega-deal-3.jpg";
import dealCard_4 from "../assets/mega-deal-4.jpg";

const Deal_Cards = () => {
  return (
    <div className="card" style="width: 18rem;">
      <img className="card-img-top" src={dealCard_1} />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <h5>499</h5>
        <h4>433</h4>
      </div>
    </div>
  );
};

export default Deal_Cards;
