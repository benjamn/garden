---
layout: page
title: TODO
permalink: /TODO
katex: true
---

# Left to do

## Content

- [ ] Add a page for each of the following topics:

## Maintenance

- [ ] Remove inherited notes and content
- [x] Find a way to preview build locally without installing Ruby toolchain
  - Here it is, for posterity:
    ```sh
    docker run --rm --publish 4000:4000 \
      --volume="$PWD:/srv/jekyll:Z" \
      -it jekyll/jekyll \
      jekyll serve
    ```

## Improvements

- [x] Make sure {% katex %}\KaTeX{% endkatex %} math is rendered server-side
- [ ] Make the build faster.