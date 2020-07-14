import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../components/title/Title';
import Button from '../../../components/button/Button';
// import * as actions from '../../stores/actions';

const Menu = (props) => {
  return (
    <div className='menu center-items slide-from-left'>
      <Button text={'Create New Landpage'} />
      <Button text={'My Landpages'} />
      <Button text={'Settings'} />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
