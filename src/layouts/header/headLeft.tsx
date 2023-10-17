import { memo, useCallback, useState } from 'react';
import { BgImg, Img } from '@/components';
import avatarSrc from '@/assets/image/common/avatar.png';
import { Obj } from '@/constants';
import LoginSign from '@/pages/loginSign';
// import purse from '@/assets/image/black/homeMenu/purse.png';
// import history from '@/assets/image/black/homeMenu/history.png';

const showAction = [
  {
    id: 10,
    text: 'Purse',
    src: '/homeMenu/qianbao.png',
  },
  {
    id: 11,
    text: 'Purse',
    src: '/homeMenu/lishi.png',
  },
];

const menuList = [
  {
    id: 1,
    text: 'All Games',
    src: '/homeMenu/All Games.png',
  },
  {
    id: 2,
    text: 'Tournament',
    src: '/homeMenu/Tournament.png',
  },
  {
    id: 3,
    text: 'Real Person',
    src: '/homeMenu/Real Person.png',
  },
  {
    id: 4,
    text: 'Sports',
    src: '/homeMenu/Sports.png',
  },
  {
    id: 5,
    text: 'Slots',
    src: '/homeMenu/Slots.png',
  },
  {
    id: 6,
    text: 'Board Game',
    src: '/homeMenu/Board Game.png',
  },
  {
    id: 7,
    text: 'Racehorse',
    src: '/homeMenu/Racehorse.png',
  },
  {
    id: 8,
    text: 'Fishing Joy',
    src: '/homeMenu/Fishing Joy.png',
  },
  {
    id: 9,
    text: 'E-Sports',
    src: '/homeMenu/E-Sports.png',
  },
];

function HeadLeft() {
  const [activeId, setActiveId] = useState(1);

  const iconCls = useCallback(
    (item?) => {
      const res = item.id === activeId ? 'bg-center' : 'hover:bg-right active:bg-center';
      return res;
    },
    [activeId]
  );

  const handleMenu = (item: Obj) => {
    if (item?.id && item.id !== activeId) {
      setActiveId(item?.id);
    }
  };

  return (
    <div className='w-230 bg-menuBg pt-18'>
      <Img src='/logo.png' className='mx-34 h-44 mb-40' alt='logo' />
      <Img src={avatarSrc} className='w-130 mx-50' isNoTheme alt='avatar' />
      <div className='my-24'>
        <LoginSign />
      </div>

      <div className='px-14 flex justify-between mb-40'>
        {showAction.map((item) => (
          <div
            className='rounded-10 px-20 py-10 bg-menuTwo cursor-pointer'
            key={item.id}
            onClick={() => {
              handleMenu(item);
            }}
          >
            {/* <Img className='w-48 h-48' src={item.src} alt={item.text} /> */}
            <BgImg className={`w-48 h-48 ${iconCls(item)}`} url={item.src} alt={item.text} />
            <div className='text-primary text-center'>{item.text}</div>
          </div>
        ))}
      </div>

      <div className='cursor-pointer'>
        {menuList.map((item) => (
          <div
            className={`flex flex-col justify-center items-center py-18 rounded-16 ${item.id === activeId ? 'bg-menuGradActive text-orange' : 'text-primary'}`}
            key={item.id}
            onClick={() => {
              handleMenu(item);
            }}
          >
            <BgImg className={`w-48 h-48 ${iconCls(item)}`} url={item.src} alt={item.text} />
            <div className='text-center text-20'>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(HeadLeft);
