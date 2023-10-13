import { memo } from 'react';
import { BgImg, Button, Options } from '@/components';

interface NavListProps {
  className?: string;
  showHome?: boolean;
}

const navList = [
  {
    id: '1',
    state: 'open',
    url: '/content/mesage.png',
  },
  {
    id: '2',
    state: 'screen1',
    url: '/content/server.png',
  },
  {
    id: '3',
    state: 'screen2',
    url: '/content/gift.png',
  },
  {
    id: '4',
    state: 'screen4',
    url: '/content/transf.png',
  },
];
const NavList = (props: NavListProps) => {
  const { className, showHome = true } = props;

  const handleClick = (item) => {
    console.log('nav click this', className);
  };

  return (
    <div className='flex justify-end mb-34 pt-24 mr-24'>
      {showHome && (
        <Button size='mini' className='mr-10 text-white bg-signIn border-2 border-solid border-signBNormal'>
          Home
        </Button>
      )}
      {navList.map((item) => (
        <BgImg
          url={item.url}
          key={item.id}
          className='w-40 h-40 mr-10 hover:bg-center'
          onClick={() => {
            handleClick(item);
          }}
        />
      ))}
      <Options className='h-40 w-120' />
    </div>
  );
};

export default memo(NavList);
