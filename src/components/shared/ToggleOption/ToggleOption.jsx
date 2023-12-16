// react
import { PropTypes } from "prop-types";

const ToggleOption = ({
  labelText,
  options,
  state = "all",
  setState,
  modifyClasses = "",
}) => {
  const labelClasses =
    "block mb-2 text-base lg:text-lg 2xl:text-2xl font-semibold";

  return (
    <div
      className={`flex flex-col xsm:flex-row justify-center md:justify-start items-center gap-4 ${modifyClasses}`}
    >
      <label className={labelClasses}>{labelText}</label>
      <select
        className="block max-w-[15rem] w-full text-sm lg:text-lg rounded-default p-[5px] md:p-[8.5px] lg:p-[10px] border border-lightBorder space-y-10"
        defaultValue={state}
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
  labelText: PropTypes.string,
  options: PropTypes.array,
  state: PropTypes.string,
  setState: PropTypes.func,
  modifyClasses: PropTypes.string,
};

export default ToggleOption;
