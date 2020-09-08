import PropTypes from "prop-types";

export const fishType = PropTypes.shape({
  image: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
});
