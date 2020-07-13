import React from 'react';

function Icon({ icon, classes = '', action, style = {} }) {
  return (
    <div style={style} onClick={action} className={`${classes} icon`}>
      {icon}
    </div>
  );
}

export default Icon;
