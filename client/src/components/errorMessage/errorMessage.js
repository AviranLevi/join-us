import React from 'react';

const ErrorMessage = ({ message = '', classes = '' }) => <span className={`${classes} error-message`}>{message}</span>;

export default ErrorMessage;
