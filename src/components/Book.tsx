import { Link } from 'react-router-dom';
import { Button, Tooltip } from 'antd';
import {
  BookOutlined,
  DeleteOutlined,
  EditOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import { BookType } from '../types';

interface BookProps extends BookType {}
const Book: React.FC<BookProps> = ({
  bookId,
  title,
  author,
  createdAt,
  url,
}) => {
  return (
    <>
      <div>
        <Link to={`/studyplan/${bookId}`}>
          <BookOutlined />
          {title}
        </Link>
      </div>
      <div>
        <Link to={`/studyplan/${bookId}`}>
          <BookOutlined />
          {author}
        </Link>
      </div>
      <div>{moment(createdAt).format('YYYY-MM-DD-hh:mm a')}</div>
      <div>
        <Tooltip title={url}>
          <a href={url} target="_blank" rel="noreferrer">
            <Button
              size="small"
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
            />
          </a>
        </Tooltip>
        <Tooltip title="수정">
          <Button size="small" shape="circle" icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip title="삭제">
          <Button
            size="small"
            type="primary"
            shape="circle"
            danger
            icon={<DeleteOutlined />}
          />
        </Tooltip>
      </div>
    </>
  );
};

export default Book;
