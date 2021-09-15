# TypeScript

## Identifiers

| Category                                                      | Pattern                 |
| ------------------------------------------------------------- | ----------------------- |
| Constant                                                      | `Title_Case_Snake_Case` |
| Class, Enum, Enum member                                      | `PascalCase`            |
| Interface, Type alias                                         | `IPascalCase`           |
| Type parameter                                                | `PascalCase`            |
| Variable, Parameter, Function, Method, Property, Module alias | `camelCase`             |

### Overall goal

An identifier should contain only upper case ASCII letters (U+0041 ~ U+005A), lower case ASCII letters (U+0061 ~ U+007A), ASCII digits (U+0030 ~ U+0039), hyphens (U+002D), and underscores (U+005F).

The rule for a kind of identifiers should add details upon generic common styles.

### Constant

```javascript
/^[A-Z][a-z0-9]*(_[A-Z][a-z0-9]*)+$/
```

**Examples:**

* `Non_Archived_Resources`

* `Sidebar_Config`

* `Slugify_Methods`

* `Test_Workspace_Path`

**Description:**

A [constant](https://google.github.io/styleguide/tsguide.html#identifiers) can be instantiated only once over the lifetime of the program, is intended to not be changed, and users must not modify it in any way.

The identifier of a constant use `snake_case` with the first letter of each word capitalized, and must be made of at least two words. We call it `Title_Case_Snake_Case`.

**Background:**

Enormous projects use `UPPER_CASE_SNAKE_CASE`, and even call it `CONSTANT_CASE`. However, we find it problematic, and suggest avoiding it. Generally speaking, mixed case is easiest to read and write, and all lower case is equally good, while all upper case is terrible. Constants are often used to hold important immutable values. When you propagate them across the codebase, significant negative visual effect of terrible styles will arise.

As for the "at least two words" requirement, we find in practice that the names of constants usually need two or three words to be [clear and precise](https://testing.googleblog.com/2017/10/code-health-identifiernamingpostforworl.html).

### Class, Enum, Enum member

```javascript
/^([A-Z][a-z0-9]+)+$/
```

**Examples:**

* `DownwardsArrowWithCornerLeftwards`

* `EventEmitter`

* `FontIcon`

* `Lazy`

**Description:**

Use `PascalCase`.

### Interface, Type alias

```javascript
/^I([A-Z][a-z0-9]+)+$/
```

**Examples:**

* `ICase`

* `IDecorationAnalysisTask`

* `IDecorationRecord`

* `IDisposable`

* `IDocumentToken`

* `IInternalOption`

* `IKnownKey`

* `IMarkdownEngine`

* `INlsBundle`

* `IPrimitive`

* `IWorkerRegistry`

**Description:**

It's the same as class, but prefixed with `I`.

**Background:**

Someone advises against marking interfaces with special prefix, probably because interfaces are natural and frequent in JavaScript's [structural type system](https://flow.org/en/docs/lang/nominal-structural/).

We tried, but had a worse experience. The style helps to reduce distraction on small projects. But it soon becomes friction as the scale grows.

Interfaces are basically contracts that cannot be instantiated or contain any implementation. However, it's quite easy to forget this without a special mark. Too many times, some developers wondered why it's not allowed to `new` an object, and the codebase eventually revealed that the type is an interface.

To let it hit developers that they are not classes, you need to [name interfaces nicely](https://google.github.io/styleguide/tsguide.html#naming-style). From our experience, very few names can be intuitively recognized as "just a set of declarations of properties". Then, it goes back to how to mark interfaces.

Thus, we now think marking interfaces specially is good for engineering. We can discuss it as this style seems not consistent with other parts.

### Type parameter

**Description:**

It's the same as class, but can also be single upper case letter.

### Variable, Parameter, Function, Method, Property, Module alias

```javascript
/^[a-z][a-z0-9]*([A-Z][a-z0-9]+)*$/
```

**Examples:**

* `applyDecoration`

* `fs`

* `inlineTokens`

* `isWelcomeMessagesExist`

* `onDidOpenTextDocument`

* `parseInline`

* `projectLevelOmittedHeadings`

* `resolveResource`

* `utf8Encoder`

* `workers`

**Description:**

Use `camelCase`.

### Namespace, Decorator

Avoid.

## Examples

The examples are for demonstration only. They are naive, and are never guaranteed to work.

@[code typescript](./i-disposable.ts)

@[code typescript](./text-writer.ts)

@[code typescript](./dump.ts)
