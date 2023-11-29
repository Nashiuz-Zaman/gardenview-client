// react
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PaginationButtons = ({ pageCount, curPage, setCurPage }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    if (pageCount) {
      const buttonsArr = [];

      for (let i = 1; i <= pageCount; i++) {
        const button = { value: i };
        buttonsArr.push(button);
      }
      setButtons(buttonsArr);
    }
  }, [pageCount, setButtons]);

  return (
    <div className="flex items-center gap-2 justify-center">
      {curPage > 1 && (
        <button
          title={`Go to page ${curPage - 1}`}
          className="text-lg w-max rounded-full flex justify-center items-center hover:text-primary transition-all duration-150 mr-3"
          onClick={() => {
            setCurPage((prev) => prev - 1);
          }}
        >
          Prev
        </button>
      )}
      {buttons.length > 0 &&
        buttons.map((button) => {
          return (
            <button
              title={`Go to page ${button.value}`}
              className={`text-white text-lg min-w-[2rem] aspect-square rounded-full flex justify-center items-center transition-all duration-200 ${
                button.value === curPage
                  ? "bg-primary"
                  : "bg-black hover:bg-primary"
              }`}
              key={button.value}
              onClick={() => {
                setCurPage(button.value);
              }}
            >
              {button.value}
            </button>
          );
        })}

      {curPage !== pageCount && (
        <button
          title={`Go to page ${curPage + 1}`}
          className="text-lg w-max rounded-full flex justify-center items-center hover:text-primary transition-all duration-150 ml-3"
          onClick={() => {
            setCurPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

PaginationButtons.propTypes = {
  pageCount: PropTypes.number,
  setCurPage: PropTypes.func,
  curPage: PropTypes.number,
};

export default PaginationButtons;
