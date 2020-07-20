import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';
import { icons } from '../../../constant/icons';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu slide-from-left'>
      <Link to='/home/dashboard/new-project'>
        <Button text='New Page' icon={icons.create} classes='bold-text transition' />
      </Link>
      <Link to='/home/dashboard'>
        <Button text={'My Landpages'} classes='bold-text transition' />
      </Link>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(Menu);
