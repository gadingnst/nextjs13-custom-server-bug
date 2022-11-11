import type { AppProps } from 'next/app';
import { Fragment, FunctionComponent } from 'react';

const App: FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
