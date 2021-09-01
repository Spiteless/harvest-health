import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@material-ui/core';

export default function WrappedLink({ to, text, className, children }) {
  return (
    <Link to={to} component={GatsbyLink} className={className}>
      {children? children : text}
    </Link>
  );
}
