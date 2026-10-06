# アセンブリ言語

- 登場年: 1949年
- 設計者: Kathleen Booth、EDSACチーム他
- パラダイム: procedural
- 系統: origin

## 解決したかった課題

初期のコンピュータでは、プログラムは2進数や16進数の数値列として機械語を直接書き込む必要があり、命令コードやアドレスを覚えて手作業で変換する作業は極めて煩雑でミスを誘発した。ケンブリッジ大学のEDSACなどの黎明期の計算機チームは、命令を意味の分かるニーモニック(ADD、JMPなど)で表現し、アセンブラという変換プログラムに機械語への翻訳を任せることを考案した。

これにより人間はビットパターンを暗記する負担から解放され、より少ないミスでプログラムを書けるようになった。Kathleen Boothは1949年前後にEDSAC1やARC2向けのアセンブリ表記法の考案に関わった人物の一人とされ、この分野における最初期の貢献者として知られている。

## 特徴

- CPUの命令セットに1対1で対応するため、実行効率とハードウェア制御の自由度が非常に高い
- ニーモニックとラベルにより機械語より人間が読み書きしやすい
- アーキテクチャ(x86、ARMなど)ごとに文法・命令が異なり移植性がない
- メモリ管理やレジスタ割り当てをプログラマが直接制御する
- 高水準言語のコンパイラの出力先、あるいはOSやドライバの最下層記述に今も使われる
- デバッガやリバースエンジニアリングツールでは実行バイナリの解析結果としても表示される

## 影響を受けた言語

直接の言語的祖先は特定されていない。


## 影響を与えた言語

- [JCL](jcl_lang.md)
- [Instruction List](instruction_list.md)
- [CASL II](casl2_lang.md)


## 現在の位置づけ

現在も現役の記法であり(status: active)、OS開発、組込み機器、パフォーマンスが極限まで求められる箇所、リバースエンジニアリングなどで使われ続けている。

高水準言語が主流になった後も、ハードウェアを直接制御する最終手段として欠かせない位置を占めている。

## Hello World

x86アセンブリ(NASM構文、Linux上でのシステムコール呼び出し)による例。

```asm
section .data
    msg db "Hello, World!", 0xA
    len equ $ - msg

section .text
    global _start

_start:
    mov eax, 4          ; sys_write
    mov ebx, 1          ; stdout
    mov ecx, msg
    mov edx, len
    int 0x80

    mov eax, 1          ; sys_exit
    mov ebx, 0
    int 0x80
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/アセンブリ言語)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/Assembly_language)
