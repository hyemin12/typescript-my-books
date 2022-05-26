import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Signin from '../components/Signin';
import { RootState } from '../redux/modules/rootReducer';
import { login as loginSaga } from '../redux/modules/auth';
import { LoginReqType } from '../types';

const SigninContainer: React.FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector<RootState, boolean>(
    (state) => state.auth.loading,
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.auth.error,
  );
  const login = useCallback(
    ({ email, password }: LoginReqType) => {
      dispatch(loginSaga({ email, password }));
    },
    [dispatch],
  );
  return <Signin login={login} loading={loading} error={error} />;
};

export default SigninContainer;
