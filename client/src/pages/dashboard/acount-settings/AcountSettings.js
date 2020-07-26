import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../components/title/Title';
import * as actions from '../../../stores/actions';
import AcountInput from '../../../components/acount-input/AcountInput';
import Icon from '../../../components/icon/icon';
import { icons } from '../../../constant/icons';
import Button from '../../../components/button/Button';

const AcountSettings = (props) => {
  const { user, features } = props;
  return (
    <div className='acount-settings'>
      <Title text='Acount Settings' classes='bold-text acount-settings-title' />
      <Button icon={icons.edit} classes='edit-profile-btn' action={props.editUserInfo} />

      <div className='acount-info'>
        <AcountInput title='Name' value={user.name} changeAction={props.userName} edit={features.editUser} />
        <AcountInput title='Email' value={user.email} changeAction={props.userEmail} edit={features.editUser} />
      </div>

      <Button text={'Save'} classes='save-profile-btn' disabled={props.editUserInfo} />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  userName: (e) => dispatch(actions.userName(e.target.value)),
  userEmail: (e) => dispatch(actions.userEmail(e.target.value)),
  userPhone: (e) => dispatch(actions.userPhone(e.target.value)),
  editUserInfo: () => dispatch(actions.editUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AcountSettings);
