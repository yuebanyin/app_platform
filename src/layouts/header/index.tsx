// import { useTranslation } from 'react-i18next';
// import { useChangeTheme } from '@/hooks';
// import { lsGetItem } from '@/utils';
import HeadLeft from './headLeft';
import HeadTOP from './headTop';

function Header() {
  // const { t, i18n } = useTranslation();
  // const { changeTheme } = useChangeTheme();

  // const onChangeLanguage = () => {
  //   if (i18n.language === 'zh') i18n.changeLanguage('en');
  //   else i18n.changeLanguage('zh');
  // };

  // const onChangeTheme = () => {
  //   if (lsGetItem('theme') !== 'white') changeTheme('white');
  //   else changeTheme('black');
  // };

  return (
    <div className='flex'>
      <HeadLeft />
      <HeadTOP className='flex-1' />
    </div>
  );
}

export default Header;
