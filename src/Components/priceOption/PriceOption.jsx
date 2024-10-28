import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const priceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-sky-200 rounded-xl p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-4xl">Price: {price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-3">{name}</h4>
      <div className="p-4 mb-3 flex-grow">
      {
        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
      }
      </div>
      <button className="p-2 rounded-xl bg-blue-600 w-full font-bold hover:bg-blue-400">Buy Now</button>
    </div>
  );
};

priceOption.propTypes = {
  option: PropTypes.object
};
export default priceOption;
