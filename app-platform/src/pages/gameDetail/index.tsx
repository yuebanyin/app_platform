import { memo, useState } from 'react';

import { BgImg } from '@/components';
import ScreenOpt from './screenOpt';
import Screen from './screen';
import NavList from '../home/navList';

const GameDetail = (props: any) => {
  const [screenType, setScreenType] = useState<'screen1' | 'screen2' | 'screen4'>('screen1');

  const screenRight = screenType === 'screen1' ? 'right-[3.25rem]' : `${screenType === 'screen2' ? 'right-[-1.75rem]' : 'right-[1.75rem]'}`;

  const handleChangeScreen = (item?) => {
    switch (item?.state) {
      case 'screen1':
      case 'screen2':
      case 'screen4': {
        setScreenType(item.state);
        break;
      }
      case 'open': {
        console.log('open ');
        break;
      }
      case 'collect': {
        console.log('collect ');
        break;
      }
      default:
        break;
    }
  };
  return (
    <div>
      <BgImg url='/content/gameDetailBg.png' className='pb-90'>
        <NavList />
        <div className='w-fit relative rounded-8'>
          <Screen type={screenType} />
          <ScreenOpt className={`absolute top-0 right-0 ${screenRight}`} handleChangeScreen={handleChangeScreen} />
        </div>
      </BgImg>
    </div>
  );
};

export default memo(GameDetail);
