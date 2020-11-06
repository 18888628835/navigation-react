import React from "react";
const Main = (props) => {
  const { state, add, revise } = props.value;
  return (
    <main className="index-main">
      <ul className="index-main-ul">
        {state.map((value, index) => {
          return (
            <li key={index} className="main-list main-lists">
              <svg
                onClick={(e) => {
                  revise(index);
                }}
                className="icon close"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-close"></use>
              </svg>

              <a href={value.url} target="_blank" rel="noopener noreferrer">
                <div className="list-logo">{value.text[0].toUpperCase()}</div>
                <span className="list-text">{value.text}</span>
              </a>
            </li>
          );
        })}
        <li onClick={add} className="main-list add">
          <a
            href="baidu.com"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div className="list-logo">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-add" />
              </svg>
            </div>
            <span className="list-text">新建网站</span>
          </a>
        </li>
      </ul>
    </main>
  );
};
export default Main;
