import { useCallback } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

export const useNavigation = () => { 
  const autoNavigate = useNavigate();
  const navigate = useCallback((p, option?: NavigateOptions, href?: string) => {
    if (href) {
      const w = window.open('about:_blank');
      if (w) w.location.href = href;
    } else {
      autoNavigate(p, option);
    }
  }, [autoNavigate]);
  return navigate;
};
