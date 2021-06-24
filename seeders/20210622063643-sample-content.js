'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contents', [
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110431_00000",
        title: "発芽させるには？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "種を発芽させるには、何が必要？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110431_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110241_00000",
        title: "芽を出す種 | 理科５年 ふしぎワールド | NHK for School",
        description: "種子の発芽には、水や種子の養分が関係していることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110241_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110437_00000",
        title: "天気の変化に決まりはある？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "晴れたり、くもったり、雨がふったり。天気は変わっていく。変わり方になにか決まりはあるのかな？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110437_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301072_00000&p=box",
        title: "メダカのオス・メスの見分け方 | NHK for School",
        description: "メダカのオスとメスは背ビレと尻ビレの形で見分けることができる。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301072_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110244_00000",
        title: "うつりかわる天気 | 理科５年 ふしぎワールド | NHK for School",
        description: "天気が変化するきまりをとらえ、資料を活用して予測する。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110244_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110044_00000",
        title: "あすの天気は？ | ふしぎがいっぱい （5年） | NHK for School",
        description: "天気の変化を調べ、変化の仕方におおまかな決まりがあることに気づく。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110044_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110043_00000",
        title: "雲と天気 | ふしぎがいっぱい （5年） | NHK for School",
        description: "雲の量や動き、種類は天気の変化と関係があることに気づく。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110043_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110042_00000",
        title: "植物が育つには | ふしぎがいっぱい （5年） | NHK for School",
        description: "植物が育っていくには、日光や肥料などが関係していることを調べる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110042_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401015_00000&p=box",
        title: "メダカの産卵と受精 | NHK for School",
        description: "メダカの交尾から産卵の様子、精子の動きを顕微鏡で観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401015_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110045_00000",
        title: "魚のたんじょう | ふしぎがいっぱい （5年） | NHK for School",
        description: "魚には雌雄があり，生まれた卵は日がたつにつれて中の様子が変化してかえることに気づく。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110045_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110086_00000",
        title: "発芽のひみつ | ふしぎがいっぱい（5年） | NHK for School",
        description: "種子の発芽には、種子の中の養分や水、空気及び温度が関係していることを調べる",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110086_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110432_00000",
        title: "子葉は必要？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "子葉（しよう）は発芽するとしぼんでしまう。子葉は発芽に必要なのだろうか？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110432_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300321_00000&p=box",
        title: "メダカのおすとめすの見分け方 | NHK for School",
        description: "メダカの雄と雌は背びれと尻びれの形で見分けることができることを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300321_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110242_00000",
        title: "育つ植物 | 理科５年 ふしぎワールド | NHK for School",
        description: "植物が育っていくには、日光や肥料が関係していることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110242_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300324_00000&p=box",
        title: "メダカの卵の成長 | NHK for School",
        description: "メダカの卵が、受精の後、分割を繰り返し、やがて稚魚が生まれるまでの映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300324_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110435_00000",
        title: "たまごの記録をとってみよう  | ふしぎエンドレス 理科５年 | NHK for School",
        description: "メダカはたまごの中でどのように育つのかな？観察記録をとってみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110435_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110246_00000",
        title: "人のたんじょう | 理科５年 ふしぎワールド | NHK for School",
        description: "資料を活用して、魚や人の発生や成長についての考えをもつようにする。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110246_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300323_00000&p=box",
        title: "メダカの受精～産卵 | NHK for School",
        description: "メダカが卵を産んで、受精するまでのようすです。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300323_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301071_00000&p=box",
        title: "天気の変化の決まり | NHK for School",
        description: "日本列島の天気は、大まかに言うと、西から東に変化していく。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301071_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110245_00000",
        title: "動物のたんじょう | 理科５年 ふしぎワールド | NHK for School",
        description: "資料を活用して、魚や人の発生や成長についての考えをもつようにする。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110245_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110083_00000",
        title: "人のたんじょう | ふしぎがいっぱい （5年） | NHK for School",
        description: "人は、母体内で成長して生まれることを知る。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110083_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110433_00000",
        title: "植物が大きく育つには？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "同じ大きさのインゲンマメを別の場所で育てたら、大きさが違っていた。植物が大きく育つには、なにが必要なんだろう？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110433_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300017_00000&p=box",
        title: "気象衛星からみた雲の動き（4月～6月） | NHK for School",
        description: "気象衛星からみた４月～６月の雲の動きを時間をちぢめて観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300017_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300022_00000&p=box",
        title: "「気しょう衛星ひまわり」とは | NHK for School",
        description: "気象衛星ひまわりの役割と雲の見方をCGを交えて紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300022_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301215_00000&p=box",
        title: "福岡、大阪、東京の天気 | NHK for School",
        description: "福岡、大阪、東京の天気の映像と気象衛星の雲画像から、天気が西から変化していくことを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301215_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110243_00000",
        title: "気温の変化 | 理科５年 ふしぎワールド | NHK for School",
        description: "１日の気温の変化は、晴れ、くもり、雨など天気に関係していることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110243_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301065_00000&p=box",
        title: "種の中の子葉の役割 | NHK for School",
        description: "種の中の子葉にはでんぷんが含まれており、芽を出すための養分として使われる。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301065_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110436_00000",
        title: "おなかの赤ちゃんはどう育つ？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "お母さんのおなかの中で赤ちゃんはどう育つのかな？ふしぎを見つけて、予想してみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110436_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300049_00000&p=box",
        title: "春の天気と雲の動き | NHK for School",
        description: "春の東京。地上からの空の映像と気象衛星からの雲の動きを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300049_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301205_00000&p=box",
        title: "人の出産 | NHK for School",
        description: "人の赤ちゃんの出産のようすの映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301205_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300362_00000&p=box",
        title: "赤ちゃんの誕生 | NHK for School",
        description: "赤ちゃんが誕生する様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300362_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300322_00000&p=box",
        title: "メダカはメスだけで卵を産むか？ | NHK for School",
        description: "メダカはメスだけで育てても卵を産まないことを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300322_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300118_00000&p=box",
        title: "インゲンマメの発芽と子葉 | NHK for School",
        description: "インゲンマメの発芽から葉が出るまでの子葉の様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300118_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110358_00000",
        title: "実験72 ひとつだけ動かして！ | 大科学実験 | NHK for School",
        description: "１本の棒に吊るされた長さの違う４０本のふりこ。棒を動かして、ねらったふりこだけを揺らすことはできるだろうか？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110358_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300093_00000&p=box",
        title: "種の発芽と温度の条件 | NHK for School",
        description: "インゲンマメを30℃と20℃の温度で発芽させた時の実験映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300093_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300284_00000&p=box",
        title: "インゲンマメの成長と養分 | NHK for School",
        description: "種子の子葉にはでんぷんが含まれており、芽を出すとでんぷんは少なくなります。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300284_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300119_00000&p=box",
        title: "インゲンマメの子葉のでんぷん | NHK for School",
        description: "インゲンマメの種子と発芽後の子葉のでんぷんの有無を調べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300119_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110259_00000",
        title: "ふりこのきまり | 理科５年 ふしぎワールド | NHK for School",
        description: "ふりこが１往復する時間を、重りの重さや糸の長さなどと関係付けてとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110259_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300045_00000&p=box",
        title: "アメダスとは | NHK for School",
        description: "気象観測を行う気象庁の仕事とアメダスの役割を紹介する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300045_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300359_00000&p=box",
        title: "ヒトの赤ちゃんの成長 | NHK for School",
        description: "子宮の中の卵子が、赤ちゃんの形に育つまで様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300359_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302070_00000&p=box",
        title: "発芽には空気も必要？ | NHK for School",
        description: "インゲンマメを水につけておいたら、空気にふれているマメしか発芽しなかった。発芽には、水のほかに空気も必要なのだろうか？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302070_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302071_00000&p=box",
        title: "発芽には水が必要？ | NHK for School",
        description: "発芽には水が必要なのかな？水をあたえたインゲンマメとあたえないインゲンマメで調べてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302071_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301085_00000&p=box",
        title: "川の働きでできた地形 | NHK for School",
        description: "Ｖ字谷、扇状地、三角州など、川の流れが作る地形を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301085_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300358_00000&p=box",
        title: "ヒトの受精 | NHK for School",
        description: "ヒトの受精から、子宮にたどりつくまでの様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300358_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300273_00000&p=box",
        title: "雲の動き方 | NHK for School",
        description: "雲は大きく西から東へ動いていることを知り、天気の変化と雲の動きの関連を考える。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300273_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110438_00000",
        title: "台風はどう進む？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "天気予報では台風の進路を予想している。台風の進み方には、何と関係しているかな？理由を予想して確かめるにはどうすればいい？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110438_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300042_00000&p=box",
        title: "空気の温度のしらべ方－中学 | NHK for School",
        description: "空気の温度を測る時の温度計の使い方や注意点を観ることができる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300042_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300095_00000&p=box",
        title: "種の発芽と水の条件 | NHK for School",
        description: "湿った土と乾いた土にインゲンマメを植えて発芽させる実験映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300095_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300283_00000&p=box",
        title: "インゲンマメの成長と子葉の変化 | NHK for School",
        description: "種子が発芽するときの子葉の変化を観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300283_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300071_00000&p=box",
        title: "雨が降っているところと雲の動き | NHK for School",
        description: "アメダス画像の一日と同日の気象衛星映像を観ることができます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300071_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300094_00000&p=box",
        title: "種の発芽と空気の条件 | NHK for School",
        description: "水槽にポンプで空気を送りインゲンマメの発芽を観る実験映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300094_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400027_00000&p=box",
        title: "ネコの出産 | NHK for School",
        description: "ネコの繁殖と出産時の親子、子ネコの育ち方や習性などを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400027_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300051_00000&p=box",
        title: "富士山にできる雲と天気の変化 | NHK for School",
        description: "富士山の雲を紹介、その雲による天気予測の言い伝えを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300051_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300276_00000&p=box",
        title: "インゲンの種子の中を見てみよう | NHK for School",
        description: "種の中には、やがて芽を出すために必要な構造があることを知り、それぞれの機能について考える。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300276_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301864_00000&p=box",
        title: "発芽させるには何が必要？予想してみよう！ | NHK for School",
        description: "店で売られている種は芽が出ていない。種が発芽するには何が必要？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301864_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401017_00000&p=box",
        title: "メダカの受精卵の変化 | NHK for School",
        description: "受精したメダカの卵の中の変化を日を追って観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401017_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401014_00000&p=box",
        title: "メダカの産卵からたん生 | NHK for School",
        description: "メダカの交尾から産卵、卵の中の様子、ふ化後の稚魚までを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401014_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401108_00000&p=box",
        title: "アブラナの花からみのでき方 | NHK for School",
        description: "アブラナの花から実ができるまでと、実の特徴を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401108_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400095_00000&p=box",
        title: "メダカのおすとめす | NHK for School",
        description: "メダカのひれの形や体の特徴によるオスとメスの見分け方を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400095_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301070_00000&p=box",
        title: "雲を見て天気を予想する | NHK for School",
        description: "飛行機雲やかさ雲など、天気の変化を知るヒントになる雲がある。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301070_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302075_00000&p=box",
        title: "大きく育つのに日光は必要？ | NHK for School",
        description: "植物の成長には日光が必要なのかな？日光を当てたインゲンマメと当てないインゲンマメで調べてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302075_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301063_00000&p=box",
        title: "いろいろな種の中身 | NHK for School",
        description: "トウモロコシやイネの種の中をみる。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301063_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301865_00000&p=box",
        title: "発芽に土は必要？どうやって調べる？ | NHK for School",
        description: "発芽には土が必要かどうかを調べてみたよ。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301865_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110056_00000",
        title: "ふりこのきまり | ふしぎがいっぱい （5年） | NHK for School",
        description: "おもりの重さや糸の長さなどを変えて、振り子の運動に規則性があることに気づく。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110056_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301862_00000&p=box",
        title: "天気の変化に決まりはある？ | NHK for School",
        description: "天気の変わり方には、なにが関係しれいるのかな？空の様子や気象衛星から見た雲の様子から予想してみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301862_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302072_00000&p=box",
        title: "発芽に温度は関係ある？ | NHK for School",
        description: "発芽に温度は関係しているのかな？土の温度を変えて調べてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302072_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302076_00000&p=box",
        title: "肥料をあたえた方が大きく育つ？ | NHK for School",
        description: "植物を大きく成長させるには肥料が必要なのかな？肥料をあたえたインゲンマメとあたえないインゲンマメで調べてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302076_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301066_00000&p=box",
        title: "芽が出る条件 水・光・空気 | NHK for School",
        description: "もやしをの種が発芽するためには、水と空気が必要であることを実験する。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301066_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110049_00000",
        title: "台風はどこへ？ | ふしぎがいっぱい （5年） | NHK for School",
        description: "台風の雲の動き方について学ぶ。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110049_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300275_00000&p=box",
        title: "気象衛星で見た天気の変化 | NHK for School",
        description: "気象衛星の雲画像と地上の天気の移り変わりを比べて、日本列島の天気が西から東に変化していくようすをみます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300275_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300277_00000&p=box",
        title: "インゲンマメの中のつくり | NHK for School",
        description: "インゲンマメの種子を半分にすると、根や葉になる部分があることがわかります。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300277_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300073_00000&p=box",
        title: "飛行機雲と天気の変化 | NHK for School",
        description: "飛行機雲のでき方とその後の天気の変化の言い伝えを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300073_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110250_00000",
        title: "大地をけずる水 | 理科５年 ふしぎワールド | NHK for School",
        description: "流れる水が地面をけずる様子を観察し、けずられ方が水の量や速さと関係していることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110250_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300756_00000&p=box",
        title: "ガリレオが発見したふりこの等時性 | NHK for School",
        description: "１６世紀の科学者、ガリレオ・ガリレイが、ふりこのきまりを発見しました。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300756_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301866_00000&p=box",
        title: "発芽に子葉は必要？予想してみよう！ | NHK for School",
        description: "種のほとんどの部分をしめる子葉。発芽するとしぼんでしまうけど、子葉は発芽に必要なのかな？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301866_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300044_00000&p=box",
        title: "一日の気温変化（アメダス） | NHK for School",
        description: "アメダス画像による気温の見かたと全国の気温を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300044_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300096_00000&p=box",
        title: "種の発芽と水と空気の条件 | NHK for School",
        description: "水を張った水槽に斜面を作りインゲンマメの発芽の様子を観る実験映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300096_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110434_00000",
        title: "実をつけるには？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "アサガオやナスにはめばなとおばながない。どうやって実をつけるのかな？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110434_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110060_00000",
        title: "料理は科学！ | ふしぎがいっぱい （5年） | NHK for School",
        description: "理科で学んだことが日常生活の中で様々な形で活用されていることを知る。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110060_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301067_00000&p=box",
        title: "もやしの作り方 | NHK for School",
        description: "もやし工場では、緑豆を光に当てずに育てることでもやしを作っている。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301067_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301080_00000&p=box",
        title: "台風の動き方 | NHK for School",
        description: "日本にやってくる台風の動きには、大体決まりがあることを知ります。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301080_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300361_00000&p=box",
        title: "へその緒の役割 | NHK for School",
        description: "おなかの中の赤ちゃんは、母親とつながった「へその緒」によって、酸素や栄養を得ています。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300361_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301863_00000&p=box",
        title: "雲の動きを見れば天気予報ができる？ | NHK for School",
        description: "気象衛星から見た雲の様子から、各地の数時間後の天気を予報できるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301863_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301064_00000&p=box",
        title: "芽を出すのに必要な部分 | NHK for School",
        description: "種の中で、芽が出るのに必要なのは、どの部分なのかを知る。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301064_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300360_00000&p=box",
        title: "子宮の中の赤ちゃん | NHK for School",
        description: "子宮の中では、赤ちゃんが「羊水」に包まれて成長していきます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300360_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110421_00000",
        title: "ゆれ方がちがうのは？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "ブランコの往復する時間は何が関係している？予想を立て、結果を見通した調べ方を考えよう！予想どおりなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110421_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110247_00000",
        title: "受けつがれるいのち | 理科５年 ふしぎワールド | NHK for School",
        description: "生命の起源と連続性を科学史を交えて紹介する。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110247_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300535_00000&p=box",
        title: "三角州のでき方 | NHK for School",
        description: "川の下流に見られる三角州は、河口などで水の流れがとても緩やかになるためにできる地形であることを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300535_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401018_00000&p=box",
        title: "メダカの卵の変化 | NHK for School",
        description: "メダカの卵の中がふ化に向けて変化する様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401018_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400812_00000&p=box",
        title: "豆の根や葉になるところ | NHK for School",
        description: "半分に切ったシロハナマメを育てて葉になるところが育つ様子を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400812_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401038_00000&p=box",
        title: "イネの花のつくり | NHK for School",
        description: "イネの花のおしべとめしべを顕微鏡で詳しく観察する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401038_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302083_00000&p=box",
        title: "雲の動きから天気を予測しよう | NHK for School",
        description: "気象衛星から見た雲の動きを手がかりに、数時間後の天気を予測してみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302083_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110048_00000",
        title: "実をつけるには | ふしぎがいっぱい （5年） | NHK for School",
        description: "花はめしべに花粉がつくことによって結実し、種子ができることを調べる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110048_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110422_00000",
        title: "水に塩を入れると？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "水に塩を入れると塩はなくなる？それともなくならない？どんな調べ方で確かめられるか考えてみよう！予想どおりなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110422_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301867_00000&p=box",
        title: "発芽に子葉は必要？確かめてみよう！ | NHK for School",
        description: "子葉が発芽に必要か調べてみたよ。どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301867_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110424_00000",
        title: "電磁石を強くするには？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "どうしたら電磁石を強くできる？どんな調べ方で確かめられるか考えてみよう！予想どおりなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110424_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302073_00000&p=box",
        title: "発芽には水と空気どちらも必要？ | NHK for School",
        description: "発芽には水と空気、どちらも必要なのかな？インゲンマメで調べてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302073_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300152_00000&p=box",
        title: "もやしの成長と光の条件 | NHK for School",
        description: "光を当てる場合、当てない場合でのもやしの成長を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300152_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110251_00000",
        title: "かたちをかえる川 | 理科５年 ふしぎワールド | NHK for School",
        description: "川の姿を観察し、水の流れが川の姿を形作ることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110251_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110256_00000",
        title: "とけたもののゆくえ | 理科５年 ふしぎワールド | NHK for School",
        description: "物は水にとけても重さは変わらないことや、水にとける物の量には限度があることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110256_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300454_00000&p=box",
        title: "台風のでき方 | NHK for School",
        description: "南の海で雲が発生し、それが発達する様子の映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300454_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110248_00000",
        title: "実をつける植物 | 理科５年 ふしぎワールド | NHK for School",
        description: "花はめしべに花粉がつくことによって結実し種子ができることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110248_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300409_00000&p=box",
        title: "花の中のおしべとめしべ | NHK for School",
        description: "さまざまな植物のオシベとメシベを観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300409_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300176_00000&p=box",
        title: "イネの成長／光と肥料の条件 | NHK for School",
        description: "光と肥料を与えたイネと与えないイネの1か月間の育ち方を観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300176_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401016_00000&p=box",
        title: "メダカの人工授精 | NHK for School",
        description: "メダカの卵を人工授精させ、精子の動きなどを顕微鏡で観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401016_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301095_00000&p=box",
        title: "太陽と気温の変化 | NHK for School",
        description: "太陽が出ている時間によって、気温が大きく変化することを調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301095_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110057_00000",
        title: "電気で磁石？ | ふしぎがいっぱい （5年） | NHK for School",
        description: "電磁石のコイルに電流を流し、電流の向きと電磁石の極に関係があることに気づく。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110057_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110058_00000",
        title: "電磁石で勝負！ | ふしぎがいっぱい （5年） | NHK for School",
        description: "電磁石の強さは電流の強さや導線の巻き数によって変わることを調べる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110058_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300483_00000&p=box",
        title: "台風の進む方向と風の向き | NHK for School",
        description: "台風が近づくと、風の向きがどう変化するかを調べます。風は中心に向かって反時計回りに吹いています。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300483_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302082_00000&p=box",
        title: "おなかの中のふたごの赤ちゃん | NHK for School",
        description: "おなかの中のふた子の赤ちゃんの様子を見てみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302082_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300031_00000&p=box",
        title: "ホウセンカのたねまき | NHK for School",
        description: "ホウセンカの種の形の紹介と子葉から本葉が出るまでを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300031_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400028_00000&p=box",
        title: "ニワトリの誕生 | NHK for School",
        description: "ニワトリの卵、産卵、雛の育ち方、親子の関わり方を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400028_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110249_00000",
        title: "秋の天気と台風 | 理科５年 ふしぎワールド | NHK for School",
        description: "秋の天気には、台風がやってくるなどの特徴があることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110249_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110255_00000",
        title: "地球のひみつ | 理科５年 ふしぎワールド | NHK for School",
        description: "図表や自然現象から事象を読み取り、まとめて伝える力を養う。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110255_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301077_00000&p=box",
        title: "花粉の役割 | NHK for School",
        description: "オバナの花粉が、メバナのメシベについて、種ができることを実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301077_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300005_00000&p=box",
        title: "アサガオのたねの中 | NHK for School",
        description: "アサガオの種を切断して種の中のつくりと役割を観る事ができます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300005_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401106_00000&p=box",
        title: "台風のひ害 | NHK for School",
        description: "台風が近づいた時の雨や風などによるさまざまな被害を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401106_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300534_00000&p=box",
        title: "せん状地のでき方 | NHK for School",
        description: "川の中流に見られる扇状地は、水の流れが緩やかになるところにできる地形であることを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300534_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300070_00000&p=box",
        title: "三日間の雲の観察（東京） | NHK for School",
        description: "東京の晴れ、曇り、雨の日の天気の変化を地上から撮影しました。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300070_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110055_00000",
        title: "ウナギのなぞにせまれ | ふしぎがいっぱい （5年） | NHK for School",
        description: "科学者の仕事を通して、理科（科学）を学ぶおもしろさを伝える。この回では、世界で初めて、ウナギの完全養殖に成功した科学者を紹介する。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110055_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301860_00000&p=box",
        title: "大きく育つには何が必要？ | NHK for School",
        description: "同じ大きさのインゲンマメをちがう場所で育てたら、育ち方がまったくちがった。育てた場所を手がかりに、植物の成長に必要なものを予想しよう！",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301860_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300533_00000&p=box",
        title: "Ｖ字谷のでき方 | NHK for School",
        description: "川の上流に見られるＶ字谷は、激しい水の流れが作った地形であることを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300533_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400144_00000&p=box",
        title: "トウモロコシのお花とめ花 | NHK for School",
        description: "トウモロコシのお花とめ花、受粉後のめしべについた花粉を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400144_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300122_00000&p=box",
        title: "インゲンマメの芽になるところを育てると | NHK for School",
        description: "インゲンマメの芽になる部分だけを切り取り、その発芽を観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300122_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110257_00000",
        title: "出てくるけっしょう | 理科５年 ふしぎワールド | NHK for School",
        description: "水の量と温度で溶け方が変わることや、水溶液を冷やすと結晶になってでてくることをとらえる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110257_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110440_00000",
        title: "洪水（こうずい）を防ぐには？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "洪水（こうずい）を防ぐため、川の周りにはいろいろな工夫が見られる。でも、その工夫は上流、中流、下流でちがう。いったいなぜだろう？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110440_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300452_00000&p=box",
        title: "台風の強い風と雨 | NHK for School",
        description: "強い風と雨を作る装置を使って、台風の雨と風の強さを体験します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300452_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300151_00000&p=box",
        title: "もやしの成長とでんぷん | NHK for School",
        description: "もやしの種子の発芽前と発芽後のでんぷんの量を調べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300151_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300043_00000&p=box",
        title: "気象衛星から見た一日の雲の動き | NHK for School",
        description: "気象衛星から見た1時間毎の１日の雲の動きを連続して観る事ができます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300043_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110054_00000",
        title: "とける？ | ふしぎがいっぱい （5年） | NHK for School",
        description: "水に物が溶けていく様子を観察。温度の変化によって、水に溶ける物の量には限度があることに気がつく。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110054_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110050_00000",
        title: "川は流れて・・・ | ふしぎがいっぱい （5年） | NHK for School",
        description: "川の上流・中流・下流で、地形・流れる水の速さ・川原の石の大きさや形にそれぞれ違いがある事に気付く。そして、その違いを流水の働きと関係づけて捉えられるようにする。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110050_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400803_00000&p=box",
        title: "ふりことメトロノーム | NHK for School",
        description: "メトロノームのおもりの位置とテンポの関係を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400803_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110429_00000",
        title: "たくさんとかすには？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "水に塩やさとうを入れると、とける。でも塩やさとうをどんどん増やしていくと、とけなくなくなった。もっととかすにはどうしたらいい？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110429_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110426_00000",
        title: "モーターを回すには？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "モーターを回すには、どうしたらいい？どんな調べ方で確かめられるか考えてみよう！予想どおりなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110426_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400879_00000&p=box",
        title: "ウマの出産 | NHK for School",
        description: "牧場でのウマ（道産子）の出産と出産時の親子の様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400879_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110439_00000",
        title: "雨の川に土が混ざるのは？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "雨がふると川の水には土や砂がまざってにごる。にごるのはなぜだろう？理由を予想して確かめるにはどうすればいい？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110439_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110428_00000",
        title: "どうして前へ進むの？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "レールの上を進むおもちゃの車。レールには電磁石、車には磁石がついている。どうして前に進むのかな？もっと遠くまで動かすにはどうしたらいい？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110428_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300281_00000&p=box",
        title: "根と葉になる部分だけで育つ？ | NHK for School",
        description: "種子の中の根と葉のもとになる部分だけでも育つかどうかの実験映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300281_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301062_00000&p=box",
        title: "種は半分でも育つ？ | NHK for School",
        description: "タネを半分にしても、インゲンは成長することができる。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301062_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300121_00000&p=box",
        title: "インゲンマメの子葉の大きさと成長のしかた | NHK for School",
        description: "芽になる部分に子葉を三分の一、半分、全部をつけて発芽させます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300121_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110430_00000",
        title: "とけたものを取り出すには？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "水にとけた食塩やさとう。取り出すにはどうしたらいい？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110430_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301204_00000&p=box",
        title: "子宮で成長する赤ちゃん | NHK for School",
        description: "人の子宮の中で赤ちゃんが成長するようすをエコー映像を使って説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301204_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401028_00000&p=box",
        title: "サケの卵の変化～ち魚になるまで～ | NHK for School",
        description: "受精したサケの卵の変化とふ化した稚魚の様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401028_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301088_00000&p=box",
        title: "ダムの役割 | NHK for School",
        description: "水を供給するダムの役割と、自然の山や森がダムの役目を果たしていることを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301088_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401482_00000&p=box",
        title: "キツツキの長い舌 | NHK for School",
        description: "キツツキの仲間は木の中の小さな虫を餌にします。くちばしで木をつついて虫の居場所を探し、近くまで掘り進むと、長い舌を使って虫を引っ張り出します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401482_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301078_00000&p=box",
        title: "台風の風の強さ | NHK for School",
        description: "台風の風の強さを、強い風を起こす装置を使って実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301078_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300149_00000&p=box",
        title: "トウモロコシの成長と光の条件 | NHK for School",
        description: "トウモロコシに黒いビニールを被せ、成長と光の関係を観ます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300149_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005402060_00000&p=box",
        title: "母体内の赤ちゃんの成長／アニメ | NHK for School",
        description: "母体内で赤ちゃんがどんな状態でいるのか、アニメーションでわかりやすく紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005402/D0005402060_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401492_00000&p=box",
        title: "オオジシギの飛来 | NHK for School",
        description: "オオジシギは、春に南半球のオーストラリアからやってきます。オスは、鳴きながら飛行機の爆音のような音を立てて急降下を繰り返し、メスに求愛します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401492_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400461_00000&p=box",
        title: "日本海側に雪が多いのはなぜ？ | NHK for School",
        description: "冬の日本海側に降雪量が多い理由と太平洋側に少ない理由を説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400461_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400026_00000&p=box",
        title: "ウシの出産 | NHK for School",
        description: "重要な家畜であるウシの出産と人の手助けの方法を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400026_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300172_00000&p=box",
        title: "種もみ、玄米、白米の発芽 | NHK for School",
        description: "種もみ、玄米、白米を発芽させ発芽に関係する部分を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300172_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401477_00000&p=box",
        title: "アリとアブラムシ | NHK for School",
        description: "アリは、アブラムシの腹部の先端から出る甘い排泄物を餌にし、アブラムシはアリに排泄物の掃除をしてもらい、また、さまざまな敵から守ってもらいます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401477_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400236_00000&p=box",
        title: "ヘチマの花 | NHK for School",
        description: "ヘチマの花の、お花とめ花の違いの説明を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400236_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300757_00000&p=box",
        title: "おもりの位置とふりこの動く速さ | NHK for School",
        description: "ふりこが往復する時間は、ヒモの長さではなく、ふりこの長さによって変わることを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300757_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300232_00000&p=box",
        title: "かさ雲と天気の変化 | NHK for School",
        description: "雲から、天気を知る方法（観天望気）を知り、雲の観察への興味を高める。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300232_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400813_00000&p=box",
        title: "豆の根や葉になる部分だけを育てる | NHK for School",
        description: "シロハナマメの根や葉になる部分だけを１０日間育てる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400813_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110053_00000",
        title: "海の水って？ | ふしぎがいっぱい （5年） | NHK for School",
        description: "海水から塩を作る様子を通して、水溶液とは何か、捉える。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110053_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400131_00000&p=box",
        title: "ユリの受粉と実の成長 | NHK for School",
        description: "ユリの受粉後に花粉管が伸び、実、種子ができるまでを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400131_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400096_00000&p=box",
        title: "動物のおすとめす | NHK for School",
        description: "動物のオスとメスの違いを、ライオンやクジャクなどで紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400096_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110052_00000",
        title: "川とつきあう | ふしぎがいっぱい （5年） | NHK for School",
        description: "水が洪水などの災害をもたらすことがあることを知り、自然とのつきあい方を考える。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110052_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300016_00000&p=box",
        title: "気象衛星からみた雲の動き（1月～3月） | NHK for School",
        description: "気象衛星からみた１月～３月の雲の動きを時間をちぢめて観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300016_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110059_00000",
        title: "まわる電磁石（でんじしゃく） | ふしぎがいっぱい （5年） | NHK for School",
        description: "電気を中心に、人間が利用しているエネルギーの今後の可能性について知る。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110059_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300285_00000&p=box",
        title: "種が発芽する条件の調べ方 | NHK for School",
        description: "もやしの種子が発芽するためには、水と空気が必要であることを実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300285_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400094_00000&p=box",
        title: "サケの産卵 | NHK for School",
        description: "生まれた川に戻ったサケが交尾、産卵する様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400094_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301339_00000&p=box",
        title: "水に溶けるって？ | NHK for School",
        description: "水に溶けるとはどういうことかを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301339_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300018_00000&p=box",
        title: "気象衛星からみた雲の動き（7月～9月） | NHK for School",
        description: "気象衛星からみた7月～9月の雲の動きを時間をちぢめて観映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300018_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300019_00000&p=box",
        title: "気象衛星からみた雲の動き（10月～1月） | NHK for School",
        description: "気象衛星からみた10月～1月の雲の動きを時間をちぢめて観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300019_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300282_00000&p=box",
        title: "子葉の大きさを変えて育ててみる | NHK for School",
        description: "種子の子葉の大きさを変えて成長の違いを観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300282_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110425_00000",
        title: "電磁石の実験を改善しよう | ふしぎエンドレス 理科５年 | NHK for School",
        description: "電磁石の実験を見直して改善してみよう。どんな調べ方で確かめられるか考えてみよう！予想どおりなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110425_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400148_00000&p=box",
        title: "スイカの花粉と受粉から実 | NHK for School",
        description: "スイカのお花から花粉が出る様子と受粉しため花の受粉管を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400148_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300909_00000&p=box",
        title: "時速１００キロメートルの振り子－ダイジェスト／大科学実験 | NHK for School",
        description: "回転半径５０ｍの振り子を使い、おもりの速さを時速１００ｋｍにする実験。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300909_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400655_00000&p=box",
        title: "ふりこ時計 | NHK for School",
        description: "振り子を使った時計での振り子の１往復する時間の違いを見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400655_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400082_00000&p=box",
        title: "アメリカザリガニの交尾 | NHK for School",
        description: "アメリカザリガニの体の特徴、繁殖、産卵、卵の様子などを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400082_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301212_00000&p=box",
        title: "東京で見た雲の変化 | NHK for School",
        description: "雲の形が時間と共ともに変化し、天気も変化していく様子を説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301212_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300363_00000&p=box",
        title: "動物の赤ちゃん | NHK for School",
        description: "ウマやカンガルーなど、ヒト以外の動物が、生まれてくるまでにどれぐらいかかるかを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300363_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300408_00000&p=box",
        title: "めしべについた花粉のゆくえ | NHK for School",
        description: "メシベについた花粉が、花粉管をのばし、実がなるまでを観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300408_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301084_00000&p=box",
        title: "曲がった川の内側と外側の違い | NHK for School",
        description: "川のカーブの内側と外側での、流速や地形の違いを実際の川で観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301084_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300755_00000&p=box",
        title: "ふりこの往復する時間とヒモの長さ | NHK for School",
        description: "ふりこは、ヒモの長さが短いほど、往復する時間は短くなることを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300755_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300197_00000&p=box",
        title: "光を当ててもやしを育てると | NHK for School",
        description: "太陽を当てて育てたもやしの様子を１２日間観察した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300197_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400816_00000&p=box",
        title: "ヒヤシンス | NHK for School",
        description: "ヒヤシンスの球根の育ち方や花の咲く様子を時間を縮めて見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400816_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300676_00000&p=box",
        title: "塩の結晶の作り方 | NHK for School",
        description: "簡単に塩の結晶をつくる方法を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300676_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400657_00000&p=box",
        title: "ブランコの乗り方とふれ方 | NHK for School",
        description: "立って乗るブランコと座って乗るブランコの１往復する時間を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400657_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400121_00000&p=box",
        title: "レンゲソウの受粉のしかた | NHK for School",
        description: "レンゲソウの花粉をミツバチが運び受粉する様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400121_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400776_00000&p=box",
        title: "種がぎっしり ガマの穂 | NHK for School",
        description: "ガマの群落の様子とガマの穂の種子のつくりを紹介する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400776_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400199_00000&p=box",
        title: "台風１９号（1991年）のひ害 | NHK for School",
        description: "1991年の台風19号の九州から東北地方までの被害を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400199_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400122_00000&p=box",
        title: "ツユクサの受粉のしかた | NHK for School",
        description: "ツユクサの花が、花弁を閉じることで自家受粉する様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400122_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400587_00000&p=box",
        title: "ふりこを使った手作りおもちゃ | NHK for School",
        description: "振り子を使ったおもちゃでのおもりの位置と振れる速さの関係を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400587_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400161_00000&p=box",
        title: "カボチャの受粉 | NHK for School",
        description: "カボチャのおしべの花粉を顕微鏡で観察して受粉のしくみを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400161_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401037_00000&p=box",
        title: "イネの開花と受粉 | NHK for School",
        description: "イネの花の開花と花粉、受粉後のめしべの様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401037_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300724_00000&p=box",
        title: "モーターが回転するしくみ | NHK for School",
        description: "モーターは電磁石の引き合う力と反発する力を利用して回転していることを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300724_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300120_00000&p=box",
        title: "二つに割ったインゲンマメの発芽 | NHK for School",
        description: "インゲンマメを二つに割り、どちらが発芽するのかを観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300120_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110276_00000",
        title: "ふしぎな電磁石 | 理科６年 ふしぎ情報局 | NHK for School",
        description: "電磁石の強さは、電流の強さや導線の巻き数によって変わることを調べる。",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110276_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110423_00000",
        title: "とけたものはどこにある？ | ふしぎエンドレス 理科５年 | NHK for School",
        description: "水に塩を入れるととけた塩はどこにある？上？下？全体？どんな調べ方で確かめられるか考えてみよう！予想どおりなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110423_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401476_00000&p=box",
        title: "クマノミとイソギンチャク | NHK for School",
        description: "イソギンチャクの毒が平気なクマノミは、イソギンチャクの傍にいることで他の魚から守って貰いながら、イソギンチャクの餌の魚を油断させ呼び寄せます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401476_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400097_00000&p=box",
        title: "ヤギの受精卵のでき方と出産 | NHK for School",
        description: "ヤギの交尾、受精卵と胎児の様子から出産までを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400097_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301870_00000&p=box",
        title: "おなかの赤ちゃんを見てみよう① | NHK for School",
        description: "お母さんのおなかの中の赤ちゃんを特別なカメラで見てみたよ。どんなふしぎが見つかるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301870_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300723_00000&p=box",
        title: "ふりこの往復する時間とおもりの重さ | NHK for School",
        description: "おもりの重さが変わっても、ふりこが往復する時間はほとんど変わらないことを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300723_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005110277_00000",
        title: "かつやくする電磁石 | 理科６年 ふしぎ情報局    | NHK for School",
        description: "電磁石のしくみを応用するとモーターや発電機になることを学ぶ",
        image: "https://www.nhk.or.jp/das/image/D0005110/D0005110277_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400661_00000&p=box",
        title: "長さ２５メートルのふりこ | NHK for School",
        description: "1往復が10秒かかる25メートルの紐の振り子の動きを見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400661_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400613_00000&p=box",
        title: "人間ふりこと重さ | NHK for School",
        description: "遊園地の人間振り子で、1人の時と３人の時の１往復する時間を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400613_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301202_00000&p=box",
        title: "おなかの中の赤ちゃんのようす | NHK for School",
        description: "おなかの中での人の赤ちゃんのようすをエコー映像で説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301202_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300722_00000&p=box",
        title: "ふりこの往復する時間とふれはば | NHK for School",
        description: "ふれはばを大きくしても小さくしても、ふりこの往復する時間はほとんど変わらないことを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300722_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300320_00000&p=box",
        title: "光を当ててもやしの種子を育てると | NHK for School",
        description: "太陽の光に当てて育てた緑豆のようすを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300320_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301096_00000&p=box",
        title: "台風が南からやってくるわけ | NHK for School",
        description: "南の海上で生まれた台風が、日本にやってくるわけを、地球の大気の流れから説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301096_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300198_00000&p=box",
        title: "工場で作られるもやし | NHK for School",
        description: "工場で食品としてもやしが育てられる方法や工程を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300198_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300758_00000&p=box",
        title: "植物は土がなくても育つ | NHK for School",
        description: "植物は、土がなくても肥料や水、光などがあれば元気に育つことを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300758_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300325_00000&p=box",
        title: "ヒキガエルの産らんのようす | NHK for School",
        description: "ヒキガエルの雌が雄と一緒になって産卵する様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300325_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300171_00000&p=box",
        title: "イネの発芽からなえができるまで | NHK for School",
        description: "種もみが発芽して苗に育つまでを時間を縮めて観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300171_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300148_00000&p=box",
        title: "トウモロコシの発芽とでんぷん | NHK for School",
        description: "トウモロコシの発芽前後の子葉の中のでんぷんを調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300148_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401501_00000&p=box",
        title: "清流の宝石 カワセミ | NHK for School",
        description: "カワセミは背中の青と胸のオレンジ色が鮮やかな美しい鳥で、魚とりの王者といわれます。餌になる魚が戻ってきた都会の川でも見られるようになりました。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401501_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300686_00000&p=box",
        title: "電磁石の作り方 | NHK for School",
        description: "身の回りの物を使って、電磁石を作る方法を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300686_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300417_00000&p=box",
        title: "日なたと日かげのキュウリの成長 | NHK for School",
        description: "日光によく当たったキュウリの苗は、日陰のキュウリよりもよく成長することを実験で確かめます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300417_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400814_00000&p=box",
        title: "光の当て方とカイワレののび方 | NHK for School",
        description: "カイワレダイコンに光を当て光の当たる方向に育つ様子を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400814_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400586_00000&p=box",
        title: "ミニチュアブランコのふれ方 | NHK for School",
        description: "ミニチュアブランコと人の乗るブランコの振れ方の違いを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400586_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400145_00000&p=box",
        title: "トウモロコシのひげ | NHK for School",
        description: "トウモロコシのひげが実につながっていることを観察した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400145_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400120_00000&p=box",
        title: "模型で見るへそのおのはたらき | NHK for School",
        description: "おなかの中の赤ちゃんの「へそのお」のはたらきを、模型（もけい）を使って説明する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400120_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301214_00000&p=box",
        title: "東京の天気が大阪よりおくれるのは？ | NHK for School",
        description: "東京と大阪の同じ時刻の天気の映像を比較することで、天気が西から変化していくことを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301214_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300453_00000&p=box",
        title: "台風が出来る場所 | NHK for School",
        description: "日本にやってくる台風は、南の海で発生することを、気象衛星の映像から観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300453_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300910_00000&p=box",
        title: "時速１００キロメートルの振り子－ハイライト／大科学実験 | NHK for School",
        description: "回転半径５０ｍの振り子を使い、おもりの速さを時速１００ｋｍにする実験。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300910_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300109_00000&p=box",
        title: "タマネギの根・くき・葉 | NHK for School",
        description: "半分に切ったタマネギを土に植え、育ち方を時間を縮めて観ます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300109_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300506_00000&p=box",
        title: "ホウセンカの花のつくり | NHK for School",
        description: "ホウセンカの花を分解した様子を観察し、花びらの中心に棒のようなもの（めしべ）があることを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300506_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300532_00000&p=box",
        title: "川の上流～下流 石のようす | NHK for School",
        description: "川の上流と下流での石のようすの違いを、実際の川で観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300532_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300319_00000&p=box",
        title: "もやしを作っているようす | NHK for School",
        description: "緑豆を、光に当てずに育てることで、もやしを作っているもやし工場のようすを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300319_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302069_00000&p=box",
        title: "食塩水をろ過したら食塩を取り出せる？ | NHK for School",
        description: "コーヒーフィルターを使って食塩水をろ過してみた。食塩を取り出せるだろうか。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302069_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300196_00000&p=box",
        title: "光を当てないでもやしを育てると | NHK for School",
        description: "光を当てずに育てたもやしの様子を１２日間観察した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300196_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400862_00000&p=box",
        title: "カボチャのお花とめ花 | NHK for School",
        description: "カボチャのめ花には花の下に丸い部分があることや花の中の違いを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400862_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400676_00000&p=box",
        title: "導線に方位磁針を近づけると | NHK for School",
        description: "1本の導線に電流を流し磁石の働きがおきるか方位磁針で調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400676_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301841_00000&p=box",
        title: "ブランコの往復する時間がちがうのは？ | NHK for School",
        description: "ブランコを同時にスタートしてもゆれ方がちがうのはなぜだろう？往復する時間は何が関係しているのか予想してみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301841_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301859_00000&p=box",
        title: "どうして育ち方にちがいが出た？ | NHK for School",
        description: "同じ大きさのインゲンマメをちがう場所で育てたら、育ち方がまったくちがった。どうして？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301859_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301213_00000&p=box",
        title: "東京と大阪の同時こくの天気 | NHK for School",
        description: "東京と大阪の同じ時刻の雲の映像で、雲が西から東へ移動していることに気づかせ、天気との関係を示唆します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301213_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301075_00000&p=box",
        title: "スイカのめばなとおばな | NHK for School",
        description: "スイカにはオバナとメバナがあり、身をつけるのはメバナだけである。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301075_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400747_00000&p=box",
        title: "イチゴの花とみ | NHK for School",
        description: "イチゴの実の熟し方と実についた種子を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400747_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400663_00000&p=box",
        title: "ふりこの１往復する時間の計り方 | NHK for School",
        description: "振り子が１往復する時間を正確に計る方法を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400663_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300573_00000&p=box",
        title: "水の働きで形が変わった華厳の滝 | NHK for School",
        description: "川の流れによって、滝の形が大きく変わった例を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300573_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401098_00000&p=box",
        title: "台風の動きと地上の様子 | NHK for School",
        description: "気象衛星と地上から見た雲の動きを関連付けて観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401098_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400790_00000&p=box",
        title: "めを出すコナラのどんぐり | NHK for School",
        description: "土の上のコナラのドングリから根と芽が出る様子を時間を縮めて見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400790_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300455_00000&p=box",
        title: "実験で台風を作る | NHK for School",
        description: "台風の出来る様子をドライアイスを使った模型実験で再現する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300455_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300274_00000&p=box",
        title: "雨の降っている地域の変化 | NHK for School",
        description: "日本列島の３地点の映像と降水のデータから、天気が西から東に変化していくようすをみます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300274_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401097_00000&p=box",
        title: "台風はどこからくるのか | NHK for School",
        description: "台風が赤道近くの熱帯の海で発生する様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401097_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400150_00000&p=box",
        title: "スイカのお花とめ花 | NHK for School",
        description: "スイカ畑のお花とめ花のつくり、受粉するとめ花の実になるところが育つことを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400150_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400194_00000&p=box",
        title: "台風の動きとひ害 | NHK for School",
        description: "気象衛星画像と天気図での台風の動きと地上の様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400194_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300673_00000&p=box",
        title: "さとうと塩の水に溶ける量 | NHK for School",
        description: "さとうは塩とくらべ、水に溶ける量が多いことを実験して見てみます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300673_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301341_00000&p=box",
        title: "食塩水から食塩を取り出すには？ | NHK for School",
        description: "水に溶けた食塩を取り出す方法を説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301341_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300680_00000&p=box",
        title: "ミョウバンと食塩のとけ方 | NHK for School",
        description: "食塩とミョウバンで、温度による溶ける量の違いを比べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300680_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005403220_00000&p=box",
        title: "アカウミガメの産らん | NHK for School",
        description: "アカウミガメの産卵する海岸、産卵の様子を紹介する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005403/D0005403220_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401040_00000&p=box",
        title: "イネの受粉と実の成長 | NHK for School",
        description: "めしべに花粉を付けたイネと付けないイネの実のでき方を実験した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401040_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301210_00000&p=box",
        title: "こう水にそなえる河川しき | NHK for School",
        description: "河川敷の工夫と、洪水への対策を説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301210_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300674_00000&p=box",
        title: "塩をもっと溶かすには | NHK for School",
        description: "塩が水に溶ける量が、水の量や温度によってどう変わるか、実験した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300674_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401475_00000&p=box",
        title: "ハゼとテッポウエビ | NHK for School",
        description: "ダテハゼは、ニシキテッポウエビが作る巣穴を利用させてもらう代わりに、ほとんど目の見えないテッポウエビの見張り役になり、敵が来ると教えてやります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401475_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400459_00000&p=box",
        title: "日本海側と太平洋側の冬の天気 | NHK for School",
        description: "冬の上越市と東京の雪の日や天気の違いを比べた映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400459_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401474_00000&p=box",
        title: "サンゴガニとサンゴ | NHK for School",
        description: "サンゴガニはサンゴと共生するカニです。サンゴが分泌する粘液を食べ、サンゴが天敵のオニヒトデに襲われると、オニヒトデを攻撃してサンゴを守ります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401474_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400659_00000&p=box",
        title: "ふりこの長さとは | NHK for School",
        description: "高さの違うペットボトルに水を入れ１往復する時間を確かめます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400659_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400162_00000&p=box",
        title: "カボチャの受粉と実の成長 | NHK for School",
        description: "カボチャのめしべに花粉を付けたものと付けないものを比較した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400162_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301869_00000&p=box",
        title: "ナスのおしべとめしべはどこにある？ | NHK for School",
        description: "ナスの花には、めばなとおばながない。どうやって実をつけるのかな？ヘチマを手がかりに考えてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301869_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300879_00000&p=box",
        title: "かなりしょっぱいウェディング－ダイジェスト／大科学実験 | NHK for School",
        description: "濃い塩水に衣装の形のフレームを入れ、時間をおくと食塩の結晶がフレームに付着し、だんだん大きくなっていく。塩の結晶が成長していく様子を観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300879_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401411_00000&p=box",
        title: "ウナギの一生 | NHK for School",
        description: "海と川を回遊するウナギの一生を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401411_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400238_00000&p=box",
        title: "ヘチマの実の成長 | NHK for School",
        description: "ヘチマの花が咲いた後、実ができる様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400238_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301873_00000&p=box",
        title: "変わった進路の台風 | NHK for School",
        description: "変わった進路をとった台風を見てみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301873_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301089_00000&p=box",
        title: "砂防ダムの役割 | NHK for School",
        description: "砂防ダムは、洪水のときの土砂が流出するのを防ぎます。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301089_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401485_00000&p=box",
        title: "ミズグモ | NHK for School",
        description: "釧路湿原の沼には、ミズグモという、水中で生活する珍しいクモがいます。空気の入った袋を水草に付けて巣を作り、水中に糸を張ってその上を移動します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401485_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400864_00000&p=box",
        title: "ジャンボカボチャの受粉と実の成長 | NHK for School",
        description: "農家の人がジャンボカボチャを受粉させる理由やその様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400864_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301100_00000&p=box",
        title: "ミョウバンと塩の結晶の出来方の違い | NHK for School",
        description: "塩とミョウバンを比べて、その溶け方や、結晶の出来方の違いを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301100_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301086_00000&p=box",
        title: "雨の強さと実際の被害 | NHK for School",
        description: "大雨がもたらす影響を、実験装置や実際の被害から紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301086_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301083_00000&p=box",
        title: "曲がった川での流れの速さ | NHK for School",
        description: "水が川のカーブを流れるとき、外側のほうが流れが速いことを実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301083_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300717_00000&p=box",
        title: "電流の向きを変えると極が変わる | NHK for School",
        description: "電磁石の極性と、流れる電流の方向について調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300717_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300677_00000&p=box",
        title: "さとうがとけるようす | NHK for School",
        description: "水に入れた砂糖が溶けていく様子を肉眼や顕微鏡で観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300677_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300175_00000&p=box",
        title: "イネの発芽とでんぷん | NHK for School",
        description: "発芽直後と２週間後の種もみを半分に切り、種もみの中を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300175_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400202_00000&p=box",
        title: "台風と風のつよさ | NHK for School",
        description: "台風の時の風速と風の影響をアニメーションをまじえて説明する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400202_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301217_00000&p=box",
        title: "台風の正体 | NHK for School",
        description: "台風のでき方を解説します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301217_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301079_00000&p=box",
        title: "台風はどうやって出来るのか | NHK for School",
        description: "台風は、南の海でたくさんの水が蒸発することで、上昇気流が生まれ、発生します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301079_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300286_00000&p=box",
        title: "植物に片側から光を当てると | NHK for School",
        description: "もやしの芽に片側から光を当てて育てると、光を当てたほうに向かって伸びていく。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300286_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300487_00000&p=box",
        title: "海風と陸風 | NHK for School",
        description: "水と地面の暖まり方の違いから、昼間と夜とで違う風向きが生じる様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300487_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300486_00000&p=box",
        title: "湖上と地上の気温の変化の違い | NHK for School",
        description: "水と地面の暖まり方の違いから、湖上と陸上で気温の違いが生まれることを観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300486_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300150_00000&p=box",
        title: "光の当て方とのびるトウモロコシ | NHK for School",
        description: "発芽したトウモロコシに横から日光を当て、育つ方向を確かめます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300150_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400564_00000&p=box",
        title: "コイルの作り方 | NHK for School",
        description: "ポリエチレンの筒にエナメル線を巻きコイルを作る方法を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400564_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400164_00000&p=box",
        title: "ジャンボカボチャの花と受粉 | NHK for School",
        description: "ジャンボカボチャのおしべとめしべの違いや受粉のしくみを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400164_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301872_00000&p=box",
        title: "台風はどう進む？ | NHK for School",
        description: "台風から身を守るために進路予想図の見方を知ろう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301872_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301871_00000&p=box",
        title: "おなかの赤ちゃんを見てみよう② | NHK for School",
        description: "おなかの中の赤ちゃんは、どんどん大きくなっていくよ。特別なカメラで撮影した１１週目以降の赤ちゃんを見て、ふしぎを見つけてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301871_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301203_00000&p=box",
        title: "人の命の始まり | NHK for School",
        description: "人の受精のしかたについて説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301203_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301097_00000&p=box",
        title: "トイレットペーパーは水にとけるか | NHK for School",
        description: "トイレットペーパーは水に溶けるのか、さとうとくらべた実験を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301097_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300903_00000&p=box",
        title: "忍者になろう－ダイジェスト／大科学実験 | NHK for School",
        description: "７．５メートルの鉄の壁を、両手両足に電磁石を装着した忍者がよじ登る実験。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300903_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300675_00000&p=box",
        title: "塩を取り出す方法 | NHK for School",
        description: "飽和食塩水を冷やしたり、熱したりして結晶を取り出します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300675_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400815_00000&p=box",
        title: "ウドの育て方 | NHK for School",
        description: "光の当たらない穴の中で育てたウドと光を当て育てたウドを比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400815_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400501_00000&p=box",
        title: "水にとけた食塩の重さ | NHK for School",
        description: "ビーカーの水に食塩の結晶を溶かし、溶ける前後の重さを計る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400501_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400292_00000&p=box",
        title: "土石流のひ害 | NHK for School",
        description: "雲仙普賢岳の火山灰などが雨で流され土石流となった時の被害を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400292_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400071_00000&p=box",
        title: "ムツゴロウの誕生 | NHK for School",
        description: "干潟に生息するムツゴロウの繁殖行動、ふ化、稚魚を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400071_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302081_00000&p=box",
        title: "おなかの赤ちゃんはねているの？ | NHK for School",
        description: "赤ちゃんは、おなかにいる間、ずっとねているのだろうか？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302081_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301340_00000&p=box",
        title: "ろ過ででんぷんを取り出す | NHK for School",
        description: "水に溶けないでんぷんを取り出す方法を説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301340_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300279_00000&p=box",
        title: "トウモロコシの中身と成長 | NHK for School",
        description: "トウモロコシの種子の中と発芽の様子を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300279_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401494_00000&p=box",
        title: "源流に住むイワナ | NHK for School",
        description: "イワナは、水温が１５度以下の山奥の冷たい渓流に暮らしています。川の深みに１匹で縄張りを作り、流れてくる昆虫などを他のイワナと争って捕食します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401494_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400669_00000&p=box",
        title: "モーターがまわるしくみ | NHK for School",
        description: "磁石の間にコイルを置き電流を切り替えてコイルが回る様子をみます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400669_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302084_00000&p=box",
        title: "風の強さを表すことば | NHK for School",
        description: "天気予報で耳にする「やや強い風」や「非常に強い風」などの言葉。いったいどれくらいの強さを表しているのだろう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302084_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300575_00000&p=box",
        title: "水げん林の役わり | NHK for School",
        description: "自然の山や森がダムの役割を果たしていることを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300575_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401583_00000&p=box",
        title: "家探しの名手オカヤドカリ | NHK for School",
        description: "オカヤドカリはヤドカリの一種で、陸上にすんでいます。鹿児島県の喜界島では、家にする巻貝の殻が少ないので、カタツムリの殻や、ごみまで利用します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401583_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401091_00000&p=box",
        title: "磁石の作り方 | NHK for School",
        description: "コイルが使われている磁石を作る機械を使った磁石の作り方を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401091_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400591_00000&p=box",
        title: "コイルの周りに砂鉄をまくと | NHK for School",
        description: "コイルの周りに砂鉄をまき磁力でできる砂鉄の模様を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400591_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301073_00000&p=box",
        title: "水辺の生き物の産卵 | NHK for School",
        description: "カエルやミジンコの産卵の様子を見る。多くはオスとメスが「つがい」になって卵を産む。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301073_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300726_00000&p=box",
        title: "整流子と電磁石の極 | NHK for School",
        description: "コイルに流れる電流の向きを変えることで電磁石の極を変える整流子のしくみを模型実験で説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300726_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300484_00000&p=box",
        title: "台風の通り道 | NHK for School",
        description: "日本列島の近くに来た台風の通り道を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300484_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300050_00000&p=box",
        title: "秋の天気と雲の動き | NHK for School",
        description: "台風の地上及び気象衛星映像での雲の動きを観ることができます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300050_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401502_00000&p=box",
        title: "川で成長するアユ | NHK for School",
        description: "アユは、卵からかえると川を下って冬を海で過ごし、初夏に川に帰ってきます。川の中流域に定住して縄張りを作り、川底の石についた苔を食べて育ちます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401502_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401041_00000&p=box",
        title: "マツバボタンのめしべについた花粉 | NHK for School",
        description: "マツバボタンの受粉した後の花粉管の様子を詳しく観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401041_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400219_00000&p=box",
        title: "タイリクバラタナゴと二枚貝 | NHK for School",
        description: "タイリクバラタナゴがドブガイに産卵する様子や卵の育ち方を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400219_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400129_00000&p=box",
        title: "サンゴの産卵 | NHK for School",
        description: "珊瑚礁でのサンゴのつくりや育ち方と産卵の様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400129_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400079_00000&p=box",
        title: "エラブウミヘビの産卵 | NHK for School",
        description: "エラブウミヘビの陸上での繁殖行動と産卵の様子などの生態を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400079_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400024_00000&p=box",
        title: "ムササビの求愛 | NHK for School",
        description: "木の穴の巣に住む11月のムササビの繁殖時期の行動を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400024_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300904_00000&p=box",
        title: "忍者になろう－ハイライト／大科学実験 | NHK for School",
        description: "７．５メートルの鉄の壁を、両手両足に電磁石を装着した忍者がよじ登る実験。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300904_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300231_00000&p=box",
        title: "日がさ雲と天気の変化 | NHK for School",
        description: "雲から、天気を知る方法（観天望気）を知り、雲の観察への興味を高める。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300231_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300199_00000&p=box",
        title: "白花豆の発芽と子葉のでんぷん | NHK for School",
        description: "発芽する前と発芽後の白花豆を切断してでんぷんを調べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300199_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401117_00000&p=box",
        title: "シロザケの誕生 | NHK for School",
        description: "産卵のために川に戻るシロザケの産卵の様子、卵のふ化を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401117_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400322_00000&p=box",
        title: "雲仙（うんぜん）の土石流 | NHK for School",
        description: "雲仙普賢岳の土石流が橋を流す様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400322_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400248_00000&p=box",
        title: "台風の動きと気象観測 | NHK for School",
        description: "春と秋の雲の動きと、気象庁の台風観測の様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400248_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302221_00000&p=box",
        title: "ふりことは… | NHK for School",
        description: "ひもやぼうなどにおもりをつけて、左右にふれるようにした物を「ふりこ」と言うよ。「支点」「ふれはば」「ふりこの長さ」「１往復する時間の長さ」って何だろう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302221_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301842_00000&p=box",
        title: "往復する時間は「重さ」が関係する？ | NHK for School",
        description: "ふりこの往復する時間は重さが関係しているのか、実験して確かめてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301842_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300908_00000&p=box",
        title: "時速１００キロメートルの振り子－小実験／大科学実験 | NHK for School",
        description: "振り子の速さは、おもりの重さではなく、おもりを離す位置によって速さが変わることを実験する。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300908_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401500_00000&p=box",
        title: "干潟を跳ねるミナミトビハゼ | NHK for School",
        description: "ミナミトビハゼは皮膚呼吸ができるため、干潟でも生きられる魚です。胸びれを使って干潟の上を動き回り、仲間同士でも争ってカニや昆虫などを食べます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401500_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401424_00000&p=box",
        title: "雪原をかけるエゾユキウサギ | NHK for School",
        description: "北海道の雪原で生きるエゾユキウサギは、巣穴を持たず、体一つで冬の寒さに耐えます。身を守る最大の武器は速い足で、夜になってから食べ物を探します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401424_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400750_00000&p=box",
        title: "ヤシの実 | NHK for School",
        description: "芽や根と実が出たヤシの実を半分に切り実の中を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400750_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400250_00000&p=box",
        title: "夏の天気と水不足 | NHK for School",
        description: "夏の天気の晴れが続く時、水不足となることを説明する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400250_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301846_00000&p=box",
        title: "水と食塩水のちがいを手がかりにすると？ | NHK for School",
        description: "水に塩を入れると、塩はどこにある？水と食塩水のちがいを手がかりにして調べ方を考えよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301846_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301524_00000&p=box",
        title: "台風などによる水害への対策は？ | NHK for School",
        description: "水害の被害を減らすための対策を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301524_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300388_00000&p=box",
        title: "花の中にあるめしべとおしべ | NHK for School",
        description: "オクラ、ホウセンカ、アサガオ、キキョウ、ヤマユリの花を観察し、どれも花びらとその中心に棒のようなもの（めしべ）があることを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300388_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401490_00000&p=box",
        title: "ホンソメワケベラのクリーニング | NHK for School",
        description: "サンゴ礁に棲むホンソメワケベラが、他の魚の口の周りの食べかすや、体についた寄生虫を取ってクリーニングする様子を紹介します",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401490_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400792_00000&p=box",
        title: "クヌギのどんぐりができるまで | NHK for School",
        description: "クヌギの花の雄花と雌花やどんぐりが育つ様子を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400792_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400500_00000&p=box",
        title: "食塩は水にどれだけとけるのか | NHK for School",
        description: "塩が水に溶ける様子と二日目には溶けなくなる様子を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400500_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400146_00000&p=box",
        title: "トウモロコシの花粉のはたらき | NHK for School",
        description: "トウモロコシの実のでき方と花粉の関係を調べる実験映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400146_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302066_00000&p=box",
        title: "食塩のつぶを細かくするととける量は？ | NHK for School",
        description: "食塩はつぶの大きさによって、水にとける量が変わるのだろうか。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302066_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301216_00000&p=box",
        title: "台風はどこから？ | NHK for School",
        description: "台風とはどのようなものなのか、どこでできるのかを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301216_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301099_00000&p=box",
        title: "溶けた塩はどこにある | NHK for School",
        description: "ビーカーの食塩水から塩の結晶を取り出し、塩が水にまんべんなくとけていることを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301099_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300880_00000&p=box",
        title: "かなりしょっぱいウェディング－ハイライト／大科学実験 | NHK for School",
        description: "濃い塩水に衣装の形のフレームを入れ、時間をおくと食塩の結晶がフレームに付着し、だんだん大きくなっていきます。.塩の結晶が成長していく様子を観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300880_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300689_00000&p=box",
        title: "電磁石の強さとコイルの巻き数 | NHK for School",
        description: "電磁石の強さとコイルの巻き数の関係を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300689_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300536_00000&p=box",
        title: "雨のふる量と強さ | NHK for School",
        description: "雨を降らせる実験装置で雨量と雨の強さの関係を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300536_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300493_00000&p=box",
        title: "曲がった川が土地を変える様子 | NHK for School",
        description: "水が川のカーブを流れると、カーブの外側が削られることを調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300493_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300492_00000&p=box",
        title: "曲がって流れる水の速さ | NHK for School",
        description: "曲がった溝を流れる水にボールを流し、カーブの外側の方が水の流れが速いことを観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300492_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300403_00000&p=box",
        title: "スイカの花の観察 | NHK for School",
        description: "スイカには雄花と雌花があり、おしべとめしべのようすを観察する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300403_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300230_00000&p=box",
        title: "飛行機雲で天気の変化 | NHK for School",
        description: "雲から、天気を知る方法（観天望気）を知り、雲の観察への興味を高める。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300230_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300147_00000&p=box",
        title: "トウモロコシの発芽に必要な部分は | NHK for School",
        description: "トウモロコシの種子の芽になる部分と、その他の部分の発芽を観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300147_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401578_00000&p=box",
        title: "アカウミガメのふ化 | NHK for School",
        description: "アカウミガメを保護する御前崎のふ化場、カメの卵の育ち方を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401578_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400592_00000&p=box",
        title: "導線の周りにまいた砂鉄の模様 | NHK for School",
        description: "導線に流す電流の向きを変えて方位磁針の針の動きの変化を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400592_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400340_00000&p=box",
        title: "地形を変える水の流れ | NHK for School",
        description: "土でできた斜面の上からホースで水を流して土の流れ方を観ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400340_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301162_00000&p=box",
        title: "電磁石を強くするには 巻き数を変える | NHK for School",
        description: "電磁石の強さとコイルの巻き数の関係を調べます",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301162_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300930_00000&p=box",
        title: "角砂糖の運命 | NHK for School",
        description: "×と○を書いた角砂糖。×が出た角砂糖はコップの水に溶けますが、○が出た角砂糖は水に溶けないマジック。その秘密は飽和水溶液でした。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300930_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300716_00000&p=box",
        title: "電磁石を強くするには 電流の働き | NHK for School",
        description: "電磁石の強さと、電磁石を流れる電流の強さの関係を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300716_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300574_00000&p=box",
        title: "ダムの役わり | NHK for School",
        description: "川の上流に作られたダムが、人の使う水を貯めたり流す量を調節したりしていることを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300574_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401491_00000&p=box",
        title: "クロツグミの飛来 | NHK for School",
        description: "クロツグミは４月半ば、繁殖のために中国南部や東南アジアから渡ってきます。オスは独特のメロディと節回しで囀り、縄張りを主張しメスを呼び寄せます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401491_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401089_00000&p=box",
        title: "大きさのちがう３つのふりこ | NHK for School",
        description: "大きさの違う３つのおもりを揺らし、１往復する時間を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401089_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400660_00000&p=box",
        title: "ひもの長さとふれ方のきまり | NHK for School",
        description: "振り子の紐の長さを変えると１往復する時間が変わることを確かめます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400660_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400275_00000&p=box",
        title: "土地をけずる川 | NHK for School",
        description: "大雨の時の増水した川の水が川岸の土を削る様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400275_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400253_00000&p=box",
        title: "こう水のひ害 | NHK for School",
        description: "家を流したり、鉄橋を流してしまう洪水の被害を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400253_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400069_00000&p=box",
        title: "トウアカクマノミの誕生 | NHK for School",
        description: "サンゴ礁に生息するトウアカクマノミの産卵などの生態を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400069_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302110_00000&p=box",
        title: "食塩水の温度を下げると… | NHK for School",
        description: "湯にとけている食塩をもう一度とり出すには？水の温度が高くなると食塩がとける量も多くなることを手がかりに、水を冷水で冷やす実験。結果から何が言えそう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302110_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302078_00000&p=box",
        title: "ナスの受粉に虫は関係している？ | NHK for School",
        description: "ナスは１つの花におしべとめしべがある。どうやって受粉するのだろう？ナス農家をたずねるとハチをかっていた。なにか関係あるのかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302078_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301211_00000&p=box",
        title: "こう水を防ぐために作られた人工の川 | NHK for School",
        description: "隅田川の洪水を防ぐために人工の河川、荒川放水路が作られたことを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301211_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300672_00000&p=box",
        title: "さとうが溶ける水の温度の違い | NHK for School",
        description: "砂糖は水の温度によって溶けるはやさが変わるかどうか、実験した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300672_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300489_00000&p=box",
        title: "土や砂を運ぶ水 | NHK for School",
        description: "流れる水が、土や砂を削り、運ぶ様子を実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300489_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300447_00000&p=box",
        title: "カの発生 | NHK for School",
        description: "ジョウロに残された水の中から、カの幼虫が成長する様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300447_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300174_00000&p=box",
        title: "イネの発芽と白米の部分 | NHK for School",
        description: "発芽する部分を切り取った玄米と切り取らない玄米の成長を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300174_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300107_00000&p=box",
        title: "しおれたホウセンカと水 | NHK for School",
        description: "しおれたホウセンカに水をたっぷりあげると元気になる様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300107_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401823_00000&p=box",
        title: "ミョウバンのけっしょう | NHK for School",
        description: "温度によるミョウバンの溶ける量の観察と結晶の出てくる様子を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401823_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401595_00000&p=box",
        title: "軒下で子育て ツバメ | NHK for School",
        description: "ツバメは天敵から逃れるために、人家の軒下に巣を作って子育てし、人に守って貰っています。若鳥が巣立ちをすると人家を離れて集団でねぐらを作ります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401595_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401581_00000&p=box",
        title: "屋根裏のトウヨウヒナコウモリ | NHK for School",
        description: "哺乳動物であるコウモリは、建物の屋根裏などで出産と子育てをします。日没直後の、昆虫が活動しはじめる時間に自分の餌をとり、子どもには乳を与えます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401581_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401504_00000&p=box",
        title: "生命を育むマングローブ | NHK for School",
        description: "マングローブとは、亜熱帯地方の海水と淡水の混じった河口付近に生育する植物の総称です。マングローブが生育する干潟にはさまざまな生物が見られます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401504_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401470_00000&p=box",
        title: "樹氷 | NHK for School",
        description: "東北地方の山の亜高山帯では、冬になると、木に雪と氷がついた樹氷が見られます。樹氷ができるのは、オオシラビソという常緑の針葉樹に限られています。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401470_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400806_00000&p=box",
        title: "ヤリイカの一生 | NHK for School",
        description: "水温が下がるころ浅い砂地でヤリイカが産卵する様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400806_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400499_00000&p=box",
        title: "けんびきょうで見た食塩がとける様子 | NHK for School",
        description: "食塩の結晶に水をつけ溶ける様子を顕微鏡で観察した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400499_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301206_00000&p=box",
        title: "1974年の多摩川のはんらん | NHK for School",
        description: "１９７４年の多摩川の氾濫を例にあげ、水の力について説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301206_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301082_00000&p=box",
        title: "水で物を切断する機械 | NHK for School",
        description: "水を使って金属など硬いものを切る機械を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301082_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300681_00000&p=box",
        title: "ミョウバンのとける量と温度 | NHK for School",
        description: "食塩に比べ、ミョウバンの溶ける量は温度によって大きく変わることを示します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300681_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300626_00000&p=box",
        title: "さとうを水に入れたようす | NHK for School",
        description: "砂糖を水に入れて見られるシュリーレン現象を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300626_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300526_00000&p=box",
        title: "曲がった川の流れの速さ | NHK for School",
        description: "実際の川でカーブの内側と外側でボールを流し、流速の違いを観察する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300526_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401584_00000&p=box",
        title: "サンゴの秘密 | NHK for School",
        description: "サンゴ礁の海には、餌になるプランクトンが少ないのに多くの生き物が住んでいます。それは、サンゴの中で共生している褐虫藻が作る栄養分のおかげです。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401584_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401489_00000&p=box",
        title: "ブダイの護身術 | NHK for School",
        description: "ブダイは、群れで移動しながら、サンゴに付着した藻を餌にしています。夜寝る時は、口やエラから出した粘液で体全体を包み込み、外敵から身を守ります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401489_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401488_00000&p=box",
        title: "サンゴ礁の一日 | NHK for School",
        description: "石の塊のように見えるサンゴもれっきとした動物です。小さなポリプの集合体で、夜になると活動し、細い触手を出して海中の動物プランクトンを捕えます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401488_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401039_00000&p=box",
        title: "さく前とさいた後のイネのめしべ | NHK for School",
        description: "イネの花の咲く前と咲き終わった後のめしべを観察した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401039_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400809_00000&p=box",
        title: "神秘の光 ホタルイカ | NHK for School",
        description: "春の富山湾でのホタルイカの産卵や卵、ふ化の様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400809_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400756_00000&p=box",
        title: "食塩と小麦このとけ方 | NHK for School",
        description: "食塩と小麦粉を水に溶かし、溶け方を観察・説明する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400756_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400527_00000&p=box",
        title: "ミョウバンを水に入れると | NHK for School",
        description: "ミョウバンの結晶を水に入れて、溶ける様子を観察する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400527_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400463_00000&p=box",
        title: "冬の天気を分ける山 | NHK for School",
        description: "群馬県谷川岳から日本海側と太平洋側の雲の様子を見た映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400463_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400197_00000&p=box",
        title: "いせわん台風（1959年）のひ害 | NHK for School",
        description: "伊勢湾台風が紀伊半島の沿岸にもたらした被害を紹介する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400197_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302268_00000&p=box",
        title: "流れ下る川の石は・・・ | NHK for School",
        description: "川の石は場所によってどんなちがいがあるかな？ 山の中の川の石、山から平地へ出たあたりの川の石、平地を流れる川の石。これらの石のようすから、どんなことが言える？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302268_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302126_00000&p=box",
        title: "さとうを水にとかす | NHK for School",
        description: "食塩とさとうを水にとかしたときの様子を比べる。どちらも、見えなくなるけど、とかす前とあとの重さに注目して実験すると、なくなっていないことがわかるね。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302126_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301850_00000&p=box",
        title: "モーターが回るのは？ | NHK for School",
        description: "モーターが回るには何が関係していると思う？予想してみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301850_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301848_00000&p=box",
        title: "電磁石の強さは「まく回数」が関係する？ | NHK for School",
        description: "電磁石の強さがどう線の「まく回数」と関係しているかを調べてみた。この方法で大丈夫？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301848_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301161_00000&p=box",
        title: "電磁石を作ろう | NHK for School",
        description: "電磁石は電流を流すと、磁石と同じはたらきをすることを実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301161_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301106_00000&p=box",
        title: "塩の性質を利用した石けん作り | NHK for School",
        description: "石けん液から石けんの塊を取り出すために、食塩水を使う方法を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301106_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301087_00000&p=box",
        title: "川岸の護岸 | NHK for School",
        description: "実際の川で、水害を防ぐためにおかれているコンクリートブロックの様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301087_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300964_00000&p=box",
        title: "たねのもとになるめしべ | NHK for School",
        description: "オクラ、ホウセンカ、アサガオ、キキョウ、ヤマユリの花を観察し、どれも花びらとその中心に棒のようなものがあることを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300964_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300682_00000&p=box",
        title: "ミョウバンと食塩の結しょう作り | NHK for School",
        description: "食塩とミョウバンで、湯に溶かした水溶液を冷やして結晶の出来方の違いを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300682_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300627_00000&p=box",
        title: "溶ける前と溶けた後の重さは | NHK for School",
        description: "物が水にとけると、重さはどうなるか、砂糖が溶ける前と溶けた後の重さを計ってみた映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300627_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300538_00000&p=box",
        title: "河川敷の役割 | NHK for School",
        description: "広い河川敷には洪水の被害を和らげる役目があることを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300538_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300537_00000&p=box",
        title: "雨の量と災害の関係 | NHK for School",
        description: "大雨のために大規模な土砂崩れが起きた所で、前日から１時間毎に降った雨の量を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300537_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300405_00000&p=box",
        title: "スイカの花粉 | NHK for School",
        description: "スイカの花を使って、顕微鏡で花粉を観察する方法を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300405_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300173_00000&p=box",
        title: "イネの根と芽になるところ | NHK for School",
        description: "発芽する部分を切り取ったイネの育ち方を観察する実験映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300173_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401088_00000&p=box",
        title: "おもりの重さとふれ方のきまり | NHK for School",
        description: "重さの違うペットボトルを振り子にして１往復する時間を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401088_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400588_00000&p=box",
        title: "ふれはばとふれ方のきまり | NHK for School",
        description: "重さの違うペットボトルを紐でつるし１往復する時間を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400588_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400312_00000&p=box",
        title: "川原の石の様子 | NHK for School",
        description: "川の上流、中流、下流の川原の石の形や大きさを観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400312_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400303_00000&p=box",
        title: "川の曲がったところ | NHK for School",
        description: "川の曲がった場所の内側は川原に、外側は崖になっている様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400303_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400201_00000&p=box",
        title: "台風と川の増水～台風15号 2001年～ | NHK for School",
        description: "2001年の台風15号の関東地方の被害や川の増水の様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400201_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302223_00000&p=box",
        title: "ふりこが１往復する時間のはかり方 | NHK for School",
        description: "ふりこが１往復する時間をタイマーではかってみると、短くてはかりにくい。１０往復する時間をはかって、これを１０でわれば、１往復する時間が調べられるね。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302223_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301338_00000&p=box",
        title: "食塩とでんぷんを入れたにごった水 | NHK for School",
        description: "でんぷんと食塩が入った水から、それぞれを取り出す方法を考えるための映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301338_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301208_00000&p=box",
        title: "水の流れとグランドキャニオン | NHK for School",
        description: "水の流れる力は、グランドキャニオンのような地形までつくる場合があることを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301208_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301076_00000&p=box",
        title: "けんび鏡で見たスイカの花粉 | NHK for School",
        description: "けんび鏡で花粉を観察するやり方の紹介です。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301076_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300688_00000&p=box",
        title: "導線１本で磁石になるか | NHK for School",
        description: "導線一本に電流を流し、磁石と引き合う様子を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300688_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300280_00000&p=box",
        title: "イネの中身と成長 | NHK for School",
        description: "イネの種子の中と発芽の様子を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300280_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401495_00000&p=box",
        title: "豊かなオヒルギの森 | NHK for School",
        description: "マングローブの仲間のオヒルギは真水を好み、塩分の少ない川の上流部に生育します。その葉や果実は、上流部だけでなく河口の干潟の生物も養っています。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401495_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401087_00000&p=box",
        title: "人間ふりことふれはば | NHK for School",
        description: "遊園地の人間振り子で、振れ幅が変化した時の1往復する時間を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401087_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400924_00000&p=box",
        title: "食塩が水にとける様子 | NHK for School",
        description: "食塩のつぶを水に入れ、溶ける時にできるすじを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400924_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400614_00000&p=box",
        title: "ふりこの重さが２倍になると | NHK for School",
        description: "重さの違うおもりを同時に揺らして振れ方が変わらないことを実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400614_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400571_00000&p=box",
        title: "導線とコイルに起きる磁石の力 | NHK for School",
        description: "1本の導線、コイル、鉄の芯を入れたコイルの磁力を比べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400571_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400565_00000&p=box",
        title: "コイルの中に鉄くぎを入れると | NHK for School",
        description: "電池をつないだコイルの中に鉄芯を入れると磁力が増すことを実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400565_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400530_00000&p=box",
        title: "さとうのけっしょうを作る | NHK for School",
        description: "80℃の湯で溶かした砂糖の水溶液を冷やして結晶が出る様子を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400530_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400529_00000&p=box",
        title: "さとうのとける量 | NHK for School",
        description: "水の温度を上げた時の砂糖の溶ける量を調べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400529_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400504_00000&p=box",
        title: "食塩のけっしょうを作る | NHK for School",
        description: "80℃の食塩水に糸を入れゆっくり冷やし結晶が糸に付く様子を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400504_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400343_00000&p=box",
        title: "水の流れる速さと水深 | NHK for School",
        description: "実験装置で水の深さと水の流れる速さの関係を実験した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400343_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400342_00000&p=box",
        title: "水の流れる速さと砂利 | NHK for School",
        description: "実験装置で斜面をつくり水の流れる速さと流される石の大きさの関係を観ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400342_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400323_00000&p=box",
        title: "土石流のひ害を防ぐ砂防ダム | NHK for School",
        description: "土石流を防ぐ砂防ダムの役割と効果を模型で実験をした映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400323_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400075_00000&p=box",
        title: "オカヤドカリの繁殖 | NHK for School",
        description: "陸で生活するオカヤドカリの海岸でのふ化行動と子どもの様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400075_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302267_00000&p=box",
        title: "流れる水には・・・ | NHK for School",
        description: "みぞをほった土のしゃ面に水を流すと、何かが水に流されている。水が流れたあとは、どんなようす？ この実験の結果、流れる水にはどんなはたらきがあると言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302267_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302114_00000&p=box",
        title: "ミョウバン水の温度を下げると… | NHK for School",
        description: "湯にとけたミョウバンをもう一度とり出すには？水の温度が高くなるとミョウバンがとける量も多くなることを手がかりに、水を冷水で冷やす実験。結果から何が言えそう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302114_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302055_00000&p=box",
        title: "導線のまき方で電じ石の強さは変わる？ | NHK for School",
        description: "電じ石の強さには、導線のまき方は関係あるのかな？すきまなくまいたコイルとゆるくまいたコイルで比べてみる。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302055_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302051_00000&p=box",
        title: "塩を水にとかすと重さは？ | NHK for School",
        description: "食塩を水にとかすと見えなくなる。このとき重さはどうなっているのかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302051_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301875_00000&p=box",
        title: "川の水の働きを調べるには？ | NHK for School",
        description: "川のミニチュアを使って流れる水の働きを調べてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301875_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301858_00000&p=box",
        title: "水にとけたものを取り出すには？  | NHK for School",
        description: "水にとかした食塩と砂糖を取り出しにはどうすればいい？普段の生活を手がかりに考えてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301858_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301098_00000&p=box",
        title: "「とける」ということは | NHK for School",
        description: "「溶ける」とはどういう状態であるのか、水や熱によってさまざまな溶け方をするさとうの実験の映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301098_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300587_00000&p=box",
        title: "水よう液ができるようす | NHK for School",
        description: "角砂糖を水に入れて水溶液のできる様子を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300587_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300406_00000&p=box",
        title: "スイカの花粉をつける農作業 | NHK for School",
        description: "スイカの雄花の花粉を雌花のめしべにつける様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300406_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300402_00000&p=box",
        title: "スイカの実の成長 | NHK for School",
        description: "スイカがどのように育つのか観察して見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300402_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005403227_00000&p=box",
        title: "空缶で子育て チチブ | NHK for School",
        description: "通称ダボハゼと呼ばれるチチブは、海底の石の下に穴を掘って産卵します。泥やゴミで石が見つからない東京湾では、空き缶の中に産卵する姿も見られます。",
        image: "https://www.nhk.or.jp/das/image/D0005403/D0005403227_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400925_00000&p=box",
        title: "食塩は水のどこにとけているのか | NHK for School",
        description: "食塩が溶けたビーカーの上、中間、下の食塩水の濃度を調べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400925_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400920_00000&p=box",
        title: "水の温度と食塩のとける量 | NHK for School",
        description: "20℃の水と80℃の水で食塩の溶ける量を比べる実験映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400920_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400760_00000&p=box",
        title: "メキシコの塩田 | NHK for School",
        description: "メキシコで海水から食塩が作られる様子を紹介する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400760_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400617_00000&p=box",
        title: "同じ長さの導線で作ったコイル | NHK for School",
        description: "同じ長さの導線で巻き数の違うコイルを作り、釘の引き付く数を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400617_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400593_00000&p=box",
        title: "コイルに強い電流を流す | NHK for School",
        description: "コイルに強い電流を流し続けると温度が上がることを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400593_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400169_00000&p=box",
        title: "カンタンの交尾 | NHK for School",
        description: "カンタンのオスの誘惑腺を使った繁殖方法などを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400169_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302231_00000&p=box",
        title: "ふりこの１往復する時間と関係あること | NHK for School",
        description: "ふりこが１往復する時間を長くするのに関係するのは何か、確かめた実験。その結果から、おもりの重さやふれはばは関係なく、ふりこの長さが関係すると言えそうだね。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302231_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302227_00000&p=box",
        title: "おもりの重さを変えて１往復する時間を調べるには… | NHK for School",
        description: "ふりこが１往復する時間を長くするには「おもりの重さを変える」という予想を確かめよう。でも、この実験の方法で良いかな？おもりの重さ以外の条件は、みんな同じかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302227_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302222_00000&p=box",
        title: "ふりこが１往復する時間をはかるには？ | NHK for School",
        description: "ふりこが１往復する時間をはかるには、どうしたらいいだろう？１往復する時間をタイマーではかってみると、短くてはかりにくいね。どうしたらいいかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302222_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302117_00000&p=box",
        title: "食塩とミョウバン 出てくる量のちがいは… | NHK for School",
        description: "熱い食塩水とミョウバン水が冷えると、食塩よりミョウバンの方が多く出てくるのはどうしてかを調べるため、とける量と水の温度の関係を見る。結果から何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302117_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302103_00000&p=box",
        title: "水の量とミョウバンがとける量の関係は… | NHK for School",
        description: "１カップに３ｇ入ったミョウバン。20℃、100ｍLの水にはカップ３ばい、200ｍLには７はい、300ｍLには11ぱいがとけた。この結果から何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302103_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302058_00000&p=box",
        title: "導線の太さを変えると電じ石の強さは？ | NHK for School",
        description: "電じ石の強さには、導線の太さは関係あるのかな？太さのちがう導線で比べてみた。結果からどんなことが言えるだろう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302058_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301163_00000&p=box",
        title: "電磁石を強くするには 芯を変える | NHK for School",
        description: "電磁石の強さと、コイルの中に入れる芯の関係を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301163_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300327_00000&p=box",
        title: "ホウネンエビの産らん | NHK for School",
        description: "ホウネンエビの雌が雄と交尾し泥の中に産卵する様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300327_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401506_00000&p=box",
        title: "マヤプシギの気根 | NHK for School",
        description: "マングローブの一種であるマヤプシギは、気根という根を空気中に出して呼吸しています。有機物が多い干潟の泥の中で不足がちな酸素を補っているのです。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401506_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401498_00000&p=box",
        title: "闇に生き抜くコシジロウミツバメ | NHK for School",
        description: "北海道東部の無人島、大黒島は、さまざまな海鳥の繁殖地です。コシジロウミツバメは、天敵のオオセグロカモメに襲われないよう、夜、島に戻ってきます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401498_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401493_00000&p=box",
        title: "ショウドウツバメの飛来 | NHK for School",
        description: "ショウドウツバメは日本に飛来するツバメの中で最も小さい種類で、５月ごろ東南アジアから渡ってきます。川岸の土手などに集団で営巣し子育てをします。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401493_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401479_00000&p=box",
        title: "高山植物の女王コマクサ | NHK for School",
        description: "コマクサは、自然環境の厳しい高山帯の荒れ地に咲く植物です。北海道の大雪山にだけ生息するウスバキチョウの幼虫は、コマクサだけを食べて成長します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401479_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401471_00000&p=box",
        title: "屋久島の天然杉 | NHK for School",
        description: "九州の南に位置する屋久島の標高１５００ｍ付近には、屋久杉の原生林が広がります。縄文杉をはじめ、樹齢２０００年を超える古木が何本も生きています。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401471_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400805_00000&p=box",
        title: "陸に上がって産卵 クサフグ | NHK for School",
        description: "クサフグが海岸の石に産卵する様子やその卵などを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400805_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400757_00000&p=box",
        title: "インスタントコーヒーのとけ方 | NHK for School",
        description: "インスタントコーヒーを水に入れ溶ける様子を観察する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400757_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400674_00000&p=box",
        title: "電磁石を使った魚つりゲーム | NHK for School",
        description: "紙に鉄クリップを付けコイルと電池で吊り上げるゲームを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400674_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400615_00000&p=box",
        title: "コイルの巻き数と電磁石の強さ | NHK for School",
        description: "50回巻きと200回巻きのコイルで虫ピンが引き付く数を比べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400615_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400310_00000&p=box",
        title: "川の石の大きさと形 | NHK for School",
        description: "川の上流、中流、下流の流れの様子と石の大きさや形を比べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400310_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400070_00000&p=box",
        title: "ビワコオオナマズの誕生 | NHK for School",
        description: "琵琶湖に生息するビワコオオナマズの産卵、卵のふ化を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400070_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302230_00000&p=box",
        title: "ふりこの１往復する時間と関係あるのは… | NHK for School",
        description: "ふりこが１往復する時間を長くするため、おもりの重さ、ふれはば、ふりこの長さを変えて実験した。その結果から、ふりこが１往復する時間を長くするには、どうしたら良い？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302230_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302106_00000&p=box",
        title: "水の温度とミョウバンがとける量の関係は… | NHK for School",
        description: "１カップに３ｇ入ったミョウバン。100mL、20℃の水ではカップ３ばい、40℃では７はい、60℃では18ぱいがとけた。この結果から何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302106_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302064_00000&p=box",
        title: "コイルと長くすると？ | NHK for School",
        description: "電磁石をとりつけたレールに、磁石をとりつけた車を置く。電流を流すと車が進む。このときコイルを長くすれば、もっと遠くまで進むだろうか？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302064_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302059_00000&p=box",
        title: "実験結果にばらつきが出たら | NHK for School",
        description: "同じ実験を３回行ったら結果にばらつきが出た。こんなとき、どうすればいい？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302059_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301932_00000&p=box",
        title: "水に入れた食塩は どうなった？ | NHK for School",
        description: "食塩を水に入れてかき混ぜると見えなくなった。食塩は、どうなった？１．なくなった？２．水の中に全部ある？３．水の中に少しある？４．その他。どう思う？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301932_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301209_00000&p=box",
        title: "川の水の利用と災害を防ぐ工夫 | NHK for School",
        description: "川の水を利用するために作った「せき」について、その構造を工夫することで水害を防ごうとしている例を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301209_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301081_00000&p=box",
        title: "水の量と土を削る力の関係 | NHK for School",
        description: "水の量が多いほど、土や砂を削る力が強いことを実験します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301081_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300902_00000&p=box",
        title: "忍者になろう－小実験／大科学実験 | NHK for School",
        description: "鉄の釘にエナメル線をまいたコイルで電磁石を作ります。コイルの巻き数によって、磁石の強さがかわる実験。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300902_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300878_00000&p=box",
        title: "かなりしょっぱいウェディング－小実験／大科学実験 | NHK for School",
        description: "溶ける塩の量は、水の温度が変わるととける量が増えます。その性質を利用し、塩の結晶を作ります。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300878_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300725_00000&p=box",
        title: "電磁石の極とモーターの回転 | NHK for School",
        description: "電磁石で作ったモーターの模型で、コイルに流れる電流の向きを変えると電磁石のＮ極とＳ極が変わり回転することを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300725_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300576_00000&p=box",
        title: "さ防ダムと土石流 | NHK for School",
        description: "実際の土石流の様子を見て、砂防ダムの役割を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300576_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300527_00000&p=box",
        title: "曲がった川の底のようす | NHK for School",
        description: "実際の川のカーブの内側と外側で、川底の様子を水中カメラで撮影した映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300527_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401589_00000&p=box",
        title: "わき水に住むムサシトミヨ | NHK for School",
        description: "ムサシトミヨは一年を通じて水温の変わらないわき水にしか棲めない魚です。今では埼玉県を流れる元荒川の上流でしか見られません。その産卵の様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401589_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401503_00000&p=box",
        title: "トビケラの知恵 | NHK for School",
        description: "トビケラは水中の落ち葉などを食べて生きる水生昆虫です。幼虫は落ち葉を食料にすると同時に、落ち葉や小枝、小石などを使って、身を守る巣を作ります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401503_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401496_00000&p=box",
        title: "なわばりを守るオオセグロカモメ | NHK for School",
        description: "オオセグロカモメは翼を広げると１．５ｍもある大型のカモメです。毎年同じ相手と巣作りをし、繁殖地では縄張りをめぐって他のカモメと激しく争います。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401496_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401478_00000&p=box",
        title: "ひっそりと咲くクロユリ | NHK for School",
        description: "クロユリは、高山に生育する茶色味を帯びた黒色のユリです。ハエなどに花粉を運んでもらうので、ハエを引き付けるため、臭いほどの強い匂いがあります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401478_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401426_00000&p=box",
        title: "オシドリの求愛 | NHK for School",
        description: "オシドリのオスは、繁殖期になると背中の羽をオレンジ色に変えてメスに求愛します。最近、オスとメスは一生連れ添うのではないことがわかってきました。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401426_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400811_00000&p=box",
        title: "アズキを二つに切ると | NHK for School",
        description: "アズキを割り、芽や根になる部分があることを観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400811_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400786_00000&p=box",
        title: "カラスウリのたね | NHK for School",
        description: "カラスウリの実から種子を取り出しその形を観察する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400786_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400616_00000&p=box",
        title: "コイルの巻き数を増やすと | NHK for School",
        description: "50回巻き、100回巻き、200回巻きのコイルで釘が引き付く数を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400616_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400589_00000&p=box",
        title: "ふりこのふれはばとふれ方 | NHK for School",
        description: "紐でつるしたおもりの振れ幅を変えて１往復する時間を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400589_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400528_00000&p=box",
        title: "出てくるミョウバンのけっしょう | NHK for School",
        description: "ミョウバンの水溶液を冷やして、結晶ができる様子を顕微鏡で見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400528_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400313_00000&p=box",
        title: "けずられる石 | NHK for School",
        description: "丸い石に加工する機械のしくみと川を下ると石が丸くなることを説明する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400313_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400259_00000&p=box",
        title: "こう水を防ぐくふう | NHK for School",
        description: "都市の洪水の被害を防ぐための川岸の広場やダムを紹介する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400259_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400247_00000&p=box",
        title: "コナラの実の成長 | NHK for School",
        description: "7月の終りから10月までのコナラの実（どんぐり）の成長を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400247_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400245_00000&p=box",
        title: "コナラの花から実へ | NHK for School",
        description: "コナラの木の春から秋までの変化と実ができる様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400245_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302258_00000&p=box",
        title: "河口付近のようす | NHK for School",
        description: "川が海に出るところを「河口」という。最上川や大井川の河口付近には、平らな土地が広がっている。これは、川の水に運ばれてきた土やすなが積もってできたと考えられる。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302258_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302257_00000&p=box",
        title: "四万十川の石のようすは・・・ | NHK for School",
        description: "高知県を流れる四万十川。石のようすに注目して見てみよう。山の中、山から平地へ出たあたり、平地。四万十川の石のようすには、どんなちがいがあると言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302257_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302229_00000&p=box",
        title: "長さを変えると １往復する時間は… | NHK for School",
        description: "ふりこが１往復する時間を長くするには、「ふりこの長さを変える」という予想を確かめよう。長さのちがう３つのふりこ。予想通りならどうなる？実験結果から言えることは？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302229_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302228_00000&p=box",
        title: "ふれはばを変えると １往復する時間は… | NHK for School",
        description: "ふりこが１往復する時間を長くするには、「ふれはばを変える」という予想を確かめよう。ふれはばのちがう３つのふりこ。予想通りならどうなる？実験結果から言えることは？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302228_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302226_00000&p=box",
        title: "おもりの重さを変えると １往復する時間は… | NHK for School",
        description: "ふりこが１往復する時間を長くするには「おもりの重さを変える」という予想を確かめよう。重さのちがう３つのふりこ。予想通りならどうなる？実験結果から言えることは？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302226_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302224_00000&p=box",
        title: "ふりこが１往復する時間を長くするには？ | NHK for School",
        description: "ふりこが１往復する時間を長くするには、どうしたらいいと思う？２つのふりこのちがいを手がかりに、１往復する時間を長くする方法を予想しよう！",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302224_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302219_00000&p=box",
        title: "モーターが回るしくみ | NHK for School",
        description: "クルクル回る電じしゃくをつくり、電じしゃくといっしょに回る切りかえスイッチをつけた。こうすると回転に合わせて電じしゃくのＮ極とＳ極が切りかわり、回り続ける。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302219_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302127_00000&p=box",
        title: "食塩のかたまりを水にとかす | NHK for School",
        description: "食塩のかたまりが水にとけても、全体の重さは変わらない。これは、食塩が水の中でばらばらになり、目に見えなくなるほど小さくなって、全体に広がっているからなんだ。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302127_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302122_00000&p=box",
        title: "食塩水をガラスにつけると出てくるもの | NHK for School",
        description: "ガラスの板についた食塩水の水てきをそのままにしておくと、食塩が出てきた。水がじょう発して少なくなり、とけていた食塩がとけきれなくなって出てきたんだ。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302122_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302107_00000&p=box",
        title: "水の温度と物がとける量の関係は… | NHK for School",
        description: "水の量を一定にして、水の温度と食塩がとける量の関係を調べた。同じようにして、水の温度とミョウバンが溶ける量の関係を調べた。この結果から、何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302107_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302077_00000&p=box",
        title: "ナスの受粉に風は関係している？ | NHK for School",
        description: "ナスは１つの花におしべとめしべがある。風で花がゆれたら、花粉がめしべにつくのだろうか？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302077_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302068_00000&p=box",
        title: "食塩水をじょう発させると？ | NHK for School",
        description: "食塩水を日光に当てたら、食塩を取り出せるだろうか？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302068_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302053_00000&p=box",
        title: "とけたものの行方 | NHK for School",
        description: "食塩は水の中でどのようにとけていくのだろう？特しゅなレンズでとける様子を見てみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302053_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302052_00000&p=box",
        title: "ミョウバンを水にとかすと重さは？ | NHK for School",
        description: "ミョウバンを水にとかすと見えなくなる。このとき重さはどうなっているのかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302052_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301874_00000&p=box",
        title: "雨がふると川は？ | NHK for School",
        description: "雨が降った後、川の水がにごるのはどうしてだろう？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301874_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301868_00000&p=box",
        title: "ナスはどうやって実をつける？ | NHK for School",
        description: "ヘチマとちがってナスの花には、めばなとおばながない。どうやって実をつけるのかな？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301868_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301853_00000&p=box",
        title: "極と極が反発すると？ | NHK for School",
        description: "電磁石をとりつけたレールに、磁石をとりつけた車を置く。電流を流すと車が進む。電磁石と磁石の間では、どんな力が働いているのだろう？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301853_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301851_00000&p=box",
        title: "どうすれば回る？ | NHK for School",
        description: "磁石の力を利用して回るモーター。高さをかえずに回すには、どうしたらいい？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301851_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301847_00000&p=box",
        title: "電磁石を強くするにはどうする？ | NHK for School",
        description: "電磁石の力を強くするにはどうする？予想してみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301847_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300691_00000&p=box",
        title: "コイルだけの磁石の力 | NHK for School",
        description: "コイルに電流を流して、磁力が生じる様子を見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300691_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300687_00000&p=box",
        title: "電磁石に極がある？ | NHK for School",
        description: "電磁石は電流を流すと、磁石と同じ性質をもつことを示します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300687_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300577_00000&p=box",
        title: "さ防ダムのも型実験 | NHK for School",
        description: "実験で、砂防ダムが土石流などの岩石が流出するのを防ぐ様子を見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300577_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300528_00000&p=box",
        title: "曲がった川の変化 | NHK for School",
        description: "川底の様子の違いは、川のカーブの内側と外側で流速が異なることによって生じることをＣＧで説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300528_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401582_00000&p=box",
        title: "電柱を使うカササギ | NHK for School",
        description: "カササギは九州の佐賀平野の周辺にしかいない珍しい鳥です。もともとは大きな木に巣を作る鳥ですが、人里では電柱の上に巣を作り、子育てをしています。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401582_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401580_00000&p=box",
        title: "ホヤがゆりかごアナハゼ | NHK for School",
        description: "アナハゼは浅い海の岩場に生息するカジカの仲間です。アナハゼのメスは交尾して体内で受精した卵を、外敵の心配のないホヤの出水孔の中に産みつけます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401580_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401497_00000&p=box",
        title: "大都会に生きるカワウ | NHK for School",
        description: "カワウは警戒心が強く、本来、川や湖などで生活します。都会の池に住みついた珍しい例です。狭い生活空間では巣作りの材料などを巡って争いが起きます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401497_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401484_00000&p=box",
        title: "野付半島のアカアシシギ | NHK for School",
        description: "４月、北海道東部の野付半島の湿原には、アカアシシギが繁殖のためにやってきます。草むらの中で子育てをし、ヒナが草むらから出るのは巣立ちの時です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401484_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401481_00000&p=box",
        title: "チングルマの四季 | NHK for School",
        description: "チングルマは、北海道と本州中部以北に分布するバラ科の高山植物です。夏に白い花を咲かせて綿毛のある種を作り、秋には葉を真っ赤にして山を彩ります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401481_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401425_00000&p=box",
        title: "のんびりと冬を越すゴマフアザラシ | NHK for School",
        description: "ゴマフアザラシは、冬になると北海道沿岸にやってきます。大人は日中の殆どを岩の上で休んで過ごし、子どもは遊びを通して、生きていく知恵を学びます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401425_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401095_00000&p=box",
        title: "こう水を防ぐ森 | NHK for School",
        description: "川の上流の水源林が水を蓄え洪水を防いでいることを説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401095_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401045_00000&p=box",
        title: "ココアのとけ方 | NHK for School",
        description: "ココアの粉を水に入れても溶けない様子を観察する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401045_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400590_00000&p=box",
        title: "コイルに流す電流の強さと力の関係 | NHK for School",
        description: "乾電池１個と2個をつないだコイルに虫ピンが引きつけられる数を比べます。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400590_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400503_00000&p=box",
        title: "出てくる食塩のけっしょう | NHK for School",
        description: "食塩水を蒸発させると食塩の結晶が出てくる様子を顕微鏡で見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400503_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400296_00000&p=box",
        title: "土石流のひ害を防ぐくふう | NHK for School",
        description: "雲仙普賢岳での土石流の被害を防ぐための導流提の役割を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400296_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400262_00000&p=box",
        title: "こう水を防ぐたな田 | NHK for School",
        description: "山の斜面につくられた棚田の洪水を防ぐ役割を模型を使って説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400262_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400256_00000&p=box",
        title: "こう水を防ぐてい防 | NHK for School",
        description: "多摩川につくられた堤防や洪水時の増水した様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400256_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400083_00000&p=box",
        title: "カブトガニのカップル | NHK for School",
        description: "カブトガニの歴史、生活のしかた、産卵などの生態を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400083_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400077_00000&p=box",
        title: "コブシメの産卵 | NHK for School",
        description: "コブシメの繁殖行動と産卵、ふ化した子どもの様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400077_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302264_00000&p=box",
        title: "川の曲がったところの流れの強さ | NHK for School",
        description: "曲がって流れている川の流れの強さを調べてみよう。大きさのちがう石を板の上に乗せて流れに入れると、内側ではどの石も流されないが、外側では大きい石も流された。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302264_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302263_00000&p=box",
        title: "川の曲がったところの流れの速さ | NHK for School",
        description: "曲がって流れている川の流れの速さを調べてみよう。ペットボトルが３ｍ流れる時間を測ると、内側では、およそ８秒。中間あたりは、およそ５秒。外側は、およそ３秒。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302263_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302252_00000&p=box",
        title: "最上川の流れの速さは・・・ | NHK for School",
        description: "山形県を流れる最上川。水の流れる速さに注目して見てみよう。山の中、山から平地へ出たあたり、平地。最上川の流れの速さは、どう変わっていったと言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302252_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302250_00000&p=box",
        title: "大井川を空から見ると・・・ | NHK for School",
        description: "静岡県を流れる大井川を空から見ていこう。山の中、山から平地へ出たあたり、平地。大井川のようすは、流れ下るにつれて、どう変わっていったと言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302250_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302225_00000&p=box",
        title: "ふりこが１往復する時間を長くする方法は？ | NHK for School",
        description: "ふりこが１往復する時間を長くするには、１．おもりの重さを変える ２．ふれはばを変える ３．ふりこの長さを変える ４．その他。どれだと、予想する？  ",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302225_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302216_00000&p=box",
        title: "じしゃくで電じしゃくはどう回る？ | NHK for School",
        description: "回るようにした電じしゃく。片方はＳ極、もう片方はＮ極だ。電じしゃくをはさんでぼうじしゃくをＳ極とＮ極が向かい合うように置く。電流を流すと、電じしゃくはどうなる？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302216_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302212_00000&p=box",
        title: "導線に電流を流すと… | NHK for School",
        description: "糸でつるしたぼうじしゃくのそばで、１本の導線に電流を流すと、ぼうじしゃくが動く。方位じしんのそばでも、はりが大きく動く。この結果からどんなことが言えそうかな？ ",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302212_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302125_00000&p=box",
        title: "とけた食塩はなくならない | NHK for School",
        description: "食塩を水にとかすと見えなくなるのは、食塩が水の中でばらばらになり目に見えないほど小さくなって全体に広がるからだ。このようなことを「とける」というよ。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302125_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302118_00000&p=box",
        title: "食塩とミョウバン 出てくる量のちがい | NHK for School",
        description: "熱い食塩水とミョウバン水が冷えると、食塩よりミョウバンの方が多く出てくる。水の温度が高くなると、食塩に比べてミョウバンはとける量が大きく増えるようだ。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302118_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302116_00000&p=box",
        title: "食塩とミョウバン 出てくる量のちがいは？ | NHK for School",
        description: "熱いミョウバン水と食塩水。糸をまいたはり金を入れる。よく日、ミョウバンの方には大きなかたまりができた。食塩の方には小さいつぶ。このちがいはどうしておこる？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302116_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302112_00000&p=box",
        title: "とけたミョウバンをとり出すには？ | NHK for School",
        description: "あたたかいミョウバン水にとけているミョウバンをもう一度とり出すにはどうしたら良い？手がかりは、とける量と水の量の関係、とける量と温度の関係。予想しよう！",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302112_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302104_00000&p=box",
        title: "水の量と物がとける量の関係は… | NHK for School",
        description: "水の温度を一定にして、水の量と食塩がとける量の関係を調べた。同じようにして、水の量とミョウバンが溶ける量の関係を調べた。この結果から、何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302104_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302085_00000&p=box",
        title: "川の水がにごるのは水の量と関係ある？ | NHK for School",
        description: "雨がふった後、川の水には土が混ざっていることがある。土の量は水が増えたからだろうか？川のミニチュアを作って関係を調べてみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302085_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302056_00000&p=box",
        title: "導線のまき方を変えると電じ石の強さは？ | NHK for School",
        description: "電じ石の強さには、導線のまき方は関係あるのかな？すきまなくまいたコイルとゆるくまいたコイルで比べてみた。結果からどんなことが言えるだろう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302056_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301934_00000&p=box",
        title: "ミョウバンのかたまりがとけるようす | NHK for School",
        description: "糸につるしたミョウバンのかたまりを水に入れると、モヤモヤが出て落ちていくのが見えるよ。こいミョウバン水が下に落ちながらまわりの水に広がってとけていくんだ。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301934_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301933_00000&p=box",
        title: "食塩が水にとけていくようす | NHK for School",
        description: "食塩のつぶを少しつまんで水に落とすと、とう明なすじを残して食塩が落ちていく。このすじは、こい食塩水だ。こい食塩水がまわりに広がりながら食塩は、とけていくんだ。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301933_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301857_00000&p=box",
        title: "とけたものを取り出すには？  | NHK for School",
        description: "水にとかした食塩と砂糖。取り出すことはできるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301857_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301852_00000&p=box",
        title: "どうして前へ進む？ | NHK for School",
        description: "電磁石をとりつけたレールに、磁石をとりつけた車を置く。電流を流すと車が進んだ。どうしてだろう？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301852_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301845_00000&p=box",
        title: "水に入れるとどうなる？ | NHK for School",
        description: "水に入れるとどうなる？予想してみよう。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301845_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301207_00000&p=box",
        title: "大雨がふると川原のようすは？ | NHK for School",
        description: "大雨が降った後の川原と、降る前の川原の映像を比べ、水の力について説明します。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301207_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300690_00000&p=box",
        title: "強力な電磁石 | NHK for School",
        description: "巻き数の多いコイルを鉄の容器に閉じこめて作った電磁石の強さを調べる映像です",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300690_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300530_00000&p=box",
        title: "川岸のブロックのはたらき | NHK for School",
        description: "実験用の川でカーブの外側の川岸が削れる様子と、実際の川で水害を防ぐためにおかれているコンクリートブロックの様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300530_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300490_00000&p=box",
        title: "流れる水の量とけずる力 | NHK for School",
        description: "砂地につくった溝に水を流す実験をし、水の量が多いほど土や砂を削る力が強いことを観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300490_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300407_00000&p=box",
        title: "花粉の役わりを調べる農作業 | NHK for School",
        description: "雌花のめしべにの花粉がつくことで、実ができることを比較実験で確かめます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300407_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300404_00000&p=box",
        title: "スイカの実になる花 | NHK for School",
        description: "スイカの雄花と雌花の違いを観察し、雌花だけが花が咲いたあとに実をつけることを見ます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300404_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300326_00000&p=box",
        title: "アメンボの産らん | NHK for School",
        description: "アメンボの雌が雄と一緒になって水中に産卵する様子です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300326_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401849_00000&p=box",
        title: "利根川の堤防の変化－中学 | NHK for School",
        description: "利根川では、大きな洪水を防ぐため、堤防がどんどん高くなっていきました。そして現在、堤防の幅を高さの30倍程度に広げ、強くする工事が行われています。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401849_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401505_00000&p=box",
        title: "魚たちの楽園ヤエヤマヒルギ | NHK for School",
        description: "マングローブの一種のヤエヤマヒルギは，タコの足のように伸びた支柱根が特徴です。満潮時にはヤエヤマヒルギの支柱根は小魚の絶好の隠れ家になります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401505_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401499_00000&p=box",
        title: "ウミガラスの大群 | NHK for School",
        description: "北海道の天売島ではわずかな数で生息するウミガラスですが、本来は大集団で生活する鳥です。サハリンのチュレニー島ではウミガラスの大群が見られます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401499_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401487_00000&p=box",
        title: "高原のカラマツ林 | NHK for School",
        description: "北海道や本州の高原に見られるカラマツは針葉樹ですが、秋には紅葉し、冬になると葉を落とします。カラマツは他の木が育たない厳しい環境でも育ちます。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401487_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401486_00000&p=box",
        title: "アカエリカイツブリ | NHK for School",
        description: "アカエリカイツブリは広い湿原の深い草むらの中に巣を作り、つがいで子育てをします。群れを作らないので、天敵から卵を守ることに大変用心深い鳥です。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401486_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401473_00000&p=box",
        title: "人が育む雑木林 | NHK for School",
        description: "もともと農家の人々が炭や薪に使う木を育てた所が雑木林です。主に落葉広葉樹が植えられ、その実などを求めて、鳥や昆虫など多くの生き物が集まります。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401473_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400502_00000&p=box",
        title: "水にとけた食塩をとりだす | NHK for School",
        description: "食塩水をフライパンで水を蒸発させて食塩が残ることを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400502_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400339_00000&p=box",
        title: "水の流れの速さと石 | NHK for School",
        description: "実験装置を使った水の流れる速さと流される石の関係を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400339_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400218_00000&p=box",
        title: "コブシメの変身術 | NHK for School",
        description: "珊瑚礁のコブシメが体の色を変化させる様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400218_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302261_00000&p=box",
        title: "平地を流れる川のようすは・・・ | NHK for School",
        description: "最上川、大井川、四万十川。平地（下流）を流れるようすを見てみよう。川のはば、流れる速さ、岸のようす、石のようす。平地の川には、どんな特ちょうがあると言える？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302261_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302256_00000&p=box",
        title: "大井川の石のようすは・・・ | NHK for School",
        description: "静岡県を流れる大井川。石のようすに注目して見てみよう。山の中、山から平地へ出たあたり、平地。大井川の石のようすには、どんなちがいがあると言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302256_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302254_00000&p=box",
        title: "四万十川の流れの速さは・・・ | NHK for School",
        description: "高知県を流れる四万十川。水の流れる速さに注目して見てみよう。山の中、山から平地へ出たあたり、平地。四万十川の流れの速さは、どう変わっていったと言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302254_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302220_00000&p=box",
        title: "モーターの電じしゃくが３つに分かれている理由 | NHK for School",
        description: "モーターの電じしゃくは、３つに分かれている。どうして？このような１本の電じしゃくの場合、切りかえスイッチがこの位置にあると、電流がうまく流れないからなんだ。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302220_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302217_00000&p=box",
        title: "電じしゃくをモーターのように回すには？ | NHK for School",
        description: "回るようにした電じしゃく。電じしゃくをはさんでぼうじしゃくをＳ極とＮ極が向かい合うように置く。電流を流すと、半回転して止まった。回り続けるには？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302217_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302215_00000&p=box",
        title: "モーターは何の力で回る？ | NHK for School",
        description: "モーターの中の部品を見てみると、回る部分は電じしゃく。ケースの内側には２つのじしゃくがＮ極とＳ極を向かい合わせについている。モーターは、何の力で回ると思う？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302215_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302214_00000&p=box",
        title: "コイルに鉄のしんを入れると… | NHK for School",
        description: "コイルに電流を流してクリップに近づけても、引きつけられない。そこで、鉄のしんを入れてコイルに電流を流すと、クリップが引きつけられた。どんなことが言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302214_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302210_00000&p=box",
        title: "コイルに電流を流すと… | NHK for School",
        description: "糸でつるしたぼうじしゃくのそばでコイルに電流を流すと、ぼうじしゃくが動く。また、方位じしんのそばでは、はりが動く。この結果からどんなことが言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302210_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302208_00000&p=box",
        title: "電じしゃくの力を強くするには… | NHK for School",
        description: "電じしゃくの力を強くするため、かん電池の数、導線のまき数、導線の太さ、しんの材料を変えて実験した。その結果から、何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302208_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302205_00000&p=box",
        title: "電じしゃくの強さと導線のまき数の関係を調べるには… | NHK for School",
        description: "電じしゃくの力を強くするには「導線のまき数を多くする」という予想を確かめよう。でも、この実験の方法で、良いかな？まき数以外の条件はみんな同じかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302205_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302203_00000&p=box",
        title: "電じしゃくのかん電池の数をふやすと… | NHK for School",
        description: "電じしゃくの力を強くするには「かん電池の数をふやす」という予想を確かめよう。かん電池１個。２個直列つなぎ。３個直列つなぎ。予想通りなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302203_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302201_00000&p=box",
        title: "電じしゃくの力を強くするには？ | NHK for School",
        description: "鉄のぼうを入れたプラスチックのつつに導線を何回もまきつけて、導線に電流を流すと「電じしゃく」になる。この電じしゃくの力をもっと強くするにはどうしたら良いと思う？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302201_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302121_00000&p=box",
        title: "きりふきで食塩水をガラスにつけると… | NHK for School",
        description: "食塩水をきりふきでガラスの板にふきつけると、食塩水の水てきがついた。時間がたつと水てきが小さくなり、白いつぶが出てきた。このつぶは何？この結果から何が言えそう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302121_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302119_00000&p=box",
        title: "規則正しい形の食塩をつくる | NHK for School",
        description: "熱い湯にとけるだけたくさん食塩をとかした食塩水をゆっくり冷やすと、規則正しい形の食塩のつぶができる。これを「食塩の結しょう」と言うよ。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302119_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302113_00000&p=box",
        title: "ミョウバン水の水の量をへらすと… | NHK for School",
        description: "湯にとけたミョウバンをもう一度とり出すには？水の量が多くなるとミョウバンがとける量も多くなることを手がかりに、水をじょう発させる実験。結果から何が言えそう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302113_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302108_00000&p=box",
        title: "とけた食塩をとり出すには？ | NHK for School",
        description: "あたたかい食塩水にとけている食塩を、もう一度とり出すにはどうしたら良い？手がかりは、食塩がとける量と水の量の関係、食塩がとける量と温度の関係。予想しよう！",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302108_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302105_00000&p=box",
        title: "水の温度と食塩がとける量の関係は… | NHK for School",
        description: "１カップに３ｇ入った食塩。100mL、20℃の水ではカップ11ぱい、40℃でも11ぱい、60℃では12はいがとけた。この結果から何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302105_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302061_00000&p=box",
        title: "磁石（じしゃく）の数を増やすと？ | NHK for School",
        description: "磁石（じしゃく）の力を利用して回るモーター。磁石の数を増やすとどうなるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302061_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301940_00000&p=box",
        title: "水の量と食塩がとける量の関係は… | NHK for School",
        description: "１カップに３ｇ入った食塩。20℃、100ｍLの水にはカップ11ぱい、200ｍLには23ばい、300ｍLには35はいがとけた。この結果から何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301940_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301937_00000&p=box",
        title: "食塩が水にとける量は… | NHK for School",
        description: "食塩は、水にどれくらいとけると思う？１ぱい100ｇの食塩を１Ｌの水にとかしていくと、４はい目でとけ残った。このことからどんなことが言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301937_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301935_00000&p=box",
        title: "水にとけるもの とけないもの | NHK for School",
        description: "さとうを水に入れたときのようすとトイレットペーパーを水に入れたときのようす。この２つを比べて、どんなことが言えそうかな。",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301935_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301856_00000&p=box",
        title: "水を冷やせば食塩がとける？ | NHK for School",
        description: "食塩は冷やすと水にたくさんとけるのかな？水に直接氷を入れて冷やしてみた。どうなる？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301856_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301855_00000&p=box",
        title: "さとうと食塩、水にとける量はちがう？ | NHK for School",
        description: "さとうと食塩をそれぞれ水に入れてとかす。でも、さとうと食塩の量を増やしていくと、食塩はとけなくなくなった。これ以上はとけない？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301855_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300692_00000&p=box",
        title: "コイルに入れる物と電磁石の強さ | NHK for School",
        description: "コイルの中に入れる物と電磁石の強さとの関係を調べます。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300692_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300679_00000&p=box",
        title: "水にとけた食塩はどこに | NHK for School",
        description: "ビーカーの食塩水から食塩の結晶を取り出し、食塩が水にまんべんなく溶けていることを見る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300679_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300678_00000&p=box",
        title: "食塩水を小さな水てきにすると | NHK for School",
        description: "水に溶けた食塩がどのように存在しているのか、霧吹きで食塩水を小さな水滴にし、乾燥して調べてみる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300678_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300625_00000&p=box",
        title: "トイレットペーパーは水にとける？ | NHK for School",
        description: "トイレットペーパーは水に溶けるのかどうかを確かめる実験を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300625_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300529_00000&p=box",
        title: "川のカーブに置かれたブロック | NHK for School",
        description: "東京の多摩川で、片方の川岸だけにコンクリートブロックが置かれている様子を紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300529_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300491_00000&p=box",
        title: "流れる水の量と速さの関係 | NHK for School",
        description: "水の量が多いほど水の流れが速いことを大型の実験装置で観察します。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300491_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401507_00000&p=box",
        title: "ヒルギダマシの工夫 | NHK for School",
        description: "塩分は植物の生育にとっては有害です。海の干潟に生育するマングローブの一種、ヒルギダマシの、体内の余分な塩分を排出する特別な仕組みを紹介します。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401507_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401483_00000&p=box",
        title: "釧路湿原のタンチョウ | NHK for School",
        description: "タンチョウは、世界でも北海道の釧路周辺だけに棲む貴重な鳥です。毎年、湿原のヨシの茂みの中の同じ所に巣を作り、広い縄張りを持って子育てをします。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401483_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401480_00000&p=box",
        title: "ピンクのじゅうたんミヤマキリシマ | NHK for School",
        description: "ミヤマキリシマの花は、初夏に九州の山々をピンク色に染めます。低地では他の木との生存競争に負けるので、山頂付近の厳しい環境に耐えて生きています。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401480_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005401472_00000&p=box",
        title: "夏のブナ林 | NHK for School",
        description: "かつて日本を広く覆っていたブナの原生林は、今、東北地方の山地に残されています。ブナの森の土は雨水を長く蓄えるので「緑のダム」と言われています。",
        image: "https://www.nhk.or.jp/das/image/D0005401/D0005401472_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400341_00000&p=box",
        title: "水の流れと地形の変化 | NHK for School",
        description: "土でできた斜面に溝を作り水を流して曲がった部分の土の様子を観る実験です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400341_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400309_00000&p=box",
        title: "川の曲がった場所の流れの強さ | NHK for School",
        description: "川の曲がった場所の内側から外側までの流れの強さを調べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400309_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400307_00000&p=box",
        title: "川の曲がった場所の速さ | NHK for School",
        description: "川の曲がった場所の内側から外側までの流れの速さを調べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400307_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400305_00000&p=box",
        title: "川の曲がった場所の深さ | NHK for School",
        description: "川の曲がった場所の内側から外側までの深さを調べる映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400305_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400261_00000&p=box",
        title: "こう水を防ぐダム | NHK for School",
        description: "多摩川上流の小河内ダムを例にダムの役割や放流の様子を観る映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400261_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005400254_00000&p=box",
        title: "都市のこう水を防ぐくふう | NHK for School",
        description: "都市の市街地の川が、深くなっている理由を説明する映像です。",
        image: "https://www.nhk.or.jp/das/image/D0005400/D0005400254_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302266_00000&p=box",
        title: "川の曲がったところの内側と外側は・・・ | NHK for School",
        description: "曲がっている川の内側と外側では、岸のようす、流れの速さ、流れの強さ、水の深さにちがいがある。川の曲がったところでは、この４つに、どんな関係があると考えられる？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302266_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302265_00000&p=box",
        title: "川の曲がったところの岸のようす | NHK for School",
        description: "曲がって流れている川の外側と内側では、岸のようすにちがいがあるみたい。川が曲がっているところでは、内側は石の川原、外側はがけになっているところが多く見られる。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302265_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302262_00000&p=box",
        title: "川の曲がったところの深さ | NHK for School",
        description: "曲がって流れている川の内側と外側の深さを測ってみよう。内側の深さは、およそ８ｃｍ。中間あたりは、６０ｃｍ。外側は、およそ１７０ｃｍ。外側ほど深くなっている。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302262_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302260_00000&p=box",
        title: "山から平地へ出たあたりの川のようすは・・・ | NHK for School",
        description: "最上川、大井川、四万十川。川が山から平地へ出たあたり（中流）を見てみよう。川のはば、流れる速さ、岸のようす、石のようす。どんな特ちょうがあると言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302260_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302259_00000&p=box",
        title: "山の中の川のようすは・・・ | NHK for School",
        description: "最上川、大井川、四万十川。山の中（上流）を流れるようすを見てみよう。川のはば、流れる速さ、石のようす。山の中を流れる川には、どんな特ちょうがあると言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302259_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302255_00000&p=box",
        title: "最上川の石のようすは・・・ | NHK for School",
        description: "山形県を流れる最上川。石のようすに注目して見てみよう。山の中、山から平地へ出たあたり、平地。最上川の石のようすには、どんなちがいがあると言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302255_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302253_00000&p=box",
        title: "大井川の流れの速さは・・・ | NHK for School",
        description: "静岡県を流れる大井川。水の流れる速さに注目して見てみよう。山の中、山から平地へ出たあたり、平地。大井川の流れの速さは、どう変わっていったと言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302253_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302251_00000&p=box",
        title: "四万十川を空から見ると・・・ | NHK for School",
        description: "高知県を流れる四万十川を空から見ていこう。山の中、山から平地へ出たあたり、平地。四万十川のようすは、流れ下るにつれて、どう変わっていったと言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302251_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302249_00000&p=box",
        title: "最上川を空から見ると・・・ | NHK for School",
        description: "山形県を流れる最上川を空から見ていこう。山の中、山から平地へ出たあたり、平地。最上川のようすは、流れ下るにつれて、どう変わっていったと言えるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302249_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302218_00000&p=box",
        title: "電じしゃくをモーターのように回すには… | NHK for School",
        description: "クルクル回るようにした電じしゃく。切り替えスイッチを回すたびに、電磁石のＮ極とＳ極が変わって回り続ける。スイッチを手で切りかえないで、回し続けるには？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302218_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302213_00000&p=box",
        title: "コイルだけで電じしゃくに… | NHK for School",
        description: "プラスチックのつつに導線をまきつけたコイル。つつの口に虫ピンを置いてコイルに電流を流すと、虫ピンがすいこまれた。この結果からどんなことが言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302213_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302211_00000&p=box",
        title: "導線に電流を流すと？ | NHK for School",
        description: "方位じしんのそばでコイルに電流を流すと、はりが動く。では導線１本だけなら、どうだろう？１本の導線に電流を流すと、じしゃくの性質が現れると思う？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302211_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302209_00000&p=box",
        title: "電じしゃくの力を強くする方法 | NHK for School",
        description: "電じしゃくの力を強さには、かん電池の数、導線のまき数、導線の太さ、どれも関係があった。鉄以外のしんにすると、クリップがつかなかった。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302209_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302207_00000&p=box",
        title: "電じしゃくのしんの材料を変えると… | NHK for School",
        description: "電じしゃくの力を強くするには「しんを鉄以外に変える」という予想を確かめよう。鉄、銅、プラスチックをしんにして電じしゃくをつくった。予想通りなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302207_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302206_00000&p=box",
        title: "電じしゃくの導線を太くすると… | NHK for School",
        description: "電じしゃくの力を強くするには「導線を太くする」という予想を確かめよう。細い導線。少し太い導線。さらに太い導線。まき数は100回。予想通りなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302206_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302204_00000&p=box",
        title: "電じしゃくの導線のまき数を多くすると… | NHK for School",
        description: "電じしゃくの力を強くするには「導線のまき数を多くする」という予想を確かめよう。導線、100回まき。150回まき。200回まき。予想通りなら、どうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302204_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302202_00000&p=box",
        title: "電じしゃくの力を強くする方法は？ | NHK for School",
        description: "電じしゃくの力を強くするには？ １．かん電池の数を増やす。２．導線のまき数を多くする。３．導線を太くする。４．コイルのしんを鉄以外に。５．その他。予想しよう！",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302202_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302124_00000&p=box",
        title: "とけた食塩はどうなった… | NHK for School",
        description: "水にとけた食塩がどうなったかを調べるため、とかす前ととかしたあとの重さに注目して実験したよ。この結果から水にとけたとき食塩は、どうなったと言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302124_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302123_00000&p=box",
        title: "とけた食塩がどうなったか調べる方法 | NHK for School",
        description: "水に食塩を入れてかき混ぜると、見えなくなった。食塩はどうなったと思う？これを調べるために、とかす前ととけたあとの重さに注目して実験。予想通りならどうなるはず？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302123_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302120_00000&p=box",
        title: "きりふきで食塩水をガラスにつけると？ | NHK for School",
        description: "食塩水をきりふきに入れてガラスの板にふきつけると、食塩水の水てきがたくさんガラスの板についた。このまま時間がたつとどうなると思う？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302120_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302115_00000&p=box",
        title: "出てくるミョウバンの量のちがいは… | NHK for School",
        description: "あたたかいミョウバン水からミョウバンをとり出すため、水をじょう発させる実験と、温度を下げる実験をしたら、どちらもたくさんのミョウバンが出てきた。何が言えそう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302115_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302111_00000&p=box",
        title: "出てくる食塩の量のちがいは… | NHK for School",
        description: "あたたかい食塩水から食塩をとり出すため、水をじょう発させる実験と、温度を下げる実験をしたら、出てきた食塩の量がちがった。この結果から、何が言えそうかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302111_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302109_00000&p=box",
        title: "食塩水の水の量をへらすと… | NHK for School",
        description: "湯にとけている食塩をもう一度とり出すには？水の量が多くなると食塩がとける量も多くなることを手がかりに、水をじょう発させる実験。結果から何が言えそう？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302109_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302067_00000&p=box",
        title: "水よう液の温度を変えて実験するには？ | NHK for School",
        description: "食塩が水にとける量は温度に関係あるのだろうか。温度を変えて確かめるにはどうしたらいい？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302067_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302065_00000&p=box",
        title: "水にとけ残った食塩は冷やせばとける？ | NHK for School",
        description: "水にとけ残った食塩は冷やせばとけるかな？ビーカーごと氷水に入れて実験したら・・・。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302065_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302060_00000&p=box",
        title: "磁石（じしゃく）の向きを変えると？ | NHK for School",
        description: "磁石（じしゃく）の力を利用して回るモーター。磁石の向きを変えるとどうなるかな？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302060_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302057_00000&p=box",
        title: "導線の太さで電じ石の強さは変わる？ | NHK for School",
        description: "電じ石の強さには、導線の太さは関係あるのかな？太さのちがう導線で比べてみる。",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302057_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005302054_00000&p=box",
        title: "水にとけた食塩はどこにある？ | NHK for School",
        description: "食塩を水にとかした。このとき、とけた食塩は水のどこにあるのだろう。上、真ん中、下。場所によってちがうのだろうか？",
        image: "https://www.nhk.or.jp/das/image/D0005302/D0005302054_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301939_00000&p=box",
        title: "もっとミョウバンをとかすには？ | NHK for School",
        description: "３ｇのミョウバンを入れた小さいカップ。20℃、100ｍＬの水には、カップ４はい目でとけ残りがでた。もっとたくさんのミョウバンをとかすにはどうしたら良いと思う？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301939_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301938_00000&p=box",
        title: "もっと食塩をとかすには？ | NHK for School",
        description: "３ｇの食塩を入れた小さいカップ。20℃、100ｍＬの水には、カップ12はい目でとけ残りがでた。もっとたくさんの食塩をとかすにはどうしたら良いと思う？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301938_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301936_00000&p=box",
        title: "食塩が水にとける量は？ | NHK for School",
        description: "１Ｌの水に、食塩はどれくらいとけると思う？ まず、100ｇの食塩を入れると全部とけた。１Ｌの水に100ｇの食塩がとけた食塩水。もっと食塩はとけると思う？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301936_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005301849_00000&p=box",
        title: "実験を見直すには？ | NHK for School",
        description: "同じ実験を３回行ったら結果にばらつきが！原因はなにかな？",
        image: "https://www.nhk.or.jp/das/image/D0005301/D0005301849_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        link: "https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005300054_00000&p=box",
        title: "よごれた水にとけている酸素 | NHK for School",
        description: "汚れた川の水の酸素量を調べ酸素の量が少ないことを示す発展学習映像。",
        image: "https://www.nhk.or.jp/das/image/D0005300/D0005300054_00000_S_001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contents', null, {});
  }
};
