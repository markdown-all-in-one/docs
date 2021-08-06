"use strict";(self.webpackChunkmarkdown_all_in_one_docs=self.webpackChunkmarkdown_all_in_one_docs||[]).push([[5062],{3440:(e,n,a)=>{a.r(n),a.d(n,{data:()=>r});const r={key:"v-3dc997f0",path:"/guide/syntax-highlighting-for-fenced-code-blocks.html",title:"Syntax highlighting for fenced code blocks",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"In editor",slug:"in-editor",children:[]},{level:2,title:"In preview and exporting",slug:"in-preview-and-exporting",children:[]},{level:2,title:"References",slug:"references",children:[]}],filePathRelative:"guide/syntax-highlighting-for-fenced-code-blocks.md"}},8714:(e,n,a)=>{a.r(n),a.d(n,{default:()=>R});var r=a(6252);const t=(0,r.Wm)("h1",{id:"syntax-highlighting-for-fenced-code-blocks",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#syntax-highlighting-for-fenced-code-blocks","aria-hidden":"true"},"#"),(0,r.Uk)(" Syntax highlighting for fenced code blocks")],-1),o=(0,r.Wm)("h2",{id:"in-editor",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#in-editor","aria-hidden":"true"},"#"),(0,r.Uk)(" In editor")],-1),i=(0,r.Wm)("p",null,"It's handled by VS Code. The key here is tokenization. VS Code detects embedded languages in parent file, and redirects them to proper extensions that support the language.",-1),l=(0,r.Wm)("p",null,[(0,r.Uk)("To implement such support for a language, typically, two kinds of "),(0,r.Wm)("strong",null,"TextMate language grammars"),(0,r.Uk)(" are needed: One defines language grammars for the language; the other provides scope redirection. Following TextMate's naming conventions is important for them.")],-1),s=(0,r.Uk)("A "),d={href:"https://code.visualstudio.com/api/language-extensions/overview",target:"_blank",rel:"noopener noreferrer"},g=(0,r.Uk)("language extension"),h=(0,r.Uk)(" provides language grammars for the language."),m=(0,r.Uk)("As for scope redirection, if the language is widely accepted enough, you can simply register it at "),c={href:"https://github.com/microsoft/vscode-markdown-tm-grammar/blob/master/build.js",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("microsoft/vscode-markdown-tm-grammar"),p=(0,r.Uk)(". Or you can create an extension to inject grammars. When contributing such injection grammars, it's recommended to also set "),f=(0,r.Wm)("code",null,"embeddedLanguages",-1),k=(0,r.Uk)(" properly in extension manifest, so that most "),b=(0,r.Wm)("strong",null,"declarative language features",-1),W=(0,r.Uk)(", which are contributed by related language extensions, can work in the embedded language area."),x=(0,r.Uk)("An extension can also implement both. For example, "),v={href:"https://github.com/James-Yu/LaTeX-Workshop",target:"_blank",rel:"noopener noreferrer"},U=(0,r.Uk)("LaTeX Workshop"),y=(0,r.Uk)(" provides language grammars for LaTeX, and injects scope redirection for LaTeX fenced code block. This way is often more practical."),w=(0,r.Wm)("p",null,"After tokenization, themes come to assign colors and styles to the document.",-1),_=(0,r.Wm)("h2",{id:"in-preview-and-exporting",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#in-preview-and-exporting","aria-hidden":"true"},"#"),(0,r.Uk)(" In preview and exporting")],-1),j=(0,r.Uk)("It's powered by "),S={href:"https://github.com/highlightjs/highlight.js",target:"_blank",rel:"noopener noreferrer"},T=(0,r.Uk)("highlight.js"),I=(0,r.Uk)("."),C=(0,r.Wm)("p",null,[(0,r.Uk)("Syntax highlighting in preview uses the one bundled with VS Code's built-in "),(0,r.Wm)("code",null,"vscode.markdown-language-features"),(0,r.Uk)(" extension. In exporting to HTML, it uses the one shipped with this product.")],-1),L=(0,r.Wm)("h2",{id:"references",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),(0,r.Uk)(" References")],-1),A={href:"https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#embedded-languages",target:"_blank",rel:"noopener noreferrer"},M=(0,r.Uk)("Embedded languages | Syntax highlighting | Visual Studio Code Extension API"),V={href:"https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#injection-grammars",target:"_blank",rel:"noopener noreferrer"},z=(0,r.Uk)("Injection grammars | Syntax highlighting | Visual Studio Code Extension API"),X={href:"https://macromates.com/manual/en/language_grammars#naming_conventions",target:"_blank",rel:"noopener noreferrer"},E=(0,r.Uk)("Naming Conventions | Language Grammars | TextMate 1.x Manual"),O={href:"https://github.com/mjbvz/vscode-fenced-code-block-grammar-injection-example",target:"_blank",rel:"noopener noreferrer"},P=(0,r.Uk)("mjbvz/vscode-fenced-code-block-grammar-injection-example"),R={render:function(e,n){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[t,o,i,l,(0,r.Wm)("p",null,[s,(0,r.Wm)("a",d,[g,(0,r.Wm)(a)]),h]),(0,r.Wm)("p",null,[m,(0,r.Wm)("a",c,[u,(0,r.Wm)(a)]),p,f,k,b,W]),(0,r.Wm)("p",null,[x,(0,r.Wm)("a",v,[U,(0,r.Wm)(a)]),y]),w,_,(0,r.Wm)("p",null,[j,(0,r.Wm)("a",S,[T,(0,r.Wm)(a)]),I]),C,L,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",A,[M,(0,r.Wm)(a)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",V,[z,(0,r.Wm)(a)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",X,[E,(0,r.Wm)(a)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",O,[P,(0,r.Wm)(a)])])])],64)}}}}]);