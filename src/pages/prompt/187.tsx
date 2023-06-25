import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "生成 PPT 大纲",
    "prompt": "帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。",
    "description": "帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。",
    "remark": "让 AI 生成主题大纲，然后将其放入指定 Markdown 格式中。PPT(slide) 质量仅作参考。来自 @Asynchro-Epool 的投稿。"
  },
  "en": {
    "title": "PPT outline",
    "prompt": "帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。",
    "remark": "(Only Chinese) Let AI generate a topic outline and then put it into the specified Markdown format. The quality of PPT (slide) is for reference only. Contributed by @Asynchro-Epool."
  },
  "ja": {
    "title": "PPT のアウトラインを作成する",
    "prompt": "帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。",
    "description": "トピックについて、以下の要件で PPT を作成するのを手伝ってください：\n第一に、中国語であること。\n第二に、ページ形式は、表紙、目次、リストの 3 種類です。\n第三に、目次のページには、コンテンツのアウトラインをリストアップすること。\n第四に、コンテンツのアウトラインに従って、対応する PPT リストページを生成し、PPT リストページの各ページは、====リスト====開始を使用します。\n第五に、表紙ページの形式は、次のようにする必要があります。\n===== 表紙 =====\n# メインタイトル\n## サブタイトル\n講演者：私の名前\n第六に、目次ページの書式は次のようにします。\n===== 目次 =====\n## CONTENTS\n## 目次\n1、CONTENT（コンテンツ\n2、CONTENT\n7 つ目は、リスティングページのフォーマットは以下の通りです。\nリストページ ==================================!\n## ページメインタイトル\n1.主なポイント 1\n要点の説明\n第 8 に、リストページの箇条書きの説明の内容は、10 文字以上 50 文字以下の箇条書きの詳細な説明である。\n\n\n最後に、生成されたコンテンツに返信するコードブロックを必ず使用すること、忘れないようにすること。",
    "remark": "PPT（スライド）品質は参考程度に。Asynchro-Epool さん（@Asynchro-Epool）からの寄稿です。"
  },
  "ko": {
    "title": "PPT 개요 생성",
    "prompt": "帮我制作一篇内容为《主题》PPT，要求如下：\n第一、一定要使用中文。\n第二、页面形式有 3 种，封面、目录、列表。\n第三、目录页要列出内容大纲。\n第四、根据内容大纲，生成对应的 PPT 列表页，每一页 PPT 列表页使用=====列表=====开头。\n第五、封面页格式如下：\n=====封面=====\n# 主标题\n## 副标题\n演讲人：我的名字\n第六、目录页格式如下：\n=====目录=====\n# 目录\n## CONTENT\n1、内容\n2、内容\n第七、列表页格式如下：\n=====列表=====\n# 页面主标题\n1、要点 1\n要点描述内容\n第八、列表页里的要点描述内容是对要点的详细描述，10 个字以上，50 个字以内。\n\n\n最后，一定要使用代码块回复你生成的内容，切记切记。",
    "description": "주제에 대한 다음 요구 사항이 포함된 PPT 를 만들 수 있도록 도와주세요:\n첫째, 중국어로 작성해야 합니다.\n둘째, 표지, 목차 및 목록의 세 가지 페이지 형식이 있습니다.\n셋째, 목차 페이지에는 내용 개요가 기재되어 있어야 합니다.\n넷째, 콘텐츠 개요에 따라 해당 PPT 목록 페이지를 생성하고 PPT 목록 페이지의 각 페이지는 ===== 목록 ===== 시작을 사용합니다.\n다섯째, 표지의 형식은 다음과 같아야합니다.\n===== 표지 =====\n# 메인 제목\n## 부제목\n발표자: 내 이름\n여섯째, 목차 페이지의 형식은 다음과 같습니다.\n===== 목차 =====\n목차 ## 내용\n목차 ## 내용\n1. CONTENT\n2, 내용\n일곱째, 리스팅 페이지의 형식은 다음과 같습니다.\n===== 리스팅 =====\n## 페이지 메인 제목\n1. 주요 요점 1\n요점 설명\n여덟째, 목록 페이지의 요점 설명 내용은 요점에 대한 자세한 설명으로 10 단어 이상, 50 단어 이하입니다.\n\n\n마지막으로 코드 블록을 사용하여 생성 된 콘텐츠에 댓글을 달려면 반드시 기억하세요.",
    "remark": "PPT(슬라이드) 화질은 참고용으로만 제공됩니다. Asynchro-Epool 의 기여."
  },
  "website": null,
  "tags": [
    "contribute"
  ],
  "id": 187,
  "weight": 1907
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
