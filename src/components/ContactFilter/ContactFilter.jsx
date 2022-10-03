import { FilterContainer, FilterText, FilterInput } from './ContactFilter.styled';
import PropTypes from 'prop-types';

const ContactFilter = ({ onChange }) => {
  return (
      <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          onChange={onChange}
        />
      </FilterContainer>
  );
};

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;