import PropTypes from "prop-types";

export const ButtonFilter = (props) => {
  return (
    <>
      <button
        data-aos="zoom-in"
        className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-slate-700 border-none cursor-pointer"
        onClick={props.click}
      >
        {props.button}
      </button>
    </>
  );
};

ButtonFilter.propTypes = {
  click: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired,
};
