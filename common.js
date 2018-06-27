/*
全局工具类库
*author:cuiyouliang
*email:cuiyouliang@limikeji.com
*date:2018-04-27
*/
var common = {
    /*
    * @seperator:分隔符2018-04-28
    * 格式化日期为字符串
    * */
    getNowFormatDate(seperator, timestamp) {
        seperator = (seperator == undefined) ? '-' : seperator
        timestamp = (timestamp == undefined) ? new Date() : timestamp
        var date = new Date(timestamp);
        var seperator1 = seperator;
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    /*
    * @params:doc docuemnt对象
    * @params:win window对象
    * @params:font:跟字体，默认100px
    * 移动端rem和px适配
    * */
    formatRem(doc, win, font) {
        font = (!font) ? 100 : font
        var docEl = doc.documentElement, //获取html标签
            //orientationchange方向改变事件
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                //当前设备视口宽度
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                //原型图多大把750换成多大
                docEl.style.fontSize = font * (clientWidth / 750) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    },
    /*
    * @params:value 格式化参数
    * 格式化字符串转为'-',用于显示
    * */
    isEffective: function (value) {
        try {
            if (value === undefined || value == null || value === '') {
                return '-';
            }
            return value;
        } catch (e) {
            return '-'
        }
    },
    /*
    * @params:number 金额（元）
    * 元转万元
    * */
    convertYuanTowanyuan: function (number) {
        if (number !== undefined && number !== null) {
            return number * 10000
        } else {
            return '';
        }
    },
    /*
    * @params:number 金额（万元）
    * 万元转元并保留两位小数
    * */
    convertWanyuanToyuan: function (number) {
        if (number !== undefined && number !== null) {
            return ((number / 10000).toFixed(2))
        } else {
            return '-';
        }
    },
    /*
   * 判断是否为微信浏览器
   *
   * */
    isWeixinBrowser: function () {
        return window.navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1
    },
        /*
     * @params:u 用户UA
     * 判断是手机或者PC浏览器
    * */
    isMobieOrPcBrowser: function (u) {
        if (u.match(/Android/i) || u.match(/webOS/i) || u.match(/iPhone/i) || u.match(/iPad/i) || u.match(/iPod/i) || u.match(/BlackBerry/i) || u.match(/Windows Phone/i) || u.match(/windows mobile/i) || u.match(/windows ce/i) || u.match(/ucweb/i) || u.match(/rv:1.2.3.4/i) || u.match(/midp/i)) {
            return true;
        } else {
            return false;
        }

    }

};
export default common
