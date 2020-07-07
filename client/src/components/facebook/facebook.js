import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import { facebook } from '../../config';

const Facebook = (props) => (
  <FacebookLogin
    appId={facebook.appId}
    autoLoad={false}
    fields='name,email,picture'
    cssClass='facebook-btn slide-from-bottom'
    textButton=''
    callback={(res) => props.facebookLogin(res)}
    icon='fab fa-facebook'
  />
);

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  facebookLogin: (res) => dispatch(actions.facebookLogin(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
