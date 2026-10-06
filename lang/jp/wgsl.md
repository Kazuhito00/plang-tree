# WGSL

- 登場年: 2021年
- 設計者: Dan Sinclair, David Neto, Myles Maxfield
- パラダイム: procedural, array
- 系統: hardware-description

## 解決したかった課題

従来のWeb向けグラフィックスAPIであるWebGLはGLSL ESをシェーダー言語として用いていたが、より新しいネイティブグラフィックスAPI(Vulkan/Metal/Direct3D 12)相当の機能をブラウザで安全に提供する次世代API WebGPUには、ブラウザのサンドボックス要件を満たす新しいシェーダー言語が必要だった。W3CのGPU for the Webワーキンググループは、未定義動作を避け静的検証を強化した安全性重視の言語としてWGSLを設計した。構文はRustの影響を強く受けつつ、GLSLやHLSLといった既存シェーダー言語の概念も踏まえている。複数のGPUバックエンドに移植可能で、決定論的な実行を保証することを目指している。

## 特徴

- Rustを思わせる構文を採用し、`fn`による関数定義や`let`/`var`による変数宣言、明示的な型注釈を特徴とする
- 未定義動作を排除する設計方針を徹底しており、配列外アクセスなどもすべて定義された挙動になるよう仕様化されている
- `@vertex`、`@fragment`、`@compute`といった属性でシェーダーステージを明示し、単一のファイルに複数ステージを記述できる
- Vulkan・Metal・Direct3D 12・OpenGLなど複数のネイティブGPU API上に移植可能な中間的表現として設計されている
- 構造体やバインディンググループを通じてGPUリソース(バッファ、テクスチャ、サンプラーなど)を型安全に扱う
- ブラウザのサンドボックス環境で安全に実行できるよう、静的検証によって未定義動作やセキュリティ上の問題を事前に排除する

## 影響を受けた言語

- [Rust](rust.md)
- [GLSL](glsl.md)
- [HLSL](hlsl.md)


## 影響を与えた言語

特になし


## 現在の位置づけ

現役の言語であり、WebGPU仕様の一部としてW3Cで標準化が進められている。主要ブラウザへの実装が進んでおり、Web上での次世代グラフィックス・GPGPUプログラミングの標準シェーディング言語として普及が進んでいる。

## Hello World

WGSLも他のシェーダー言語と同様に文字列出力の概念を持たず、画面に色を出力する最小のフラグメントシェーダーが「Hello World」に相当する。

```wgsl
@fragment
fn main() -> @location(0) vec4<f32> {
    return vec4<f32>(1.0, 0.0, 0.0, 1.0); // 赤色を出力
}
```

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/WebGPU_Shading_Language)
