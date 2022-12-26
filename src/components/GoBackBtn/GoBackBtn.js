import { BiArrowBack } from 'react-icons/bi';
import { StyledLink } from './GoBackBtn.styled';
import PropTypes from 'prop-types';

export const GoBackBtn = ({ to }) => {
  return (
    <StyledLink to={to}>
      <BiArrowBack />
      <p>Go back</p>
    </StyledLink>
  );
};

GoBackBtn.propTypes = {
  to: PropTypes.object.isRequired,
};
