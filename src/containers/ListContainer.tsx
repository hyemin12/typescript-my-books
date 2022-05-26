import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/modules/rootReducer';
import { BookType } from '../types';
import { logout as logoutSagaStart } from '../redux/modules/auth';
import { getBooks as getBooksSagaStart } from '../redux/modules/book';
import List from '../components/List';

const ListContainer: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books,
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading,
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.books.error,
  );
  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);
  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);
  return (
    <List
      books={books}
      loading={loading}
      error={error}
      logout={logout}
      getBooks={getBooks}
    />
  );
};

export default ListContainer;
