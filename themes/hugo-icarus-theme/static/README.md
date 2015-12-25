# ArchLinuxJP Blog

## Get the source code

I assume you've Git installed. Inside the folder of your Hugo site run

```bash
$ git clone https://github.com/archlinuxjp/archlinuxjp.github.io
$ cd archlinuxjp.github.io
$ git checkout soruce
```

## Nearly finished

In order to see your site in action, run Hugo's built-in local server.

```bash
# build
$ hugo

# preview
$ hugo server
```

Now enter [`localhost:1313`](//localhost:1313) in the address bar of your browser.

## 記事の作成

```bash
$ hugo new `date +"%Y-%m-%d"`-hello.md
```

> content/post/2015-12-13-hello.md 

```
+++
banner = "banners/archlinux.png"
categories = ["News"]
date = "2015-12-13"
menu = ""
tags = ["community","archlinux"]
title = "ArchLinuxJPのコミュニティをSlackで作ってみた"
slug = "hello-world-archlinuxjp"
+++

<!--more-->
```



## サイトの更新

```bash
$ git add -A
$ git commit -m "update" 
$ git push -u origin source
```

ブログの更新は、基本的に、[archlinuxjp/archlinuxjp.github.io](https://github.com/archlinuxjp/archlinuxjp.github.io)の`source`ブランチに`push`することで、自動的にビルドされ、当該リポジトリの`master`ブランチにデプロイされます。これによりサイトは更新されます。詳しくは、`wercker.yml`を見てください。

> wercker.yml

```
box: wercker/default
build:
    steps:
        - arjen/hugo-build:
                version: "0.14"
                theme: hugo-icarus-theme
deploy:
    steps:
    - script:
        name: Get commit message
        code: |
          export COMMIT_MSG=$(git log --pretty=format:"%s" -1)
    - script:
        name: Configure git
        code: |-
          git config --global user.email "${MAIL_ADDRESS}"
          git config --global user.name "syui"
          rm -rf .git
    - script:
        name: Deploy to github pages
        code: |-
          cd ./public
          git init
          git add .
          git commit -m "${COMMIT_MSG}"
          git push -f https://${GITHUB_TOKEN}@github.com/archlinuxjp/archlinuxjp.github.io.git master
    after-steps:
    - wantedly/pretty-slack-notify:
          webhook_url: $SLACK_WEBHOOK_URL
          channel: general
```

ただし、サイトが更新された場合、`hugo server`の結果と異なることが良くあります。注意してください。

## ページの作成

```bash
$ hugo new site /path/to/site
$ cd /path/to/site
$ tree .
  ▸ archetypes/
  ▸ content/
  ▸ data/
  ▸ layouts/
  ▸ static/
    config.toml
```

## Jekyll

`hugo server`と結果が異なることがあります。より確実にプレビューする場合は、`jekyll`を使用してください。

```bash
$ hugo

$ cd ./public

$ jekyll serve
```

## Annotations

Thanks to [Steve Francia](//github.com/spf13) for creating Hugo and the awesome community around the project.

Thanks to [Digitalcraftsman](https://github.com/digitalcraftsman) for creating Hugo theme.

