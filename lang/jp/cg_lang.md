# Cg

- 登場年: 2002年
- 設計者: William R. Mark, R. Steven Glanville, Kurt Akeley, Mark J. Kilgard
- パラダイム: procedural, array
- 系統: hardware-description

## 解決したかった課題

2000年代初頭、GPUのシェーダープログラミングはアセンブリ言語での記述が中心であり、開発者にとって学習・保守のコストが高い状態だった。NVIDIAはWilliam R. MarkらがC言語やRenderManシェーディング言語を参考に、C言語に似た文法でグラフィックスハードウェアをプログラムできるCgを開発した。CgはMicrosoftのHLSLと設計面で多くを共有しており、ほぼ同時期に登場した姉妹言語だった。しかし2012年にNVIDIAが開発を終了し、その後はOpenGL標準のGLSLやMicrosoftのHLSLにシェーダー言語の主流の座を譲った。

## 特徴

- C言語に似た構文を採用し、関数・構造体・制御構文をそのまま利用できる
- 頂点シェーダーとピクセルシェーダーの両方を記述でき、プロファイルという仕組みでターゲットGPU/APIごとにコンパイルできる
- `float4`や`float3x3`などのベクトル・行列型を組み込みでサポートし、グラフィックス計算を簡潔に書ける
- セマンティクスによって変数とGPUパイプラインの入出力ステージを対応付ける
- OpenGLとDirect3Dの両方をターゲットにでき、当時としては珍しいクロスAPI設計を持っていた
- MicrosoftのHLSLとほぼ共通の言語仕様を持ち、両者はしばしば同一のシェーダーコードを共有できた

## 影響を受けた言語

- [C](c.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

歴史的役割を終えた言語であり、2012年にNVIDIAが開発を終了した。現在ではOpenGL標準のGLSLやMicrosoftのHLSLがシェーダー言語の主流であり、Cgは過去の資料や古いプロジェクトの中に残るのみである。

## Hello World

シェーダー言語であるCgには文字列出力の概念がなく、「Hello World」に相当するのは画面に色を出力する最小のピクセルシェーダーである。

```cg
float4 main() : COLOR
{
    return float4(1.0, 0.0, 0.0, 1.0); // 赤色を出力
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/Cg_%28プログラミング言語%29)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Cg_%28programming_language%29)
