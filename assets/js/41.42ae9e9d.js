(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{387:function(e,r,t){"use strict";t.r(r);var n=t(42),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Azure DevOps users are encouraged to use "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/devops/project/wiki/wiki-markdown-guidance#table-of-contents-toc-for-wiki-pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("its "),t("code",[e._v("[[_TOC_]]")]),e._v(" tag"),t("OutboundLink")],1),e._v(" whenever possible.")]),e._v(" "),t("p",[e._v("Our implementation is based on Microsoft Docs, which is not very detailed, and our inspection on Azure DevOps Service, Version Dev18.M174.1 (AzureDevOps_M174_20200918.5).")]),e._v(" "),t("p",[e._v("Slugify procedure:")]),e._v(" "),t("ol",[t("li",[e._v("Let "),t("code",[e._v("S")]),e._v(" be the heading content.")]),e._v(" "),t("li",[e._v("Apply the following to "),t("code",[e._v("S")]),e._v(":\n"),t("ol",[t("li",[e._v("Convert all characters to lower case.")]),e._v(" "),t("li",[e._v("Replace every character under "),t("strong",[e._v("Unicode General Category Zs")]),e._v(" with "),t("code",[e._v("-")]),e._v(" (U+002D).")]),e._v(" "),t("li",[e._v("Escape according to "),t("strong",[e._v("RFC 3986")]),e._v(". (To prevent unintended consequences, like breaking Markdown.)")])])]),e._v(" "),t("li",[e._v("Return "),t("code",[e._v("S")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),t("p",[e._v("Azure DevOps generates anchors for headings only based on the heading content, thus, multiple headings with the same content should have the same slug. However, our architecture appends numbers when meeting duplicate slugs. We prefer to consider Azure DevOps's behavior as its own limitations, and not solve this problem in the foreseeable future.")]),e._v(" "),t("h2",{attrs:{id:"non-goals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#non-goals"}},[e._v("#")]),e._v(" Non-goals")]),e._v(" "),t("ul",[t("li",[e._v("We will not support every version of VSTS, but instead only focus on the latest Azure DevOps Services.")]),e._v(" "),t("li",[e._v("Azure DevOps allows to omit the space after ATX heading opening sequence. John Gruber's original implementation also allows it. However, CommonMark does not allow it, and neither do we.")])]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://go.microsoft.com/fwlink/?linkid=851652#anchor-links",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anchor links | Markdown syntax - Azure DevOps | Microsoft Docs"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.rfc-editor.org/rfc/rfc3986",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 3986"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/DavidAnson/markdownlint/blob/v0.21.0/doc/Rules.md#md024",target:"_blank",rel:"noopener noreferrer"}},[e._v("MD024 - Multiple headings with the same content | markdownlint"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://spec.commonmark.org/0.29/#atx-headings",target:"_blank",rel:"noopener noreferrer"}},[e._v("ATX headings | CommonMark Spec 0.29"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/decisions/markdown-syntax-and-flavors.html"}},[e._v("Markdown syntax and flavors")])],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);