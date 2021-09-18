"use strict";(self.webpackChunkmarkdown_all_in_one_docs=self.webpackChunkmarkdown_all_in_one_docs||[]).push([[4374],{4290:(e,o,t)=>{t.r(o),t.d(o,{data:()=>n});const n={key:"v-700020ee",path:"/contributing/performance-issue.html",title:"Reporting a performance issue",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Before proceeding",slug:"before-proceeding",children:[{level:3,title:"Recommended",slug:"recommended",children:[]},{level:3,title:"Traditional",slug:"traditional",children:[]}]},{level:2,title:"How to report",slug:"how-to-report",children:[]}],filePathRelative:"contributing/performance-issue.md"}},6431:(e,o,t)=>{t.r(o),t.d(o,{default:()=>pe});var n=t(6252);const r=(0,n.Wm)("h1",{id:"reporting-a-performance-issue",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#reporting-a-performance-issue","aria-hidden":"true"},"#"),(0,n.Uk)(" Reporting a performance issue")],-1),l=(0,n.Wm)("h2",{id:"before-proceeding",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#before-proceeding","aria-hidden":"true"},"#"),(0,n.Uk)(" Before proceeding")],-1),i=(0,n.Uk)("It can be frustrating to find the editor unresponsive. But most of the time, it is not our product but the "),a={href:"https://github.com/microsoft/vscode/wiki/Explain-extension-causes-high-cpu-load",target:"_blank",rel:"noopener noreferrer"},s=(0,n.Uk)("complex interaction between VS Code extensions"),d=(0,n.Uk)(" that causes the problem."),u=(0,n.Wm)("p",null,[(0,n.Uk)("Therefore, "),(0,n.Wm)("strong",null,"please do a quick check"),(0,n.Uk)(" as described below.")],-1),c={class:"custom-container tip"},m=(0,n.Wm)("p",{class:"custom-container-title"},"TIP",-1),h=(0,n.Uk)("To run a command, open "),p={href:"https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Wm)("strong",null,"Command Palette",-1),f=(0,n.Uk)(" ("),k=(0,n.Wm)("kbd",null,"Ctrl / ⌘",-1),W=(0,n.Uk)(" + "),b=(0,n.Wm)("kbd",null,"Shift",-1),U=(0,n.Uk)(" + "),w=(0,n.Wm)("kbd",null,"P",-1),v=(0,n.Uk)(")."),y=(0,n.Wm)("h3",{id:"recommended",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#recommended","aria-hidden":"true"},"#"),(0,n.Uk)(" Recommended")],-1),x=(0,n.Uk)("As of "),_={href:"https://code.visualstudio.com/updates/v1_52#_troubleshooting-extension-bisect",target:"_blank",rel:"noopener noreferrer"},S=(0,n.Uk)("VS Code version 1.52"),C=(0,n.Uk)(', run VS Code command "'),R=(0,n.Wm)("strong",null,"Start Extension Bisect",-1),A=(0,n.Uk)('". It then guides you.'),T=(0,n.Wm)("h3",{id:"traditional",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#traditional","aria-hidden":"true"},"#"),(0,n.Uk)(" Traditional")],-1),V=(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"Open a workspace, where you can reproduce the issue.")],-1),q=(0,n.Wm)("p",null,[(0,n.Uk)('Run VS Code command "'),(0,n.Wm)("strong",null,"Duplicate Workspace in New Window"),(0,n.Uk)('" to temporarily create a copy for test.')],-1),I={class:"custom-container danger"},E=(0,n.Wm)("p",{class:"custom-container-title"},"DANGER",-1),P=(0,n.Wm)("p",null,"This step is strongly recommended. Otherwise, you might have a hard time in resetting environment.",-1),B=(0,n.Uk)("VS Code still does not provide a friendly way to manage workspace storage. ("),O={href:"https://github.com/microsoft/vscode/issues/32461",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("microsoft/vscode#32461"),H=(0,n.Uk)(") Thus, if it's polluted accidentally, you will have to "),z=(0,n.Wm)("strong",null,"reset the workspace state",-1),L=(0,n.Uk)(" by low-level methods:"),F=(0,n.Uk)("Go to the "),G=(0,n.Wm)("code",null,"workspaceStorage",-1),N=(0,n.Uk)(" folder, which is next to the "),j={href:"https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations",target:"_blank",rel:"noopener noreferrer"},M=(0,n.Uk)("user settings file"),Q=(0,n.Uk)("."),X=(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"Find the subfolder that holds your workspace storage.")],-1),Y=(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("Delete corresponding "),(0,n.Wm)("code",null,"state.vscdb"),(0,n.Uk)(" files. Or, if you have a SQLite 3 database editor, you can try to modify them.")])],-1),J=(0,n.uE)("<li><p>Run VS Code command &quot;<strong>Disable All Installed Extensions for this Workspace</strong>&quot;.</p></li><li><p>Run VS Code command &quot;<strong>Reload Window</strong>&quot;.</p></li><li><p>See if you can reproduce the issue.</p></li><li><p>Only enable this extension (<code>yzhang.markdown-all-in-one</code>).</p></li><li><p>See if you can reproduce the issue.</p></li>",5),K=(0,n.Wm)("h2",{id:"how-to-report",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#how-to-report","aria-hidden":"true"},"#"),(0,n.Uk)(" How to report")],-1),Z=(0,n.Wm)("p",null,"If you believe you have experienced a performance regression caused by our product, please report it to us as described below.",-1),$=(0,n.Uk)("First, download the "),ee={href:"https://github.com/yzhang-gh/vscode-markdown/actions?query=workflow%3ACI+event%3Apush+is%3Asuccess",target:"_blank",rel:"noopener noreferrer"},oe=(0,n.Uk)("latest dev build"),te=(0,n.Uk)(", extract the "),ne=(0,n.Wm)("code",null,"debug.vsix",-1),re=(0,n.Uk)(', and install it via VS Code command "'),le=(0,n.Wm)("strong",null,"Install from VSIX",-1),ie=(0,n.Uk)('".'),ae=(0,n.Uk)("Then, create a "),se={href:"https://github.com/yzhang-gh/vscode-markdown/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},de=(0,n.Wm)("strong",null,"Bug report",-1),ue=(0,n.Uk)(". Please read "),ce=(0,n.Uk)("Collecting diagnostic data"),me=(0,n.Uk)(", and include the requested information listed below (as much as you can provide) to help us better understand the nature of the possible issue:"),he=(0,n.uE)("<ul><li>(<strong>Required</strong>) A CPU profile. (<code>.cpuprofile.txt</code>)</li><li>A Markdown file to reproduce. (<code>.md.txt</code>)</li><li>The commit SHA of the dev build.</li><li>Basic environment information.</li><li>Extended environment information.</li></ul><p>Please understand that <strong>if we cannot gather enough information to diagnose in 30 days, your report will be ignored and closed at any time</strong>.</p>",2),pe={render:function(e,o){const t=(0,n.up)("OutboundLink"),pe=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[r,l,(0,n.Wm)("p",null,[i,(0,n.Wm)("a",a,[s,(0,n.Wm)(t)]),d]),u,(0,n.Wm)("div",c,[m,(0,n.Wm)("p",null,[h,(0,n.Wm)("a",p,[g,(0,n.Wm)(t)]),f,k,W,b,U,w,v])]),y,(0,n.Wm)("p",null,[x,(0,n.Wm)("a",_,[S,(0,n.Wm)(t)]),C,R,A]),T,(0,n.Wm)("ol",null,[V,(0,n.Wm)("li",null,[q,(0,n.Wm)("div",I,[E,P,(0,n.Wm)("p",null,[B,(0,n.Wm)("a",O,[D,(0,n.Wm)(t)]),H,z,L]),(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[F,G,N,(0,n.Wm)("a",j,[M,(0,n.Wm)(t)]),Q])]),X,Y])])]),J]),K,Z,(0,n.Wm)("p",null,[$,(0,n.Wm)("a",ee,[oe,(0,n.Wm)(t)]),te,ne,re,le,ie]),(0,n.Wm)("p",null,[ae,(0,n.Wm)("a",se,[de,(0,n.Wm)(t)]),ue,(0,n.Wm)(pe,{to:"/contributing/diagnostic-data.html"},{default:(0,n.w5)((()=>[ce])),_:1}),me]),he],64)}}}}]);