import React from "react";
export default function Header(props) {
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
            placeholder="点击+号可添加网站。添加网站后，按对应的字母键可跳转页面"
          />
          <button className="index-searchButton" type="submit">
            搜索
          </button>
        </form>
      </header>
    </>
  );
}
