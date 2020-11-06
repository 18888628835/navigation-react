import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
export default function App() {
  let local = localStorage.getItem("x");
  let initialValue = JSON.parse(local) || [];
  const [state, setState] = React.useState(initialValue);
  // 定义一个全局键盘事件函数，按+可以执行add函数
  const keyPress = React.useCallback((e) => {
    if (e.key === "+" || e.key === "=") {
      add();
    }
  }, []);
  //将数据存入localStorage里
  //增加事件
  //删除事件,否则会有多重键盘事件
  React.useEffect(() => {
    localStorage.setItem("x", JSON.stringify(state));

    document.addEventListener("keypress", keyPress);
    return () => {
      document.removeEventListener("keypress", keyPress);
    };
  }, [state, keyPress]);
  //修改state
  const revise = (index) => {
    setState((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.splice(index, 1);
      console.log(index);
      return newState;
    });
  };
  //添加网站函数
  const add = () => {
    let url = prompt("请输入网站地址");
    if (url === null || url.trim() === "") {
      return null;
    } else {
      url = url.indexOf("http") === -1 ? "https://" + url : url;
    }
    let urlText = url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .replace(" ", "")
      .trim()
      .replace(/\/.*/, "");
    if (urlText !== "") {
      let obj = {
        text: urlText,
        url: url,
      };
      setState((state) => {
        const newState = JSON.parse(JSON.stringify(state));
        newState.push(obj);
        return newState;
      });
    }
  };
  return (
    <>
      <Header value={{ add: add, keyPress: keyPress }} />
      <Main
        value={{ state: state, add: add, setState: setState, revise: revise }}
      />
    </>
  );
}
