(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{210:function(e,t,s){"use strict";s.r(t);var a=s(6),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("table",[s("thead",[s("tr",[s("th",[e._v("Label")]),e._v(" "),s("th",[e._v("Color")])])]),e._v(" "),s("tbody")]),e._v(" "),s("h2",{attrs:{id:"terminology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),s("ul",[s("li",[e._v('A "'),s("strong",[e._v("thread")]),e._v('" refers to an issue or PR.')]),e._v(" "),s("li",[e._v('"'),s("strong",[e._v("go stale")]),e._v('" is the shorthand of "have not had recent activity for 30 days", unless otherwise noted.')])]),e._v(" "),s("h2",{attrs:{id:"enforcement-of-label-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enforcement-of-label-system"}},[e._v("#")]),e._v(" Enforcement of label system")]),e._v(" "),s("p",[e._v("When a thread is not short circuited, it must meet label requirements. Otherwise, it is tagged improperly and needs a tag fix.")]),e._v(" "),s("p",[e._v("It is strongly recommended to always assign "),s("code",[e._v("Area:*")]),e._v(" labels.")]),e._v(" "),s("p",[e._v("If a thread gets more than three "),s("code",[e._v("Area:*")]),e._v(" labels, it is usually best to split it to keep discussions focused.")]),e._v(" "),s("h3",{attrs:{id:"short-circuit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#short-circuit"}},[e._v("#")]),e._v(" Short circuit")]),e._v(" "),s("p",[e._v("If an issue or PR gets any of:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Duplicate")])]),e._v(" "),s("li",[s("code",[e._v("External")])]),e._v(" "),s("li",[s("code",[e._v("Invalid")])]),e._v(" "),s("li",[s("code",[e._v("Out of scope")])])]),e._v(" "),s("p",[e._v("then:")]),e._v(" "),s("ul",[s("li",[e._v("The processing of it is terminated immediately. It will be closed.")]),e._v(" "),s("li",[e._v("It does not need other labels.")]),e._v(" "),s("li",[e._v("Core maintainers will ignore it and not respond to it in future.")])]),e._v(" "),s("h3",{attrs:{id:"issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),s("ul",[s("li",[e._v("An issue must have at least one "),s("code",[e._v("Area:*")]),e._v(" label.")]),e._v(" "),s("li",[e._v('An issue must have one and only one "Issue type" label.')]),e._v(" "),s("li",[e._v('An issue must have one and only one "Resolution" label, when it is closed.')])]),e._v(" "),s("h3",{attrs:{id:"pull-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests"}},[e._v("#")]),e._v(" Pull requests")]),e._v(" "),s("ul",[s("li",[e._v("A PR must have at least one "),s("code",[e._v("Area:*")]),e._v(" label, when it is merged.")])]),e._v(" "),s("h2",{attrs:{id:"area"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#area"}},[e._v("#")]),e._v(" "),s("code",[e._v("Area:*")])]),e._v(" "),s("p",[e._v("Indicates the area of the project with which the issue or PR is associated.")]),e._v(" "),s("h2",{attrs:{id:"issue-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issue-type"}},[e._v("#")]),e._v(" Issue type")]),e._v(" "),s("p",[e._v("Indicates the type of an issue.")]),e._v(" "),s("p",[e._v("Only applies to issues.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Bug")]),e._v(": Something isn't working.")]),e._v(" "),s("li",[s("code",[e._v("Enhancement")]),e._v(": Improvements in existing features.")]),e._v(" "),s("li",[s("code",[e._v("Feature request")]),e._v(": Something brand new.")]),e._v(" "),s("li",[s("code",[e._v("Performance")])]),e._v(" "),s("li",[s("code",[e._v("Question")]),e._v(": Questions raised by users.")]),e._v(" "),s("li",[s("code",[e._v("Task")]),e._v(": Not a bug. Even not a new feature. But we really need to do something.")])]),e._v(" "),s("h2",{attrs:{id:"assistive-state-indicator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assistive-state-indicator"}},[e._v("#")]),e._v(" Assistive state indicator")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Cannot reproduce")])]),e._v(" "),s("li",[s("code",[e._v("Help wanted")]),e._v(": Looking for help.")]),e._v(" "),s("li",[s("code",[e._v("Markdown dialect")]),e._v(": Neither GFM, nor extensions currently accepted.")]),e._v(" "),s("li",[s("code",[e._v("Needs more info")]),e._v(": The original author of the issue or PR needs to come back and respond to something.")]),e._v(" "),s("li",[s("code",[e._v("Needs TagFix")]),e._v(": Does not meet label requirements.\n"),s("ul",[s("li",[e._v("This label is usually added by our bot.")]),e._v(" "),s("li",[e._v("Maintainers sometimes add this label manually, when it is hard to classify the thread.")])])]),e._v(" "),s("li",[s("code",[e._v("Under discussion")]),e._v(": We haven't decided what to do.")]),e._v(" "),s("li",[s("code",[e._v("Upstream")]),e._v(": Related to an upstream component.")])]),e._v(" "),s("h2",{attrs:{id:"resolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolution"}},[e._v("#")]),e._v(" Resolution")]),e._v(" "),s("p",[e._v("Indicates the final state of an issue or PR.")]),e._v(" "),s("p",[s("code",[e._v("Duplicate")]),e._v(" and "),s("code",[e._v("Invalid")]),e._v(" apply to both issues and PRs. Others only apply to issues.")]),e._v(" "),s("p",[e._v("If the description of a label is a list of conditions, then the label is applicable only under those conditions.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Answered")]),e._v(": Discussion closed.\n"),s("ul",[s("li",[e._v("Add this label when an issue with "),s("code",[e._v("Question")]),e._v(" label is closed and no other resolution is applicable.")])])]),e._v(" "),s("li",[s("code",[e._v("Duplicate")]),e._v(": This issue or pull request already exists.")]),e._v(" "),s("li",[s("code",[e._v("External")]),e._v(": Outside of our control/codebase.")]),e._v(" "),s("li",[s("code",[e._v("Fixed")]),e._v(": Fix is checked in, but it might be a few weeks until a release.")]),e._v(" "),s("li",[s("code",[e._v("Inactive")]),e._v(": More info is needed, but it has had no update for 30 days.\n"),s("ul",[s("li",[e._v("Add this label when an issue with "),s("code",[e._v("Needs more info")]),e._v(" label goes stale.")])])]),e._v(" "),s("li",[s("code",[e._v("Invalid")]),e._v(": This does not seem right, or contain any valid or useful information. It's discarded.\n"),s("ul",[s("li",[e._v("Add this label when a thread meets the label description above.")]),e._v(" "),s("li",[e._v("Add this label when an issue with "),s("code",[e._v("Cannot reproduce")]),e._v(" label goes stale and no other resolution is applicable.")])])]),e._v(" "),s("li",[s("code",[e._v("Out of scope")]),e._v(": Not related to the goals of this project.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);