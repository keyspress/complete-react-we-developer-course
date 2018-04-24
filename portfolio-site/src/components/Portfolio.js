import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = () => (
  <div>
    <h2>This is some stuff I've done.</h2>
    <Link to='/portfolio/1'>Portfolio Item 1</Link>
    <Link to='/portfolio/2'>Portfolio Item 2</Link>
  </div>
);

export default Portfolio;