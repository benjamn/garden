# Ben's Digital Garden

This [MIT-licensed](LICENSE) repository shares the generic Jekyll system behind the digital garden I publish at [benjamn.dev](https://benjamn.dev).

## Privacy of content

All my personal content is hidden away in a private submodule repository in the `_notes/vault` directory. After forking this repository, please be aware you will not automatically have access to my personal content, which remains under strict copyright (all rights reserved).

To work around this intentional limitation, you will need to either get rid of the submodule by running `git rm _notes/vault`, or run `git submodule set-url ...` to use a different private (or public) repository of your own:
```
git submodule set-url _notes/vault https://github.com/your-github-username/your-vault.git
git submodule update --init --recursive
```
Either way, my content stays with me.

## Prior work/inspiration

[Maxime Vaillancourt](https://maximevaillancourt.com) wrote a tutorial called [Setting up your own digital garden with Jekyll](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll) that caught my eye, and this repository was originally a fork of [Vaillancourt's Jekyll template](https://github.com/maximevaillancourt/digital-garden-jekyll-template), which you can find running [on Netlify](https://digital-garden-jekyll-template.netlify.app/) for comparison.

## Original features (with some **updates**)

- Based on Jekyll, a static website generator
- Supports Roam-style double bracket link syntax to other notes
- Creates backlinks to other notes automatically
- Features link previews on hover
- ~~Includes graph visualization of the notes and their links~~
  - **Disabled for now for privacy of unlinked notes**
- Features a simple and responsive design
- Supports Markdown or HTML notes

## License

The source code, structure, and configuration of this repository are released under the [MIT license](LICENSE), just like the [LICENSE of the original template](https://github.com/maximevaillancourt/digital-garden-jekyll-template/blob/master/LICENSE).

However, the content of the published [benjamn.dev](https://benjamn.dev) website and the content of the `_notes/vault` submodule remain under strict copyright, with all rights reserved by the GitHub user responsible for publishing them (that is, me).