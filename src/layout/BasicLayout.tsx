import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "@/pages/Home";
import PeopleDetail from "@/components/PeopleDetail";
import Footer from "./Footer";
import styles from "./index.module.less";

export default () => {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.body}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/message" element={<Message />} />
            <Route path="/me" element={<PersonalCenter />} />
            <Route path="/member/:id" element={<PeopleDetail />} />
          </Routes>
        </div>
        <div className={styles.bottom}>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

function Todo() {
  return <div>待办</div>;
}

function Message() {
  return <div>消息</div>;
}

function PersonalCenter() {
  return <div>我的</div>;
}
