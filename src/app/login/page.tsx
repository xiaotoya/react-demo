'use client'

import Input from "@/components/input/input";
import Tab, { TabItem } from "@/components/tab/tab";
import { Fragment } from "react";
import { useImmer } from "use-immer";

export default function Login() {
  const passwordLogin = <Fragment>
    <div className="row-1">
      <Input type={"text"} name={"username"} required={true} placeholder="请输入电话号码或者邮箱" />
    </div>
    <div className="row-2">
      <Input type={"password"} name={"password"} required={true} placeholder="密码" />
    </div>
    <div className="row-3">
      <a>忘记密码?</a>
    </div>
    <button className="submit-btn">登录</button>
  </Fragment>
  const [tab, setTab] = useImmer<TabItem[]>([
    {
      title: '验证码登录',
      content: (<div></div>),
      isActive: true,
    },
    {
      title: '密码登录',
      content: passwordLogin,
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
