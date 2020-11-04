import React from "react";
export default function Main(props) {
  const { state, add, revise } = props.value;
  return (
    <main className="index-main">
      <ul className="index-main-ul">
        {state.map((value, index) => {
          return (
            <li key={index} className="main-list main-lists">
              <svg
                onClick={(index) => {
                  revise(index);
                }}
                className="icon close"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-close"></use>
              </svg>

              <a href={value.url}>
                <div className="list-logo">{value.text[0].toUpperCase()}</div>
                <span className="list-text">{value.text}</span>
              </a>
            </li>
          );
        })}
        <li onClick={add} className="main-list add">
          <a href="#">
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
}
