---
title: Vitepressでサイト構築する
tags: [プログラミング]
description: 個人サイトをquartzからVitepressに移行した。
created: 2024-12-12
next: false
prev: false
---

## はじめに

X(旧:twitter)で TL を眺めていると、Vitepress で個人サイトを構築している人のポストを見かけた。元々[quartz](https://quartz.jzhao.xyz/)でサイトを作っていたが、編集時のホットリロードの細かな挙動が気に入らなかったのでこれを機に Vitepress に移行することにした。

## 参考にしたサイト

- [ブログサイトを VitePress へ移行した](https://nshmura.com/posts/migration-to-vitepress/)
  - 個人的にはこの記事が一番参考になった。特に記事を一覧で取得したりする部分やレイアウトなど。
- [ブログを VitePress で書き直した](https://www.codingfeline.com/2023/08/20/renewed-blog-vitepress/)
  - こちらもタグで記事を取得する部分が参考になった。
