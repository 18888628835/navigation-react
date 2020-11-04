import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  let local = localStorage.getItem("x");
  let initialValue = JSON.parse(local) || [];
  const [state, setState] = React.useState(initialValue);
  React.useEffect(() => {
    function keyup(e) {
      if (e.key === "+" || e.key === "=") {
        add();
      }
    }
    document.addEventListener("keyup", keyup);
  }, []);
  React.useEffect(() => {
    window.onbeforeunload = function () {
      let x = JSON.stringify(state);
      localStorage.setItem("x", x);
    };
    document.addEventListener("keypress", keypress);
    function keypress(e) {
      for (let i = 0; i < state.length; i++) {
        if (e.key.toUpperCase() === state[i].text[0].toUpperCase()) {
          window.open(state[i].url);
          break;
        }
      }
    }
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
      alert("不正确的输入方式，请修改噢");
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
  return (
    <>
      <Header value={{ add: add }} />
      <Main
        value={{ state: state, add: add, setState: setState, revise: revise }}
      />
    </>
  );
}
