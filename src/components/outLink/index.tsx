import { ReactNode, useCallback } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';
import { linkType } from '@/constants';

export interface OutLinkProps {
  href: string;
  children: ReactNode;
  routeOptions?: NavigateOptions;
  type?: 1 | 2 | 3 | -1 | -2 | number;
  className?: string;
  style?: Record<string, any>;
  onClick?: Function;
  id?: number | string;
  target?: '_self' | '_top' | '_blank' | '_parent' | '';
  onTouchStart?: any;
}

export const OutLink = (props: OutLinkProps) => {
  const { href, type = -2, id, children, className = '', onClick, routeOptions, ...rest } = props;
  const navigate = useNavigate();

  // 内跳
  const innerlink = useCallback(() => {
    navigate(href, routeOptions);
    // 如果外部传入了点击事件，放在最后执行
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [href, navigate, onClick, routeOptions]);

  // linkType 1 时的跳转
  const innerOneLink = useCallback(() => {
    switch (id) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        navigate('/home');
        break;
      default:
        break;
    }
  }, [id, navigate]);
  // 点击事件
  const handleClick = useCallback(
    (e) => {
      if (!href && !id) return;
      // 阻止默认事件
      e?.preventDefault();
      //阻止时间冒泡
      e?.stopPropagation();
      switch (type) {
        case linkType.inner:
          // 内跳（根据id判断跳哪里）
          innerOneLink();
          break;
        case linkType.route:
          // 内部路由直跳
          innerlink();
          break;
        default:
          break;
      }
    },
    [href, id, innerOneLink, innerlink, type]
  );
  return (
    <div className={`${className}`} onClick={handleClick} {...rest}>
      {children}
    </div>
  );
};
