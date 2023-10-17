import { memo } from 'react';
import { ArrowDiv, Img } from '@/components';

interface SupplierInfoProps {
  gysList?: any[];
}
const SupplierInfo = (props: SupplierInfoProps) => {
  const { gysList } = props;
  return (
    <div className='flex bg-gysLineBg rounded-14 p-10 mx-24 z-10 absolute bottom-0'>
      {gysList.map((item, i) => (
        <div key={`${i + 1}`} className={`w-148 h-60 flex justify-center items-center cursor-pointer ${i + 1 === gysList.length ? '' : 'mr-10'} hover:bg-gysActiveBg rounded-10 `}>
          <Img src={item} isNoTheme alt='gys' />
        </div>
      ))}
      <div className='flex justify-center items-center w-200 h-60 bg-btnPrimary rounded-10 text-white'>
        <div className='text-18 mr-10'>All SUPPLIERS</div>
        <ArrowDiv type='bottom' />
      </div>
    </div>
  );
};
export default memo(SupplierInfo);
