import React from 'react';

function Icon({ icon, classes = '', action, style = {} }) {
  return (
    <div style={style} onClick={action} className={`icon ${classes}`}>
      {icon}
    </div>
  );
}

export default Icon;
