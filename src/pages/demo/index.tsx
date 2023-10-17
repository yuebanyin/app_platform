import { memo } from 'react';
import { Options } from '@/components/options';

function Demo() {
  return (
    <div>
      <span>demo </span>
      <Options />
    </div>
  );
}

export default memo(Demo);
