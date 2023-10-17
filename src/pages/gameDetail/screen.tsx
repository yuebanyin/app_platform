import { SearchOutlined } from '@ant-design/icons';
import { Select, SelectProps } from 'antd';
import { memo, useState } from 'react';

interface ScreenProps {
  placeholder?: string;
  type?: 'screen1' | 'screen2' | 'screen4';
}

const screenData = {
  screen1: [{ id: 1, cls: 'w-1484 h-902 rounded-10 text-center bg-conBg mx-100' }],
  screen2: [
    { id: 1, cls: 'w-784 h-612 rounded-10 bg-conBg ml-30' },
    { id: 2, cls: 'w-784 h-612 rounded-10 bg-conBg ml-10' },
  ],
  screen4: [
    { id: 1, cls: 'w-748 h-444 rounded-10 bg-conBg mb-10 ml-70 mr-10' },
    { id: 2, cls: 'w-748 h-444 rounded-10 bg-conBg mb-10' },
    { id: 3, cls: 'w-748 h-444 rounded-10 bg-conBg mb-10 ml-70 mr-10' },
    { id: 4, cls: 'w-748 h-444 rounded-10 bg-conBg mb-10' },
  ],
};
const Screen = (props: ScreenProps) => {
  const { placeholder = 'Search', type = 'screen1' } = props;
  const [data, setData] = useState<SelectProps['options']>([]);
  const [value, setValue] = useState<string>();
  return (
    <div className='grid grid-cols-2'>
      {type === 'screen1' ? (
        <div className={screenData['screen1'][0].cls}>
          <Select
            showSearch
            value={value}
            size='large'
            className='bg-deepBg rounded-10 text-primary mt-50'
            style={{ width: '90%' }}
            placeholder={placeholder}
            defaultActiveFirstOption={false}
            // showArrow={false}
            filterOption={false}
            // onSearch={handleSearch}
            // onChange={handleChange}
            notFoundContent={null}
            options={(data || []).map((d) => ({
              value: d.value,
              label: d.text,
            }))}
            suffixIcon={<SearchOutlined className='text-24 text-btnPrimary' />}
          />
        </div>
      ) : (
        ''
      )}
      {/* 二屏幕 */}
      {type === 'screen2'
        ? screenData['screen2'].map((item) => (
            <div className={item.cls} key={item.id}>
              <Select
                showSearch
                value={value}
                size='large'
                className='bg-deepBg rounded-10 m-auto text-primary mt-50 flex'
                style={{ width: '90%' }}
                placeholder={placeholder}
                defaultActiveFirstOption={false}
                // showArrow={false}
                filterOption={false}
                // onSearch={handleSearch}
                // onChange={handleChange}
                notFoundContent={null}
                options={(data || []).map((d) => ({
                  value: d.value,
                  label: d.text,
                }))}
                suffixIcon={<SearchOutlined className='text-24 text-btnPrimary' />}
              />
            </div>
          ))
        : ''}
      {/* 四屏幕 */}
      {type === 'screen4'
        ? screenData['screen4'].map((item) => (
            <div key={item.id} className={item.cls}>
              <Select
                showSearch
                value={value}
                size='large'
                className='bg-deepBg rounded-10 mt-50 m-auto flex'
                style={{ width: '90%' }}
                placeholder={placeholder}
                defaultActiveFirstOption={false}
                filterOption={false}
                // showArrow={false}
                // onSearch={handleSearch}
                // onChange={handleChange}
                notFoundContent={null}
                options={(data || []).map((d) => ({
                  value: d.value,
                  label: d.text,
                }))}
                suffixIcon={<SearchOutlined className='text-24 text-btnPrimary' />}
              />
            </div>
          ))
        : ''}
    </div>
  );
};

export default memo(Screen);
