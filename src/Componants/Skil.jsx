import PropTypes from "prop-types";

export const Skill = (props) => {
  return (
    <div
      className="text-center hove mx-auto items-center rounded-xl  static_element flex justify-center text-[#EB5700] w-[6rem] h-[5rem] bg-[#141414] shadow hover:rounded-[100%]"
      data-aos="fade-down-left"
    >
      <img src={props.url} alt="Icon skill" />
    </div>
  );
};

Skill.propTypes = {
  url: PropTypes.string.isRequired,
};
