import { memo } from 'react';
import { Img } from '@/components';

interface WinnerInfoProps {
  rankList?: any[];
  rankImg?: string;
}
const WinnerInfo = (props: WinnerInfoProps) => {
  const { rankList, rankImg } = props;
  return (
    <div className='w-322 h-390 overflow-y-scroll no-scrollbar scrollbar-width-0 p-10 bg-menuBg rounded-b-10'>
      <div className='mb-6 flex justify-center items-baseline'>
        <Img src={rankImg} isNoTheme className='w-18 mr-8' />
        <div className='text-white text-18 font-bold'>RECENT WINNERS</div>
      </div>
      {rankList?.map((item) => (
        <div key={item.id} className='py-10 px-12 mb-6 bg-conBg rounded-6 flex justify-between items-center'>
          <Img src={item?.src} className='w-38' isNoTheme alt='avatar' />
          <div className='text-14 text-white'>
            <div>{item?.text1}</div>
            <div>{item?.text2}</div>
          </div>
          <div className='text-14 text-orange font-bold'>{item?.money}</div>
        </div>
      ))}
    </div>
  );
};
export default memo(WinnerInfo);
