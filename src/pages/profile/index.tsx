import { memo } from 'react';
import { Img } from '@/components';
import avatarSrc from '@/assets/image/common/avatar.png';

const Profile = () => (
  <div>
    <div>
      <Img src={avatarSrc} className='w-110 mx-50' isNoTheme alt='avatar' />
      <div>
        <div>LEXCION</div>
      </div>
    </div>
  </div>
);

export default memo(Profile);
