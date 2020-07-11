import React, { useEffect } from 'react';
import { getUserProject } from '../../api/joinUsApi';

const UserLandPage = ({ id }) => {
  const [userProject, setUserProject] = useState({});

  useEffect(() => {
    const project = getUserProject(id);
    setUserProject(project);
  }, [userProject]);

  return <div className='user-land-page center-items'></div>;
};

export default UserLandPage;
