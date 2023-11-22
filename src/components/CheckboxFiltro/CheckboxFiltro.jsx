import React from 'react';
import PropTypes from 'prop-types';
import './checkboxFiltro.css';

function CheckboxFiltro({ value, label }) {
  return (
    <div className='checkbox-filtro'>
      <label htmlFor="">
        <input
          type="checkbox"
          id={ value }
          name={ value }
          value={ value }
          checked={ false }
        />
        { label }
      </label>
    </div>
  );
}

CheckboxFiltro.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxFiltro;