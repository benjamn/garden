---
title: Example secret note
secret: true
tags: gardening
---

This note has a random UUID as its file name, but a human readable title, which other notes can link to without knowing the file name: [[Example secret note]].[^not-a-hash]

[^not-a-hash]: Since the file name of this note is not a hash of its contents, the contents can change freely over time, and all links to this note will remain intact.

This note should remain relatively secret as long as no other public notes link to it, and this note does not give itself away by linking to other public notes (which would cause this note to appear in those notes' incoming link lists).[^graph-privacy]

[^graph-privacy]: Any future graph visualization of notes in this garden should avoid exposing notes that were previously secret.
