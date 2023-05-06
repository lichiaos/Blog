import{_ as s,o as n,c as a,V as l}from"./chunks/framework.15bfdeb5.js";const A=JSON.parse('{"title":"相似易混点","description":"","frontmatter":{"title":"相似易混点","date":"2018-03-16T00:00:00.000Z","tags":["相似知识点"],"categories":["interview"],"author":"尘丶骁"},"headers":[],"relativePath":"views/interview/相互比较呀.md","filePath":"views/interview/相互比较呀.md"}'),p={name:"views/interview/相互比较呀.md"},e=l(`<h2 id="_1-防抖和节流" tabindex="-1">1. 防抖和节流 <a class="header-anchor" href="#_1-防抖和节流" aria-label="Permalink to &quot;1. 防抖和节流&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">区别</p><ol><li>防抖: 限制触发事件的时间间隔. 维护一个定时器, 在规定时间内触发的话会重置定时器.</li><li>节流: 在规定的时间内函数只触发一次.相较于防抖最大的区别就是不管时间触发多频繁, 都保证只在规定的时间内触发一次, 防抖只是最后一次事件才触发</li></ol></div><h3 id="防抖函数" tabindex="-1">防抖函数 <a class="header-anchor" href="#防抖函数" aria-label="Permalink to &quot;防抖函数&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 防抖函数</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">wait</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 如果有一个函数在等待执行 清除定时器 下面重新计时</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// wait时间后(期间不能再触发debounce) 执行回调</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wait</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> actionFn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">回调</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 要执行的函数</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#82AAFF;">setInterval</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">debounce</span><span style="color:#A6ACCD;">(actionFn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 第一次在1500ms后触发，之后每1000ms触发一次</span></span>
<span class="line"><span style="color:#82AAFF;">setInterval</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">debounce</span><span style="color:#A6ACCD;">(actionFn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 还没执行就一直重复触发,不会执行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="节流函数" tabindex="-1">节流函数 <a class="header-anchor" href="#节流函数" aria-label="Permalink to &quot;节流函数&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 节流函数 每隔一定时间就执行</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">gapTime</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_lastTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_nowTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">_nowTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_lastTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gapTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">_lastTime</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// !_lastTime 第一次进入</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 当前时间- 上次执行的时间 超过 给定时间间隔 就执行回调</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">_lastTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_nowTime</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 触发后，上次执行时间赋值为当前时间</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> actionFn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">回调</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 要执行的函数</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#82AAFF;">setInterval</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">throttle</span><span style="color:#A6ACCD;">(actionFn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 每隔10毫秒都会触发一次throttle，每隔一秒触发一次actionFn回调(1秒内再次触发被丢弃)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_2-tcp和udp" tabindex="-1">2. TCP和UDP <a class="header-anchor" href="#_2-tcp和udp" aria-label="Permalink to &quot;2. TCP和UDP&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1.TCP是面向连接的运输层协议；UDP是无连接的，即发送数据之前不需要建立链接，因此减少了开销和发送数据的时延。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">2.TCP提供可靠交付的服务，通过TCP连接传送的数据，无差错、不丢失、不重复、并且按时到达；UDP使用最大努力交付，即不保证可靠性交付，因此主机不需要维持复杂的连接状态。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3.TCP面向字节流，TCP中的“流”指的是流入到进程或从进程流出的字节序列；UDP是面向报文的，发送方的UDP对应用程序交下来的报文，在添加首部后就向下交付IP层。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">4.UDP没有拥塞控制，因此网络出现的拥塞不会使源主机的发送速率降低，符合很多实时应用（如IP电话、实时视频会议等）的要求。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">5.每一条TCP连接只能有两个端点，每一条TCP连接只能是点对点的；UDP支持一对一、一对多、多对一和多对多的交互通信。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">6.UDP的首部开销小，只有8个字节，比TCP的20个字节的首部短。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">7.TCP提供可靠的全双工通信，TCP允许通信双方的应用进程在任何时候都能发送数据；UDP是不可靠信道。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_3-get和post" tabindex="-1">3. GET和POST <a class="header-anchor" href="#_3-get和post" aria-label="Permalink to &quot;3. GET和POST&quot;">​</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GET请求在浏览器回退时是无害的，POST会再次提交请求</span></span>
<span class="line"><span style="color:#A6ACCD;">GET请求产生的URL地址可以被收藏，而POST不可以</span></span>
<span class="line"><span style="color:#A6ACCD;">GET请求会被浏览器主动缓存，而POST不会，除非手动设置</span></span>
<span class="line"><span style="color:#A6ACCD;">GET请求只能进行URL编码，而POST支持多种编码方式</span></span>
<span class="line"><span style="color:#A6ACCD;">GET请求参数会被完整的保留在浏览器历史记录里，而POST中的参数不会被保留</span></span>
<span class="line"><span style="color:#A6ACCD;">GET请求在URL中传递的参数是有长度限制的（不固定，因浏览器决定），而POST没有限制</span></span>
<span class="line"><span style="color:#A6ACCD;">GET请求只接受ASC2字符，而对参数的数据类型POST没有限制</span></span>
<span class="line"><span style="color:#A6ACCD;">GET请求比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感数据</span></span>
<span class="line"><span style="color:#A6ACCD;">GET请求参数通过URL传递，而POST放在request.body上</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-cookie和storage" tabindex="-1">4. cookie和Storage <a class="header-anchor" href="#_4-cookie和storage" aria-label="Permalink to &quot;4. cookie和Storage&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">从数据生命周期上来说:</span></span>
<span class="line"><span style="color:#A6ACCD;">    cookie：一般由服务器端生成，可设置失效时间，如果在浏览器端生成cookie，则默认关闭浏览器后失效。</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage： 永久保存，除非被清除。</span></span>
<span class="line"><span style="color:#A6ACCD;">    sessionStorage： 仅在当前会话下有效，关闭页面或者浏览器被清除。</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">从数据存储方面来说: </span></span>
<span class="line"><span style="color:#A6ACCD;">    cookie大小为4KB左右</span></span>
<span class="line"><span style="color:#A6ACCD;">    storage一般为5MB</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">从与服务器端通信方面: </span></span>
<span class="line"><span style="color:#A6ACCD;">    cookie每次都会携带在HTTP头中，如果cookie保存过多会带来性能问题</span></span>
<span class="line"><span style="color:#A6ACCD;">    storage仅在客户端保存，不参与和服务器的通信</span></span>
<span class="line"><span style="color:#A6ACCD;">4</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">从易用性方面来说: </span></span>
<span class="line"><span style="color:#A6ACCD;">    cookie原生接口不友好</span></span>
<span class="line"><span style="color:#A6ACCD;">    storage原生接口友好，也可自行封装</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_5-inline和block" tabindex="-1">5. inline和block <a class="header-anchor" href="#_5-inline和block" aria-label="Permalink to &quot;5. inline和block&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">块级元素的特点：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    总是在新行上开始</span></span>
<span class="line"><span style="color:#A6ACCD;">    高度、行高以及内外边距都可以控制</span></span>
<span class="line"><span style="color:#A6ACCD;">    宽度默认是它容器的100</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">，除非设置一个值</span></span>
<span class="line"><span style="color:#A6ACCD;">    它可以容纳内联元素和其他块级元素</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">内联元素的特点：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    和其他元素都在同一行</span></span>
<span class="line"><span style="color:#A6ACCD;">    高度、行高以及内外边距都不可控制</span></span>
<span class="line"><span style="color:#A6ACCD;">    宽度就是它的文字或图片的高度，不可改变</span></span>
<span class="line"><span style="color:#A6ACCD;">    内联元素只能容纳文本或者其他内联元素</span></span>
<span class="line"><span style="color:#A6ACCD;">    常见的块级元素：</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">address、center、div、dir、from、h1-h6、hr、ol、ul、li、table、p、pre、menu</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> 等</span></span>
<span class="line"><span style="color:#A6ACCD;">    常见的内联元素：</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">a、b、br、em、font、i、img、input、label、select、span、strong、textarea</span><span style="color:#89DDFF;">\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注:</p><p>设置了float或者position值为absolute和fixed都会使原来的内联元素变成块级元素。</p></div><h2 id="_6-window-onload和window-domcontentloaded" tabindex="-1">6. window.onload和window.DOMContentLoaded <a class="header-anchor" href="#_6-window-onload和window-domcontentloaded" aria-label="Permalink to &quot;6. window.onload和window.DOMContentLoaded&quot;">​</a></h2><p><strong>考点</strong>: 页面渲染</p><ol><li>load 页面全部资源加载完才执行, 包括视频, 图片</li><li>DOMContentLoaded Dom渲染即可执行, 此时图片视频有可能还没加载完</li></ol><h2 id="_7-正向代理和反向代理" tabindex="-1">7. 正向代理和反向代理 <a class="header-anchor" href="#_7-正向代理和反向代理" aria-label="Permalink to &quot;7. 正向代理和反向代理&quot;">​</a></h2><ol><li>代理对象不同, 正向代理代理的是客户端, 反向代理代理的是服务端</li><li>正向代理会明确知道代理的目标, 而反向代理我们只知道方向代理服务器, 而真实的服务器我们是不知道的</li></ol><h2 id="_7-性能优化" tabindex="-1">7. 性能优化 <a class="header-anchor" href="#_7-性能优化" aria-label="Permalink to &quot;7. 性能优化&quot;">​</a></h2><h3 id="原则" tabindex="-1">原则 <a class="header-anchor" href="#原则" aria-label="Permalink to &quot;原则&quot;">​</a></h3><ol><li>多使用内存缓存或其他方法</li><li>减少CPU计算, 网络请求</li></ol>`,23),o=[e];function r(c,t,i,y,D,F){return n(),a("div",null,o)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};
