import{_ as t,c as s,a,z as e,O as n,o as r}from"./chunks/framework.0d343703.js";const o="/assets/line-simple.980c09fe.png",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/echarts使用总结.md"}'),c={name:"articles/echarts使用总结.md"},i=e("h2",{id:"echarts图形的x、y坐标文字设置间隔显示",tabindex:"-1"},[a("echarts图形的x、y坐标文字设置间隔显示 "),e("a",{class:"header-anchor",href:"#echarts图形的x、y坐标文字设置间隔显示","aria-label":'Permalink to "echarts图形的x、y坐标文字设置间隔显示"'},"​")],-1),l=e("img",{src:o},null,-1),_=n(`<pre><code>        }
    }
},
series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901,
    934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320],
    type: &#39;line&#39;,
    smooth: true
}]
</code></pre><p>};</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3);function p(d,h,u,m,y,x){return r(),s("div",null,[i,l,a(" ``` option = { xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon1', 'Tue1', 'Wed1', 'Thu1', 'Fri1', 'Sat1', 'Sun1', 'Mon2', 'Tue2', 'Wed2', 'Thu2', 'Fri2', 'Sat2', 'Sun2'], axisLabel:{ interval:2 //interval只对category有用 } }, yAxis: { type: 'value', splitNumber: 24, //inverse: true,//顺序不变（在xy互换时候常用） axisLabel:{ formatter: (val,key)=>{ if(key%3 == 0 ){ return val } "),_])}const S=t(c,[["render",p]]);export{f as __pageData,S as default};
