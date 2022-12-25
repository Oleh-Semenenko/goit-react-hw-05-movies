import { StyledLink } from './GoBackBtn.styled';
import PropTypes from 'prop-types';

export const GoBackBtn = ({ to }) => {
  return <StyledLink to={to}>Go back</StyledLink>;
};

GoBackBtn.propTypes = {
  to: PropTypes.object.isRequired
};
