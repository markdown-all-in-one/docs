# Labels (Main)

## Terminology

* A "**thread**" refers to an issue or PR.
* "**go stale**" is the shorthand of "have not had recent activity for 30 days", unless otherwise noted.

## Enforcement of label system

When a thread is not short circuited, it must meet label requirements. Otherwise, it is tagged improperly and needs a tag fix.

It is strongly recommended to always assign `Area:*` labels.

If a thread gets more than three `Area:*` labels, it is usually best to split it to keep discussions focused.

### Short circuit

If an issue or PR gets any of:

* `Duplicate`
* `External`
* `Invalid`
* `Out of scope`

then:

* The processing of it is terminated immediately. It will be closed.
* It does not need other labels.
* Core maintainers will ignore it and not respond to it in future.

### Issues

* An issue must have at least one `Area:*` label.
* An issue must have one and only one "Issue type" label.
* An issue must have one and only one "Resolution" label, when it is closed.

### Pull requests

* A PR must have at least one `Area:*` label, when it is merged.

## `Area:*`

Indicates the area of the project with which the issue or PR is associated.

## Issue type

Indicates the type of an issue.

Only applies to issues.

* `Bug`: Something isn't working.
* `Enhancement`: Improvements in existing features.
* `Feature request`: Something brand new.
* `Performance`
* `Question`: Questions raised by users.
* `Task`: Not a bug. Even not a new feature. But we really need to do something.

## Assistive state indicator

* `Cannot reproduce`
* `Help wanted`: Looking for help.
* `Markdown dialect`: Neither GFM, nor extensions currently accepted.
* `Needs more info`: The original author of the issue or PR needs to come back and respond to something.
* `Needs TagFix`: Does not meet label requirements.
  * This label is usually added by our bot.
  * Maintainers sometimes add this label manually, when it is hard to classify the thread.
* `Under discussion`: We haven't decided what to do.
* `Upstream`: Related to an upstream component.

## Resolution

Indicates the final state of an issue or PR.

`Duplicate` and `Invalid` apply to both issues and PRs. Others only apply to issues.

If the description of a label is a list of conditions, then the label is applicable only under those conditions.

* `Answered`: Discussion closed.
  * Add this label when an issue with `Question` label is closed and no other resolution is applicable.
* `Duplicate`: This issue or pull request already exists.
* `External`: Outside of our control/codebase.
* `Fixed`: Fix is checked in, but it might be a few weeks until a release.
* `Inactive`: More info is needed, but it has had no update for 30 days.
  * Add this label when an issue with `Needs more info` label goes stale.
* `Invalid`: This does not seem right, or contain any valid or useful information. It's discarded.
  * Add this label when a thread meets the label description above.
  * Add this label when an issue with `Cannot reproduce` label goes stale and no other resolution is applicable.
* `Out of scope`: Not related to the goals of this project.
