---
title: 'Labels (docs repository)'
---

| Label                   | Color     |
| ----------------------- | --------- |
| Category-Decision       | `#000000` |
| Category-Management     | `#adffff` |
| Category-Spec           | `#006666` |
| Category-User           | `#00ffff` |
| dependencies            | `#0366d6` |
| help wanted             | `#e6e600` |
| Issue-Bug               | `#d73a4a` |
| Issue-Feature           | `#5319e7` |
| Issue-Question          | `#ca00e0` |
| Needs-Attention         | `#ffff00` |
| Needs-Feedback          | `#737300` |
| Needs-Translation       | `#f2c6b0` |
| Needs-Triage            | `#0052cc` |
| PR-AutoMerge            | `#10ff10` |
| Resolution-Answered     | `#CCFFCC` |
| Resolution-Duplicate    | `#cfd3d7` |
| Resolution-FixCommitted | `#85ff85` |
| Resolution-Invalid      | `#cfd3d7` |
| Resolution-Released     | `#007300` |
| Resolution-Wontfix      | `#ffffff` |
| Scope-Docs              | `#000080` |
| Scope-Meta              | `#000080` |
| Scope-Website           | `#000080` |

## Short circuit

If an issue or PR gets any of:

* `Resolution-Duplicate`
* `Resolution-Invalid`
* `Resolution-Wontfix`

then:

* The processing of it is terminated immediately. It will be closed.
* It does not need other labels.
* Core maintainers will ignore it and not respond to it in future.

## Enforcement of label system

When a thread is not short circuited, it must meet label requirements. Otherwise, it is tagged improperly and needs a tag fix.

* An issue or PR must have one and only one `Scope-*` label. This also implies that a thread must focus on only one scope.
* If a thread has `Scope-Docs`, it must have proper `Category-*` labels.
* An issue must have one and only one `Issue-*` label.
* An issue must have one and only one `Resolution-*` label, when it is closed.

## `Area-*`

Reserved for future use.

## `Category-*`

Indicates which part of the documentation the issue or PR belongs to.

Only applies to threads with `Scope-Docs` label.

The hue of these labels is 180.

* `Category-Decision`: Decisions on what should or should not be implemented, or general guidelines.
* `Category-Management`: Conventions and maintainers' behavior.
* `Category-Spec`: Specifications of features.
* `Category-User`: User guide.

## `dependencies`

This label is automatically created by GitHub. We don't use it.

## `help wanted`

Extra attention is needed. Looking for help.

This is a special label recognized by GitHub. Do not change its name.

In theory, it should be called `Needs-Help`.

## `Issue-*`

Indicates the type of an issue.

Only applies to issues.

These labels have distinct colors, so that they can be told from each other at a glance.

* `Issue-Bug`: Something isn't working.
* `Issue-Feature`: New feature requests, or enhancement of existing features.
* `Issue-Question`: Questions or discussions. Further information is requested.

## `Needs-*`

Indicates that the thread needs a specific type of response.

Except `Translation` and `Triage`, the hue of these labels is 60.

* `Needs-Attention`: Highest priority. Look at this as soon as possible.
* `Needs-Feedback`: The original author of the issue or PR needs to come back and respond to something.
  * The Stale bot adds this label when the thread has not had recent activity (go stale).
  * Maintainers may add this label to show that we are waiting for the original author.
* `Needs-Translation`: Please translate to English.
* `Needs-Triage`: It's a new issue.
  * GitHub issue templates are set to add this label.

## `PR-*`

Reserved for future use.

## `Resolution-*`

Indicates the final state of an issue or PR.

`Resolution-Duplicate` and `Resolution-Invalid` apply to both issues and PRs. Others only apply to issues.

Except `Duplicate` and `Invalid`, the hue of these labels is 120.

* `Resolution-Answered`: Discussion closed.
  * Add this label when an issue with `Issue-Question` label is closed.
* `Resolution-Duplicate`: This issue or pull request already exists.
* `Resolution-FixCommitted`: Fix is checked in, but it might be a few weeks until a release.
  * Add this label when an issue is fixed but not released.
  * Remove this label when the fix is published to the documentation website.
* `Resolution-Invalid`: This does not seem right, or contain any valid or useful information. It's discarded.
* `Resolution-Released`: It's generally available.
  * Add this label when the fix is published to the documentation website.
* `Resolution-Wontfix`: This will not be worked on. Because it's by design, or outside of our control.

## `Scope-*`

Indicates which general part of the project the issue or PR belongs to.

* `Scope-Docs`: Related to the content of documentation.
  * Issue template `Docs.md` is set to add this label.
* `Scope-Meta`: Related to the repository itself.
  * This label is rarely used. Maintainers usually solve related problems directly, instead of opening an issue or PR.
* `Scope-Website`: Related to the design of website.
  * Issue template `Website.md` is set to add this label.
