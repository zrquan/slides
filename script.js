/**
* org-re-reveal只能控制code标签的属性，但是reveal.js提供的代码块动画效果需要给
* 父级的pre标签设置data-id属性
*/
let targetBlocks = document.querySelectorAll('code[data-org-id]');
targetBlocks.forEach(code => code
                     .closest('pre')
                     .setAttribute('data-id', code.getAttribute('data-org-id')));
