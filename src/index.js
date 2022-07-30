/*
入口js，，，渲染APP标签
*/
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 将APP组件标签渲染到index(index.html)页面的div上
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
