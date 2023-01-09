---
title: Forking this garden
---

My content stays here, but you are more than welcome to [fork](https://github.com/benjamn/garden/fork) and modify [this garden template](https://github.com/benjamn/garden) however you see fit.

Specifically, the contents of the subdirectory `_notes/vault` will not be accessible to you after forking, but you can replace that submodule with your own public or private repository URL:
```sh
git submodule set-url _notes/vault https://github.com/your-github-username/your-vault.git
```
Alternatively, you can remove the submodule completely (`git rm _notes/vault`), and/or add additional submodules from other sources.

Forking the [`benjamn/garden`](https://github.com/benjamn/garden) repository on GitHub will allow deployment via GitHub Actions, as configured by [`jekyll.yml`](https://github.com/benjamn/garden/blob/main/.github/workflows/jekyll.yml).

You will also need to configure your version of [https://github.com/your-github-username/garden/settings/pages](https://github.com/your-github-username/garden/settings/pages) to enable publishing via Actions.
