import React from 'react';

function Icon({ icon, classes, action }) {
  return (
    <div onClick={action} className={`${classes} icon`}>
      {icon}
    </div>
  );
}

export default Icon;
