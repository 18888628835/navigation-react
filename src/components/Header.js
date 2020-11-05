import React from "react";

const Header = (props) => {
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
            className="index-searchText"
            type="text"
            name="wd"
            placeholder="点击+号可添加网站。"
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
