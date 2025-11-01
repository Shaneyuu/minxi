/*
 * @Author: ChengXinYu
 * @Date: 2025-10-31 21:48:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-10-31 21:48:50
 * @FilePath: /h5/js/js.js
 */

function setRem() {
    console.log(11111)
    const designWidth = 750;
    const remSize = 100;
    const scale = document.documentElement.clientWidth / designWidth;
    document.documentElement.style.fontSize = remSize * scale + 'px';
}
setRem();
window.addEventListener('resize', setRem);

  document.addEventListener('DOMContentLoaded', function () {
        // 获取返回按钮元素
        const backBtn = document.querySelector('.backBtn');
        
        // 添加点击事件监听器
        backBtn.addEventListener('click', function () {
            // 返回上一页
            window.history.back();
        });
    });
