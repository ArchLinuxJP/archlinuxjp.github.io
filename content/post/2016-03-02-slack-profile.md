+++
categories = ["archlinuxjp"]
date = "2016-03-02"
menu = ""
tags = ["blog", "hugo"]
title = "Arch Linux JPのSlackで自己紹介を呼び出せるようにするには"
slug = "comment"
+++

Botで呼び出せる自己紹介を追加するには、以下のリポジトリにPRしてください。形式は自由です。

[https://github.com/ArchLinuxJP/archlinuxjp-hubot](https://github.com/ArchLinuxJP/archlinuxjp-hubot)

以下、サンプルコードを表示します。

file : scripts/hubot-member.coffee

```bash
$ git clone https://github.com/ArchLinuxJP/archlinuxjp-hubot
$ cd archlinuxjp-hubot
$ vim scripts/hubot-member.coffee
```

```coffeescript
module.exports = (robot) ->
   robot.respond /@user/i, (msg) ->
     img_url = "https://avatars3.githubusercontent.com/u/1867108"
     user_name = "user : syui"
     user_profile = "
     blog : https://syui.github.io
     \ngithub : https://github.com/syui
     \nqiita : https://qiita.com/syui
     \ntwitter : https://twitter.com/syui__"
     msg.send "#{img_url}\n#{user_name}\n\n"
     ,"#{user_profile}"
```

これでSlackにて、`@hellobot @user`で自己紹介が呼び出せるようになります。

