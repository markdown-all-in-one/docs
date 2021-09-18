"use strict";(self.webpackChunkmarkdown_all_in_one_docs=self.webpackChunkmarkdown_all_in_one_docs||[]).push([[4627],{5960:(e,n,o)=>{o.r(n),o.d(n,{data:()=>t});const t={key:"v-60c319f5",path:"/contributing/diagnostic-data.html",title:"Collecting diagnostic data",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Product information",slug:"product-information",children:[]},{level:2,title:"Configuration",slug:"configuration",children:[]},{level:2,title:"Basic environment information",slug:"basic-environment-information",children:[]},{level:2,title:"Extended environment information",slug:"extended-environment-information",children:[]},{level:2,title:"Console log",slug:"console-log",children:[]},{level:2,title:"CPU profile",slug:"cpu-profile",children:[]},{level:2,title:"Syntax highlighting metadata",slug:"syntax-highlighting-metadata",children:[]}],filePathRelative:"contributing/diagnostic-data.md"}},8567:(e,n,o)=>{o.r(n),o.d(n,{default:()=>q});var t=o(6252);const s=(0,t.Wm)("h1",{id:"collecting-diagnostic-data",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#collecting-diagnostic-data","aria-hidden":"true"},"#"),(0,t.Uk)(" Collecting diagnostic data")],-1),a=(0,t.Wm)("p",null,"This article explains how to get the most common types of diagnostic data.",-1),i={class:"custom-container tip"},l=(0,t.Wm)("p",{class:"custom-container-title"},"TIP",-1),r=(0,t.Uk)("When attaching files, make sure the file extension of those files is "),c=(0,t.Wm)("code",null,"txt",-1),p=(0,t.Uk)(", or pack them in a ZIP, due to "),d={href:"https://docs.github.com/en/articles/file-attachments-on-issues-and-pull-requests",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("GitHub's restrictions"),g=(0,t.Uk)("."),h=(0,t.uE)('<h2 id="product-information" tabindex="-1"><a class="header-anchor" href="#product-information" aria-hidden="true">#</a> Product information</h2><p>If you are using stable version, it&#39;s OK to just provide a version like <code>3.0.0</code>.</p><p>However, if you install dev build, please tell us its commit SHA that you see on the artifact download page.</p><p>Example:</p><blockquote><p>Markdown All in One: 325c2b6e72c1b8ffff8243f5c18e3ad5d12a1e5d</p></blockquote><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Please tell us the configuration you changed.</p><p>Example:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">jsonc</span>\n<span class="token code-block language-jsonc">{\n    &quot;markdown.extension.toc.slugifyMode&quot;: &quot;gitlab&quot;\n}</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="basic-environment-information" tabindex="-1"><a class="header-anchor" href="#basic-environment-information" aria-hidden="true">#</a> Basic environment information</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Skip this section if you decide to provide &quot;Extended environment information&quot;.</p></div><ol><li><p>Go to VS Code&#39;s menu:</p><ul><li><p><strong>Help</strong> &gt; <strong>About</strong> (Windows, Linux)</p></li><li><p><strong>Code</strong> &gt; <strong>About</strong> (macOS)</p></li></ul></li><li><p>Click <strong>Copy</strong>, and paste it into a code block when creating your issue report.</p></li></ol><p>If you suspect that the problem is related to something else, please also include their information.</p><p>Example:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>VS Code:\n\n<span class="token code"><span class="token punctuation">```</span>\n<span class="token code-block">Version: 1.50.0 (system setup)\nOS: Windows_NT x64 10.0.18363</span>\n<span class="token punctuation">```</span></span>\n\nMarkdown Notes: 0.0.20\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="extended-environment-information" tabindex="-1"><a class="header-anchor" href="#extended-environment-information" aria-hidden="true">#</a> Extended environment information</h2><ol><li><p>Get into a state where you can reproduce the issue.</p></li><li><p>Go to VS Code&#39;s menu <strong>Help</strong> &gt; <strong>Report issue</strong>.</p></li><li><p>In the <strong>Issue Reporter</strong> window:</p><ol><li><p>Set type to <strong>Performance Issue</strong>.</p></li><li><p>Set source to <strong>Visual Studio Code</strong>.</p></li><li><p>Fill other fields with arbitrary text.</p></li><li><p>Make sure to check all the &quot;Include ...&quot; options.</p></li></ol></li><li><p>Click <strong>Preview on GitHub</strong>. A GitHub issue page will be opened. We don&#39;t need it. You can simply close it safely.</p></li><li><p><strong>All needed data should be in your clipboard.</strong> Paste it into the &quot;<strong>Environment</strong>&quot; section.</p></li></ol><h2 id="console-log" tabindex="-1"><a class="header-anchor" href="#console-log" aria-hidden="true">#</a> Console log</h2><ol><li><p>Go to VS Code&#39;s menu <strong>Help</strong> &gt; <strong>Toggle Developer Tools</strong>.</p></li><li><p>Switch to the <strong>Console</strong> tab.</p></li><li><p>Copy and paste anything suspicious into a code block under the &quot;<strong>Diagnostic data</strong>&quot; section.</p></li></ol><p>Example:</p><blockquote><div class="language-log ext-log line-numbers-mode"><pre class="language-log"><code><span class="token file-path string">/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js</span><span class="token operator">:</span><span class="token number">626</span>  <span class="token level warning important">WARN</span> UNRESPONSIVE extension host<span class="token punctuation">,</span> <span class="token string">&#39;foam.foam-vscode&#39;</span> took <span class="token number">97</span><span class="token operator">%</span> of <span class="token number">23123.118ms</span><span class="token punctuation">,</span> saved PROFILE here<span class="token operator">:</span> <span class="token string">&#39;file:///tmp/exthost-f465d3.cpuprofile&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><h2 id="cpu-profile" tabindex="-1"><a class="header-anchor" href="#cpu-profile" aria-hidden="true">#</a> CPU profile</h2>',22),m=(0,t.Uk)("Follow "),b={href:"https://github.com/microsoft/vscode/wiki/Performance-Issues#profile-the-running-extensions",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("VS Code's guide"),k=(0,t.Uk)("."),v=(0,t.Wm)("p",null,[(0,t.Uk)("You will finally produce a file whose name ends with "),(0,t.Wm)("code",null,".cpuprofile.txt")],-1),x=(0,t.Wm)("p",null,[(0,t.Uk)('Attach it to the "'),(0,t.Wm)("strong",null,"Diagnostic data"),(0,t.Uk)('" section.')],-1),w=(0,t.Wm)("h2",{id:"syntax-highlighting-metadata",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#syntax-highlighting-metadata","aria-hidden":"true"},"#"),(0,t.Uk)(" Syntax highlighting metadata")],-1),W=(0,t.Uk)("Follow "),y={href:"https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector",target:"_blank",rel:"noopener noreferrer"},C=(0,t.Uk)("VS Code's guide"),S=(0,t.Uk)("."),U=(0,t.Wm)("p",null,"When taking screenshots, remember to include the whole scope inspector widget. It would be nice to also attach its text content as a code block.",-1),q={render:function(e,n){const o=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[s,a,(0,t.Wm)("div",i,[l,(0,t.Wm)("p",null,[r,c,p,(0,t.Wm)("a",d,[u,(0,t.Wm)(o)]),g])]),h,(0,t.Wm)("p",null,[m,(0,t.Wm)("a",b,[f,(0,t.Wm)(o)]),k]),v,x,w,(0,t.Wm)("p",null,[W,(0,t.Wm)("a",y,[C,(0,t.Wm)(o)]),S]),U],64)}}}}]);