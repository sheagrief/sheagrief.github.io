---
title: manimで日本語テキストを表示したい
tags: [数学, プログラミング]
created: 2025-04-12
next: false
prev: false
---

## manimとは

[manim](https://github.com/3b1b/manim)は、数学的なアニメーションを作成するためのPythonライブラリです。YouTubeチャンネル[3Blue1Brown](https://www.youtube.com/@3blue1brown)で使用されている数学的なアニメーションは、このライブラリを使用して作成されています。

今回、このライブラリを使って日本語を含むアニメーションを作成しようとしたときにハマった話を書いておきます。

## 環境構築

私の環境は以下の通りです：

- Windows 11
- Python 3.13.2
- manim (Manim Community) 0.19.0

manimのインストールは以下のコマンドで行います：

```bash
pip install manim
```

詳しいインストール方法はManim Communityのドキュメントを参照してください。
https://docs.manim.community/en/stable/installation.html

## 問題：日本語テキストが表示されない

manimで簡単なアニメーションを作成しようとして、以下のようなpythonコードを書きました：

```python
from manim import *

Tex.set_default(tex_template=TexTemplate(
    tex_compiler = "lualatex", 
    output_format = ".pdf", 
    preamble = r"""
        \usepackage{amsmath}
        \usepackage{amssymb}
        \usepackage{luatexja}
    """,
))

class HelloWorld(Scene):
    def construct(self):
        text = Text("こんにちは、世界！")
        self.play(Write(text))
        self.wait()
```

しかし、このコードを実行すると、

`ValueError: Your installation does not support converting .pdf files to SVG. Consider updating dvisvgm to at least version 2.4. If this does not solve the problem, please refer to our troubleshooting guide at: https://docs.manim.community/en/stable/faq/general.html#my-installation-does-not-support-converting-pdf-to-svg-help`

というエラーが出ました。メッセージに書かれている[リンク](https://docs.manim.community/en/stable/faq/general.html#my-installation-does-not-support-converting-pdf-to-svg-help)を踏むと、大体latexのパッケージであるdvisvgmというものがバージョンが古いか、Postscriptに対応していないからという内容が書かれているのですが、どうやら私の場合こちらは全て問題ないようです。

一応GithubのIssuesも見て回ったのですが同様の症状の方はいませんでした。
ただ、stack overflowに[同様の問題に遭遇した方](https://docs.manim.community/en/stable/installation.html)を見つけました。



## 解決策：MiKTeXによるTeXの再インストール

ある程度原因が判明し、解決はできたものの、原因の完全な特定には至りませんでした。

私はTexの環境をTeX Liveでインストールしていたのですが、その際に必要最低限のパッケージしかインストールしていないのが恐らく原因です。つまり、適切なパッケージを追加できれば解決が可能だったのだと思います。しかし、エラーメッセージからはそれを推測できず、手動でいくつか関連していそうなパッケージをインストールしてみたものの解決しませんでした。

幸い、TeXをローカルで使うことが私は少なくなっていたので、MiKTeXというmanimに関する記事の中でよく見かけた別のTeXディストリビューションを用いてTeXをインストールしたところ、上手く表示されました。

MiKTeXはTeX Liveと違って細かい設定を行わずインストールができ、推奨パッケージなどがデフォルトで入るようになるため、私と同じ問題に当たった人はこれで解決できると思います。(容量の問題で私は試してはいませんが、TeX Liveでフルパッケージで再インストールを行うと恐らく解決できると思います。)

この際、上記のコードは変更せずに無事通りました。

## 参考にしたサイト

- [【Manim】Texモブジェクトで日本語を出力する方法](https://note.com/kaomino9149/n/n393f1aa86658)
- [【Manim】数式テキストを表示](https://ikuzak.hateblo.jp/entry/2023/09/14/171203)
- [Manim Community v0.7.0 - ValueError: Your installation does not support converting .dvi files to SVG](https://docs.manim.community/en/stable/installation.html)
