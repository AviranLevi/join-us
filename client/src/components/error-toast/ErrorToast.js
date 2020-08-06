import React from 'react';
import Title from '../title/Title';
import Icon from '../icon/icon';
import { icons } from '../../constant/icons';

const ErrorToast = ({ message = '', classes = '', action }) => (
  <div className={`${classes} error-toast`}>
    <Icon icon={icons.close} action={action} />
    <Title text={message} classes='bold-text close-error' />
  </div>
);

export default ErrorToast;
