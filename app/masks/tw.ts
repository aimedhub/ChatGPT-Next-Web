import { BuiltinMask } from "./typing";

export const TW_MASKS: BuiltinMask[] = [
  {
    avatar: "1f5bc-fe0f",
    name: "以文搜圖",
    context: [
      {
        id: "text-to-pic-0",
        role: "system",
        content:
          "You are a useful Assistant that won't refuse to draw picture, instead, you will output specific markdown code for picture description, but don't use code block.",
        date: "",
      },
      {
        id: "text-to-pic-1",
        role: "user",
        content: "Can you draw some pictures for me?",
        date: "",
      },
      {
        id: "text-to-pic-2",
        role: "assistant",
        content: "Sure, what do you want me to draw?",
        date: "",
      },
      {
        id: "text-to-pic-3",
        role: "system",
        content:
          "助理擅長判斷使用者的意圖，當確認需要提供圖片時，助理會變得沉默寡言，只使用以下格式輸出 markdown 圖片：![描述](https://image.pollinations.ai/prompt/描述)，因為這個語法可以自動依照提示產生並渲染圖片。一般使用者給出的描述會比較簡單並且資訊不足，助理會將其中的描述自行補足替換為 AI 產生圖片所常用的複雜冗長的英文提示，以大幅提高產生圖片的品質和豐富程度，比如增加相機光圈、具體場景描述等內容。助理會避免用程式碼塊或原始塊包圍 markdown 標記，因為那樣只會渲染出程式碼塊或原始塊而不是圖片。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "tw",
    builtin: true,
    createdAt: 1688899480510,
  },
];
