# Mirah

- 登場年: 2008年(注: Wikipedia本文に明確な年の記載はなく、記事のカテゴリ情報に基づく推定。前身の名称は"Duby")
- 設計者: Charles Oliver Nutter
- パラダイム: object-oriented, procedural
- 系統: jvm-dotnet

## 解決したかった課題

Mirah(旧名Duby)は、JRubyの開発者でもあるCharles Oliver Nutterによって設計された。Rubyのような構文を持ちながら、ローカル型推論とハイブリッドな静的・動的型システムを用いて、高速で慣用的なJVMバイトコードにコンパイルできる言語を作ることを目指して開発された。

## 特徴

- Rubyに似た構文を持つが、静的型付け(型推論あり)とJVMバイトコードへのコンパイルを特徴とする
- 動的な機能も併せ持つハイブリッドな型システム
- Apache License 2.0で公開
- 名称"Mirah"はジャワ語で「ルビー」を意味し、"Ruby on Java"の言葉遊びになっている
- 最新の安定版は0.2.1(2016年9月26日)

## 影響を受けた言語

- [Ruby](ruby.md)
- [Java](java.md)
- [Boo](boo.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Mirahは現在ニッチな存在である(status: niche)。2012年時点のWikipedia記事では「開発中で、一部の開発者による限定的な実用利用がある」とされており、最新の安定版リリースも2016年で止まっている。

## Hello World

Hello World相当の例は確認できなかった。記事に掲載されている実際のコード例(フィボナッチ関数)は以下の通り。

```mirah
def fib(a:int)
  if a < 2
    a
  else
    fib(a - 1) + fib(a - 2)
  end
end
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Mirah_(programming_language))
