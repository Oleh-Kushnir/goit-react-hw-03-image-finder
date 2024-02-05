import PropTypes from 'prop-types';

import { BtnLoadMore, ButtonWp } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonWp>
      <BtnLoadMore type="button" onClick={onClick}>
        Load More
      </BtnLoadMore>
    </ButtonWp>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
