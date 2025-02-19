'use client'

import styled from 'styled-components';
const LoginLayoutCSS = styled.div`
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
        border-left: 1px solid var(--border);
        padding: 0 var(--form-gap) 30px;
        margin-top: 16px;
        .row-1 {
          margin-top: 24px;
        }
        .row-2 {
          margin-top: 11px;
        }
        .row-3 {
          margin-top: 12px;
          text-align: end;
          a {
            font-size: 14px;
          }
        }
        .submit-btn {
          width: 100%;
          background-color: var(--login-blue);
          color: #fff;
          height: 36px;
          margin-top: 30px;
          padding: 0 16px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
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
      <LoginLayoutCSS>
        <div className="login-container">
          <img src='/logo.png' alt='logo' />
          {children}
        </div>
      </LoginLayoutCSS>
    );
  }