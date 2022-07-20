import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, setCurrentProfile } from '../../redux/postSlice';
import { useLocation } from 'react-router-dom';
import Profile from './Profile';

const ProfileContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentProfile, status } = useSelector((state) => state.post);
  const id = location.pathname.substring(9);

  useEffect(() => {
    dispatch(setCurrentProfile(id));
  }, [id, dispatch]);

  useEffect(() => {
    const oneday = 60 * 60 * 24 * 1000;
    const today = Date.now();
    if (!currentProfile || today - oneday > currentProfile.fetchedDate) {
      dispatch(getUserProfile(id));
    }
  }, [currentProfile, id, dispatch]);

  if (currentProfile) {
    return <Profile profile={currentProfile.data} />;
  } else if (status === 'failed') {
    return <div>Error</div>;
  }
};

export default ProfileContainer;
