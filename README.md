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
------------------------
$ curl -sL localhost:1313
```

Now enter [`localhost:1313`](//localhost:1313) in the address bar of your browser.

## 記事の作成

```bash
$ hugo new `date +"%Y-%m-%d"`-hello.md
```

> content/post/2015-12-13-hello.md 

```md
+++
categories = ["News"]
date = "2015-12-13"
menu = ""
tags = ["community","archlinux"]
title = "Hello World !"
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

```yml
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
          git config --global user.name "archlinuxjp"
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
------------------------
$ curl -sL localhost:4000
```

## Icon Font

### IcoMoon

ArchLinuxJPのロゴは、[IcoMoon](https://icomoon.io)にてオリジナルを作成し、アイコンフォントで表現します。

docs : [https://icomoon.io/#docs](https://icomoon.io/#docs)

> themes/hugo-icarus-theme/layouts/partials/head.html

```html
<link rel="stylesheet" href="{{ .Site.BaseURL }}font/icomoon/css/icomoon.css">
```

### FontAwesome

基本的に、各種アイコンは、画像ではなくアイコンフォントで表現します。このため、[FontAwesome](https://github.com/FortAwesome/Font-Awesome)を使います。

docs : [https://fortawesome.github.io/Font-Awesome/get-started](https://fortawesome.github.io/Font-Awesome/get-started)

> themes/hugo-icarus-theme/layouts/partials/head.html

```html
<link rel="stylesheet" href="{{ .Site.BaseURL }}font/font-awesome/css/font-awesome.min.css">
```

```
$ git clone https://github.com/FortAwesome/Font-Awesome ./themes/hugo-icarus-theme/static/font/font-awesome
```

```css
.fa-rss:hover {
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  color: #428bca;
}
```

## Bootstrap

メニューバーは、[Bootstrap](http://getbootstrap.com/)のテンプレートを利用すると、簡単に作成できます。モバイルにも対応できるので、便利です。

docs : [https://getbootstrap.com/components/#navbar](https://getbootstrap.com/components/#navbar)

width : mobile

### Sample Code

```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
```

### Dropdown Menus Enhancement

```bash
$ curl -sLO https://raw.githubusercontent.com/behigh/bootstrap_dropdowns_enhancement/master/dist/js/dropdowns-enhancement.js 
$ curl -sLO https://raw.githubusercontent.com/behigh/bootstrap_dropdowns_enhancement/master/dist/css/dropdowns-enhancement.css
```

```html
    <li class="dropdown-submenu">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a href="#">sub menu1</a></li>
      <li class="dropdown-submenu">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">sub menu1</a>
      <ul class="dropdown-menu">
        <li class="dropdown-submenu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">sub menu2</a>
        <ul class="dropdown-menu">
          <li><a href="#">sub menu3</a></li>
          <li><a href="#">sub menu3</a></li>
          <li><a href="#">sub menu3</a></li>
        </ul>
        </li>
      </ul>
      </li>
    </ul>
    </li>
```

[Dropdown Menus Enhancement](behigh.github.io/bootstrap_dropdowns_enhancement/)

## Annotations

Thanks to [Steve Francia](//github.com/spf13) for creating Hugo and the awesome community around the project.

Thanks to [Digitalcraftsman](https://github.com/digitalcraftsman) for creating Hugo theme.

