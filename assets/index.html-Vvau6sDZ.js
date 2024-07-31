import{_ as l,r as i,o as p,c as t,b as n,d as s,e as c,a}from"./app-B6M6IRTl.js";const d="/assets/05c369827e234a21ad06ba96de5deb49~tplv-k3u1fbpfcp-watermark-DkIe49c_.png",r="/assets/Snipaste_2023-11-28_13-33-55-ZrAL7exp.png",o="/assets/%E5%9B%BE%E7%89%872-6nTCNqpa.png",v="/assets/Snipaste_2023-12-01_13-31-09-DC-Pwruq.png",u="/assets/%E5%9B%BE%E7%89%873-CYx38dw-.png",m="/assets/Snipaste_2023-12-01_20-05-12-wkyqVHNE.png",b="/assets/Snipaste_2023-12-01_20-04-11-kbt6jMVu.png",h="/assets/Snipaste_2023-12-01_20-13-01-DdPHNx7p.png",g="/assets/%E5%9B%BE%E7%89%874-_hPcNGFB.png",k="/assets/%E5%9B%BE%E7%89%875-zgG2FS4B.png",f="/assets/image-20240615140018390-DS27DjhJ.png",_="/assets/Snipaste_2024-06-15_14-01-10-DyAsBIim.png",x="/assets/Snipaste_2023-12-06_22-19-46-1X6Mp2uy.png",R="/assets/Snipaste_2023-12-09_16-29-36-DIwOoTWm.png",S="/assets/Snipaste_2023-12-09_16-30-30-d7f5q35H.png",y="/assets/Snipaste_2023-12-09_18-28-52-BnKo9z3q.png",C="/assets/Snipaste_2023-12-09_18-29-28-uCALGQl7.png",q={},D=a('<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react"><span>React</span></a></h1><p>邂逅React开发（分而治之） React的特点 – 声明式编程</p><p>声明式编程是目前整个大前端开发的模式：Vue、React、Flutter、SwiftUI；</p><p>它允许我们只需要维护自己的状态，当状态改变时，React可以根据最新的状态去渲染我们的UI界面</p><h2 id="react特点" tabindex="-1"><a class="header-anchor" href="#react特点"><span>React特点</span></a></h2><p>​ 组件化开发</p><p>​ 多平台适配</p><ol><li>2013年，React发布之初主要是开发Web页面；</li><li>2015年，Facebook推出了ReactNative，用于开发移动端跨平台；（虽然目前Flutter非常火爆，但是还是有很多公司在使用 ReactNative）；</li><li>2017年，Facebook推出ReactVR，用于开发虚拟现实Web应用程序；（VR也会是一个火爆的应用场景）；</li></ol><h3 id="react的开发依赖" tabindex="-1"><a class="header-anchor" href="#react的开发依赖"><span>React的开发依赖</span></a></h3><p>开发React必须依赖三个库</p><ol><li>react：包含react所必须的核心代码</li><li>react-dom：react渲染在不同平台所需要的核心代码</li><li>babel：将jsx转换成React代码的工具</li></ol><p>为什么要进行拆分呢？原因就是react-native</p><p>react包中包含了react web和react-native所共同拥有的核心代码。</p><p>react-dom针对web和native所完成的事情不同： ✓ web端：</p><p>react-dom会将jsx最终渲染成真实的DOM，显示在浏览器中 ✓ native端</p><p>react-dom会将jsx最终渲染成原生的控件（比如Android中的Button，iOS中的UIButton）</p><p><strong>cdn 引入</strong></p><p>计算器案例</p><p><img src="'+d+`" alt=""></p><h4 id="_0-组件分类" tabindex="-1"><a class="header-anchor" href="#_0-组件分类"><span>0 组件分类</span></a></h4><p>React的组件相对于Vue更加的灵活和多样，按照不同的方式可以分成很多类组件：</p><ol><li><p>根据组件的定义方式，可以分为：</p><ol><li><strong>函数组件(Functional Component )<strong>和</strong>类组件(Class Component)；</strong></li></ol></li><li><p>根据组件内部是否有状态需要维护，可以分成：</p><ol><li><strong>无状态组件(Stateless Component )<strong>和</strong>有状态组件(Stateful Component)；</strong></li></ol></li><li><p>根据组件的不同职责，可以分成：</p><ol><li><strong>展示型组件(Presentational Component)<strong>和</strong>容器型组件(Container Component)；</strong></li></ol></li></ol><p>这些概念有很多重叠，但是他们最主要是关注数据逻辑和UI展示的分离：</p><p>​ 函数组件：无状态组件、展示型组件主要关注UI的展示；</p><p>​ 类组件：有状态组件、容器型组件主要关注数据逻辑</p><h3 id="_1-1-类组件" tabindex="-1"><a class="header-anchor" href="#_1-1-类组件"><span>1.1 类组件</span></a></h3><p>类组件的定义有如下要求：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token number">1</span>. 组件的名称是大写字符开头（无论类组件还是函数组件）</span>
<span class="line"><span class="token number">2</span>. 类组件需要继承自 React.Component</span>
<span class="line"><span class="token number">3</span>. 类组件必须实现render函数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ES6之前，可以通过create-react-class 模块来定义类组件，但是目前官网建议我们使用ES6的class类定义。</p><p>使用class定义一个组件：</p><p>​ constructor是可选的，我们通常在constructor中初始化一些数据；</p><p>​ this.state中维护的就是我们组件内部的数据；</p><p>​ render() 方法是 class 组件中唯一必须实现的方法；</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">import  React  from &#39;react&#39;</span>
<span class="line">export class App extends React.Component {</span>
<span class="line">    constructor(){</span>
<span class="line">        super(); // 必须首先调用 super()，并传递 props</span>
<span class="line">                // 在这里可以安全地使用 this 关键字</span>
<span class="line">        this.state = {</span>
<span class="line">            name: &#39;李华&#39;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    render(){</span>
<span class="line">        return (</span>
<span class="line">            &lt;h2&gt;className: {this.state.name}&lt;/h2&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">// 调用 createRoot(domNode, options?) 以在浏览器 DOM 元素中创建根节点显示内容</span>
<span class="line">// createRoot 返回一个带有两个方法的的对象，这两个方法是：render 和 unmount。</span>
<span class="line">const root = createRoot(document.getElementById(&#39;root&#39;));</span>
<span class="line">root.render(</span>
<span class="line">      &lt;App/&gt;</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-1-1-render函数" tabindex="-1"><a class="header-anchor" href="#_1-1-1-render函数"><span>1.1.1 <strong>render函数</strong></span></a></h5><p><strong>啥时候会被调用</strong></p><ol><li><p>第一次渲染的时候</p></li><li><p>检测到this.props 和 this.state（调用this.setState()）变化的时候</p></li></ol><p>render函数的返回值</p><p>当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：</p><ol><li>React 元素：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">通常通过 JSX 创建。</span>
<span class="line">例如，&lt;div /&gt; 会被 React 渲染为 DOM 节点，&lt;MyComponent /&gt; 会被 React 渲染为自定义组件；</span>
<span class="line">无论是 &lt;div /&gt; 还是 &lt;MyComponent /&gt; 均为 React 元素。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 通过babel转化成React.createElement() 因此被称为react元素</p><p><img src="`+r+'" alt=""></p><ol start="2"><li>数组或 fragments：使得 render 方法可以返回多个元素。</li><li>Portals：可以渲染子节点到不同的 DOM 子树中。</li><li>字符串或数值类型：它们在 DOM 中会被渲染为文本节点，比不是React元素</li><li>布尔类型或 null：什么都不渲染。</li></ol><h3 id="_1-2-函数组件" tabindex="-1"><a class="header-anchor" href="#_1-2-函数组件"><span>1.2 函数组件</span></a></h3><p>函数组件是使用function来进行定义的函数，</p><p><strong>只是这个函数会返回和类组件中render函数返回一样的内容</strong>。</p><p>函数组件有自己的特点（当然，后面我们会讲hooks，就不一样了）。</p><p>​ 没有生命周期，也会被更新并挂载，但是没有生命周期函数；</p><p>​ this关键字不能指向组件实例（因为没有组件实例）；</p><p>​ 没有内部状态（state）；</p><p>我们来定义一个函数组件：</p><p><img src="'+o+`" alt=""></p><p>后面学习Hooks时，会针对函数式组件进行更多的学习。</p><p>​ 函数组件嵌套</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 函数式组件</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">ChildComponent</span>  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>app<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> </span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token number">12311312</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>ChildComponent  <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-组件的样式" tabindex="-1"><a class="header-anchor" href="#_1-3-组件的样式"><span>1.3 <strong>组件的样式</strong></span></a></h3><ul><li>行内样式</li></ul><p>​ 想给虚拟dom添加行内样式，需要使用表达式传入样式对象的方式来实现：</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">// 注意这里的两个括号，第一个表示我们在要JSX里插入JS了，第二个是对象的括号</span>
<span class="line">&lt;p style={{color:&#39;red&#39;, fontSize:&#39;14px&#39;}}&gt;Hello world&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>内联样式，使用CSS文件</li></ul><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">const textStyle = {</span>
<span class="line">      color: &#39;red&#39;,</span>
<span class="line">      fontSize: &#39;16px&#39;,</span>
<span class="line">      fontWeight: &#39;bold&#39;,</span>
<span class="line">    };</span>
<span class="line">    return (</span>
<span class="line">      &lt;div&gt;</span>
<span class="line">        &lt;h2 style={{color: &#39;red&#39;}}&gt;原来，天上的星，都是曾被人惦念而又遗忘的梦啊。&lt;/h2&gt;</span>
<span class="line">        {/* 内联样式：可以直接在组件的 JSX 中使用 style 属性来指定内联样式。样式需要以 JavaScript 对象的形式传递，属性名采用驼峰式写法，属性值为样式值。 */}</span>
<span class="line">        &lt;h3 style={textStyle}&gt;阶砖不会拒绝磨蚀，窗花不可幽禁落霞。&lt;/h3&gt;</span>
<span class="line">        {/* 使用CSS文件：在React应用中，你也可以像普通的网页开发一样，创建一个独立的CSS文件，并在组件中引入。你可以使用className属性给元素添加类名，并在CSS文件中定义相应的样式。 */}</span>
<span class="line">        &lt;h4 className=&quot;HeLlo&quot;&gt; 不负韶华，不忘初心&lt;/h4&gt;</span>
<span class="line">        &lt;ChildComponent  /&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line"> )</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-事件处理" tabindex="-1"><a class="header-anchor" href="#_1-4-事件处理"><span>1.4 事件处理</span></a></h3><h4 id="_1-4-1-类组件" tabindex="-1"><a class="header-anchor" href="#_1-4-1-类组件"><span>1.4.1 类组件</span></a></h4><p>1 事件绑定中的this</p><ul><li>在类中直接定义一个函数，并且将这个函数绑定到元素的onClick事件上，当前这个函数的this指向的是谁呢？</li><li>默认情况下是undefined</li><li>因为在正常的DOM操作中，监听点击，监听函数中的this其实是节点对象（比如说是button对象）</li><li>这次因为React并不是直接渲染成真实的DOM，我们所编写的button只是一个语法糖，它的本质React的Element对象；</li><li>那么在这里发生监听的时候，react在执行函数时并没有绑定this，默认情况下就是一个undefined</li></ul><p>2 我们在绑定的函数中，可能想要使用当前对象，比如执行 this.setState 函数，就必须拿到当前对象的this</p><ul><li><p>我们就需要在传入函数时，给这个函数直接绑定this</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">import React from &#39;react&#39;</span>
<span class="line">export class App extends React.Component {</span>
<span class="line">    constructor() {</span>
<span class="line">        super(); // 必须首先调用 super()，并传递 props</span>
<span class="line">                 // 在这里可以安全地使用 this 关键字</span>
<span class="line">        // console.log(this) // APP实例</span>
<span class="line">        this.state = {</span>
<span class="line">            name: &#39;李华&#39;</span>
<span class="line">        }</span>
<span class="line">        this.editname2 = this.editname2.bind(this)</span>
<span class="line">    }</span>
<span class="line">    editname1(){</span>
<span class="line">        console.log(this) // undefined</span>
<span class="line">    }</span>
<span class="line">    editname2(){</span>
<span class="line">        console.log(this) // App 比如执行 this.setState 函数，就必须拿到当前对象的this</span>
<span class="line">        this.setState({</span>
<span class="line">            name: &#39;李忠&#39;</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">        console.log(this)</span>
<span class="line">        return (</span>
<span class="line">            &lt;div&gt;</span>
<span class="line">                &lt;h2&gt;className: {this.state.name}&lt;/h2&gt;</span>
<span class="line">                &lt;button onClick={this.editname1}&gt;editName1&lt;/button&gt;</span>
<span class="line">                &lt;button onClick={this.editname2}&gt;editName2&lt;/button&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>电影列表案例</p></li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5569a58f2f4546db9585b2a8e5a5986c~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h4 id="_1-4-2-函数组件-hook-component" tabindex="-1"><a class="header-anchor" href="#_1-4-2-函数组件-hook-component"><span>1.4.2 函数组件 hook Component</span></a></h4><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">import { useState } from &quot;react&quot;</span>
<span class="line"></span>
<span class="line">export function App() {</span>
<span class="line">    const [name, setName] = useState(&#39;李华&#39;);</span>
<span class="line"></span>
<span class="line">    const editname1 = () =&gt; {</span>
<span class="line">        setName(&#39;李忠&#39;)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;h2&gt;className: {name}&lt;/h2&gt;</span>
<span class="line">            &lt;button onClick={editname1}&gt;editName1&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-3-表单中的受控组件与非受控组件" tabindex="-1"><a class="header-anchor" href="#_1-4-3-表单中的受控组件与非受控组件"><span>1.4.3 <strong>表单中的受控组件与非受控组件</strong></span></a></h4><p>​ 非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，有时候反而更容易同时集</p><p>成 React 和非 React 代码。</p><p>​ 如果你不介意代码美观性，<strong>并且希望快速编写代码，使用非受控组件往往可</strong></p><p><strong>以减少你的代码量</strong>。否则，你应该使用受控组件。</p><h5 id="非受控组件" tabindex="-1"><a class="header-anchor" href="#非受控组件"><span><strong>非受控组件</strong></span></a></h5><p>React要编写一个非受控组件，可以 使用 ref 来从 DOM 节点中获取表单数据，就是非受控组件。</p><p>​ 例如，下面的代码使用非受控组件接受一个表单的值：</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">class NameForm extends React.Component {</span>
<span class="line">    constructor(props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.handleSubmit = this.handleSubmit.bind(this);</span>
<span class="line">        this.input = React.createRef();</span>
<span class="line">    }</span>
<span class="line">    handleSubmit(event) {</span>
<span class="line">        alert(&#39;A name was submitted: &#39; + this.input.current.value);</span>
<span class="line">        event.preventDefault();</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">                &lt;form onSubmit={this.handleSubmit}&gt;</span>
<span class="line">                    &lt;label&gt;</span>
<span class="line">                    Name:</span>
<span class="line">                    &lt;input type=&quot;text&quot; ref={this.input} /&gt;</span>
<span class="line">                    &lt;/label&gt;</span>
<span class="line">                	&lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;</span>
<span class="line">                &lt;/form&gt;</span>
<span class="line">        );</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ <strong>默认值</strong></p><p>​ 在 React 渲染生命周期时，表单元素上的 value 将会覆盖 DOM 节点中的值，在非受控组件中，你经</p><p>​ 常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个</p><p>​ defaultValue 属性，而不是 value 。</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">render() {</span>
<span class="line">    return (</span>
<span class="line">        &lt;form onSubmit={this.handleSubmit}&gt;</span>
<span class="line">            &lt;label&gt;</span>
<span class="line">            Name:</span>
<span class="line">            &lt;input</span>
<span class="line">            defaultValue=&quot;Bob&quot;</span>
<span class="line">            type=&quot;text&quot;</span>
<span class="line">            ref={this.input} /&gt;</span>
<span class="line">            &lt;/label&gt;</span>
<span class="line">            &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;</span>
<span class="line">        &lt;/form&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">​		<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span><span class="token operator">&gt;</span> 和 <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;radio&quot;</span><span class="token operator">&gt;</span> 支持 defaultChecked </span>
<span class="line"></span>
<span class="line">​		同理<span class="token operator">&lt;</span>select<span class="token operator">&gt;</span>和 <span class="token operator">&lt;</span>textarea<span class="token operator">&gt;</span> 支持 defaultValue  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件"><span><strong>受控组件</strong></span></a></h5><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">class NameForm extends React.Component {</span>
<span class="line">    constructor(props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.state = {value: &#39;&#39;};</span>
<span class="line">        this.handleChange = this.handleChange.bind(this);</span>
<span class="line">        this.handleSubmit = this.handleSubmit.bind(this);</span>
<span class="line">     }</span>
<span class="line">     handleChange(event) {</span>
<span class="line">        this.setState({value: event.target.value});</span>
<span class="line">     }</span>
<span class="line">      handleSubmit(event) {</span>
<span class="line">        alert(&#39;提交的名字: &#39; + this.state.value);</span>
<span class="line">        event.preventDefault();</span>
<span class="line">     }</span>
<span class="line">      render() {</span>
<span class="line">        return (</span>
<span class="line">          &lt;form onSubmit={this.handleSubmit}&gt;</span>
<span class="line">            &lt;label&gt;</span>
<span class="line">              名字:</span>
<span class="line">              &lt;input type=&quot;text&quot; value={this.state.value} onChange={this.handleChange} </span>
<span class="line">            &lt;/label&gt;</span>
<span class="line">            &lt;input type=&quot;submit&quot; value=&quot;提交&quot; /&gt;</span>
<span class="line">          &lt;/form&gt;   </span>
<span class="line">          );</span>
<span class="line">     }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 由于在表单元素上设置了 value 属性，因此显示的值将始终为 this.state.value ，这使得 React 的 state 成为</p><p>​ 唯一数据源。由于 handlechange 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而</p><p>​ 更新。</p><h3 id="_1-5-ref的应用" tabindex="-1"><a class="header-anchor" href="#_1-5-ref的应用"><span>1.5 Ref的应用</span></a></h3><p>​ <strong>给标签设置</strong>ref=&quot;username&quot;</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">通过这个获取<span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>usernme <span class="token punctuation">,</span> ref可以获取到应用的真实dom</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">class App extends Component {</span>
<span class="line">    constructor() {</span>
<span class="line">        super()</span>
<span class="line">        this.state = {</span>
<span class="line">            name: &#39;React&#39;,</span>
<span class="line">            isLiked: false</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 方法</span>
<span class="line">    testa() {</span>
<span class="line">        console.log(123)</span>
<span class="line">        this.setState({</span>
<span class="line">          name: &#39;Vue&#39;  </span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">    inputRef = React.createRef() // 访问this.myRef.current</span>
<span class="line"></span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div&gt;   </span>
<span class="line">                    &lt;input ref={this.inputRef}&gt;&lt;/input&gt;</span>
<span class="line">                    &lt;button onClick={()=&gt;{ console.log(this.inputRef.current.value)}}&gt;get&lt;/button&gt;</span>
<span class="line">                    &lt;h2&gt;{this.state.name}&lt;/h2&gt;</span>
<span class="line">                    &lt;button onClick={this.testa.bind(this)}&gt; edit &lt;/button&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">            </span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-组件的数据挂载方式" tabindex="-1"><a class="header-anchor" href="#_1-6-组件的数据挂载方式"><span>1.6 <strong>组件的数据挂载方式</strong></span></a></h3><h4 id="状态-state" tabindex="-1"><a class="header-anchor" href="#状态-state"><span>状态**(state)**</span></a></h4><p>状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态</p><p>的目的就是为了在不同的状态下使组件的显示不同(自己管理)</p><p><strong>(1)</strong> <strong>定义</strong>state</p><p>第一种方式</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">import React,  { Component } from &quot;react&quot;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class App extends Component {</span>
<span class="line">     </span>
<span class="line">        state = {</span>
<span class="line">            name: &#39;React&#39;,</span>
<span class="line">            isLiked: false</span>
<span class="line">            }</span>
<span class="line">        // 方法</span>
<span class="line">        testa (){</span>
<span class="line">            console.log(&#39;testa&#39;)</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        render (){</span>
<span class="line">            return (</span>
<span class="line">                &lt;h2&gt;{this.state.name}&lt;/h2&gt;</span>
<span class="line">            )</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种方式</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">class App extends Component {</span>
<span class="line">    constructor() {</span>
<span class="line">        super()</span>
<span class="line">        this.state = {</span>
<span class="line">            name: &#39;React&#39;,</span>
<span class="line">            isLiked: false</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 方法</span>
<span class="line">    testa() {</span>
<span class="line">        console.log(123)</span>
<span class="line">        this.setState({</span>
<span class="line">          name: &#39;Vue&#39;  </span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div&gt;</span>
<span class="line">                    &lt;h2&gt;{this.state.name}&lt;/h2&gt;</span>
<span class="line">                    &lt;button onClick={this.testa.bind(this)}&gt; edit &lt;/button&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">            </span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>this.state 是纯js对象,在vue中，data属性是利用 Object.defineProperty 处理过的，更改data的数据的时候会触发数据的getter 和 setter ，但是React中没有做这样的处理，如果直接更改的话，</p><p>react是无法得知的，所以，需要使用特殊的更改状态的方法 setState 。</p><p><strong>setState</strong></p><p>setState 有两个参数</p><p>注意： setstate 处在 同步的逻辑中， <strong>异步更新状态</strong>， 更新真实DOM</p><pre><code>-  处在异步的逻辑中， 同步更新状态， 同步更新真实DOM
-  接收第二个参数， 第二个参数回调函数，状态和DOM更新完后就会被触发
</code></pre><p>例子：</p><p>better-scroll 滚动第三方库</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">import React, { Component } from &quot;react&quot;</span>
<span class="line">import BetterScroll from &#39;better-scroll&#39;</span>
<span class="line"></span>
<span class="line">class App extends Component {</span>
<span class="line">    constructor() {</span>
<span class="line">        super()</span>
<span class="line">        this.state = {</span>
<span class="line">            name: []</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    const wrapper = { height: &#39;200px&#39;, backgroundColor: &#39;yellow&#39;, overflow: &#39;hidden&#39; }</span>
<span class="line">    // 方法</span>
<span class="line">    testa() {</span>
<span class="line">        this.setState({</span>
<span class="line">            name: [1, 2, 3, 4, 5, 6, 12312312, 7, 8, 123, 81111111111, 954, 64, 54, 45, 645]</span>
<span class="line">        },</span>
<span class="line">        // 第二个参数： 此处是异步，须在这里拿到数据进行渲染</span>
<span class="line">         () =&gt; {</span>
<span class="line">            console.log(this.state.name)</span>
<span class="line">            new BetterScroll(&#39;.wrapper&#39;, {</span>
<span class="line">                movable: true,</span>
<span class="line">                zoom: true</span>
<span class="line">            })</span>
<span class="line">        }</span>
<span class="line">    )</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div&gt;</span>
<span class="line">                &lt;button onClick={this.testa.bind(this)}&gt; edit &lt;/button&gt;</span>
<span class="line">                &lt;div className=&quot;wrapper&quot;&gt;</span>
<span class="line">                    &lt;ul className=&quot;content&quot; &gt;</span>
<span class="line">                        {</span>
<span class="line">                            this.state.name.map((item) =&gt;</span>
<span class="line">                                &lt;li key={item}&gt;{item}&lt;/li&gt;</span>
<span class="line">                            )</span>
<span class="line">                        }</span>
<span class="line">                    &lt;/ul&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="属性-props" tabindex="-1"><a class="header-anchor" href="#属性-props"><span><strong>属性</strong>(props)</span></a></h4><p>props 是正常是外部传入的，组件内部也可以通过一些方式来初始化的设置，属性不能被组件自己更</p><p>改，但是你可以通过父组件主动重新渲染的方式来传入新的 props</p><p>类组件</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">import React, { Component, createRef } from &quot;react&quot;</span>
<span class="line">import PropTypes from &#39;prop-types&#39;;</span>
<span class="line">class App extends Component {</span>
<span class="line">    constructor() {</span>
<span class="line">        super()</span>
<span class="line">        </span>
<span class="line">        this.state = {</span>
<span class="line">            name: &#39;React&#39;,</span>
<span class="line">            isLiked: false</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">    }</span>
<span class="line">    // 默认参数</span>
<span class="line">    static defaultProps = {</span>
<span class="line">         color: &#39;blue&#39;</span>
<span class="line">    };</span>
<span class="line">    // 默认类型检验</span>
<span class="line">    static propTypes = {</span>
<span class="line">        color: PropTypes.string</span>
<span class="line">      };</span>
<span class="line">    // 方法</span>
<span class="line">    testa() {</span>
<span class="line">        this.setState({</span>
<span class="line">          name: &#39;Vue&#39;  </span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    render() {</span>
<span class="line">        let { subtitle, truth, color } = this.props</span>
<span class="line">        return (</span>
<span class="line">          </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            &lt;div&gt;   </span>
<span class="line">                    &lt;h2&gt;{this.props.title}&lt;/h2&gt;</span>
<span class="line">                    &lt;h3&gt;{this.props.subtitle}&lt;/h3&gt;</span>
<span class="line">                    我是 { truth ? &lt;span&gt;真的&lt;/span&gt; : &lt;span&gt;假的&lt;/span&gt;}</span>
<span class="line">                    color: {this.props.color}</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">            </span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数组件</p><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">function Avatar(props) {</span>
<span class="line">  let person = props.person;</span>
<span class="line">  let size = props.size;</span>
<span class="line">  // ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="line"><span class="token comment">// 类型检验</span></span>
<span class="line"><span class="token comment">// 首先，确保你的项目中已经安装了prop-types包。如果没有安装，可以使用以下命令安装：</span></span>
<span class="line">bash</span>
<span class="line">npm install prop<span class="token operator">-</span>types</span>
<span class="line"><span class="token comment">// 在你的函数组件文件中引入prop-types：</span></span>
<span class="line"><span class="token comment">// jsx</span></span>
<span class="line"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 对于你的函数组件，你可以通过给组件添加一个propTypes属性来对传入的props进行类型检验：</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">MyComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">isActive</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 其他prop类型检验</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>属性</strong>vs<strong>状态</strong></p><p>相似点：都是纯js对象，都会触发render更新，都具有确定性（状态/属性相同，结果相同）</p><p>不同点：</p><ol><li>属性能从父组件获取，状态不能</li><li>属性可以由父组件修改，状态不能</li><li>属性能在内部设置默认值，状态也可以，设置方式不一样</li><li>属性不在组件内部修改，状态要在组件内部修改</li><li>属性能设置子组件初始值，状态不可以</li><li>属性可以修改子组件的值，状态不可以</li></ol><p>state 的主要作用是用于组件保存、控制、修改自己的可变状态。 state 在组件内部初始化，可以被</p><p>组件自身修改，而外部不能访问也不能修改。你可以认为 state 是一个局部的、只能被组件自身控制</p><p>的数据源。 state 中状态可以通过 this.setState 方法进行更新， setState 会导致组件的重新渲染。</p><p>props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参</p><p>数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props ，否则组件的 props 永远保持</p><p>不变。</p><p>没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。</p><p>**运用：**因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。</p><h3 id="插槽-children" tabindex="-1"><a class="header-anchor" href="#插槽-children"><span>插槽 children</span></a></h3><div class="language-react line-numbers-mode" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">import React, { Children, Component, createRef } from &quot;react&quot;</span>
<span class="line">import PropTypes from &#39;prop-types&#39;;</span>
<span class="line">const ChildComponent = (props) =&gt; {</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            12313123</span>
<span class="line">            {props.children}</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">class App extends Component {</span>
<span class="line">    constructor() {</span>
<span class="line">        super()</span>
<span class="line">        this.state = {</span>
<span class="line">            name: &#39;React&#39;,</span>
<span class="line">           subtitle: &#39;123&#39;</span>
<span class="line">        }</span>
<span class="line">        this.editSub = this.editSub.bind(this)</span>
<span class="line">    }</span>
<span class="line">    // 默认参数</span>
<span class="line">    static defaultProps = {</span>
<span class="line">        color: &#39;blue&#39;</span>
<span class="line">    };</span>
<span class="line">    // 默认类型检验</span>
<span class="line">    static propTypes = {</span>
<span class="line">        color: PropTypes.string</span>
<span class="line">    };</span>
<span class="line">    // 方法</span>
<span class="line">    testa() {</span>
<span class="line">        this.setState({</span>
<span class="line">            name: &#39;Vue&#39;</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">    editSub(){</span>
<span class="line">        console.log(this)</span>
<span class="line">        this.setState({</span>
<span class="line">            subtitle: &#39;中国&#39;</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">        let { subtitle, truth, color } = this.props</span>
<span class="line">        return (</span>
<span class="line">            &lt;div&gt;</span>
<span class="line">                &lt;h2&gt;{this.props.title}&lt;/h2&gt;</span>
<span class="line">                &lt;h3&gt;{this.props.subtitle}&lt;/h3&gt; &lt;button onClick={this.editSub}&gt;修改副标题&lt;/button&gt;</span>
<span class="line">                我是 {truth ? &lt;span&gt;真的&lt;/span&gt; : &lt;span&gt;假的&lt;/span&gt;}</span>
<span class="line">                color: {this.props.color}</span>
<span class="line">                &lt;ChildComponent&gt;</span>
<span class="line">                        插槽内容</span>
<span class="line">                &lt;/ChildComponent&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-认识生命周期" tabindex="-1"><a class="header-anchor" href="#_1-7-认识生命周期"><span>1.7 认识生命周期</span></a></h3><p>重新认识（类和实例）</p><p><img src="`+v+'" alt=""></p>',138),w=a('<p>​ 很多的事物都有从创建到销毁的整个过程，这个过程称之为是<strong>生命周期</strong></p><p>React组件也有自己的生命周期，了解组件的生命周期可以让我们在最合适的地方完成自己想要的功能；</p><p>​ 生命周期和生命周期函数的关系：</p><p>生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段；</p><p>​ 比如装载阶段（Mount），组件第一次在DOM树中被渲染的过程；</p><p>​ 比如更新过程（Update），组件状态发生变化，重新更新渲染的过程；</p><p>​ 比如卸载过程（Unmount），组件从DOM树中被移除的过程；</p><p>React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数：</p><p>​ 比如实现componentDidMount函数：组件已经挂载到DOM上时，就会回调；</p><p>​ 比如实现componentDidUpdate函数：组件已经发生了更新时，就会回调；</p><p>​ 比如实现componentWillUnmount函数：组件即将被移除时，就会回调；</p><p>我们可以在这些回调函数中编写自己的逻辑代码，来完成自己的需求功能；</p><p>我们谈React生命周期时，<strong>主要谈的类的生命周期</strong></p><p>因为函数式组件是没有生命周期函数的；（后面我们可以通过hooks来模拟一些生命周期的回调）</p><h4 id="_1-7-1-生命周期解析" tabindex="-1"><a class="header-anchor" href="#_1-7-1-生命周期解析"><span>1.7.1 生命周期解析</span></a></h4><p><img src="'+u+'" alt=""></p><p>对Mounting进行解析</p><p><img src="'+m+'" alt=""></p><p><img src="'+b+'" alt=""></p><p><img src="'+h+'" alt=""></p><p>从打印结果知，该顺序由此证明</p><h6 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor"><span><strong>Constructor</strong></span></a></h6><p>​ 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。</p><p>constructor中通常只做两件事情：</p><p>通过给 this.state 赋值对象来初始化内部的state；</p><p>为事件绑定实例（this）</p><p><img src="'+g+'" alt=""></p><h6 id="componentdidmount" tabindex="-1"><a class="header-anchor" href="#componentdidmount"><span>componentDidMount</span></a></h6><p><strong>componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。</strong></p><p>componentDidMount中通常进行哪里操作呢？</p><p>依赖于DOM的操作可以在这里进行；</p><p>​ <strong>在此处发送网络请求就最好的地方；（官方建议）</strong></p><p>​ <strong>可以在此处添加一些订阅（会在componentWillUnmount取消订阅）</strong></p><p><img src="'+k+'" alt=""></p><h6 id="componentdidupdate" tabindex="-1"><a class="header-anchor" href="#componentdidupdate"><span>componentDidUpdate</span></a></h6><p><strong>componentDidUpdate() 会在更新后会被立即调用，首次渲染不会执行此方法。</strong></p><p>当组件更新后，可以在此处对 DOM 进行操作；</p><p>如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，<strong>当 props 未发生变化时，则不会执行网络请求</strong>）。</p><h6 id="componentwillunmount" tabindex="-1"><a class="header-anchor" href="#componentwillunmount"><span>componentWillUnmount</span></a></h6><p><strong>componentWillUnmount() 会在组件卸载及销毁之前直接调用。</strong></p><p>在此方法中执行必要的清理操作；</p><p>例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等；</p><p>案例</p><p><img src="'+f+'" alt="image-20240615140018390"></p><p><img src="'+_+'" alt=""></p><h4 id="_1-7-2-不常用生命周期函数" tabindex="-1"><a class="header-anchor" href="#_1-7-2-不常用生命周期函数"><span>1.7.2 不常用生命周期函数</span></a></h4><p>除了上面介绍的生命周期函数之外，还有一些不常用的生命周期函数：</p><p><img src="'+x+'" alt=""></p><p>getDerivedStateFromProps：state 的值在任何时候都依赖于 props时使用；该方法返回一个对象来更新state；</p><p>getSnapshotBeforeUpdate：在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息（比如说滚动位置）；</p><p>shouldComponentUpdate：该生命周期函数很常用，但是我们等待讲<strong>性能优化</strong>时再来详细讲解；</p><p>另外，React中还提供了一些过期的生命周期函数，这些函数已经不推荐使用。 更详细的生命周期相关的内容，可以参考官网：https://zh-hans.reactjs.org/docs/react-component.html</p><h5 id="关于生命周期的性能优化" tabindex="-1"><a class="header-anchor" href="#关于生命周期的性能优化"><span>关于生命周期的性能优化</span></a></h5><p><strong>react</strong>中性能优化的方案</p><p><strong>1. shouldComponentUpdate</strong></p><p>控制组件自身或者子组件是否需要更新，尤其在子组件非常多的情况下， 需要进行优化</p><p><strong>2. PureComponent</strong></p><p>PureComponent会帮你 比较新props 跟 旧的props， 新的state和老的state（值相等,或者</p><p>对象含有相同的属性、且属性值相等 ），决定shouldcomponentUpdate 返回true 或者</p><p>false， 从而决定要不要呼叫 render function。</p><p>注意：</p><p>如果你的 state 或 props 『永远都会变』，那 PureComponent 并不会比较快，因为</p><p>shallowEqual 也需要花时间。</p><h3 id="_1-8-认识组件间的通信" tabindex="-1"><a class="header-anchor" href="#_1-8-认识组件间的通信"><span>1.8 认识组件间的通信</span></a></h3><p>总结：</p><ol><li>父子嵌套关系：利用 props 对象实现父组件向子组件通信；</li><li>父子嵌套关系：利用 callback(回调函数) 实现子组件向父组件通信；</li><li>多层(父子)嵌套关系(跨级通信)：利用 Context 对象, 以生产者和消费者的方式实现通信;</li><li>非嵌套关系：利用 events (发布订阅) 的方式实现通信;</li></ol><p>父组件在展示子组件，可能会传递一些数据给子组件：</p><p>​ 父组件通过 <strong>属性=值</strong> 的形式来传递给子组件数据；</p><p>​ 子组件通过 <strong>props</strong> 参数获取父组件传递过来的数据；（内部做了一个this.prop = xxx ）操作</p><h5 id="参数proptypes" tabindex="-1"><a class="header-anchor" href="#参数proptypes"><span>参数propTypes</span></a></h5><p>​ 对于传递给子组件的数据，有时候我们可能希望进行验证，特别是对于大型项目来说：</p><p>当然，如果你项目中默认继承了Flow或者TypeScript，那么直接就可以进行类型验证；</p><p>但是，即使我们没有使用Flow或者TypeScript，也可以通过 prop-types 库来进行参数验证；</p><p>从 React v15.5 开始，React.PropTypes 已移入另一个包中：prop-types 库</p><p>​ 更多的验证方式，可以参考官网：https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html</p><p>比如验证数组，并且数组中包含哪些元素；</p><p>比如验证对象，并且对象中包含哪些key以及value是什么类型；</p><p>比如某个原生是必须的，使用 requiredFunc: PropTypes.func.isRequired</p><p>如果没有传递，我们希望有默认值呢？ 我们使用defaultProps就可以了</p><p>以前的写法：</p><p><img src="'+R+'" alt=""></p><p>如今的写法：</p><p><img src="'+S+'" alt=""></p><h5 id="子传父" tabindex="-1"><a class="header-anchor" href="#子传父"><span>子传父</span></a></h5><p><img src="'+y+'" alt=""></p><p><img src="'+C+'" alt=""></p>',86);function M(j,N){const e=i("HelloWorld");return p(),t("div",null,[D,n("p",null,[s("​ "),n("strong",null,[s("每创建一个"),c(e),s(" 都会走一遍该实例（也就是constructor）")])]),w])}const P=l(q,[["render",M],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/article/web/react/basic/","title":"React","lang":"en-US","frontmatter":{"date":"1998-01-02T00:00:00.000Z"},"headers":[{"level":2,"title":"React特点","slug":"react特点","link":"#react特点","children":[{"level":3,"title":"React的开发依赖","slug":"react的开发依赖","link":"#react的开发依赖","children":[]},{"level":3,"title":"1.1 类组件","slug":"_1-1-类组件","link":"#_1-1-类组件","children":[]},{"level":3,"title":"1.2 函数组件","slug":"_1-2-函数组件","link":"#_1-2-函数组件","children":[]},{"level":3,"title":"1.3 组件的样式","slug":"_1-3-组件的样式","link":"#_1-3-组件的样式","children":[]},{"level":3,"title":"1.4 事件处理","slug":"_1-4-事件处理","link":"#_1-4-事件处理","children":[]},{"level":3,"title":"1.5 Ref的应用","slug":"_1-5-ref的应用","link":"#_1-5-ref的应用","children":[]},{"level":3,"title":"1.6 组件的数据挂载方式","slug":"_1-6-组件的数据挂载方式","link":"#_1-6-组件的数据挂载方式","children":[]},{"level":3,"title":"插槽 children","slug":"插槽-children","link":"#插槽-children","children":[]},{"level":3,"title":"1.7 认识生命周期","slug":"_1-7-认识生命周期","link":"#_1-7-认识生命周期","children":[]},{"level":3,"title":"1.8 认识组件间的通信","slug":"_1-8-认识组件间的通信","link":"#_1-8-认识组件间的通信","children":[]}]}],"git":{"updatedTime":1719468887000,"contributors":[{"name":"codePiece","email":"1749967714@qq.com","commits":1}]},"filePathRelative":"article/web/react/basic/README.md","excerpt":"\\n<p>邂逅React开发（分而治之）\\nReact的特点 – 声明式编程</p>\\n<p>声明式编程是目前整个大前端开发的模式：Vue、React、Flutter、SwiftUI；</p>\\n<p>它允许我们只需要维护自己的状态，当状态改变时，React可以根据最新的状态去渲染我们的UI界面</p>\\n<h2>React特点</h2>\\n<p>​\\t组件化开发</p>\\n<p>​\\t多平台适配</p>\\n<ol>\\n<li>2013年，React发布之初主要是开发Web页面；</li>\\n<li>2015年，Facebook推出了ReactNative，用于开发移动端跨平台；（虽然目前Flutter非常火爆，但是还是有很多公司在使用 ReactNative）；</li>\\n<li>2017年，Facebook推出ReactVR，用于开发虚拟现实Web应用程序；（VR也会是一个火爆的应用场景）；</li>\\n</ol>"}');export{P as comp,A as data};
