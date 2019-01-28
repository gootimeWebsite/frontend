import * as React from "react";
import { useState } from "react";
import { Login } from "ant-design-pro";
import { Alert, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import styles from "./styles.module.scss";

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login as any; //FIXME: miss a default in .d.ts

const LoginPage: React.FC = () => {
  const [notice, setNotice] = useState("");
  const [type, setType] = useState("tab2");
  const [autoLogin, setAutoLogin] = useState(true);
  const onSubmit = (err: any, values: any) => {
    console.log("value collected ->", { ...values, autoLogin: autoLogin });
    if (type === "tab1") {
      setNotice(() => {
        if (
          !err &&
          (values.username !== "admin" || values.password !== "888888")
        ) {
          setTimeout(() => {
            setNotice("The combination of username and password is incorrect!");
          }, 500);
        }
        return "";
      });
    }
  };
  const onTabChange = (key: string) => {
    setType(key);
  };
  const changeAutoLogin = (e: CheckboxChangeEvent) => {
    setAutoLogin(e.target.checked);
  };
  return (
    <div className={styles.loginPage}>
      <Login
        defaultActiveKey={type}
        onTabChange={onTabChange}
        onSubmit={onSubmit}
      >
        <Tab key="tab1" tab="Account">
          {notice && (
            <Alert
              style={{ marginBottom: 24 }}
              message={notice}
              type="error"
              showIcon
              closable
            />
          )}
          <UserName name="username" />
          <Password name="password" />
        </Tab>
        <Tab key="tab2" tab="Mobile">
          <Mobile name="mobile" />
          <Captcha
            onGetCaptcha={() => console.log("Get captcha!")}
            name="captcha"
          />
        </Tab>
        <div>
          <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
            Keep me logged in
          </Checkbox>
          <a style={{ float: "right" }} href="">
            Forgot password
          </a>
        </div>
        <Submit>Login</Submit>
        <div>
          Other login methods
          <span className="icon icon-alipay" />
          <span className="icon icon-taobao" />
          <span className="icon icon-weibo" />
          <a style={{ float: "right" }} href="">
            Register
          </a>
        </div>
      </Login>
    </div>
  );
};

export default LoginPage;
