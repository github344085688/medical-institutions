/**
 * Created by admin on 2017/12/27.
 */
'use strict'
exports.install = function (Vue, options) {
  /**
   * 设置兼容html字号大小
   */
  (function (doc, win) {
    let docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth < 750) {
          docEl.style.fontSize = 30 * (clientWidth / 750) + 'px';
        } else {
          docEl.style.fontSize = 14 + 'px';
        }
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);

  /**
   * 原生js ajax请求
   * @param options  url  data对象
   */

  Vue.prototype.jsAjax = (...arg) => {
    let url = 'http://api.zayata.com/index.php?s=' + arg[0].url + '', type = "POST", dataType = "json";
    arg[0] = arg[0] || {};
    type = (type || "GET").toUpperCase();
    dataType = dataType || "json";
    let params = formatParams(arg[0].data);
    if (window.XMLHttpRequest) {
      var xhr = new XMLHttpRequest();
    } else {
      var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        let status = xhr.status;
        if (status >= 200 && status < 300) {
          arg[1] && arg[1](JSON.parse(xhr.responseText), xhr.responseXML);
        } else {
          arg[2] && arg[2](status);
        }
      }
    }
    if (type == "GET") {
      xhr.open("GET", url + "?" + params, true);
      xhr.send(null);
    }
    else if (type == "POST") {
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("api-version", "1.1");
      xhr.send(params);
    }
    //格式化参数
    function formatParams(data) {
      let arr = [];
      for (let name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
      }
      arr.push(("v=" + Math.random()).replace(".", ""));
      return arr;
    }
  }

  /**
   * jquery ajax请求
   * @param options  url  data对象
   */

  Vue.prototype.jqAjax = ( ...arg) => {
    let Url = 'http://api.zayata.com/index.php?s=' + arg[0];
    return $.ajax({
      headers: {
        "api-version": "1.1"
      },
      type: "post",
      url: Url,
      data: arg[1],
      dataType: 'json',
    })
  };

  /**
   * createindexedDB
   * * @param options 对象 dbname，dbtable
   */

  Vue.prototype.setinDB = (...arg) => {
    if (!"indexedDB" in window) return;
    this.openRequest = indexedDB.open(arg[0].dbname, 1);
    this.openRequest.onupgradeneeded = (e) => {
      let thisDB = e.target.result;
      if (!thisDB.objectStoreNames.contains(arg[0].dbtable)) {
        thisDB.createObjectStore(arg[0].dbtable, {keyPath: "keyname"}).createIndex('Indexkey', 'keyname', {unique: false});
      }
    };
    this.openRequest.onsuccess = (e) => {
      e.target.result.close();
    };
    this.openRequest.onerror = (e) => {
    };
  }
  /**
   * 设置indexedDB表内容
   * @param data 对象 dbname，dbtable
   *
   */
  Vue.prototype.setStages = (...arg) => {
    this.openRequest = indexedDB.open(arg[0].dbname, 1);
    this.openRequest.onsuccess = (e) => {
      for (let key in arg[0].data) {
        setStages(arg[0].data[key].keyname, arg[0].data[key])
      }

      function setStages(name, data) {
        let store = e.target.result.transaction([arg[0].dbtable], "readwrite").objectStore(arg[0].dbtable);
        let index = store.index("Indexkey");
        index.get(name).onsuccess = (e) => {
          let student = e.target.result;
          if (student == undefined) {

            store.add(data);
          } else {
            store.put(data);
          }
        };
      }
      e.target.result.close();
    }
  }
  /**
   * 读取数据
   * @param options对象 dbname，dbtable
   */
  Vue.prototype.getStages = (...arg) => {

    this.openRequest = indexedDB.open(arg[0].dbneme, 1);
    this.openRequest.onsuccess = (e) => {
      let store = e.target.result.transaction([arg[0].dbtable], "readwrite").objectStore(arg[0].dbtable);
      let cursor = store.openCursor();
      let index = store.index("Indexkey");
      index.get(arg[0].datanem).onsuccess = (e) => {
        if (e.target.result == undefined) {
          arg[1](e.target.result);
        } else {
          arg[1](e.target.result);
        }
      }
      e.target.result.close();
    }

  }
  /**
   * 清除数据
   * @param options对象 dbneme，dbtable
   */
  Vue.prototype.clearStages=(...arg)=>{
    this.openRequest = indexedDB.open(arg[0].dbneme, 1);
    this.openRequest.onsuccess = (e) => {
      if (e.target.result == undefined) {
        arg[1]('err');
      } else {
        e.target.result.transaction([arg[0].dbtable], "readwrite").objectStore(arg[0].dbtable).clear();
        arg[1]('success');
      }
      e.target.result.close();
    }
  }

  /**
   * 获取浏览器宽高
   * @returns {{widowsW: *, widowsH: *}}
   */
  Vue.prototype.gethigth = (width,height) => {
    let windwowidth;
    let windwoheight;
    let retwidth;
    let retheight;
    let retx;
    let rety;
    let rettop;
    let le;
    if (typeof window.innerWidth !== 'undefined') {
      windwowidth = window.innerWidth;
      windwoheight = window.innerHeight;
    } else {
      windwowidth= document.documentElement.clientWidth;
      windwoheight= document.documentElement.clientHeight;
    }
    if(windwowidth>1366){
      retwidth=parseInt((width/1920)*windwowidth);
      retheight=parseInt((height/965)*windwoheight);
      retx=retwidth/2;
      rety=retheight/2;
      rettop=40;
      le=50;
    }else {
      retwidth=width;
      retheight=height;
      retx=-width/2;
      rety=height/2;
      rettop=40;
      le=50;
    }
    return {
      width:retwidth,
      height:retheight,
      retx:retx,
      rety:rety,
      retop:rettop,
      left:le
    }
  };
  Vue.prototype.gewindowwidth = () => {
    let windowwidth;
    let windwoheight;
    if (typeof window.innerWidth !== 'undefined') {
      windowwidth = window.innerWidth;
      windwoheight = window.innerHeight;
    } else {
      windowwidth= document.documentElement.clientWidth;
      windwoheight= document.documentElement.clientHeight;
    }
    return {
      widowsW:windowwidth,
      widowsH:windwoheight
    }
  };
  /**
   * 获取当前时间
   * @param vlourar
   * @returns {string}
   */
  Vue.prototype.gettady = (vlourar='') => {
    var currYear = (new Date()).getFullYear()
    var currMonth = (new Date()).getMonth()+1;
    var currDay = (new Date()).getDate();
    var today = new Date();
      if(currMonth<10){
        currMonth='0'+currMonth;
    }
    return currYear+'-'+currMonth+'-'+currDay
  };
}


