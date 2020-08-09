import React from 'react';
import Title from '../title/Title';
import Icon from '../icon/icon';
import { icons } from '../../constant/icons';
import Button from '../button/Button';

const Toast = ({ message = '', classes = '', closeAction, agreeAction }) => (
  <div className={`${classes} toast center-items fade-in`}>
    <Icon icon={icons.close} action={closeAction} classes='toast-close-btn transition' />
    <Title text={message} classes='bold-text close-error' />
    <div className='toast-decision-btns'>
      <Button text={`Yes I'm sure`} action={agreeAction} classes='accept-btn transition' />
      <Button text={'Cancel'} action={closeAction} classes='cancel-btn transition' />
    </div>
  </div>
);

export default Toast;
