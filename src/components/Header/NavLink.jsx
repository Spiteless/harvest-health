import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@material-ui/core';

export default function NavLink({ to, text, className }) {
  return (
    <Link 
      
    to={to} component={GatsbyLink} className={className}>
      {text}
    </Link>
  );
}
