(self.webpackChunkmarkdown_all_in_one_docs=self.webpackChunkmarkdown_all_in_one_docs||[]).push([[4374],{4022:(e,o,t)=>{"use strict";t.r(o),t.d(o,{data:()=>n});const n={key:"v-700020ee",path:"/contributing/performance-issue.html",title:"Reporting a performance issue",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Before proceeding",slug:"before-proceeding",children:[{level:3,title:"Recommended",slug:"recommended",children:[]},{level:3,title:"Traditional",slug:"traditional",children:[]}]},{level:2,title:"How to report",slug:"how-to-report",children:[]}],filePathRelative:"contributing/performance-issue.md"}},4649:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>He});var n=t(6252);const r=(0,n.Wm)("h1",{id:"reporting-a-performance-issue"},[(0,n.Wm)("a",{class:"header-anchor",href:"#reporting-a-performance-issue"},"#"),(0,n.Uk)(" Reporting a performance issue")],-1),l=(0,n.Wm)("h2",{id:"before-proceeding"},[(0,n.Wm)("a",{class:"header-anchor",href:"#before-proceeding"},"#"),(0,n.Uk)(" Before proceeding")],-1),s=(0,n.Uk)("It can be frustrating to find the editor unresponsive. But most of the time, it is not our extension but the "),i={href:"https://github.com/microsoft/vscode/wiki/Explain-extension-causes-high-cpu-load",target:"_blank",rel:"noopener noreferrer"},a=(0,n.Uk)("complex interaction between VS Code extensions"),u=(0,n.Uk)(" that causes the problem."),d=(0,n.Wm)("p",null,[(0,n.Uk)("Therefore, "),(0,n.Wm)("strong",null,"please do a quick check"),(0,n.Uk)(" as described below.")],-1),m={class:"custom-container tip"},c=(0,n.Wm)("p",{class:"custom-container-title"},"TIP",-1),h=(0,n.Uk)("To run a command, open "),p={href:"https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Wm)("strong",null,"Command Palette",-1),k=(0,n.Uk)(" ("),f=(0,n.Wm)("kbd",null,"Ctrl / ⌘",-1),W=(0,n.Uk)(" + "),b=(0,n.Wm)("kbd",null,"Shift",-1),U=(0,n.Uk)(" + "),w=(0,n.Wm)("kbd",null,"P",-1),v=(0,n.Uk)(")."),y=(0,n.Wm)("h3",{id:"recommended"},[(0,n.Wm)("a",{class:"header-anchor",href:"#recommended"},"#"),(0,n.Uk)(" Recommended")],-1),C=(0,n.Uk)("As of "),S={href:"https://code.visualstudio.com/updates/v1_52#_troubleshooting-extension-bisect",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("VS Code version 1.52"),_=(0,n.Uk)(', run VS Code command "'),I=(0,n.Wm)("strong",null,"Start Extension Bisect",-1),A=(0,n.Uk)('". It then guides you.'),R=(0,n.Wm)("h3",{id:"traditional"},[(0,n.Wm)("a",{class:"header-anchor",href:"#traditional"},"#"),(0,n.Uk)(" Traditional")],-1),V=(0,n.Wm)("li",null,"Open a workspace, where you can reproduce the issue.",-1),P=(0,n.Uk)('Run VS Code command "'),q=(0,n.Wm)("strong",null,"Duplicate Workspace in New Window",-1),H=(0,n.Uk)('" to temporarily create a copy for test.'),T={class:"custom-container danger"},G=(0,n.Wm)("p",{class:"custom-container-title"},"WARNING",-1),B=(0,n.Wm)("p",null,"This step is strongly recommended. Otherwise, you might have a hard time in resetting environment.",-1),O=(0,n.Uk)("VS Code still does not provide a friendly way to manage workspace storage. ("),E={href:"https://github.com/microsoft/vscode/issues/32461",target:"_blank",rel:"noopener noreferrer"},F=(0,n.Uk)("microsoft/vscode#32461"),z=(0,n.Uk)(") Thus, if it's polluted accidentally, you will have to "),D=(0,n.Wm)("strong",null,"reset the workspace state",-1),L=(0,n.Uk)(" by low-level methods:"),N=(0,n.Uk)("Go to the "),Y=(0,n.Wm)("code",null,"workspaceStorage",-1),j=(0,n.Uk)(" folder, which is next to the "),M={href:"https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations",target:"_blank",rel:"noopener noreferrer"},Q=(0,n.Uk)("user settings file"),X=(0,n.Uk)("."),Z=(0,n.Wm)("li",null,"Find the subfolder that holds your workspace storage.",-1),J=(0,n.Wm)("li",null,[(0,n.Uk)("Delete corresponding "),(0,n.Wm)("code",null,"state.vscdb"),(0,n.Uk)(" files. Or, if you have a SQLite 3 database editor, you can try to modify them.")],-1),K=(0,n.Wm)("li",null,[(0,n.Uk)('Run VS Code command "'),(0,n.Wm)("strong",null,"Disable All Installed Extensions for this Workspace"),(0,n.Uk)('".')],-1),$=(0,n.Wm)("li",null,[(0,n.Uk)('Run VS Code command "'),(0,n.Wm)("strong",null,"Reload Window"),(0,n.Uk)('".')],-1),ee=(0,n.Wm)("li",null,"See if you can reproduce the issue.",-1),oe=(0,n.Wm)("li",null,[(0,n.Uk)("Only enable this extension ("),(0,n.Wm)("code",null,"yzhang.markdown-all-in-one"),(0,n.Uk)(").")],-1),te=(0,n.Wm)("li",null,"See if you can reproduce the issue.",-1),ne=(0,n.Wm)("h2",{id:"how-to-report"},[(0,n.Wm)("a",{class:"header-anchor",href:"#how-to-report"},"#"),(0,n.Uk)(" How to report")],-1),re=(0,n.Wm)("p",null,"If you believe you have experienced a performance regression caused by our product, please report it to us as described below.",-1),le=(0,n.Uk)("First, download the "),se={href:"https://github.com/yzhang-gh/vscode-markdown/actions?query=workflow%3ACI+event%3Apush+is%3Asuccess",target:"_blank",rel:"noopener noreferrer"},ie=(0,n.Uk)("latest dev build"),ae=(0,n.Uk)(", extract the "),ue=(0,n.Wm)("code",null,"debug.vsix",-1),de=(0,n.Uk)(', and install it via VS Code command "'),me=(0,n.Wm)("strong",null,"Install from VSIX",-1),ce=(0,n.Uk)('".'),he=(0,n.Uk)("Then, create a "),pe={href:"https://github.com/yzhang-gh/vscode-markdown/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},ge=(0,n.Wm)("strong",null,"Bug report",-1),ke=(0,n.Uk)(", and include the requested information listed below (as much as you can provide) to help us better understand the nature of the possible issue:"),fe=(0,n.Uk)("("),We=(0,n.Wm)("strong",null,"Required",-1),be=(0,n.Uk)(") A CPU profile. ("),Ue=(0,n.Wm)("code",null,".cpuprofile.txt",-1),we=(0,n.Uk)(") "),ve=(0,n.Uk)("Follow "),ye={href:"https://github.com/microsoft/vscode/wiki/Performance-Issues#profile-the-running-extensions",target:"_blank",rel:"noopener noreferrer"},Ce=(0,n.Uk)("VS Code's guide"),Se=(0,n.Uk)("."),xe=(0,n.uE)("<li>A Markdown file to reproduce. (<code>.md.txt</code>)</li><li>The commit SHA of the dev build.</li><li>Basic environment information. <ol><li>Go to VS Code&#39;s menu <strong>Help</strong> &gt; <strong>About</strong> (Windows, Linux) / <strong>Code</strong> &gt; <strong>About</strong> (macOS).</li><li>Click <strong>Copy</strong>.</li></ol></li><li>Full environment information. <ol><li>Get into a state where you can reproduce the issue.</li><li>Go to VS Code&#39;s menu <strong>Help</strong> &gt; <strong>Report issue</strong>.</li><li>In the <strong>Issue Reporter</strong> window, set type to <strong>Performance Issue</strong>, set source to <strong>Visual Studio Code</strong>, fill other fields with arbitrary text, and make sure to check all the &quot;Include ...&quot; options.</li><li>Click <strong>Preview on GitHub</strong>. A GitHub issue page will be opened. You can simply close it safely.</li><li><strong>All needed data should be in your clipboard.</strong> Paste it after our &quot;<strong>Error message in the console</strong>&quot; section.</li></ol></li>",4),_e=(0,n.Uk)("When attaching files, make sure the file extension of these files is "),Ie=(0,n.Wm)("code",null,"txt",-1),Ae=(0,n.Uk)(", or pack them in a ZIP, due to "),Re={href:"https://docs.github.com/en/articles/file-attachments-on-issues-and-pull-requests",target:"_blank",rel:"noopener noreferrer"},Ve=(0,n.Uk)("GitHub's restrictions"),Pe=(0,n.Uk)("."),qe=(0,n.Wm)("p",null,[(0,n.Uk)("Please understand that "),(0,n.Wm)("strong",null,"if we cannot gather enough information to diagnose in 30 days, your report will be ignored and closed at any time"),(0,n.Uk)(".")],-1),He={render:function(e,o){const t=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[r,l,(0,n.Wm)("p",null,[s,(0,n.Wm)("a",i,[a,(0,n.Wm)(t)]),u]),d,(0,n.Wm)("div",m,[c,(0,n.Wm)("p",null,[h,(0,n.Wm)("a",p,[g,(0,n.Wm)(t)]),k,f,W,b,U,w,v])]),y,(0,n.Wm)("p",null,[C,(0,n.Wm)("a",S,[x,(0,n.Wm)(t)]),_,I,A]),R,(0,n.Wm)("ol",null,[V,(0,n.Wm)("li",null,[P,q,H,(0,n.Wm)("div",T,[G,B,(0,n.Wm)("p",null,[O,(0,n.Wm)("a",E,[F,(0,n.Wm)(t)]),z,D,L]),(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[N,Y,j,(0,n.Wm)("a",M,[Q,(0,n.Wm)(t)]),X]),Z,J])])]),K,$,ee,oe,te]),ne,re,(0,n.Wm)("p",null,[le,(0,n.Wm)("a",se,[ie,(0,n.Wm)(t)]),ae,ue,de,me,ce]),(0,n.Wm)("p",null,[he,(0,n.Wm)("a",pe,[ge,(0,n.Wm)(t)]),ke]),(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[fe,We,be,Ue,we,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[ve,(0,n.Wm)("a",ye,[Ce,(0,n.Wm)(t)]),Se])])]),xe]),(0,n.Wm)("p",null,[_e,Ie,Ae,(0,n.Wm)("a",Re,[Ve,(0,n.Wm)(t)]),Pe]),qe],64)}}}}]);