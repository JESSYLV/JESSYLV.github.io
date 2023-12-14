import{_ as s,c as n,o as a,O as l}from"./chunks/framework.0d343703.js";const p="/assets/cssrem.41ab3f73.png",h=JSON.parse('{"title":"自适应开发","description":"","frontmatter":{},"headers":[],"relativePath":"articles/自适应开发.md"}'),e={name:"articles/自适应开发.md"},t=l(`<h1 id="自适应开发" tabindex="-1">自适应开发 <a class="header-anchor" href="#自适应开发" aria-label="Permalink to &quot;自适应开发&quot;">​</a></h1><h2 id="css单位了解" tabindex="-1">css单位了解 <a class="header-anchor" href="#css单位了解" aria-label="Permalink to &quot;css单位了解&quot;">​</a></h2><p>px：像素 相对长度单位，相对于显示器屏幕分辨率(推荐使用)<br> em：相对长度单位 基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。<br> rem：相对单位 可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持。<br> vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。<br> vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。<br> vmin：vw和vh中较小的那个。<br> vmax：vw和vh中较大的那个。<br> %:百分比<br> in:寸<br> cm:厘米<br> mm:毫米<br> pt:point，大约1/72寸<br> pc:pica，大约6pt，1/6寸</p><h2 id="前端自适应开发常用方法" tabindex="-1">前端自适应开发常用方法 <a class="header-anchor" href="#前端自适应开发常用方法" aria-label="Permalink to &quot;前端自适应开发常用方法&quot;">​</a></h2><h3 id="rem-font-size" tabindex="-1">rem+font-size <a class="header-anchor" href="#rem-font-size" aria-label="Permalink to &quot;rem+font-size&quot;">​</a></h3><p>动态设置HTML根字体大小和body字体大小，会使用到lib-flexible.js插件（地址<a href="https://github.com/amfe/lib-flexible/blob/2.0/index.js%EF%BC%89" target="_blank" rel="noreferrer">https://github.com/amfe/lib-flexible/blob/2.0/index.js）</a> 使用插件 px to rem(cssrem)来协助展示转换</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      * {</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        padding: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      body {</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 24rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 13.5rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">        border: 3px solid red;</span></span>
<span class="line"><span style="color:#A6ACCD;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ul {</span></span>
<span class="line"><span style="color:#A6ACCD;">        display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">        flex-direction: row;</span></span>
<span class="line"><span style="color:#A6ACCD;">        flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      li {</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 33.333%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        font-size: 0.375rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">        list-style: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">        border: 3px solid green;</span></span>
<span class="line"><span style="color:#A6ACCD;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;5&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;6&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script src=&quot;./js/lib-flexible.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(function flexible (window, document) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var docEl = document.documentElement</span></span>
<span class="line"><span style="color:#A6ACCD;">    var dpr = window.devicePixelRatio || 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // adjust body font size</span></span>
<span class="line"><span style="color:#A6ACCD;">    function setBodyFontSize () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (document.body) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.body.style.fontSize = (16 * dpr) + &#39;px&#39;  //字体设置为16</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.addEventListener(&#39;DOMContentLoaded&#39;, setBodyFontSize)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    setBodyFontSize();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // set 1rem = viewWidth / 24 将1920设置为24份</span></span>
<span class="line"><span style="color:#A6ACCD;">    function setRemUnit () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var rem = docEl.clientWidth / 24</span></span>
<span class="line"><span style="color:#A6ACCD;">      docEl.style.fontSize = rem + &#39;px&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    setRemUnit()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // reset rem unit on page resize</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.addEventListener(&#39;resize&#39;, setRemUnit)</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.addEventListener(&#39;pageshow&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (e.persisted) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setRemUnit()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // detect 0.5px supports</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (dpr &gt;= 2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var fakeBody = document.createElement(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      var testElement = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      testElement.style.border = &#39;.5px solid transparent&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      fakeBody.appendChild(testElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">      docEl.appendChild(fakeBody)</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (testElement.offsetHeight === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        docEl.classList.add(&#39;hairlines&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      docEl.removeChild(fakeBody)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }(window, document))</span></span></code></pre></div><p>7680*2160 超宽屏下无法全部显示 可以使用下面的方法</p><h3 id="scale方法" tabindex="-1">scale方法 <a class="header-anchor" href="#scale方法" aria-label="Permalink to &quot;scale方法&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">setScale() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let designWidth = 1920;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let designHeight = 1080;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let scale =</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.documentElement.clientWidth /</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.documentElement.clientHeight &lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    designWidth / designHeight</span></span>
<span class="line"><span style="color:#A6ACCD;">      ? document.documentElement.clientWidth / clientWidth</span></span>
<span class="line"><span style="color:#A6ACCD;">      : document.documentElement.clientHeight / clientHeight;  //这个地方取高还是取宽根据自己的情况定</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.querySelector(</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;#screen&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ).style.transform = \`scale(\${scale}) translate(-50%)\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//或者是 完全压缩 </span></span>
<span class="line"><span style="color:#A6ACCD;">getScale() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   const w = window.innerWidth / this.style.width;</span></span>
<span class="line"><span style="color:#A6ACCD;">   const h = window.innerHeight / this.style.height;</span></span>
<span class="line"><span style="color:#A6ACCD;">   return {x:w,y:h};</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">setScale() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   let scale = this.getScale();</span></span>
<span class="line"><span style="color:#A6ACCD;">   this.style.transform = &quot;scaleY(&quot; + scale.y + &quot;) scaleX(&quot; + scale.x + &quot;) translate(-50%, -50%)&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">} //动态注入style</span></span></code></pre></div><p>配合css</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@design_width: 1920px;</span></span>
<span class="line"><span style="color:#A6ACCD;">@design_height: 1080px;</span></span>
<span class="line"><span style="color:#A6ACCD;">.screen-wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //position: relative; //看是否接受一些压缩比例变扁的情况 不接受就可以使用滚动 </span></span>
<span class="line"><span style="color:#A6ACCD;">  height: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">  //overflow-y: auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">  //overflow-x: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  #screen {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: @design_width;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: @design_height;</span></span>
<span class="line"><span style="color:#A6ACCD;">    transform-origin: 0 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    position: absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">    left: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>最不会失真的方法</p><h3 id="vm" tabindex="-1">vm <a class="header-anchor" href="#vm" aria-label="Permalink to &quot;vm&quot;">​</a></h3><p>直接使用vw单位，屏幕宽度默认为100vw，那么100vw = 1920px；1vw = 19.2px。这个也是使用cssrem插件，直接将body的宽高（1920px * 1080px），将px转成vw单位。（超宽屏也不行） <img src="`+p+`"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      * {</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        padding: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      body {</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 100vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 56.25vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">        border: 3px solid red;</span></span>
<span class="line"><span style="color:#A6ACCD;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ul {</span></span>
<span class="line"><span style="color:#A6ACCD;">        display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">        flex-direction: row;</span></span>
<span class="line"><span style="color:#A6ACCD;">        flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      li {</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 33.333%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        font-size: 1.5625vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">        list-style: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">        border: 3px solid green;</span></span>
<span class="line"><span style="color:#A6ACCD;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;5&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li&gt;6&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div>`,17),o=[t];function c(i,C,r,A,y,d){return a(),n("div",null,o)}const g=s(e,[["render",c]]);export{h as __pageData,g as default};
