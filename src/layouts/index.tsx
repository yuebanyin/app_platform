import { useOutlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useChangeTheme } from '@/hooks';
// import Header from './header';
import HeadLeft from './header/headLeft';

function Layout() {
  const CurrentOutlet = useOutlet();
  const { initTheme } = useChangeTheme();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <div className='w-full h-full flex flex-col'>
      {/* <Header /> */}

      <div className='flex'>
        <HeadLeft />
        <div className='flex-1 bg-deepBg min-w-1600'>{CurrentOutlet}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
