---
title: Markdown menagerie
katex: true
---

Basic linking, with a footnote: [@benjamn](https://github.com/benjamn)[^aka]

[^aka]: Also known as Ben Newman.

{% mermaid %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
    D-->A;
{% endmermaid %}

TypeScript syntax highlighting needs to work:

```ts
class Slot<T> extends null {
  constructor(private _value: T) {
    super();
  }
  get value(): T {
    return this._value;
  }
}
```

Attempting GraphQL query syntax:

```graphql
query SomeQuery ($someVariable: SomeType) {
  someField {
    someSubField @someDirective(someArgument: $someVariable) {
      someSubSubField
    }
  }
}
```

Some Rust code to test syntax highlighting:

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn main() {
    let msg = Message::ChangeColor(0, 160, 255);

    match msg {
        Message::Quit => {
            println!("The Quit variant has no data to destructure.");
        }
    }
}
```

{% katexmm %}
Display math inside a `katexmm` block (computing $\pi$):
$$
\pi = \sum_{k = 0}^{\infty}\left[\frac{1}{16^k} \left(\frac{4}{8k+1}-\frac{2}{8k+4}-\frac{1}{8k + 5}-\frac{1}{8k+6}\right)\right]
$$
{% endkatexmm %}

Do emoji shortcodes also work, like `:fire:` for :fire:? What about :ghost:? GitHub-specific ones like :shipit:?
