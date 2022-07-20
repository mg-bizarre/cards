import ProfileDesc from '../general/profileDesc/ProfileDesc';
import style from './Profile.module.css';

const Profile = ({ profile }) => {
  const createMarkup = () => {
    return { __html: profile.description };
  };

  return (
    <main className={style.profile}>
      <div className={style.imgBlock}>
        <img className={style.img} src={profile.image} alt={`${profile.first_name} ${profile.last_name}'s profile`} />
      </div>
      <div className={style.textBlock}>
        <div className={style.description}>
          <ProfileDesc person={profile} />
        </div>
        <div className={style.textpost} dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </main>
  );
};

export default Profile;
