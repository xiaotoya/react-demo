'use client'

import Tab, { TabItem } from "@/components/tab/tab";
import { useImmer } from "use-immer";

export default function Login() {
  const [tab, setTab] = useImmer<TabItem[]>([
    {
      title: '验证码登录',
      content: (<div>验证码登录</div>),
      isActive: true,
    },
    {
      title: '密码登录',
      content: (<div>密码登录</div>),
      isActive: false,
    },
  ]);
  return (
    <div className="login-form-container">
      <div className="qr-code">

      </div>
      <div className="login-form">
        <Tab tabList={tab} changeTab={setTab}></Tab>
      </div>
    </div>
  );
}
