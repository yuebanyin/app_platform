import { useNavigate } from 'react-router-dom';
import game1 from '@/assets/image/common/gameLists/game_1.png';
import game2 from '@/assets/image/common/gameLists/game_2.png';
import game3 from '@/assets/image/common/gameLists/game_3.png';
import game4 from '@/assets/image/common/gameLists/game_4.png';
import game5 from '@/assets/image/common/gameLists/game_5.png';
import game6 from '@/assets/image/common/gameLists/game_6.png';
import game7 from '@/assets/image/common/gameLists/game_7.png';
import game8 from '@/assets/image/common/gameLists/game_8.png';
import { ArrowDiv, BgImg, Button, Img } from '@/components';
import { useNavigation } from '@/hooks';

interface PopulatGamesProps {
  className?: string;
  title?: string;
  titleSrc?: string;
  dataList?: any[];
}

const gameList = [
  {
    id: 1,
    src: game1,
    gameName: 'MONKEYPOPTM',
    des: 'DEMONSTRATION',
  },
  {
    id: 2,
    src: game2,
    gameName: 'MONKEYPOPTM',
    des: 'DEMONSTRATION',
  },
  {
    id: 3,
    src: game3,
    gameName: 'MONKEYPOPTM',
    des: 'DEMONSTRATION',
  },
  {
    id: 4,
    src: game4,
    gameName: 'MONKEYPOPTM',
    des: 'DEMONSTRATION',
  },
  {
    id: 5,
    src: game5,
    gameName: 'MONKEYPOPTM',
    des: 'DEMONSTRATION',
  },
  {
    id: 6,
    src: game6,
    gameName: 'MONKEYPOPTM',
    des: 'DEMONSTRATION',
  },
  {
    id: 7,
    src: game7,
    gameName: 'MONKEYPOPTM',
    des: 'DEMONSTRATION',
  },
  {
    id: 8,
    src: game8,
    gameName: 'MONKEYPOPTM',
    des: 'DEMONSTRATION',
  },
];

/* 锦标赛 */
export function PopularGames(props: PopulatGamesProps) {
  const { titleSrc, title = 'POPULAR GAME', dataList = gameList } = props;

  const navigate = useNavigation();
  const handleClick = (item?) => {
    navigate(`gameDetail?gameId=${item.id}`);
  };
  return (
    <div className='pb-30'>
      <div className='mb-24 flex items-baseline'>
        <Img src={titleSrc} isNoTheme alt='tournament' className='w-24 mr-14' />
        <div className='text-white text-28'>{title}</div>
      </div>
      <div className='flex flex-wrap items-center'>
        {dataList.map((item) => (
          <BgImg url={item.src} key={item.id} isNoTheme className='w-262 h-218 mr-14 mb-14' onClick={() => handleClick(item)}>
            <div className='w-262 h-218 cursor-pointer rounded-10 bg-gameBlockBg pt-40 text-center opacity-0 hover:opacity-100'>
              <div className='text-gameBlock text-18 mb-20'>{item.gameName}</div>
              <Button className='bg-btnGradPrimary text-white text-20 mx-auto' size='middle'>
                START
              </Button>
              <div className='text-white text-18 mt-30'>{item.des}</div>
            </div>
          </BgImg>
        ))}
      </div>
      <Button className='bg-btnPrimary text-white w-full mx-auto'>
        SHOW MORE
        <ArrowDiv type='bottom' className='ml-30' />
      </Button>
    </div>
  );
}
