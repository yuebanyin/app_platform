import { CloseOutlined } from '@ant-design/icons';
import { memo, useCallback, useState } from 'react';
import { BgImg } from '@/components';
import { useNavigation } from '@/hooks';

interface ScreenOptProps {
  className?: string;
  handleChangeScreen?: Function;
}

const operateList = [
  {
    id: '1',
    state: 'open',
    url: '/content/open.png',
  },
  {
    id: '2',
    state: 'screen1',
    url: '/content/screen1.png',
  },
  {
    id: '3',
    state: 'screen2',
    url: '/content/screen2.png',
  },
  {
    id: '4',
    state: 'screen4',
    url: '/content/screen4.png',
  },
  {
    id: '5',
    state: 'collect',
    url: '/content/collect.png',
  },
];
const ScreenOpt = (props: ScreenOptProps) => {
  const { className, handleChangeScreen } = props;
  const navigate = useNavigation();

  const [activeIcon, setActiveIcon] = useState({ screen: 'screen1', collect: null });

  const handleClose = () => {
    navigate('/');
  };

  const handleClick = (item) => {
    handleChangeScreen(item);
    if (item?.state === 'collect') {
      setActiveIcon({ ...activeIcon, collect: item.state });
    } else if (item?.state.includes('screen')) {
      setActiveIcon({ ...activeIcon, screen: item.state });
    }
  };

  const iconCls = useCallback(
    (item?) => {
      const res = item.state === activeIcon.collect || item.state === activeIcon.screen ? 'bg-center' : 'hover:bg-right active:bg-center';
      return res;
    },
    [activeIcon.collect, activeIcon.screen]
  );
  return (
    <div className={`w-52 p-6 bg-conBg text-center ${className}`}>
      <CloseOutlined className='text-24 text-white my-10' onClick={handleClose} />
      {operateList.map((item) => (
        <BgImg
          url={item.url}
          key={item.id}
          className={`w-40 h-40 mt-6 ${iconCls(item)}`}
          onClick={() => {
            handleClick(item);
          }}
        />
      ))}
    </div>
  );
};
export default memo(ScreenOpt);
