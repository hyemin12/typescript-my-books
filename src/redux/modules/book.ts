import { AnyAction } from 'redux';
import { createActions, handleActions } from 'redux-actions';
import { put, call, select, takeLatest } from 'redux-saga/effects';
import BookService from '../../services/bookService';

import { BookResType, BookType } from '../../types';

export interface BooksState {
  books: BookResType[] | null;
  loading: boolean;
  error: Error | null;
}

const initialState: BooksState = {
  books: null,
  loading: false,
  error: null,
};

const prefix = 'my-books/books';

export const { success, pending, fail } = createActions(
  {
    SUCCESS: (books) => ({ books }),
  },
  'PENDING',
  'FAIL',
  { prefix },
);

const bookReducer = handleActions<BooksState, any>(
  {
    PENDING: (state) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      books: action.payload.books,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);

export default bookReducer;

// saga
export const { getBooks } = createActions('GET_BOOKS', { prefix });
function* getBooksSaga() {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    const books: BookType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
  } catch (error: any) {
    yield put(
      fail(new Error(error?.response?.data?.error || '알 수 없는 오류')),
    );
  }
}
export function* booksSaga() {
  // 중복된 호출 중에는 가장 마지막 호출을 가져오는 사가
  yield takeLatest(`${prefix}/GET_BOOKS`, getBooksSaga);
}
