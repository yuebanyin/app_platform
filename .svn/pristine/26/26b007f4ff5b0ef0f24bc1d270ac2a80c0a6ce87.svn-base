import { memo } from 'react';
import { Button, Img } from '@/components';
import avatarSrc from '@/assets/image/common/avatar.png';
// import purse from '@/assets/image/black/homeMenu/purse.png';
// import history from '@/assets/image/black/homeMenu/history.png';

const showAction = [
  {
    id: 1,
    text: 'Purse',
    src: '/homeMenu/purse.png',
  },
  {
    id: 2,
    text: 'Purse',
    src: '/homeMenu/history.png',
  },
];

const menuList = [
  {
    id: 1,
    text: 'All Games',
    src: '/homeMenu/history.png',
  },
  {
    id: 2,
    text: 'Tournament',
    src: '/homeMenu/history.png',
  },
  {
    id: 3,
    text: 'Real Person',
    src: '/homeMenu/history.png',
  },
  {
    id: 4,
    text: 'Sports',
    src: '/homeMenu/history.png',
  },
  {
    id: 5,
    text: 'Slots',
    src: '/homeMenu/history.png',
  },
  {
    id: 6,
    text: 'Board Game',
    src: '/homeMenu/history.png',
  },
  {
    id: 7,
    text: 'Racehorse',
    src: '/homeMenu/history.png',
  },
  {
    id: 8,
    text: 'Fishing Joy',
    src: '/homeMenu/history.png',
  },
  {
    id: 9,
    text: 'E-Sports',
    src: '/homeMenu/history.png',
  },
];

function HeadLeft() {
  return (
    <div className='w-230 bg-menuBg pt-18'>
      <Img src='/logo.png' className='mx-34 h-44 mb-40' alt='logo' />
      <Img src={avatarSrc} className='w-130 mx-50' isNoTheme alt='avatar' />
      <div className='my-24'>
        <Button size='small' className='m-auto mb-20 text-white bg-orange'>
          LOG IN
        </Button>
        <Button size='small' className='mx-auto text-white bg-signIn border-2 border-solid border-signBNormal'>
          SIGN IN
        </Button>
      </div>
      <div className='px-14 flex justify-between mb-40'>
        {showAction.map((item) => (
          <div className='rounded-10 px-20 py-10 bg-menuTwo ' key={item.id}>
            <Img className='w-48 h-48' src={item.src} alt={item.text} />
            <div className='text-primary text-center'>{item.text}</div>
          </div>
        ))}
      </div>

      <div>
        {menuList.map((item) => (
          <div className={`flex flex-col justify-center items-center pb-24 rounded-16 ${item.id === 1 ? 'bg-menuActive text-white' : ''}`} key={item.id}>
            <Img className='w-48 h-48' src={item.src} alt={item.text} />
            <div className='text-center text-20'>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(HeadLeft);
