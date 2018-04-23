import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404! - <Link to='/'>Go Home User. You are drunk.</Link>
  </div>
);

export default NotFoundPage;