import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../components/title/Title';
import Button from '../../../components/button/Button';
import { icons } from '../../../constant/icons';
import { Link } from 'react-router-dom';
// import * as actions from '../../stores/actions';

const Menu = (props) => {
  return (
    <div className='menu slide-from-left'>
      <Link to='/dashboard/new-project'>
        <Button text='New Page' icon={icons.create} classes='bold-text transition' />
      </Link>
      <Link to='/dashboard'>
        <Button text={'My Landpages'} classes='bold-text transition' />
      </Link>
      {/* <Button text={'Settings'} classes='bold-text transition' /> */}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
