import { Button, PageHeader, Table } from 'antd';
import { BookType } from '../types';

import Layout from './Layout';
import Book from './Book';

interface ListProps {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
  getBooks: () => void;
  logout: () => void;
}

const List: React.FC<ListProps> = ({
  books,
  loading,
  error,
  logout,
  getBooks,
}) => {
  const goAdd = () => {};
  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button key="2" type="primary" onClick={goAdd}>
            ADD BOOK
          </Button>,
          <Button key="1" type="primary" onClick={logout}>
            로그아웃
          </Button>,
        ]}
      />
      <Table
        dataSource={books || []}
        columns={[
          {
            title: 'Book',
            dataIndex: 'book',
            key: 'book',
            render: (text, record) => <Book {...record} />,
          },
        ]}
        loading={books === null || loading}
        showHeader={false}
        rowKey="bookId"
        pagination={false}
      />
    </Layout>
  );
};

export default List;
