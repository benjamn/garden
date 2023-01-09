# Docker scripts

If you don't want to install a Ruby/Jekyll toolchain on your host computer, but
you have Docker installed, you can use these scripts to run the `jekyll build`
and `jekyll serve` commands.

First, `.docker/build`:
```sh
% rm -rf _site
% .docker/build
% ls _site # repopulated by the dockerized build command
```

The `.docker/serve` command very closely approximates the production site,
running at `localhost:4000`:
```sh
% .docker/serve
# ... lots of gem install output ...
            Source: /srv/jekyll
       Destination: /srv/jekyll/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 1.44 seconds.
 Auto-regeneration: enabled for '/srv/jekyll'
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.
```
