import React from 'react';
import { Redirect } from 'react-router-dom';

import SigninContainer from '../containers/SigninContainer';
import useToken from '../hooks/useToken';

const SigninPage = () => {
  const token = useToken();
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SigninContainer />;
};

export default SigninPage;
