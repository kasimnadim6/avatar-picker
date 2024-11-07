import { useState } from 'react';
import { AVATARS } from './data';
import { Avatar } from './Avatar';
import useClickOutside from './useClickOutside';

const AvatarContainer = () => {
  const [activeAvatar, setActiveAvatar] = useState(AVATARS[0]);
  const [showAvatarList, setShowAvatarList] = useState(false);
  const [loadingId, setIsLoadingId] = useState(false);

  const ref = useClickOutside(() => setShowAvatarList(false));

  const avatarSelectionHandler = (avatar) => {
    setIsLoadingId(avatar.id);
    setTimeout(() => {
      setIsLoadingId(null);
      setActiveAvatar(avatar);
    }, 1000);
  };

  return (
    <>
      <Avatar
        {...activeAvatar}
        onClick={() => setShowAvatarList((prev) => !prev)}
      />
      {showAvatarList ? (
        <div className="avatar-list" ref={ref}>
          {AVATARS.map((avatar) => (
            <Avatar
              key={avatar.id}
              {...avatar}
              onClick={avatarSelectionHandler}
              loadingId={loadingId}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default AvatarContainer;
