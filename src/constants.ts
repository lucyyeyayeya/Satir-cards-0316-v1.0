export interface CardData {
  id: number;
  layer: string;
  tag: string;
  level: string;
  core: string;
  question: string;
  description: string;
  svg: string;
}

export const ICEBERG_CARDS: CardData[] = [
  {
    id: 1,
    layer: '第一層',
    tag: 'BEHAVIOR',
    level: "行為",
    core: "我做了什麼",
    question: "此刻你採取了什麼行動？\n那個行動背後，\n你想傳達什麼？",
    description: "冰山的最頂端，是我們表現出來的行為、故事與事件。",
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M20,90 Q40,60 60,50 Q80,40 100,30" stroke="#1E1E1E" stroke-width="1" fill="none" opacity="0.15"/>
      <ellipse cx="38" cy="74" rx="8" ry="5" transform="rotate(-20,38,74)" fill="none" stroke="#1E1E1E" stroke-width="1.2" opacity="0.7"/>
      <ellipse cx="52" cy="62" rx="8" ry="5" transform="rotate(-25,52,62)" fill="none" stroke="#1E1E1E" stroke-width="1.2" opacity="0.55"/>
      <ellipse cx="68" cy="52" rx="8" ry="5" transform="rotate(-20,68,52)" fill="none" stroke="#1E1E1E" stroke-width="1.2" opacity="0.4"/>
      <ellipse cx="84" cy="42" rx="8" ry="5" transform="rotate(-25,84,42)" fill="none" stroke="#1E1E1E" stroke-width="1.2" opacity="0.25"/>
      <path d="M92,30 L102,28 L98,38" fill="none" stroke="#7A9E99" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 2,
    layer: '第二層',
    tag: 'FEELING',
    level: "感受",
    core: "我感覺到",
    question: "現在你的身體裡\n有什麼感覺？\n給它一個顏色或形狀。",
    description: "對事件的直接情緒反應，如喜悅、憤怒、恐懼、悲傷等。",
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M15,75 Q30,45 45,60 Q60,75 75,45 Q90,15 105,45" stroke="#1E1E1E" stroke-width="1.2" fill="none" opacity="0.6"/>
      <path d="M15,85 Q30,60 45,72 Q60,84 75,58 Q90,32 105,58" stroke="#1E1E1E" stroke-width="0.8" fill="none" opacity="0.3"/>
      <circle cx="60" cy="60" r="3" fill="#C4A96B" opacity="0.8"/>
      <circle cx="60" cy="60" r="8" fill="none" stroke="#C4A96B" stroke-width="0.6" opacity="0.4"/>
      <circle cx="60" cy="60" r="14" fill="none" stroke="#C4A96B" stroke-width="0.4" opacity="0.2"/>
    </svg>`
  },
  {
    id: 3,
    layer: '第三層',
    tag: 'FEELING OF FEELING',
    level: "感受的感受",
    core: "我對感覺的態度",
    question: "你允許自己有這個感受嗎？\n還是有一部分想推開它？",
    description: "我們對自己情緒的評價或態度，例如為自己的憤怒感到羞愧。",
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="15" x2="60" y2="105" stroke="#1E1E1E" stroke-width="0.8" opacity="0.15" stroke-dasharray="4 3"/>
      <path d="M55,35 Q30,55 35,75 Q40,90 55,88" fill="none" stroke="#1E1E1E" stroke-width="1.2" opacity="0.6" stroke-linecap="round"/>
      <path d="M65,35 Q90,55 85,75 Q80,90 65,88" fill="none" stroke="#7A9E99" stroke-width="1.2" opacity="0.6" stroke-linecap="round"/>
      <circle cx="55" cy="35" r="2.5" fill="#1E1E1E" opacity="0.5"/>
      <circle cx="65" cy="35" r="2.5" fill="#7A9E99" opacity="0.5"/>
      <circle cx="55" cy="88" r="2.5" fill="#1E1E1E" opacity="0.3"/>
      <circle cx="65" cy="88" r="2.5" fill="#7A9E99" opacity="0.3"/>
    </svg>`
  },
  {
    id: 4,
    layer: '第四層',
    tag: 'PERCEPTION',
    level: "觀點",
    core: "我相信",
    question: "這個情況裡，\n你認為「應該」怎樣？\n這個信念從哪裡來？",
    description: "我們的信念、假設、價值觀和成見。",
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M15,60 Q45,25 60,25 Q75,25 105,60 Q75,95 60,95 Q45,95 15,60Z" fill="none" stroke="#1E1E1E" stroke-width="1.1" opacity="0.5"/>
      <circle cx="60" cy="60" r="14" fill="none" stroke="#1E1E1E" stroke-width="1.2" opacity="0.7"/>
      <circle cx="60" cy="60" r="6"  fill="#1E1E1E" opacity="0.15"/>
      <line x1="60" y1="15" x2="60" y2="24"  stroke="#7A9E99" stroke-width="0.8" opacity="0.5"/>
      <line x1="60" y1="96" x2="60" y2="105" stroke="#7A9E99" stroke-width="0.8" opacity="0.5"/>
      <line x1="15" y1="60" x2="24" y2="60"  stroke="#7A9E99" stroke-width="0.8" opacity="0.5"/>
      <line x1="96" y1="60" x2="105" y2="60" stroke="#7A9E99" stroke-width="0.8" opacity="0.5"/>
    </svg>`
  },
  {
    id: 5,
    layer: '第五層',
    tag: 'EXPECTATION',
    level: "期待",
    core: "我期望",
    question: "你對自己、對他人，\n有什麼未說出口的期待？",
    description: "對自己或他人的要求，通常包含「應該」或「必須」。",
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="72" x2="110" y2="72" stroke="#1E1E1E" stroke-width="0.8" opacity="0.25"/>
      <circle cx="60" cy="58" r="12" fill="none" stroke="#C4A96B" stroke-width="1.2" opacity="0.7"/>
      <line x1="60" y1="34" x2="60" y2="42" stroke="#C4A96B" stroke-width="1" opacity="0.6"/>
      <line x1="82" y1="40" x2="76" y2="46" stroke="#C4A96B" stroke-width="1" opacity="0.5"/>
      <line x1="88" y1="62" x2="80" y2="62" stroke="#C4A96B" stroke-width="1" opacity="0.4"/>
      <line x1="38" y1="40" x2="44" y2="46" stroke="#C4A96B" stroke-width="1" opacity="0.5"/>
      <line x1="32" y1="62" x2="40" y2="62" stroke="#C4A96B" stroke-width="1" opacity="0.4"/>
      <path d="M48,78 Q60,86 72,78" fill="none" stroke="#C4A96B" stroke-width="0.8" opacity="0.25" stroke-dasharray="3 3"/>
    </svg>`
  },
  {
    id: 6,
    layer: '第六層',
    tag: 'YEARNING',
    level: "渴望",
    core: "我深深需要",
    question: "在這一切底下，\n你最渴望被怎麼對待？",
    description: "人類共有的基本需求，如被愛、被接納、被認可、安全感等。",
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="95" rx="45" ry="16" fill="none" stroke="#7A9E99" stroke-width="0.5" opacity="0.2"/>
      <ellipse cx="60" cy="84" rx="36" ry="12" fill="none" stroke="#7A9E99" stroke-width="0.6" opacity="0.3"/>
      <ellipse cx="60" cy="73" rx="27" ry="9"  fill="none" stroke="#7A9E99" stroke-width="0.7" opacity="0.4"/>
      <ellipse cx="60" cy="63" rx="18" ry="6"  fill="none" stroke="#7A9E99" stroke-width="0.8" opacity="0.55"/>
      <ellipse cx="60" cy="54" rx="10" ry="4"  fill="none" stroke="#7A9E99" stroke-width="1"   opacity="0.7"/>
      <circle cx="60" cy="46" r="6"  fill="#7A9E99" opacity="0.15"/>
      <circle cx="60" cy="46" r="3.5" fill="#7A9E99" opacity="0.5"/>
      <line x1="60" y1="25" x2="60" y2="40" stroke="#7A9E99" stroke-width="1" opacity="0.4" stroke-dasharray="2 3"/>
    </svg>`
  },
  {
    id: 7,
    layer: '第七層',
    tag: 'SELF',
    level: "自我",
    core: "我是誰",
    question: "去掉所有角色和評價，\n此刻你如何感受\n自己的存在？",
    description: "冰山的最底層，是我們的生命力、精神與靈魂的核心。",
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M60,20 A40,40 0 1,1 59,20" fill="none" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
      <circle cx="60" cy="60" r="2.5" fill="#1E1E1E" opacity="0.4"/>
    </svg>`
  },
  {
    id: 8,
    layer: '綜合',
    tag: 'INTEGRATION',
    level: "綜合",
    core: "回到當下",
    question: "完成這次覺察，\n你想對自己\n說一句什麼話？",
    description: "整合所有層級，回到此時此刻的覺知。",
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="55" x2="100" y2="55" stroke="#1E1E1E" stroke-width="0.8" opacity="0.2"/>
      <polygon points="60,20 75,50 45,50" fill="none" stroke="#1E1E1E" stroke-width="1.2" stroke-linejoin="round" opacity="0.7"/>
      <ellipse cx="60" cy="78" rx="30" ry="18" fill="none" stroke="#7A9E99" stroke-width="1" opacity="0.5"/>
      <ellipse cx="60" cy="90" rx="20" ry="10" fill="none" stroke="#7A9E99" stroke-width="0.7" opacity="0.3"/>
      <line x1="60" y1="50" x2="60" y2="60" stroke="#1E1E1E" stroke-width="0.8" opacity="0.3" stroke-dasharray="2 2"/>
    </svg>`
  }
];
