// react
import PropTypes from "prop-types";

const ListOfTextUnordered = ({ textArray, modifyClasses = "" }) => {
  return (
    <ul
      className={`text-sm lg:text-base 2xl:text-xl leading-7 lg:leading-9 ${modifyClasses}`}
    >
      {textArray &&
        textArray.map((feature, i) => {
          return (
            <li key={i} className="flex items-center gap-3">
              <span className="block w-1 md:w-[0.5rem] rounded-full aspect-square bg-primaryLight"></span>
              <p className="text-textMediumLight font-medium">{feature}</p>
            </li>
          );
        })}
    </ul>
  );
};

ListOfTextUnordered.propTypes = {
  textArray: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default ListOfTextUnordered;
