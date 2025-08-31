// AuthUserIcons.tsx
import { useEffect } from 'react'; // Add this import
import { useUser } from '@/features/userPanel/user/useUser';
import { useAuthStore } from '@/store/authStore';
import { Link } from 'react-router-dom';
import SpinnerMini from './SpinnerMini';

function AuthUserIcons() {
  const { isLoggedIn, checkOwner, isOwner } = useAuthStore();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (isLoggedIn && isOwner === null) {
      checkOwner();
    }
  }, [isLoggedIn, isOwner, checkOwner]);

  if (isLoading || (isLoggedIn && isOwner === null)) return <SpinnerMini />;
  //@ts-expect-error error for the text

  const { username, avatar } = user || {};
  console.log(isOwner);
  return (
    <div className="flex flex-row gap-5">
      {isOwner ? (
        <Link to="/admin">
          <div className="flex flex-row items-center justify-center gap-5">
            <h3 className="text-lg font-semibold text-black">hello {username} </h3>
            <div className="w-10">
              <img
                className="w-full rounded-full"
                src={avatar || '/img/blank-profile.webp'}
                alt=""
              />
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/user">
          <div className="flex flex-row items-center justify-center gap-5">
            <h3 className="text-lg font-semibold text-black">
              <span className="text-darkBule text-lg font-semibold"> خوش امدی</span>
              {username}
            </h3>
            <div className="w-10">
              <img className="w-full rounded-full" src="/img/amirlogo.png" alt="" />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default AuthUserIcons;
