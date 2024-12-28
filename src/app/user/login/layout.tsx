
// .login-container {
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: url('/public/images/login-bg.png');
//   .title {
//       background-image: url('/public/images/logo.png');
//   }
// }
export default function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="login-container">
        <div className="title"></div>
        {children}
      </div>
    );
  }