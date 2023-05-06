import{_ as s,o as n,c as a,V as l}from"./chunks/framework.15bfdeb5.js";const C=JSON.parse('{"title":"插件集","description":"","frontmatter":{"title":"插件集","date":"2018-09-10T00:00:00.000Z","tags":["插件编写"],"categories":["frontEnd"]},"headers":[],"relativePath":"views/interview/回到顶部.md","filePath":"views/interview/回到顶部.md"}'),o={name:"views/interview/回到顶部.md"},p=l(`<h2 id="回到顶部" tabindex="-1">回到顶部 <a class="header-anchor" href="#回到顶部" aria-label="Permalink to &quot;回到顶部&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BackTop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ele</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaultOptions</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">ele</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ele</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ele</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ele</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">util</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaultOptions</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">init</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>需要在使用的时候创建一个实例, 接受两个参数, dom元素和配置, 配置包括距离顶部的位置, 渐变的速度还有回到顶部的速度, 紧接着在初始化的时候对元素进行状态改变以及事件绑定</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">hideElement</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 对元素进行透明度的隐藏</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">bindScrollEvent</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 对其监听scroll事件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">bindToTopEvent</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 判断是否支持手机事件, 并对其添加点击或touch事件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="顶部进度条" tabindex="-1">顶部进度条 <a class="header-anchor" href="#顶部进度条" aria-label="Permalink to &quot;顶部进度条&quot;">​</a></h2>`,5),e=[p];function t(r,c,F,y,i,D){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
