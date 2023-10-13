import tournament from '@/assets/image/common/gameLists/tournament.png';
import tournamentBg from '@/assets/image/common/gameLists/championship.png';
import { BgImg, Button, Img } from '@/components';

interface ChampionshipProps {
  className?: string;
}

const rewardList = [
  {
    id: 1,
    player: 'AXX',
    reward: '1,500R',
  },
  {
    id: 2,
    player: 'AXX',
    reward: '1,500R',
  },
  {
    id: 3,
    player: 'CXX',
    reward: '1,500R',
  },
  {
    id: 4,
    player: 'DXX',
    reward: '500R',
  },
  {
    id: 5,
    player: 'EXX',
    reward: '200R',
  },
  {
    id: 6,
    player: 'CXX',
    reward: '1,500R',
  },
  {
    id: 7,
    player: 'DXX',
    reward: '500R',
  },
  {
    id: 8,
    player: 'EXX',
    reward: '200R',
  },
];

/* 锦标赛 */
export function Championship(props: ChampionshipProps) {
  return (
    <div className='pb-30'>
      <div className='mb-24 flex items-baseline'>
        <Img src={tournament} isNoTheme alt='tournament' className='w-24 mr-14' />
        <div className='text-white text-28'>TOURNAMENT</div>
      </div>
      <BgImg url={tournamentBg} isNoTheme className='p-36'>
        <div className='flex justify-end'>
          <div className='text-white mr-90'>
            <div className='text-28 font-black mb-50'>CURRENT EVENT</div>
            <div className='text-28'>DAILY SLOT MACHINE CONTESTS</div>
            <div className='text-28'>
              A MAXIMUM OF
              <span className='text-orange'> R1,500.00 </span>
              WILL BE RECEIVIVED
            </div>
            <div className='text-14 mt-40 mb-10'>DISTANCE START TIME</div>
            <div className='flex items-center'>
              <div className='w-60 h-44 leading-11 text-center bg-champtime rounded-10 text-24'>00d</div>
              <div className='mx-8'>:</div>
              <div className='w-60 h-44 leading-11 text-center bg-champtime rounded-10 text-24'>00h</div>
              <div className='mx-8'>:</div>
              <div className='w-60 h-44 leading-11 text-center bg-champtime rounded-10 text-24'>00m</div>
              <div className='mx-8'>:</div>
              <div className='w-60 h-44 leading-11 text-center bg-champtime rounded-10 text-24'>00s</div>
              <Button className='bg-btnGradPrimary text-24 ml-24' size='large'>
                ENTER
              </Button>
            </div>
          </div>
          {/* 右边盒子 */}
          <div className='w-338 h-300 p-10 overflow-y-scroll scrollbar-width-0 rounded-8 text-white bg-btnPrimary'>
            <div className='px-20 mb-10 flex justify-between items-center'>
              <div>#</div>
              <div>PLAYER</div>
              <div>REWARDS</div>
            </div>
            {rewardList.map((item, i) => (
              <div key={`${i + 1}`} className='mb-6 px-20 py-6 rounded-6 flex bg-menuTwo justify-between items-center'>
                <div className={`${i > 2 ? '' : 'text-orange'}`}>{item.id}</div>
                <div>{item.player}</div>
                <div>{item.reward}</div>
              </div>
            ))}
          </div>
        </div>
      </BgImg>
    </div>
  );
}
