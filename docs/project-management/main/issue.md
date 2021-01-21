---
sidebarDepth: 2
---

# Issue management (main repository)

<!-- markdownlint-disable-file MD040 -->

🚧 WIP

## Overview

This article focuses on the process. Please refer to [Labels](./labels.md) for details of labels.

This article does not cover questions (`Question`). For questions, after triage, they act as forum threads.

<!-- Ruler unit: 4 spaces -->
```
    +----------+
    |   New    |
    +----------+
        |
Triage  +-----------+
        |           ↓
        |   +------------------+
        |   | Under discussion |
        |   +------------------+
        |           |
        |           |   Investigate
        |   +-------+---+
        ↓   ↓           |
    +----------+        |
    |Confirmed |←---+   |
    +----------+    |   |
        |           |   |
Assign  |           |   |
        ↓           |   |
    +----------+    |   |
    |  Active  |    |   |
    +----------+    |   |
        |           |   |
Commit  |           |   |
        ↓           |   |
    +----------+    |   |
    | Resolved |    |   |
    +----------+    |   |
        |           |   |
Verify  +-----------+   |
        ↓               |
    +----------+        |
    |  Closed  |←-------+
    +----------+
```

## States

* New: It's a new issue.
* Under discussion: We are not sure what to do. These issues typically get `Under discussion`, `Needs more info`, or `Cannot reproduce` label.
* Confirmed: It's on backlog.
* Active: Someone is working on it.
* Resolved: Fix is checked in.
* Closed: Nothing more to do.

## Actions

### Triage

### Investigate

### Assign

### Commit

### Verify
