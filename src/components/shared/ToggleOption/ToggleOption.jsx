// react
import { PropTypes } from "prop-types";

const ToggleOption = ({ options, setState }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setState(e.target.value);
        }}
      >
        {options &&
          options.map((option) => {
            const { text, value, id } = option;
            return (
              <option key={id} value={value}>
                {text}
              </option>
            );
          })}
      </select>
    </div>
  );
};

ToggleOption.propTypes = {
  options: PropTypes.array,
  setState: PropTypes.func,
};

export default ToggleOption;
