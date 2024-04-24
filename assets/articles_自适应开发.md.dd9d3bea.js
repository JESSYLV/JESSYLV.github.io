import{_ as s,o as a,c as n,M as l}from"./chunks/framework.21809aeb.js";const e="/assets/cssrem.41ab3f73.png",m=JSON.parse('{"title":"自适应开发","description":"","frontmatter":{},"headers":[],"relativePath":"articles/自适应开发.md"}'),p={name:"articles/自适应开发.md"},t=l(`<h1 id="自适应开发" tabindex="-1">自适应开发 <a class="header-anchor" href="#自适应开发" aria-label="Permalink to &quot;自适应开发&quot;">​</a></h1><h2 id="css单位了解" tabindex="-1">css单位了解 <a class="header-anchor" href="#css单位了解" aria-label="Permalink to &quot;css单位了解&quot;">​</a></h2><p>px：像素 相对长度单位，相对于显示器屏幕分辨率(推荐使用)<br> em：相对长度单位 基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。<br> rem：相对单位 可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持。<br> vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。<br> vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。<br> vmin：vw和vh中较小的那个。<br> vmax：vw和vh中较大的那个。<br> %:百分比<br> in:寸<br> cm:厘米<br> mm:毫米<br> pt:point，大约1/72寸<br> pc:pica，大约6pt，1/6寸</p><h2 id="前端自适应开发常用方法" tabindex="-1">前端自适应开发常用方法 <a class="header-anchor" href="#前端自适应开发常用方法" aria-label="Permalink to &quot;前端自适应开发常用方法&quot;">​</a></h2><h3 id="rem-font-size" tabindex="-1">rem+font-size <a class="header-anchor" href="#rem-font-size" aria-label="Permalink to &quot;rem+font-size&quot;">​</a></h3><p>动态设置HTML根字体大小和body字体大小，会使用到lib-flexible.js插件（地址<a href="https://github.com/amfe/lib-flexible/blob/2.0/index.js%EF%BC%89" target="_blank" rel="noreferrer">https://github.com/amfe/lib-flexible/blob/2.0/index.js）</a> 使用插件 px to rem(cssrem)来协助展示转换</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#babed8;">      * {</span></span>
<span class="line"><span style="color:#babed8;">        margin: 0;</span></span>
<span class="line"><span style="color:#babed8;">        padding: 0;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">      body {</span></span>
<span class="line"><span style="color:#babed8;">        width: 24rem;</span></span>
<span class="line"><span style="color:#babed8;">        height: 13.5rem;</span></span>
<span class="line"><span style="color:#babed8;">        border: 3px solid red;</span></span>
<span class="line"><span style="color:#babed8;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">      ul {</span></span>
<span class="line"><span style="color:#babed8;">        display: flex;</span></span>
<span class="line"><span style="color:#babed8;">        flex-direction: row;</span></span>
<span class="line"><span style="color:#babed8;">        flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#babed8;">        width: 100%;</span></span>
<span class="line"><span style="color:#babed8;">        height: 100%;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;">      li {</span></span>
<span class="line"><span style="color:#babed8;">        width: 33.333%;</span></span>
<span class="line"><span style="color:#babed8;">        height: 50%;</span></span>
<span class="line"><span style="color:#babed8;">        font-size: 0.375rem;</span></span>
<span class="line"><span style="color:#babed8;">        list-style: none;</span></span>
<span class="line"><span style="color:#babed8;">        border: 3px solid green;</span></span>
<span class="line"><span style="color:#babed8;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;5&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;6&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;script src=&quot;./js/lib-flexible.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/html&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">(function flexible (window, document) {</span></span>
<span class="line"><span style="color:#babed8;">    var docEl = document.documentElement</span></span>
<span class="line"><span style="color:#babed8;">    var dpr = window.devicePixelRatio || 1</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">    // adjust body font size</span></span>
<span class="line"><span style="color:#babed8;">    function setBodyFontSize () {</span></span>
<span class="line"><span style="color:#babed8;">      if (document.body) {</span></span>
<span class="line"><span style="color:#babed8;">        document.body.style.fontSize = (16 * dpr) + &#39;px&#39;  //字体设置为16</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">      else {</span></span>
<span class="line"><span style="color:#babed8;">        document.addEventListener(&#39;DOMContentLoaded&#39;, setBodyFontSize)</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    setBodyFontSize();</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">    // set 1rem = viewWidth / 24 将1920设置为24份</span></span>
<span class="line"><span style="color:#babed8;">    function setRemUnit () {</span></span>
<span class="line"><span style="color:#babed8;">      var rem = docEl.clientWidth / 24</span></span>
<span class="line"><span style="color:#babed8;">      docEl.style.fontSize = rem + &#39;px&#39;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">    setRemUnit()</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">    // reset rem unit on page resize</span></span>
<span class="line"><span style="color:#babed8;">    window.addEventListener(&#39;resize&#39;, setRemUnit)</span></span>
<span class="line"><span style="color:#babed8;">    window.addEventListener(&#39;pageshow&#39;, function (e) {</span></span>
<span class="line"><span style="color:#babed8;">      if (e.persisted) {</span></span>
<span class="line"><span style="color:#babed8;">        setRemUnit()</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">    // detect 0.5px supports</span></span>
<span class="line"><span style="color:#babed8;">    if (dpr &gt;= 2) {</span></span>
<span class="line"><span style="color:#babed8;">      var fakeBody = document.createElement(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#babed8;">      var testElement = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#babed8;">      testElement.style.border = &#39;.5px solid transparent&#39;</span></span>
<span class="line"><span style="color:#babed8;">      fakeBody.appendChild(testElement)</span></span>
<span class="line"><span style="color:#babed8;">      docEl.appendChild(fakeBody)</span></span>
<span class="line"><span style="color:#babed8;">      if (testElement.offsetHeight === 1) {</span></span>
<span class="line"><span style="color:#babed8;">        docEl.classList.add(&#39;hairlines&#39;)</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">      docEl.removeChild(fakeBody)</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }(window, document))</span></span></code></pre></div><p>7680*2160 超宽屏下无法全部显示 可以使用下面的方法</p><h3 id="scale方法" tabindex="-1">scale方法 <a class="header-anchor" href="#scale方法" aria-label="Permalink to &quot;scale方法&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">setScale() {</span></span>
<span class="line"><span style="color:#babed8;">  let designWidth = 1920;</span></span>
<span class="line"><span style="color:#babed8;">  let designHeight = 1080;</span></span>
<span class="line"><span style="color:#babed8;">  let scale =</span></span>
<span class="line"><span style="color:#babed8;">    document.documentElement.clientWidth /</span></span>
<span class="line"><span style="color:#babed8;">      document.documentElement.clientHeight &lt;</span></span>
<span class="line"><span style="color:#babed8;">    designWidth / designHeight</span></span>
<span class="line"><span style="color:#babed8;">      ? document.documentElement.clientWidth / clientWidth</span></span>
<span class="line"><span style="color:#babed8;">      : document.documentElement.clientHeight / clientHeight;  //这个地方取高还是取宽根据自己的情况定</span></span>
<span class="line"><span style="color:#babed8;">  document.querySelector(</span></span>
<span class="line"><span style="color:#babed8;">    &quot;#screen&quot;</span></span>
<span class="line"><span style="color:#babed8;">  ).style.transform = \`scale(\${scale}) translate(-50%)\`;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//或者是 完全压缩 </span></span>
<span class="line"><span style="color:#babed8;">getScale() {</span></span>
<span class="line"><span style="color:#babed8;">   const w = window.innerWidth / this.style.width;</span></span>
<span class="line"><span style="color:#babed8;">   const h = window.innerHeight / this.style.height;</span></span>
<span class="line"><span style="color:#babed8;">   return {x:w,y:h};</span></span>
<span class="line"><span style="color:#babed8;">},</span></span>
<span class="line"><span style="color:#babed8;">setScale() {</span></span>
<span class="line"><span style="color:#babed8;">   let scale = this.getScale();</span></span>
<span class="line"><span style="color:#babed8;">   this.style.transform = &quot;scaleY(&quot; + scale.y + &quot;) scaleX(&quot; + scale.x + &quot;) translate(-50%, -50%)&quot;;</span></span>
<span class="line"><span style="color:#babed8;">} //动态注入style</span></span></code></pre></div><p>配合css</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">@design_width: 1920px;</span></span>
<span class="line"><span style="color:#babed8;">@design_height: 1080px;</span></span>
<span class="line"><span style="color:#babed8;">.screen-wrapper {</span></span>
<span class="line"><span style="color:#babed8;">  //position: relative; //看是否接受一些压缩比例变扁的情况 不接受就可以使用滚动 </span></span>
<span class="line"><span style="color:#babed8;">  height: 100%;</span></span>
<span class="line"><span style="color:#babed8;">  width: 100%;</span></span>
<span class="line"><span style="color:#babed8;">  //overflow-y: auto;</span></span>
<span class="line"><span style="color:#babed8;">  //overflow-x: hidden;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  #screen {</span></span>
<span class="line"><span style="color:#babed8;">    width: @design_width;</span></span>
<span class="line"><span style="color:#babed8;">    height: @design_height;</span></span>
<span class="line"><span style="color:#babed8;">    transform-origin: 0 0;</span></span>
<span class="line"><span style="color:#babed8;">    position: absolute;</span></span>
<span class="line"><span style="color:#babed8;">    left: 50%;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><p>最不会失真的方法</p><h3 id="vm" tabindex="-1">vm <a class="header-anchor" href="#vm" aria-label="Permalink to &quot;vm&quot;">​</a></h3><p>直接使用vw单位，屏幕宽度默认为100vw，那么100vw = 1920px；1vw = 19.2px。这个也是使用cssrem插件，直接将body的宽高（1920px * 1080px），将px转成vw单位。（超宽屏也不行） <img src="`+e+`"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#babed8;">      * {</span></span>
<span class="line"><span style="color:#babed8;">        margin: 0;</span></span>
<span class="line"><span style="color:#babed8;">        padding: 0;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">      body {</span></span>
<span class="line"><span style="color:#babed8;">        width: 100vw;</span></span>
<span class="line"><span style="color:#babed8;">        height: 56.25vw;</span></span>
<span class="line"><span style="color:#babed8;">        border: 3px solid red;</span></span>
<span class="line"><span style="color:#babed8;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">      ul {</span></span>
<span class="line"><span style="color:#babed8;">        display: flex;</span></span>
<span class="line"><span style="color:#babed8;">        flex-direction: row;</span></span>
<span class="line"><span style="color:#babed8;">        flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#babed8;">        width: 100%;</span></span>
<span class="line"><span style="color:#babed8;">        height: 100%;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;">      li {</span></span>
<span class="line"><span style="color:#babed8;">        width: 33.333%;</span></span>
<span class="line"><span style="color:#babed8;">        height: 50%;</span></span>
<span class="line"><span style="color:#babed8;">        font-size: 1.5625vw;</span></span>
<span class="line"><span style="color:#babed8;">        list-style: none;</span></span>
<span class="line"><span style="color:#babed8;">        border: 3px solid green;</span></span>
<span class="line"><span style="color:#babed8;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;5&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;li&gt;6&lt;/li&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/html&gt;</span></span></code></pre></div>`,17),o=[t];function c(i,b,d,r,y,h){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};
