import { createActions, handleActions } from 'redux-actions';

// 타입 세팅
export interface AuthState {
  loading: boolean;
  error: Error | null;
}
// 초기값 세팅
const initialState: AuthState = {
  loading: false,
  error: null,
};
const prefix = 'my-books/auth';

// 액션 생성
export const { success, fail } = createActions(
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
