import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div>
      This is thing {props.match.params.id}
    </div>
  );
};

export default PortfolioItem;