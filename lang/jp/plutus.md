# Plutus

- 登場年: 2021年
- 設計者: Manuel Chakravarty, Michael Peyton Jones, Philip Wadler
- パラダイム: functional
- 系統: ml-functional

## 解決したかった課題

Solidityに代表される従来のスマートコントラクト言語は、アカウントベースのモデルや型システムの弱さから予期しないバグや脆弱性を生みやすいという課題があった。IOHK(現IOG)は、Haskellの強力な静的型システムと関数型プログラミングの厳密さを活用し、学術的な形式手法に基づく安全なスマートコントラクト記述を可能にすることを目指した。PlutusはHaskellのサブセットとしてSystem Fωベースの低レベル言語Plutus Coreにコンパイルされ、eUTXOモデルと組み合わせることで決定的でガス代の予測しやすいコントラクト実行を実現する。2021年のAlonzoハードフォークによりCardanoメインネットで稼働を開始した。

## 特徴

- Haskellのサブセットとして設計され、強力な静的型システムと純粋関数型の性質を受け継いでいる
- System Fωをベースとした低レベル言語Plutus Coreにコンパイルされ、オンチェーンで実行される
- CardanoのeUTXOモデルと組み合わさり、決定的でガス代を予測しやすいコントラクト実行を実現する
- 学術的な形式手法との親和性が高く、コントラクトの安全性を数学的に検証しやすい設計になっている
- オンチェーンコードとオフチェーンコードの両方をHaskellベースの単一言語で記述できる

## 影響を受けた言語

- [Haskell](haskell.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

PlutusはCardanoブロックチェーンのスマートコントラクト言語として現役で稼働している。2021年のAlonzoハードフォーク以降、Cardanoエコシステムにおけるスマートコントラクト開発の中心的な言語として使われ続けている。

## Hello World

```haskell
{-# INLINABLE helloWorld #-}
helloWorld :: BuiltinString
helloWorld = "Hello, world!"
```

## 外部リンク

Wikipedia記事は見つかりませんでした。
