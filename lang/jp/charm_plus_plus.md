# Charm++

- 登場年: 1980年代後半(正確な年はWikipedia上未確定)
- 設計者: Laxmikant Kale
- パラダイム: concurrent, object-oriented
- 系統: concurrent-actor

## 解決したかった課題

スーパーコンピュータ上で大規模な並列アプリケーションを実行する際、従来の静的なメッセージパッシングモデル(MPIなど)では、実行中に処理をプロセッサ間で動的に再配置してロードバランシングや耐障害性、チェックポイントを実現することが難しかった。

Laxmikant Kaleは、イリノイ大学アーバナ・シャンペーン校のParallel Programming Laboratoryにおいて、C++をベースにメッセージ駆動オブジェクト「chare」による並列オブジェクト指向モデルCharm++を開発した。

## 特徴

- C++をベースにした、メッセージ駆動オブジェクト(chare)による並列オブジェクト指向パラダイム
- chareをプロセッサに動的に再割り当てできる(migratable objects)ため、実行中のロードバランシングが可能
- 耐障害性(fault tolerance)やチェックポイント機能を備える
- 高水準の抽象化を提供しつつ、様々なハードウェア(Cray XC/XK/XE、IBM Blue Gene/Qなど)上で高い性能を実現
- Adaptive MPI(AMPI)により従来のMPIとの互換性を提供
- Charm4pyにより同じランタイム上でのPython開発もサポート

## 影響を受けた言語

- [C++](c_plus_plus.md)

## 影響を与えた言語

特になし


## 現在の位置づけ

Charm++は現在も活発に開発が続けられている(status: active)。最新の安定版7.0.0は2021年10月にリリースされた。

分子動力学シミュレーションのNAMD、量子化学のOpenAtom、天文学のChaNGaなど、10万コア以上のペタスケールシステムで稼働する実用アプリケーションの基盤として使われている。

## Hello World

一次資料上で確認できなかった。

## 外部リンク

- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Charm%2B%2B)
