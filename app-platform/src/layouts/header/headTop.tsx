import { ArrowDiv, Button, Img, Options } from '@/components';
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
import { Championship } from '@/pages/home/championship';

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
function HeadTOP(props: HeadTopProps) {
  const { className } = props;
  const gysList = [gys1, gys2, gys3, gys4, gys5, gys6, gys1, gys2, gys3];
  return (
    <div className={`${className} bg-conBg`}>
      <div className='flex w-fit py-24'>
        <Button size='mini' className='mr-16 text-white bg-signIn border-2 border-solid border-signBNormal'>
          SIGN IN
        </Button>
        <Button size='mini' className='mr-16 text-white bg-orange'>
          LOG IN
        </Button>
        <Options className='h-40 w-120' dataList={optionList} />
      </div>
      {/* 这便是赢奖信息 */}
      <div className='w-322 h-390 overflow-y-scroll no-scrollbar scrollbar-width-0 p-10 bg-menuBg rounded-b-10'>
        <div className='mb-6 flex justify-center items-baseline'>
          <Img src={rank} isNoTheme className='w-18 mr-8' />
          <div className='text-white text-18 font-bold'>RECENT WINNERS</div>
        </div>
        {rankList?.map((item) => (
          <div key={item.id} className='py-8 px-12 mb-6 bg-conBg rounded-6 flex justify-between items-center'>
            <Img src={item?.src} className='w-38' isNoTheme alt='avatar' />
            <div className='text-14 text-white'>
              <div>{item?.text1}</div>
              <div>{item?.text2}</div>
            </div>
            <div className='text-14 text-orange font-bold'>{item?.money}</div>
          </div>
        ))}
      </div>
      {/* 供应商 */}
      <div className='flex bg-gysLineBg rounded-14 p-10 mx-24'>
        {gysList.map((item, i) => (
          <div key={`${i + 1}`} className={`w-148 h-60 flex justify-center items-center ${i + 1 === gysList.length ? '' : 'mr-10'} hover:bg-gysActiveBg rounded-10 `}>
            <Img src={item} isNoTheme alt='gys' />
          </div>
        ))}
        <div className='flex justify-center items-center w-200 h-60 bg-btnPrimary rounded-10 text-white'>
          <div className='text-18 mr-10'>All SUPPLIERS</div>
          <ArrowDiv type='bottom' />
        </div>
      </div>
      {/* 锦标赛 */}
      <Championship />
    </div>
  );
}

export default HeadTOP;
