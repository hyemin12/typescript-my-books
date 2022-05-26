import { AnyAction } from 'redux';
import { createActions, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import TokenService from '../../services/TokenService';
import UserService from '../../services/UserService';
import { LoginReqType } from '../../types';

// 타입 세팅
export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}
// 초기값 세팅
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};
const prefix = 'my-books/auth';

// 액션 생성
export const { success, fail, pending } = createActions(
  {
    SUCCESS: (token: string) => ({ token }),
  },
  'PENDING',
  'FAIL',
  { prefix },
);

// reducer
const authReducer = handleActions<AuthState, any>(
  {
    PENDING: (state) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({ ...state, loading: false, error: null }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);
export default authReducer;

// Saga
// action 생성 함수
export const { login, logout } = createActions(
  {
    LOGIN: ({ email, password }: LoginReqType) => ({
      email,
      password,
    }),
  },
  'LOGOUT',
  { prefix },
);

interface LoginSagaAction extends AnyAction {
  payload: LoginReqType;
}

function* loginSaga(action: LoginSagaAction) {
  try {
    yield put(pending());
    const token: string = yield call(UserService.login, action.payload);
    // local storage
    TokenService.set(token);
    //redux state
    yield put(success(token));
    // push (page 이동)
    yield put(push('/'));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
  }
}
function* logoutSaga() {}
export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
function push(arg0: string): any {
  throw new Error('Function not implemented.');
}
