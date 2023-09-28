import React from 'react';
import { Translation } from 'react-i18next';

interface HomeProps extends React.Component {}

class Home extends React.Component<HomeProps> {
  componentDidMount(): void {
    // console.warn('组件挂载', this.props);
  }

  render() {
    return (
      <div className='text-center'>
        <Translation>{(t) => <span>{t('home')}</span>}</Translation>
      </div>
    );
  }
}

export default Home;
