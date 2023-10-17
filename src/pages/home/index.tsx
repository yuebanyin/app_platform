import { Options, MySwiperComponent } from '@/components';
import rank from '@/assets/image/common/rank.png';
import avatar1 from '@/assets/image/common/avatar/avatar-1.png';
import avatar2 from '@/assets/image/common/avatar/avatar-2.png';
import avatar3 from '@/assets/image/common/avatar/avatar-3.png';
import avatar4 from '@/assets/image/common/avatar/avatar-4.png';
import gys1 from '@/assets/image/common/gameLists/gys1.png';
import gys2 from '@/assets/image/common/gameLists/gys2.png';
import gys3 from '@/assets/image/common/gameLists/gys3.png';
import gys4 from '@/assets/image/common/gameLists/gys4.png';
import gys5 from '@/assets/image/common/gameLists/gys5.png';
import gys6 from '@/assets/image/common/gameLists/gys6.png';
import popular from '@/assets/image/common/gameLists/popular.png';
import collect from '@/assets/image/common/gameLists/collect.png';
import original from '@/assets/image/common/gameLists/original.png';
import { Championship } from '@/pages/home/championship';
import { PopularGames } from '@/pages/home/popularGames';
import SupplierInfo from '@/pages/home/supplierInfo';
import WinnerInfo from '@/pages/home/winnerInfo';
import LoginSign from '../loginSign';

interface HomeProps {
  className?: string;
}

const rankList = [
  {
    id: 1,
    text1: '玩家昵称 just won',
    text2: '在777的游戏',
    money: '29.00R',
    src: avatar1,
  },
  {
    id: 2,
    text1: '玩家昵称 just won',
    text2: '在777的游戏',
    money: '29.00R',
    src: avatar2,
  },
  {
    id: 3,
    text1: '玩家昵称 just won',
    text2: '在777的游戏',
    money: '29.00R',
    src: avatar3,
  },
  {
    id: 4,
    text1: '玩家昵称 just won',
    text2: '在777的游戏',
    money: '29.00R',
    src: avatar4,
  },
  {
    id: 5,
    text1: '玩家昵称 just won',
    text2: '在777的游戏',
    money: '29.00R',
    src: avatar1,
  },
  {
    id: 6,
    text1: '玩家昵称 just won',
    text2: '在777的游戏',
    money: '29.00R',
    src: avatar4,
  },
  {
    id: 7,
    text1: '玩家昵称 just won',
    text2: '在777的游戏',
    money: '29.00R',
    src: avatar1,
  },
];

const bannerList = [
  { id: 1, url: '/content/banner1.png' },
  { id: 2, url: '/content/banner2.png' },
  { id: 3, url: '/content/banner3.png' },
  { id: 4, url: '/content/banner1.png' },
];

function Home(props: HomeProps) {
  const { className } = props;
  const gysList = [gys1, gys2, gys3, gys4, gys5, gys6, gys1, gys2, gys3];
  return (
    <div className={`${className} bg-conBg`}>
      <div className='relative mb-30'>
        {/* 顶部全局操作按钮 */}
        <div className='flex w-fit py-10 absolute right-[23.125rem] z-10'>
          <LoginSign size='mini' className='mr-16' />
          <Options className='h-40 w-120' />
        </div>
        <div className='flex mr-24'>
          {/* 轮播 */}
          <MySwiperComponent bannerList={bannerList} />
          {/* 这便是赢奖信息 */}
          <WinnerInfo rankList={rankList} rankImg={rank} />
        </div>
        {/* 供应商 */}
        <SupplierInfo gysList={gysList} />
      </div>

      <div className='ml-24'>
        {/* 热门游戏 */}
        <PopularGames title='POPULAR GAME' titleSrc={popular} />
        {/* 收藏游戏 */}
        <PopularGames title='COLLECT' titleSrc={collect} />
        {/* 锦标赛 */}
        <Championship />
        {/* 原创游戏 */}
        <PopularGames title='ORIGINAL GAME' titleSrc={original} />
      </div>
    </div>
  );
}

export default Home;
