import { useState } from 'react';
import { Img } from '../img';
import { ArrowDiv } from '../arrow';

interface OptionProps {
  className?: string;
  contentClass?: string;
  defaultId?: number;
  dataList?: any[];
  arrowIcon?: boolean;
}

export function Options(props: OptionProps) {
  const { className, defaultId, dataList, arrowIcon = true } = props;
  const [activeId, setActiveId] = useState(defaultId || 1);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleClick = (item?) => {
    setShow(!show);
    if (item?.id === activeId) {
      return '';
    }
    setActiveId(item.id);
    return '';
  };
  return (
    <div>
      <div onClick={handleShow} className={`${className} rounded-10 px-18 mb-10 flex justify-between items-center bg-btnPrimary text-white `}>
        <div>{dataList[activeId - 1].text}</div>
        {arrowIcon && <ArrowDiv type='bottom' />}
        <Img src={dataList[activeId - 1].src} className='w-24' isNoTheme alt='nation' />
      </div>
      <div className={`p-20 bg-btnPrimary absolute text-white rounded-10 ${show ? '' : 'hidden'}`}>
        {dataList.map((item) => (
          <div className={`w-80 flex justify-between items-center ${item.id !== dataList.length ? 'mb-20' : ''}`} key={item.id} onClick={() => handleClick(item)}>
            <div>{item.text}</div>
            <Img src={item.src} className='w-24' isNoTheme alt='nation' />
          </div>
        ))}
      </div>
    </div>
  );
}