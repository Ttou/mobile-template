/* eslint-disable eqeqeq */
/* eslint-disable no-var */
;(function () {
  var src = '//cdn.jsdelivr.net/npm/vconsole'
  if (!/vconsole=true/.test(window.location)) return
  document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>')
  document.write('<scr' + 'ipt>new VConsole();</scr' + 'ipt>')
})()
