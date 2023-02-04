以下の形式でpull-reqをお願いします。

- ./content/user/username.md

- author : username

- github : githubのuser

- site : 記事のurl

> ./content/user/syui.md

```html:./content/user/syui.md
+++
site = "syui.cf/blog/post/2022/02/13/sway/"
author = "syui"
github = "syui"
+++
```

### 投稿のプレビュー

preview : [hugo](https://github.com/gohugoio/hugo)

```sh
$ hugo serve
```

### 概要

使用するディレクトリの紹介です。

- `content/user` : 個人, コミュニティ参加者のarchlinux環境を紹介

- `content/archive` : 共同編集, 共通項目に使える記述を追加

- `content/post` : ニュース, コミュニティの最新情報などを追加

### 目的と指針

コミュニティに参加する人たちが実際どのように(1)archlinuxをインストールして、(2)archlinuxを使っているのか、その具体例はとても参考になると考えています。

また、このテーマは、読む側の興味を惹きつけるテーマだと考えます。

したがって、主にこの2点、個人のarchlinuxのインストールと使い方を念頭に執筆してもらえるとうれしいです。

このテーマについては、執筆者の個人負担や執筆のハードルを下げる意図も含まれます。

気軽に投稿してください。

### 外部サービスの利用とリンク

`github.io`, `zeen`, `qiita`の外部リンクを利用できるようにしました。

- github.io : syui.github.io/`blog/post/2022/02/13/sway`

- zeen : zenn.dev/syui/articles/`command-json-jq`

- qiita : qiita.com/syui/items/`22f4155f9b724ebac7ca`

```html:./content/user/syui.md
+++
githubio = "blog/post/2022/02/13/sway/"
qiita = "22f4155f9b724ebac7ca"
zeen = "command-json-jq"
+++
```

外部サービスを利用する場合は、一つのリンクのみ有効となります。例えば、`qiita`を利用する場合は下記の記述のみとなります。

```html:./content/user/syui.md
+++
qiita = "22f4155f9b724ebac7ca"
author = "syui"
+++
```

まだテスト機能ですが、github.ioでの投稿のみ、表示名を`github_alias`で指定することができます。htmlは`<a href="https://{{ .Params.author }}.github.io/{{ .Params.githubio }}">{{ .Params.github_alias }}</a>`になります。

```html:./content/user/syui-githubio.md
+++
githubio = "blog/post/2022/02/13/sway/"
github_alias = "viewer-name"
author = "syui"
+++
```

### リンクについて

有益な記事を見つけた場合も追加していきます。

もしリンクを貼られたくないという場合、slackかgithubにてご連絡ください。

できる限りリンクの削除に対応します。
