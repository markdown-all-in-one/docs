(self.webpackChunkmarkdown_all_in_one_docs=self.webpackChunkmarkdown_all_in_one_docs||[]).push([[9145],{3289:(e,n,i)=>{"use strict";i.r(n),i.d(n,{data:()=>l});const l={key:"v-25132d3c",path:"/contributing/packaging.html",title:"Packaging",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[]},{level:2,title:"Determining modules needed by the packages",slug:"determining-modules-needed-by-the-packages",children:[]},{level:2,title:"References",slug:"references",children:[]}],filePathRelative:"contributing/packaging.md"}},2233:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>b});var l=i(6252);const o=(0,l.uE)('<h1 id="packaging"><a class="header-anchor" href="#packaging">#</a> Packaging</h1><h2 id="overview"><a class="header-anchor" href="#overview">#</a> Overview</h2><p>Our product is bundled by webpack, then packaged by vsce.</p><p>We build two kinds of VSIX packages on CI:</p><ul><li>Production: Optimized by webpack. Only contains indispensable files. Ready for deployment.</li><li>Debug: No optimization. Built by webpack in <code>development</code> mode. Intended for debugging and profiling.</li></ul><p>In practice, they only differ in optimization level. We just change the <code>NODE_ENV</code> environment variable, then our build script will set the actual build command accordingly:</p><ul><li>Production: <code>webpack --mode production</code></li><li>Debug: <code>webpack --mode development</code></li></ul><h2 id="determining-modules-needed-by-the-packages"><a class="header-anchor" href="#determining-modules-needed-by-the-packages">#</a> Determining modules needed by the packages</h2><p>The packages share the same <code>vscodeignore</code>.</p><p>First find what to check in step 1 and 2. Then determine what are required in step 3 and 4. Be careful about dependence tree.</p><ol><li>Find dependencies that vsce packs by default: <ul><li>Run <code>npm ls --production --parseable</code> to get the list.</li><li>Run <code>npm ls --production</code> to know their relationships.</li></ul></li><li>Find modules that webpack can bundle: <ol><li>Check its configuration <code>webpack.config.js</code>.</li><li>Analyze the bundle according to webpack&#39;s instructions.</li><li>Run <code>npx webpack --mode development</code>.</li></ol></li><li>Determine those needed by VS Code: <ul><li>In <code>package.json</code>, files under <code>contributes.markdown.*</code> are always needed.</li></ul></li><li>Examine others manually: <ul><li>Read the bundle analysis reports generated during step 2 carefully.</li><li>When in doubt, search in the bundle (JavaScript file).</li><li>Remember to check modules contributed by <code>extendMarkdownIt()</code>.</li><li>Remember to check resource files that our code dynamically loads.</li></ul></li></ol><p>After creating a new <code>vscodeignore</code> file, run <code>vsce ls</code> to verify your design.</p><h2 id="references"><a class="header-anchor" href="#references">#</a> References</h2>',13),a={href:"https://code.visualstudio.com/api/working-with-extensions/bundling-extension",target:"_blank",rel:"noopener noreferrer"},r=(0,l.Uk)("Bundling Extensions | Visual Studio Code Extension API"),t={href:"https://webpack.js.org/guides/code-splitting/#bundle-analysis",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("Bundle Analysis | Code Splitting | webpack"),c={href:"https://webpack.js.org/api/cli/#analyzing-bundle",target:"_blank",rel:"noopener noreferrer"},s=(0,l.Uk)("Analyzing Bundle | Command Line Interface | webpack"),u={href:"https://webpack.js.org/concepts/dependency-graph/",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("Dependency Graph | webpack"),h={href:"https://webpack.js.org/configuration/mode/",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("Mode | webpack"),m={href:"https://code.visualstudio.com/api/extension-guides/markdown-extension",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("Markdown Extension | Visual Studio Code Extension API"),b={render:function(e,n){const i=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[o,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",a,[r,(0,l.Wm)(i)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",t,[d,(0,l.Wm)(i)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",c,[s,(0,l.Wm)(i)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",u,[p,(0,l.Wm)(i)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",h,[g,(0,l.Wm)(i)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",m,[k,(0,l.Wm)(i)])])])],64)}}}}]);