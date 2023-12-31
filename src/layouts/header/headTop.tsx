import { Button, Options, MySwiperComponent } from '@/components';
import nation1 from '@/assets/image/common/nation-1.png';
import nation2 from '@/assets/image/common/nation-2.png';
import nation3 from '@/assets/image/common/nation-3.png';
import nation4 from '@/assets/image/common/nation-4.png';
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
import banner1 from '@/assets/image/common/gameLists/banner1.png';
import banner2 from '@/assets/image/common/gameLists/banner2.png';
import banner3 from '@/assets/image/common/gameLists/banner3.png';
import popular from '@/assets/image/common/gameLists/popular.png';
import collect from '@/assets/image/common/gameLists/collect.png';
import original from '@/assets/image/common/gameLists/original.png';
import { Championship } from '@/pages/home/championship';
import { PopularGames } from '@/pages/home/popularGames';
import SupplierInfo from '@/pages/home/supplierInfo';
import WinnerInfo from '@/pages/home/winnerInfo';

interface HeadTopProps {
  className?: string;
}

const optionList = [
  {
    id: 1,
    text: 'CH',
    src: nation1,
  },
  {
    id: 2,
    text: 'ENG',
    src: nation2,
  },
  {
    id: 3,
    text: 'UAE',
    src: nation3,
  },
  {
    id: 4,
    text: 'BRA',
    src: nation4,
  },
];

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
  { id: 1, url: banner1 },
  { id: 2, url: banner2 },
  { id: 3, url: banner3 },
  { id: 4, url: banner2 },
];
function HeadTOP(props: HeadTopProps) {
  const { className } = props;
  const gysList = [gys1, gys2, gys3, gys4, gys5, gys6, gys1, gys2, gys3];
  return (
    <div className={`${className} bg-conBg`}>
      <div>
        {/* 顶部全局操作按钮 */}
        <div className='flex w-fit py-10 absolute right-[23.125rem] z-10'>
          <Button size='mini' className='mr-16 text-white bg-signIn border-2 border-solid border-signBNormal'>
            SIGN IN
          </Button>
          <Button size='mini' className='mr-16 text-white bg-orange'>
            LOG IN
          </Button>
          <Options className='h-40 w-120' dataList={optionList} />
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

export default HeadTOP;
