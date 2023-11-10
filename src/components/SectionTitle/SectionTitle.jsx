import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-fit mx-auto">
      <p className="text-[#D99904] text-xl italic text-center">
        ---{subHeading}---
      </p>
      <div className="divider"></div>
      <h2 className="text-4xl uppercase text-center ">{heading}</h2>
      <div className="divider"></div>
    </div>
  );
};
SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};
export default SectionTitle;
