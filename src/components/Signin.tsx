import React, { useEffect, useRef } from 'react';
import { Row, Col, Button, Input, message } from 'antd';

import styles from './Signin.module.css';
import { LoginReqType } from '../types';

interface SigninProps {
  loading: boolean;
  error: Error | null;
  login: ({ email, password }: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({ loading, error, login }) => {
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);

  // 로그인
  const onClick = () => {
    const email = emailRef.current?.state.value;
    const password = passwordRef.current?.state.value;

    login({ email, password });
  };

  useEffect(() => {
    if (error === null) return;

    switch (error.message) {
      case 'USER_NOT_EXIST':
        message.error('회원정보가 존재하지 않습니다.');
        break;
      case 'PASSWORD_NOT_MATCH':
        message.error('틀린 비밀번호');
        break;
      default:
        message.error('알 수 없는 에러');
    }
  }, [error]);

  return (
    <form>
      <Row align="middle">
        <Col span={24}>
          <Row className={styles.signin_contents}>
            <Col span={12}>
              <div className={styles.signin_bg}></div>
            </Col>
            <Col span={12}>
              <h4 className={styles.signin_title}>
                <span style={{ fontSize: '28px' }}>📘</span> 나만의 책장{' '}
                <span style={{ fontSize: '28px' }}>📘</span>
              </h4>
              <div className={styles.input_area}>
                <p className={styles.contents_title}>
                  이메일<span className={styles.required}>&#40;필수&#41;</span>
                </p>
                <Input
                  placeholder="이메일을 입력하세요"
                  autoComplete="email"
                  name="email"
                  ref={emailRef}
                  className={styles.input}
                />
              </div>
              <div className={styles.input_area}>
                <p className={styles.contents_title}>
                  비밀번호
                  <span className={styles.required}>&#40;필수&#41;</span>
                </p>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  autoComplete="current-password"
                  name="password"
                  ref={passwordRef}
                  className={styles.input}
                />
              </div>
              <div className={styles.button_area}>
                <Button
                  size="large"
                  className={styles.button}
                  loading={loading}
                  onClick={onClick}
                >
                  로그인
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );
};

export default Signin;
