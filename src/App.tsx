import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Layers, ChevronLeft, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ICEBERG_CARDS, CardData } from './constants';

// Initialize Gemini AI
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export default function App() {
  const [view, setView] = useState<'home' | 'draw' | 'gallery'>('home');
  const [currentCard, setCurrentCard] = useState<CardData | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * ICEBERG_CARDS.length);
    setCurrentCard(ICEBERG_CARDS[randomIndex]);
    setIsFlipped(false);
    setAiResponse('');
    setUserInput('');
    setView('draw');
  };

  const handleAiGuide = async () => {
    if (!userInput.trim() || !currentCard) return;
    
    setIsLoading(true);
    try {
      const prompt = `你是一位專業且溫暖的薩提爾 (Satir) 模式心理引導師。你的語氣穩定、平靜且充滿同理心。

使用者目前的覺察脈絡：
- 抽到的冰山層級：「${currentCard.level}」（核心概念：${currentCard.core}）
- 思考的引導問句：「${currentCard.question}」
- 使用者的內在分享：「${userInput}」

請根據薩提爾理論給予引導，但請遵守以下原則：
1. **不要直接解釋或提及薩提爾冰山理論的專有名詞或層級定義**，請將理論內化在你的回應中。
2. 提供穩定且溫暖的陪伴感，像是一位智慧的朋友在身旁傾聽。
3. 篇幅簡短（約 100-150 字），重點在於幫助使用者與內在更深層地連結。
4. 結尾可以留一個溫柔的覺察提問，引發進一步的感受。
5. 請使用繁體中文。`;

      const result = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });
      setAiResponse(result.text || "抱歉，我無法生成引導。");
    } catch (error) {
      console.error("AI Error:", error);
      setAiResponse("抱歉，目前 AI 引導暫時無法連線。請試著深呼吸，感受當下的自己。");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiResponse]);

  return (
    <div className="min-h-screen selection:bg-zen-teal/20">
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-block cursor-pointer"
            onClick={() => setView('home')}
          >
            <svg className="w-12 h-12 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="24" cy="16" rx="10" ry="7" fill="none" stroke="#1E1E1E" strokeWidth="1.2"/>
              <line x1="24" y1="23" x2="24" y2="44" stroke="#1E1E1E" strokeWidth="1" strokeDasharray="2 3"/>
              <ellipse cx="24" cy="38" rx="16" ry="8" fill="none" stroke="#7A9E99" strokeWidth="1" opacity="0.6"/>
            </svg>
          </motion.div>
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-2">冰山覺察卡牌</h1>
          <p className="font-sans text-xs text-zen-ink-faint tracking-[0.12em] font-light">Satir Iceberg Awareness Cards</p>
          <div className="w-12 h-px bg-zen-ink-faint mx-auto mt-6 opacity-40" />
        </header>

        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center"
            >
              <div 
                className="relative w-[300px] h-[480px] mb-10 cursor-pointer group"
                onClick={drawCard}
              >
                <div className="absolute inset-0 rounded-2xl bg-zen-paper border border-black/5 rotate-[-4deg] translate-y-1.5 opacity-50" />
                <div className="absolute inset-0 rounded-2xl bg-zen-paper border border-black/5 rotate-[2.5deg] translate-y-0.5 opacity-70" />
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="absolute inset-0 rounded-2xl bg-zen-paper border border-black/10 shadow-lg flex flex-col items-center justify-center gap-5 transition-shadow group-hover:shadow-xl"
                >
                  <svg className="w-32 h-32 opacity-60" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="70" cy="70" r="8"  fill="none" stroke="#7A9E99" strokeWidth="0.8" opacity="0.9"/>
                    <circle cx="70" cy="70" r="18" fill="none" stroke="#7A9E99" strokeWidth="0.6" opacity="0.7"/>
                    <circle cx="70" cy="70" r="30" fill="none" stroke="#7A9E99" strokeWidth="0.5" opacity="0.5"/>
                    <circle cx="70" cy="70" r="44" fill="none" stroke="#7A9E99" strokeWidth="0.4" opacity="0.35"/>
                    <circle cx="70" cy="70" r="58" fill="none" stroke="#7A9E99" strokeWidth="0.3" opacity="0.2"/>
                    <polygon points="70,30 83,55 57,55" fill="none" stroke="#1E1E1E" strokeWidth="1" strokeLinejoin="round"/>
                    <line x1="48" y1="62" x2="92" y2="62" stroke="#1E1E1E" strokeWidth="0.8" opacity="0.3"/>
                    <ellipse cx="70" cy="80" rx="22" ry="14" fill="none" stroke="#1E1E1E" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3"/>
                  </svg>
                  <span className="font-sans text-xs tracking-[0.2em] text-zen-ink-faint font-light">點擊抽牌</span>
                </motion.div>
              </div>
              
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <button
                  onClick={drawCard}
                  className="w-full py-4 bg-zen-ink text-zen-paper text-sm tracking-[0.25em] font-light rounded-sm transition-all hover:bg-neutral-800 active:scale-95"
                >
                  抽 一 張 牌
                </button>
                <button
                  onClick={() => setView('gallery')}
                  className="w-full py-3 border border-zen-ink-faint text-zen-ink-faint font-sans text-xs tracking-[0.2em] font-light rounded-sm transition-all hover:border-zen-ink hover:text-zen-ink"
                >
                  瀏 覽 全 部 卡 牌
                </button>
              </div>
            </motion.div>
          )}

          {view === 'draw' && currentCard && (
            <motion.div
              key="draw"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center"
            >
              <div className="w-full max-w-[300px] perspective-1200 mb-10">
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  className="relative w-full aspect-[300/480] preserve-3d cursor-pointer"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden bg-zen-paper rounded-2xl shadow-lg border border-black/10 flex flex-col items-center justify-center p-8">
                    <div className="flex flex-col items-center gap-4">
                      <svg className="w-24 h-24 opacity-60" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="70" cy="70" r="8"  fill="none" stroke="#7A9E99" strokeWidth="0.8" opacity="0.9"/>
                        <circle cx="70" cy="70" r="18" fill="none" stroke="#7A9E99" strokeWidth="0.6" opacity="0.7"/>
                        <circle cx="70" cy="70" r="30" fill="none" stroke="#7A9E99" strokeWidth="0.5" opacity="0.5"/>
                        <circle cx="70" cy="70" r="44" fill="none" stroke="#7A9E99" strokeWidth="0.4" opacity="0.35"/>
                        <polygon points="70,30 83,55 57,55" fill="none" stroke="#1E1E1E" strokeWidth="1" strokeLinejoin="round"/>
                        <line x1="48" y1="62" x2="92" y2="62" stroke="#1E1E1E" strokeWidth="0.8" opacity="0.3"/>
                        <ellipse cx="70" cy="80" rx="22" ry="14" fill="none" stroke="#1E1E1E" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3"/>
                      </svg>
                      <span className="font-sans text-[11px] tracking-[0.2em] text-zen-ink-faint font-light animate-pulse">輕觸翻牌</span>
                    </div>
                  </div>

                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-zen-paper rounded-2xl shadow-lg p-8 flex flex-col border border-black/10">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-sans text-[10px] tracking-[0.3em] text-zen-teal font-medium uppercase">{currentCard.tag}</div>
                        <div className="font-sans text-[11px] text-zen-ink-faint font-light tracking-[0.1em]">{currentCard.layer}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="w-full h-40 flex items-center justify-center my-4" dangerouslySetInnerHTML={{ __html: currentCard.svg }} />
                      <h3 className="text-2xl font-normal tracking-[0.1em] mb-1.5 text-zen-ink">{currentCard.level}</h3>
                      <p className="font-sans text-[11px] text-zen-ink-faint tracking-[0.15em] font-light mb-4">{currentCard.core}</p>
                      <div className="w-8 h-px bg-zen-gold mb-4 opacity-60" />
                      <p className="text-[13.5px] leading-[2] text-zen-ink-light font-light tracking-[0.05em] whitespace-pre-line">
                        {currentCard.question}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-black/5 flex justify-between items-center">
                      <span className="font-sans text-[10px] text-zen-ink-faint tracking-[0.15em]">{currentCard.id} / {ICEBERG_CARDS.length}</span>
                      <span className="font-sans text-[10px] text-zen-ink-faint tracking-[0.1em] opacity-50 font-light">Satir Iceberg</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {isFlipped && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full max-w-lg px-4"
                >
                  <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-sm mb-8">
                    <div className="flex items-center gap-2 mb-4 text-zen-teal">
                      <Sparkles size={18} />
                      <h4 className="font-medium tracking-wide">AI 覺察引導</h4>
                    </div>
                    
                    {!aiResponse ? (
                      <div className="space-y-4">
                        <textarea
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          placeholder="試著寫下你的感受或想法..."
                          className="w-full bg-transparent border-b border-zen-ink/10 focus:border-zen-teal outline-none py-2 resize-none min-h-[100px] transition-colors font-sans text-sm font-light leading-relaxed"
                        />
                        <button
                          onClick={handleAiGuide}
                          disabled={isLoading || !userInput.trim()}
                          className="w-full py-3 bg-zen-ink text-zen-paper rounded-sm text-sm tracking-widest font-light flex items-center justify-center gap-2 disabled:opacity-50 transition-all hover:bg-neutral-800"
                        >
                          {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
                          <span>開 始 引 導</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="text-zen-ink-light leading-[1.8] text-[14px] font-light whitespace-pre-wrap">
                          {aiResponse}
                        </div>
                        <div ref={chatEndRef} />
                        <button
                          onClick={() => {
                            setAiResponse('');
                            setUserInput('');
                          }}
                          className="font-sans text-xs text-zen-teal hover:underline flex items-center gap-1 font-light tracking-wider"
                        >
                          <RefreshCw size={14} /> 重新對話
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={drawCard}
                      className="px-8 py-3 bg-zen-ink text-zen-paper text-xs tracking-[0.2em] font-light rounded-sm transition-all hover:bg-neutral-800"
                    >
                      再 抽 一 張
                    </button>
                    <button
                      onClick={() => setView('gallery')}
                      className="px-8 py-3 border border-zen-ink-faint text-zen-ink-faint font-sans text-[11px] tracking-[0.2em] font-light rounded-sm transition-all hover:border-zen-ink hover:text-zen-ink"
                    >
                      瀏 覽 全 部
                    </button>
                  </div>
                  <button
                    onClick={() => setView('home')}
                    className="block mx-auto mt-6 font-sans text-[11px] text-zen-ink-faint hover:text-zen-ink tracking-[0.2em] font-light"
                  >
                    ← 返 回
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {view === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1"
            >
              <div className="text-center mb-10">
                <h2 className="text-lg font-light tracking-[0.25em] mb-1.5">冰山七層 · 全覽</h2>
                <p className="font-sans text-[11px] text-zen-ink-faint tracking-[0.12em] font-light">左右滑動瀏覽 · 點擊任一張進入覺察</p>
              </div>

              <div className="flex overflow-x-auto gap-6 px-4 pb-12 hide-scrollbar snap-x snap-mandatory">
                {ICEBERG_CARDS.map((card) => (
                  <motion.div
                    key={card.id}
                    whileHover={{ y: -3 }}
                    onClick={() => {
                      setCurrentCard(card);
                      setIsFlipped(true);
                      setView('draw');
                    }}
                    className="flex-none w-[280px] md:w-[300px] h-[440px] md:h-[480px] snap-center bg-zen-paper rounded-2xl p-7 shadow-md border border-black/5 cursor-pointer flex flex-col transition-shadow hover:shadow-xl"
                  >
                    <div className="font-sans text-[10px] tracking-[0.3em] text-zen-teal font-medium uppercase mb-1">{card.tag}</div>
                    <div className="font-sans text-[11px] text-zen-ink-faint font-light tracking-[0.1em] mb-2">{card.layer}</div>
                    
                    <div className="w-full h-32 flex items-center justify-center my-3" dangerouslySetInnerHTML={{ __html: card.svg }} />
                    
                    <h3 className="text-xl font-normal tracking-[0.1em] mb-1 text-zen-ink">{card.level}</h3>
                    <p className="font-sans text-[10px] text-zen-ink-faint tracking-[0.15em] font-light mb-3">{card.core}</p>
                    <div className="w-6 h-px bg-zen-gold mb-3 opacity-60" />
                    <p className="text-[12px] leading-[1.8] text-zen-ink-light font-light tracking-[0.05em] line-clamp-4">
                      {card.question}
                    </p>
                    
                    <div className="mt-auto pt-3 border-t border-black/5 flex justify-between items-center">
                      <span className="font-sans text-[9px] text-zen-ink-faint tracking-[0.15em]">{card.id} / {ICEBERG_CARDS.length}</span>
                      <span className="font-sans text-[9px] text-zen-ink-faint tracking-[0.1em] opacity-50 font-light">Satir Iceberg</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setView('home')}
                className="block mx-auto py-3 px-10 border border-zen-ink-faint text-zen-ink-faint font-sans text-xs tracking-[0.2em] font-light rounded-sm transition-all hover:border-zen-ink hover:text-zen-ink"
              >
                ← 返 回 抽 牌
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-auto pt-12 text-center">
          <p className="font-sans text-[10px] text-zen-ink-faint tracking-[0.2em] uppercase font-light opacity-60">
            Inner Journey • Satir Iceberg Model • AI Guided
          </p>
        </footer>
      </main>
    </div>
  );
}
