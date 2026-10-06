# Chef

- 登場年: 2002年
- 設計者: David Morgan-Mar
- パラダイム: esoteric, stack-based
- 系統: esoteric

## 解決したかった課題

Chefは、動作するプログラムのソースコードを、そのまま実際に調理できる料理レシピとして読めるようにするというユーモラスな思考実験から作られた。プログラムには材料リストと調理手順が含まれ、変数は「材料」、スタック操作は「混ぜる」「注ぐ」といった調理動作に対応づけられている。プログラムとして正しく動作することと、レシピとして(理論上)人間が調理できることの両立を狙うという、実用性とは全く異なる評価軸を導入した点がこの言語の核心である。

## 特徴

- プログラムはレシピのタイトル・材料リスト・調理手順という料理レシピの形式そのもので書かれる
- 変数(値)は「材料」として宣言され、その分量が初期値に対応する
- スタック操作が「混ぜるボウル(mixing bowl)」への出し入れという調理動作として表現される
- ループ処理は「〜が終わるまで繰り返す」といった、レシピの調理工程の言い回しで表現される
- 複数の「材料」や「レシピ」をサブルーチンのように組み合わせることができる

## 影響を受けた言語

直接の言語的祖先は特定されていない。


## 影響を与えた言語

特になし


## 現在の位置づけ

esoteric(難解言語)として位置づけられ、実用目的では使われない。ソースコードが実際のレシピとして読めるというユニークさから、難解言語の中でも特にユーモアの効いた作品として紹介される。

## Hello World

設計者David Morgan-Marが公開している「Hello World Souffle」というレシピで、材料の分量がそのまま出力する文字のASCIIコードになっており、実行すると「Hello world!」を出力する。

```
Hello World Souffle.

Ingredients.
72 g haricot beans
101 eggs
108 g lard
111 cups oil
32 zucchinis
119 ml water
114 g red salmon
100 g dijon mustard
33 potatoes

Method.
Put potatoes into the mixing bowl. Put dijon mustard into the mixing bowl. Put lard into the mixing bowl. Put red salmon into the mixing bowl. Put oil into the mixing bowl. Put water into the mixing bowl. Put zucchinis into the mixing bowl. Put oil into the mixing bowl. Put lard into the mixing bowl. Put lard into the mixing bowl. Put eggs into the mixing bowl. Put haricot beans into the mixing bowl. Liquefy contents of the mixing bowl. Pour contents of the mixing bowl into the baking dish. Serves 1.
```

## 外部リンク

Wikipedia記事は見つかりませんでした。
