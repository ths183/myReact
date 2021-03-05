// import logo from './logo.svg';
import './App.css';
import React from "react"

export default class NewApp extends React.Component{

  // constructor(){

  // }

  // componentDidUpdate(){

  // }


  render(){
    return (
      <div>
        <div id="header">
          <div id="header-center">
            <div id="left-top">
              <ul id="judgement">
                <li id="judge-sign-in">
                  <a href="">亲，请登录</a>
                </li>
                <li id="judge-register">
                  <a href="">免费注册</a>
                </li>
              </ul>
              <ul id="phone-choose">
                <li>
                  <a href="">手机逛淘宝</a>
                </li>
              </ul>
            </div>
            <div id="right-top">
              <ul id="function">
                <li id="index">
                  <a href="">淘宝网首页</a>
                </li>
                <li id="mytb">
                  <a href="">我的淘宝</a>
                  <div id="mytb-popover">
                    <ul>
                      <li>
                        <a href="">已买到的宝贝</a>
                      </li>
                      <li>
                        <a href="">我的足迹</a>
                      </li>
                      <li>
                        <a href="">我的上新</a>
                      </li>
                      <li>
                        <a href="">爱逛街</a>
                      </li>
                      <li>
                        <a href="">淘宝达人</a>
                      </li>
                      <li>
                        <a href="">新欢</a>
                      </li>
                    </ul> 
                  </div>
                </li>
                <li id="shopping-cart">
                  <a href="">购物车</a>
                </li>
                <li id="favorites">
                  <a href="">收藏夹</a>
                </li>
                <li id="categories">
                  <a href="">商品分类</a>
                </li>
                <li id="sellers">
                  <a href="">卖家中心</a>
                </li>
                <li id="customer-service">
                  <a href="">联系客服</a>
                </li>
                <li id="navigation">
                  <a href="">网站导航</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="search">
          <div id="search-center">
            <div id="left-pic">
              <img src="./taobao.jpg"></img>
            </div>
            <div id="right-main">
              <div id="search-box">
                <div id="search-input">
                  <input type="text"></input>
                </div>
                <div id="search-button">
                  <button type="button">
                    <a href="">搜索</a>
                  </button>
                </div>
              </div>
              <div id="search-propose">
                <ul>
                  <li id="propose-first">
                    <a href="">一包限时抢</a>
                  </li>
                  <li>
                    <a href="">女包包</a>
                  </li>
                  <li>
                    <a href="">男外套</a>
                  </li>
                  <li>
                    <a href="">笔记本</a>
                  </li>
                  <li>
                    <a href="">床</a>
                  </li>
                  <li>
                    <a href="">新款包包</a>
                  </li>
                  <li>
                    <a href="">包包</a>
                  </li>
                  <li>
                    <a href="">女袜</a>
                  </li>
                  <li>
                    <a href="">耳机</a>
                  </li>
                  <li>
                    <a href="">零食</a>
                  </li>
                  <li>
                    <a href="">鱼缸</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}
// class Popover extends React.Component{
//   render(){
//     return(
//       <div>
//         <div id="mytb-popover">
//           <ul>
//             <li>
//               <a href="">已买到的宝贝</a>
//             </li>
//             <li>
//               <a href="">我的足迹</a>
//             </li>
//             <li>
//               <a href="">我的上新</a>
//             </li>
//             <li>
//               <a href="">爱逛街</a>
//             </li>
//             <li>
//               <a href="">淘宝达人</a>
//             </li>
//             <li>
//               <a href="">新欢</a>
//             </li>
//           </ul> 
//         </div>
//       </div>
//     )
//   }
// } 