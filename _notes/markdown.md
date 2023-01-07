---
title: Markdown miscellany
---

Basic linking: [@benjamn](https://github.com/benjamn)[^aka]

[^aka]: Also known as Ben Newman.

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
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

And math:

$$\aleph^\infty$$
