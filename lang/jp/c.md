# C

- 登場年: 1972年
- 設計者: Dennis Ritchie
- パラダイム: procedural, systems
- 系統: c-family

## 解決したかった課題

1970年代初頭、ベル研究所ではUnix OSをPDP-7/PDP-11のアセンブリ言語で書いており、機種が変わるたびに全面的な書き直しが必要だった。既存の高水準言語(FortranやCOBOLなど)は数値計算や事務処理向けで、ポインタ演算やメモリの直接操作といったOS開発に不可欠な低レベル制御が非効率だった。そこでDennis RitchieはKen ThompsonのB言語に静的型と構造体を加え、アセンブリに近い効率を保ちながら移植性のある言語としてCを設計した。実際に1973年、UnixカーネルはCで書き直され、以後の移植性の高いOS開発の先例となった。

## 特徴

- 静的型付けと軽量な構文で、コンパイラが機種ごとに効率的な機械語を生成できる
- ポインタによる直接的なメモリ操作とハードウェア制御が可能
- 標準ライブラリを除けば言語仕様は非常に小さく、実装が容易で多くのプラットフォームに移植された
- プリプロセッサ・関数・構造体を持つが、オブジェクト指向やガベージコレクションは持たない
- 「必要なものは自分で書く」思想により、抽象化のコストを最小限に抑える
- 手動でのメモリ確保・解放を前提とし、実行時オーバーヘッドをほぼゼロに抑える
- ANSI/ISOによる標準化(C89、C99、C11、C17、C23など)を経て、長期にわたり後方互換性を維持
- 関数ポインタや共用体など、低レベルな抽象化の基本部品を提供

## 影響を受けた言語

- [B](b_language.md)
- [ALGOL 68](algol_68.md)
- [BCPL](bcpl.md)
- [PL/I](pl_i.md)
- [Fortran](fortran.md)
- [CPL](cpl.md)


## 影響を与えた言語

- [bc](bc_lang.md)
- [Ratfor](ratfor_lang.md)
- [AWK](awk.md)
- [IDL](idl_lang.md)
- [csh(C Shell)](csh.md)
- [SISAL](sisal.md)
- [Objective-C](objective_c.md)
- [Verilog](verilog.md)
- [Progress ABL (OpenEdge)](progress_abl.md)
- [C++](c_plus_plus.md)
- [AMPL](ampl_lang.md)
- [Informix-4GL](informix_4gl.md)
- [Perl](perl.md)
- [Wolfram Language](wolfram_language.md)
- [Newsqueak](newsqueak.md)
- [GNU Octave](octave.md)
- [TADS](tads_lang.md)
- [Telescript](telescript_lang.md)
- [Python](python.md)
- [newLISP](newlisp_lang.md)
- [Alef](alef.md)
- [S-Lang](s_lang.md)
- [Lua](lua.md)
- [Euphoria](euphoria_lang.md)
- [Inform](inform_lang.md)
- [Magma](magma_lang.md)
- [ZPL](zpl_lang.md)
- [Pike](pike.md)
- [Cilk](cilk_lang.md)
- [PHP](php.md)
- [JavaScript](javascript.md)
- [Limbo](limbo.md)
- [秀丸マクロ](hidemaru_macro.md)
- [OCaml](ocaml.md)
- [HSP(Hot Soup Processor)](hsp.md)
- [SuperCollider](supercollider.md)
- [QuakeC](quakec.md)
- [C--](c_minus_minus.md)
- [UPC](upc.md)
- [ActiveBasic](activebasic.md)
- [Chicken Scheme](chicken_scheme.md)
- [QCL](qcl_lang.md)
- [D](d.md)
- [Ch](ch_lang.md)
- [Cyclone](cyclone_lang.md)
- [GLSL](glsl.md)
- [HLSL](hlsl.md)
- [Cg](cg_lang.md)
- [Brook](brook.md)
- [Squirrel](squirrel_lang.md)
- [Linden Scripting Language](lsl_lang.md)
- [FreeBASIC](freebasic.md)
- [Crowbar](crowbar_lang.md)
- [Vala](vala.md)
- [Diksam](diksam_lang.md)
- [Cython](cython_lang.md)
- [Go](go.md)
- [Chapel](chapel.md)
- [Whiley](whiley.md)
- [ISPC](ispc.md)
- [Terra](terra.md)
- [Céu](ceu_lang.md)
- [Zig](zig.md)
- [Odin](odin.md)
- [Ring](ring_lang.md)
- [Mojo](mojo.md)


## 現在の位置づけ

Cは現役のシステム記述言語として、OSカーネル、組込み機器、各種言語処理系の実装基盤に使われ続けている。現代の主要言語の大半が直接・間接にCの構文や思想を継承しており、プログラミング言語史における最も影響力の大きい言語の一つである。半世紀近く前の設計でありながら、性能とハードウェアへの近さが求められる領域では今なお代替の効かない存在であり続けている。

## Hello World

```
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");
    return 0;
}
```

## 外部リンク

- [Wikipedia(日本語)](https://ja.wikipedia.org/wiki/C言語)
- [Wikipedia(英語)](https://en.wikipedia.org/wiki/C_%28programming_language%29)
