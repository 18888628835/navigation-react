import React from "react";

const Header = (props) => {
  const { keyPress } = props.value;
  return (
    <>
      <header className="index-header ">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-fangdajing" />
        </svg>
        <form
          className="index-search"
          action="https://www.baidu.com/s"
          method="get"
        >
          <input
            onFocus={() => {
              document.removeEventListener("keypress", keyPress);
            }}
            onBlur={() => {
              document.addEventListener("keypress", keyPress);
            }}
            className="index-searchText"
            type="text"
            name="wd"
            placeholder="tips：按键盘键+号也可以添加网站"
          />
          <button className="index-searchButton" type="submit">
            搜索
          </button>
        </form>
      </header>
    </>
  );
};
export default Header;
