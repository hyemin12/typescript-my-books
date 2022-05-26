import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import Signin from '../components/Signin';
import { RootState } from '../redux/modules/rootReducer';

const SigninContainer: React.FC = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.auth.loading,
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.auth.error,
  );
  return <Signin loading={loading} error={error} />;
};

export default SigninContainer;
