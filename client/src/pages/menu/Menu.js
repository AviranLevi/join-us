import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className='menu slide-from-left'>
      <Link to='/home/dashboard/new-project'>
        <Button text='Create New Page' classes='bold-text transition new-project-btn' />
      </Link>
      <Link to={`/home/profile/${props.user.id}`}>
        <Button text='My Profile' classes='bold-text transition' />
      </Link>
      <Link to='/home/dashboard'>
        <Button text={'My Projects'} classes='bold-text transition' />
      </Link>
      <Link to='/home/account-settings'>
        <Button text='Account Settings' classes='bold-text transition settings-btn' />
      </Link>
      <Button text='Logout' classes='bold-text transition logout-btn' action={props.logout} />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
