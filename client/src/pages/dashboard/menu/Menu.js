import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../stores/actions/';
import Button from '../../../components/button/Button';
import { icons } from '../../../constant/icons';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className='menu slide-from-left'>
      <Link to='/home/dashboard/new-project'>
        <Button text='New Page' icon={icons.create} classes='bold-text transition' />
      </Link>
      <Link to={`/home/profile/${props.user.id}`}>
        <Button text='My Profile' classes='bold-text transition' />
      </Link>
      <Link to='/home/dashboard'>
        <Button text={'My Projects'} classes='bold-text transition' />
      </Link>
      <Link to='/home/dashboard/settings'>
        <Button text='Acount Settings' icon={icons.settings} classes='bold-text transition settings-btn' />
      </Link>
      <Button text='Logout' classes='bold-text transition logout-btn' />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
