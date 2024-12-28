'use client'

import styled from 'styled-components';
const Inputcss = styled.div`
  .login-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/sign_bg.png');
    background-size: 100%;
    img {
        height: 81px;
        margin-bottom: 24px;
        width: 128px;
    }
    .login-form-container {
      display: flex;
      height: 507px;
      background-color: #fff;
      .qr-code {
        width: 332px;
      }
      .login-form {
        width: 400.8px;
      }
    }    
  }
`;
export default function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <Inputcss>
        <div className="login-container">
          <img src='/logo.png' alt='logo' />
          {children}
        </div>
      </Inputcss>
      
    );
  }