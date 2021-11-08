import React from "react";
import classnames from "classnames/bind";

import styles from "./App.scss";

const cx = classnames.bind(styles);

const App: React.FC = () => {
  return <div className={cx("test")}>App Running</div>;
};

export default App;
