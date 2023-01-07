import React from 'react';

const AddClass = (Component, className) => {
  return props => {
    return (
      <div className="footer">
        <Component />
      </div>
    );
  };
};

export default AddClass;
