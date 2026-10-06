# SYCL

- 登場年: 2014年
- 設計者: Khronos Group
- パラダイム: procedural, object-oriented, generic
- 系統: domain-specific

## 解決したかった課題

GPUなどのアクセラレータ向けに異種計算(heterogeneous computing)を行うOpenCLは強力な標準だったが、ホスト側コードとデバイス側コードを別々の言語・記法で記述する必要があり、C++が持つ型システムやテンプレートといった生産性の高い機能をそのまま活用できないという課題があった。

Khronos GroupはOpenCLワーキンググループの中にあった高水準プログラミングモデルに関する分科会での検討を経て、2014年にSYCLを発表した。標準的なC++17の上に構築されたシングルソースの組み込みDSL(eDSL)として、ホストコードとデバイスコードを同一のソースファイル内に記述できるようにすることを目的としている。

## 特徴

- 標準的なC++17に基づくシングルソースの組み込みDSL(eDSL)
- ホストコードとデバイスコードを同一ソースファイル内に記述できる「シングルソース」方式
- バッファとアクセサによるデータ管理、SYCL 2020ではUnified Shared Memory(USM)にも対応
- AMD ROCm、NVIDIA CUDA、Intel Level Zeroなど複数のバックエンドを抽象化してサポート
- 2019年9月にOpenCLワーキンググループから独立したKhronosの単独ワーキンググループとなった
- IntelのDPC++、AdaptiveCpp、ComputeCppなど複数の実装が存在する

## 影響を受けた言語

- [C++](c_plus_plus.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

SYCLは2019年にOpenCLワーキンググループから独立し、2020年の改訂(SYCL 2020)でOpenCLへの依存をさらに弱め、CUDAやROCmなど複数のバックエンドに対応する汎用的な異種計算フレームワークとして発展した。IntelのDPC++をはじめ複数の実装が存在し、2023年には安全基準(セーフティクリティカル)分野向けの作業部会も設立されるなど、現在も活発に開発が続く実務言語である。

## Hello World

一次資料(Wikipedia記事)上に具体的なコード例は確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/SYCL)
