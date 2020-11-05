import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
function keyPress(fn) {
  return function (e) {
    if (e.key === "+" || e.key === "=") {
      fn();
    }
  };
}
export default function App() {
  let local = localStorage.getItem("x");
  let initialValue = JSON.parse(local) || [];
  const [state, setState] = React.useState(initialValue);

  React.useEffect(() => {
    localStorage.setItem("x", JSON.stringify(state));
  }, [state]);
  const revise = (index) => {
    setState((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.splice(index, 1);
      return newState;
    });
  };
  const add = () => {
    let url = prompt("请输入网站地址");
    if (url === null || url.trim() === "") {
      return null;
    } else {
      if (url.indexOf("http") === -1) {
        url = "https://" + url;
      } else {
        url = url;
      }
      let urlx = url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .replace(" ", "")
        .trim()
        .replace(/\/.*/, "");
      if (urlx !== "") {
        let obj = {
          text: urlx,
          url: url,
        };
        setState((state) => {
          const newState = JSON.parse(JSON.stringify(state));
          newState.push(obj);
          return newState;
        });
      }
    }
  };
  document.addEventListener("keypress", add);
  return (
    <>
      <Header value={{ add: add }} />
      <Main
        value={{ state: state, add: add, setState: setState, revise: revise }}
      />
    </>
  );
}
