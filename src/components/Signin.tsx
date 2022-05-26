import React, { useRef } from 'react';
import { Row, Col, Button, Input } from 'antd';

import styles from './Signin.module.css';
import { SigninProps } from '../types';

const Signin: React.FC<SigninProps> = ({ loading, error }) => {
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);
  const onClick = () => {};
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
