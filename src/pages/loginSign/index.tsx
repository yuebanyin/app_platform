import { Form, Input, Modal } from 'antd';
import { memo, useState } from 'react';
import { BgImg, Button, Img } from '@/components';

interface LoginSignProps {
  className?: string;
  open?: boolean;
  text?: string;
  size?: 'small' | 'middle' | 'large' | 'mini' | 'miniSm' | 'noRadius';
}

const logBtns = [
  {
    id: 1,
    text: 'SIGN IN',
  },
  {
    id: 2,
    text: 'SIGN UP',
  },
];
const LoginSign = (props: LoginSignProps) => {
  const { className = 'm-auto mb-20', size = 'small' } = props;
  const [btnId, setBtnId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const changeBtn = (item?) => {
    setOpen(true);
    if (item.id && item.id !== btnId) {
      setBtnId(item.id);
    }
  };
  return (
    <>
      {logBtns.map((item) => (
        <Button
          key={item.id}
          size={size}
          onClick={() => changeBtn(item)}
          className={`text-white ${className} ${btnId === item.id ? 'bg-orange' : 'bg-signIn border-2 border-solid border-signBNormal'}`}
        >
          {item.text}
        </Button>
      ))}
      <Modal open={open} onOk={handleOk} onCancel={handleCancel} footer={null} className='relative'>
        <BgImg url={btnId === 1 ? '/content/loginBg.png' : '/content/signBg.png'} className={`relative ${btnId === 1 ? 'w-1372 h-752 pt-40' : 'w-1372 h-930 pt-40'}`}>
          <div className='flex justify-between'>
            <Img src='/logo.png' className='mx-34 h-62 w-288' alt='logo' />
            <div className='w-550 mr-40'>
              <div className='text-white text-center text-48'>{btnId === 1 ? 'Login account' : 'Create an account'}</div>
              {btnId === 1 ? (
                <Form name='form' layout='vertical' className='mt-120'>
                  <Form.Item label='Login account' name='account'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Password' name='password'>
                    <Input />
                  </Form.Item>

                  <span className='text-16 text-white mt-6 float-right border-b-[0.0675rem] border-b-white'>Forgot my password？</span>
                  <Form.Item label=' '>
                    <Button loading={loading} className='w-546 h-90 mt-50 bg-btnGradPrimary text-white text-24 font-bold'>
                      SIGN IN
                    </Button>
                  </Form.Item>
                </Form>
              ) : (
                <Form name='form' layout='vertical'>
                  <Form.Item label='Nation' name='username'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Family name' name='family'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Last name' name='last'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Login account' name='account'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Email' name='email' rules={[{ type: 'email' }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Password' name='password'>
                    <Input />
                  </Form.Item>

                  <Form.Item label=' '>
                    <Button loading={loading} className='w-546 h-90 bg-btnGradPrimary text-white text-24 font-bold'>
                      SIGN UP
                    </Button>
                  </Form.Item>
                </Form>
              )}
              <p className='text-loginText text-14 mt-20 mb-12'>This site is protected by recaptcha and applies to the Google Privacy Policy and Terms of Service.</p>
            </div>
          </div>
          <div className='flex absolute rotate-90 right-[-19.5rem] bottom-[19rem]'>
            {logBtns.map((item, i) => (
              <Button
                key={item.id}
                size='noRadius'
                onClick={() => changeBtn(item)}
                className={`${i > 0 ? 'rounded-tr-30' : 'rounded-tl-30'} ${btnId === item.id ? 'text-btnActive bg-menuGradActive' : 'text-primary bg-logInputBg'}`}
              >
                {item.text}
              </Button>
            ))}
          </div>
        </BgImg>
      </Modal>
    </>
  );
};

export default memo(LoginSign);
