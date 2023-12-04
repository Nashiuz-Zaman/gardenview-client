// react
import PropTypes from "prop-types";
import { useState } from "react";

const FileUploadBtn = ({ children = null, onChange, modifyClasses = "" }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`rounded-defaultLg bg-primary hover:bg-primaryLight transition-all duration-200 text-white px-4 py-2 pointer cursor-pointer ${modifyClasses}`}
    >
      <label className="cursor-pointer">
        <span className="flex w-full items-center justify-center gap-2">
          {!selected && !children && "Upload File"}
          {!selected && children && children}
          {selected && "Selected"}
        </span>
        <input
          onChange={(e) => {
            setSelected(true);
            onChange(e);
          }}
          className="hidden"
          type="file"
          name="fileUpload"
        />
      </label>
    </div>
  );
};

FileUploadBtn.propTypes = {
  children: PropTypes.any,
  onChange: PropTypes.func,
  modifyClasses: PropTypes.string,
};

export default FileUploadBtn;
