
import React from 'react';
import PropTypes from 'prop-types';
import Link from './link';
import { VisibilityFilters } from '../actions';

const Footer = ({ visibilityFilter, setVisibilityFilter }) => {

  const linkList = [
    [VisibilityFilters.SHOW_ALL, 'All'],
    [VisibilityFilters.SHOW_ACTIVE, 'Actions'],
    [VisibilityFilters.SHOW_COMPLETED, 'Completed']
  ];

  return (
    <div>
      {linkList.map(([myFilter, text]) => (
        <Link
          key={myFilter}
          active={myFilter === visibilityFilter}
          onClick={() => setVisibilityFilter(myFilter)}
        >
          {text}
        </Link>
      ))}
    </div>
  )
};

Footer.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
};

export default Footer;

