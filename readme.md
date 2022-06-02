### archlinuxjp(blog)での執筆について

誰でもarchlinuxjpのblogに投稿できます。

現在、個人のarchlinux環境を紹介する記事の執筆を募集しています。

募集方法は、[こちら](https://github.com/ArchLinuxJP/archlinuxjp.github.io)のリポジトリをforkして、pull-reqを送ります。投稿は`content/user/`にmarkdownで書きます。

```html:./content/user/syui.md
+++
date = "2016-01-01"
tags = ["user"]
title = "個人的なarchlinuxのインストールと使い方"
author = "syui"
+++
```

> `author`は執筆者のgithub(username)でお願いします

投稿する内容はいたってシンプル、個人環境を自由に紹介するだけです。

[unixporn](https://www.reddit.com/r/unixporn/)のようにデスクトップ画像を載せるだけでも構いません。

### 概要

使用するディレクトリの紹介です。

- `content/user` : コミュニティ参加者のarchlinux環境を紹介

- `content/archive` : 共通項目に使える記述を追加(共同執筆)

- `content/post` : コミュニティの最新情報などを追加

### 目的と指針

コミュニティに参加する人たちが実際どのように(1)archlinuxをインストールして、(2)archlinuxを使っているのか、その具体例はとても参考になると考えています。

また、このテーマは、読む側の興味を惹きつけるテーマだと考えます。

したがって、主にこの2点、個人のarchlinuxのインストールと使い方を念頭に執筆してもらえるとうれしいです。

このテーマについては、執筆者の個人負担や執筆のハードルを下げる意図も含まれます。

気軽に投稿してください。

### 共通項目と記述の再利用

`content/archive/`には、archlinuxに関する共通の基礎項目(以下、共通項目)をまとめていく予定です。

ここで言う共通項目とは、例えば、`archlinuxとはなにか`の説明だったり、`AURの作り方`を指します。

これらは、`content/user/`に執筆記述されているものの中から使えると判断した記述を抜き出して追加していく予定です。

もし執筆者自身が「これは共通項目として使えるな」と思った場合、`content/archive`にも追加していってもらえるとうれしいです。

なお、コントリビュータの誰かが共通項目として使える記述だと判断した場合、slackなどで執筆者に許可を得て追加していく方向で予定しています。

ただし、事情により許可を得ずにarchiveに追加される可能性もあるため、執筆の記述はこのリポジトリ内で再使用されることがあるという前提でお願いします。

`content/archive/`の内容はレビューされる可能性があります。これは、例えば、共同執筆の際の練習意図も含まれます。

気軽に投稿してください。

### 外部サービスの利用とリンク

`github.io`, `zeen`, `qiita`の外部リンクを利用できるようにしました。

例えば、`content/user`に`syui.md`を置いたとして、以下の記述で対応できます。authorには外部サービスの`username(id)`を指定してください。

- github.io : syui.github.io/ `blog/post/2022/02/13/sway`

- zeen : zenn.dev/syui/articles/ `command-json-jq`

- qiita : qiita.com/syui/items/ `22f4155f9b724ebac7ca`

```html:./content/user/syui.md
+++
githubio = "blog/post/2022/02/13/sway/"
qiita = "22f4155f9b724ebac7ca"
zeen = "command-json-jq"
author = "syui"
+++
```

外部サービスを利用する場合は、一つのリンクのみ有効となります。例えば、`qiita`を利用する場合は下記の記述のみとなります。

```html:./content/user/syui.md
+++
qiita = "22f4155f9b724ebac7ca"
author = "syui"
+++
```
