# Miranda

- 登場年: 1985年
- 設計者: David Turner
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

1970年代から80年代にかけて、David TurnerはSASLやKRCといった遅延評価の関数型言語を研究用に開発してきたが、これらはいずれも実験的な処理系にとどまっていた。純粋関数型プログラミングと遅延評価という数学的に明快なパラダイムを、研究室の外でも通用する頑健で高品質な商用処理系として提供したいというのがMirandaの動機だった。Research Software社から1985年に発売されたMirandaは、遅延評価・強い静的型付け・簡潔な構文を兼ね備えた最初期の商用純粋関数型言語となった。

## 特徴

- 遅延評価をデフォルトとし、無限リストなど非正格な評価が必要な処理を自然に書ける
- Standard ML譲りの静的型システムを持ちながら、型注釈をほとんど必要としない
- リスト内包表記など、後の多くの言語に取り入れられる簡潔な記法を持つ
- 純粋関数型であり、副作用を持たない式評価のみでプログラムを構成する
- 商用ライセンスの処理系であったため、自由な改変や再配布はできなかった

## 影響を受けた言語

- [Standard ML](standard_ml.md)
- [Hope](hope.md)
- [ISWIM](iswim.md)
- [SASL](sasl_lang.md)

## 影響を与えた言語

- [Orwell](orwell_lang.md)
- [Clean](clean.md)
- [Haskell](haskell.md)
- [Gofer](gofer.md)
- [Pure](pure_lang.md)
- [Microsoft Power Fx](power_fx.md)


## 現在の位置づけ

Mirandaは商用ライセンスの制約から研究コミュニティに広く使われることはできず、その代替としてHaskellが生まれたことで歴史的役割を終えた。現在は実用されておらず、関数型言語史における重要な過渡期の言語として記憶されている。

## Hello World

```
main :: [sys_message]
main = [Stdout "Hello, world!\n"]
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Miranda)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Miranda_%28programming_language%29)
