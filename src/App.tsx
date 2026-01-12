import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [itemName, setItemName] = useState('');
  const [needWantUnsure, setNeedWantUnsure] = useState('');
  const [blocker, setBlocker] = useState('');
  const [moneyDebt, setMoneyDebt] = useState('');
  const [hasRefund, setHasRefund] = useState('');
  const [reviewsRead, setReviewsRead] = useState('');
  const [excitement, setExcitement] = useState('');
  const [timingChoice, setTimingChoice] = useState('');

  const handleNext = () => setPage(page + 1);
  const handleBack = () => setPage(page - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

        {/* PAGE 1 */}
        {page === 1 && (
          <div className="animate-fadeIn">
            <div className="text-5xl mb-6 text-center">☀️</div>
            <h1 className="text-4xl font-black text-gray-900 mb-2 text-center">ToBuyOrNot</h1>
            <p className="text-center text-gray-500 mb-8 text-sm">Let's figure this out together!</p>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name (Optional)</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="What should we call you?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition text-gray-800 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">What do you want to buy?</label>
                <input 
                  type="text" 
                  value={itemName} 
                  onChange={(e) => setItemName(e.target.value)} 
                  placeholder="Tell us the item..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition text-gray-800 placeholder-gray-400"
                />
              </div>
              <button 
                onClick={handleNext} 
                disabled={!itemName}
                className="w-full mt-6 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold rounded-xl hover:from-orange-500 hover:to-pink-500 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition shadow-lg"
              >
                Let's Go! 🚀
              </button>
            </div>
          </div>
        )}

        {/* PAGE 2 */}
        {page === 2 && needWantUnsure !== 'unsure' && (
          <div className="animate-fadeIn">
            <div className="text-5xl mb-4 text-center">🤔</div>
            <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">The Vibe Check</h2>
            <p className="text-center text-gray-600 mb-8 text-sm">Is this a need, a want, or are you not sure?</p>
            
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => { setNeedWantUnsure('need'); handleNext(); }}
                className="w-full text-left p-4 bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-300 rounded-xl hover:from-green-200 hover:to-green-100 transition"
              >
                <div className="font-bold text-green-900">✓ Need</div>
                <div className="text-sm text-green-700">I'll face a real problem without it</div>
              </button>
              <button 
                onClick={() => { setNeedWantUnsure('want'); handleNext(); }}
                className="w-full text-left p-4 bg-gradient-to-r from-blue-100 to-blue-50 border-2 border-blue-300 rounded-xl hover:from-blue-200 hover:to-blue-100 transition"
              >
                <div className="font-bold text-blue-900">✨ Want</div>
                <div className="text-sm text-blue-700">Nice to have, but I'll survive without it</div>
              </button>
              <button 
                onClick={() => setNeedWantUnsure('unsure')}
                className="w-full text-left p-4 bg-gradient-to-r from-purple-100 to-purple-50 border-2 border-purple-300 rounded-xl hover:from-purple-200 hover:to-purple-100 transition"
              >
                <div className="font-bold text-purple-900">❓ Not Sure</div>
                <div className="text-sm text-purple-700">Could be a need for my lifestyle</div>
              </button>
            </div>
            <button 
              onClick={handleBack}
              className="w-full py-2 text-gray-600 font-semibold hover:text-gray-800 transition"
            >
              ← Back
            </button>
          </div>
        )}

        {/* PAGE 2B */}
        {page === 2 && needWantUnsure === 'unsure' && (
          <div className="animate-fadeIn">
            <div className="text-5xl mb-4 text-center">🔍</div>
            <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Let's Dig Deeper</h2>
            <p className="text-center text-gray-600 mb-8">If you don't buy <span className="font-bold">{itemName}</span>, will it seriously disrupt your daily routine, work, health, or well-being?</p>
            
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => { setNeedWantUnsure('need'); handleNext(); }}
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition shadow-lg"
              >
                Yes, it's essential 💚
              </button>
              <button 
                onClick={() => { setNeedWantUnsure('want'); handleNext(); }}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition shadow-lg"
              >
                No, it's a nice-to-have 💙
              </button>
            </div>
            <button 
              onClick={() => setNeedWantUnsure('')}
              className="w-full py-2 text-gray-600 font-semibold hover:text-gray-800 transition"
            >
              ← Back
            </button>
          </div>
        )}

        {/* PAGE 3 */}
        {page === 3 && (
          <div className="animate-fadeIn">
            <div className="text-5xl mb-4 text-center">🛑</div>
            <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">What's Holding You Back?</h2>
            <p className="text-center text-gray-600 mb-8 text-sm">What's the main thing stopping you?</p>
            
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => { setBlocker('money'); handleNext(); }}
                className="w-full text-left p-4 bg-gradient-to-r from-red-100 to-red-50 border-2 border-red-300 rounded-xl hover:from-red-200 hover:to-red-100 transition"
              >
                <div className="font-bold text-red-900">💸 Money</div>
                <div className="text-sm text-red-700">I'm worried about the cost</div>
              </button>
              <button 
                onClick={() => { setBlocker('uncertainty'); handleNext(); }}
                className="w-full text-left p-4 bg-gradient-to-r from-yellow-100 to-yellow-50 border-2 border-yellow-300 rounded-xl hover:from-yellow-200 hover:to-yellow-100 transition"
              >
                <div className="font-bold text-yellow-900">⚠️ Uncertainty</div>
                <div className="text-sm text-yellow-700">Will I actually use or love it?</div>
              </button>
              <button 
                onClick={() => { setBlocker('timing'); handleNext(); }}
                className="w-full text-left p-4 bg-gradient-to-r from-orange-100 to-orange-50 border-2 border-orange-300 rounded-xl hover:from-orange-200 hover:to-orange-100 transition"
              >
                <div className="font-bold text-orange-900">⏰ Timing</div>
                <div className="text-sm text-orange-700">Maybe later, not right now</div>
              </button>
            </div>
            <button 
              onClick={handleBack}
              className="w-full py-2 text-gray-600 font-semibold hover:text-gray-800 transition"
            >
              ← Back
            </button>
          </div>
        )}

        {/* PAGE 4 - Money */}
        {page === 4 && blocker === 'money' && (
          <div className="animate-fadeIn">
            <div className="text-5xl mb-4 text-center">💰</div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">Money Reality Check</h2>
            
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 mb-6">
              <p className="text-gray-800 font-semibold mb-4">Will this put you in overdraft or debt?</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setMoneyDebt('yes')}
                  className={`flex-1 py-2 rounded-lg font-bold transition ${moneyDebt === 'yes' ? 'bg-red-500 text-white' : 'bg-white border-2 border-red-300 text-gray-800 hover:bg-red-100'}`}
                >
                  Yes 😰
                </button>
                <button 
                  onClick={() => setMoneyDebt('no')}
                  className={`flex-1 py-2 rounded-lg font-bold transition ${moneyDebt === 'no' ? 'bg-green-500 text-white' : 'bg-white border-2 border-green-300 text-gray-800 hover:bg-green-100'}`}
                >
                  No 😊
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-6">
              <p className="text-gray-800 font-semibold mb-4">Do you have a return/refund policy?</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setHasRefund('yes')}
                  className={`flex-1 py-2 rounded-lg font-bold transition ${hasRefund === 'yes' ? 'bg-blue-500 text-white' : 'bg-white border-2 border-blue-300 text-gray-800 hover:bg-blue-100'}`}
                >
                  Yes ✓
                </button>
                <button 
                  onClick={() => setHasRefund('no')}
                  className={`flex-1 py-2 rounded-lg font-bold transition ${hasRefund === 'no' ? 'bg-orange-500 text-white' : 'bg-white border-2 border-orange-300 text-gray-800 hover:bg-orange-100'}`}
                >
                  No ✗
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handleNext}
                className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition"
              >
                Continue
              </button>
              <button 
                onClick={handleBack}
                className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl transition"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4 - Uncertainty */}
        {page === 4 && blocker === 'uncertainty' && (
          <div className="animate-fadeIn">
            <div className="text-5xl mb-4 text-center">🤷</div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">Uncertainty Check</h2>
            
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5 mb-6">
              <p className="text-gray-800 font-semibold mb-4">Have you read recent reviews?</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setReviewsRead('yes')}
                  className={`flex-1 py-2 rounded-lg font-bold transition ${reviewsRead === 'yes' ? 'bg-green-500 text-white' : 'bg-white border-2 border-green-300 text-gray-800 hover:bg-green-100'}`}
                >
                  Yes 📖
                </button>
                <button 
                  onClick={() => setReviewsRead('no')}
                  className={`flex-1 py-2 rounded-lg font-bold transition ${reviewsRead === 'no' ? 'bg-red-500 text-white' : 'bg-white border-2 border-red-300 text-gray-800 hover:bg-red-100'}`}
                >
                  No 👀
                </button>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5 mb-6">
              <p className="text-gray-800 font-semibold mb-4">How excited are you? (1-10)</p>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={excitement} 
                onChange={(e) => setExcitement(e.target.value)}
                className="w-full h-2 bg-purple-300 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-center text-2xl font-black text-purple-600 mt-4">{excitement || '?'} / 10</p>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handleNext}
                className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition"
              >
                Continue
              </button>
              <button 
                onClick={handleBack}
                className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl transition"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4 - Timing */}
        {page === 4 && blocker === 'timing' && (
          <div className="animate-fadeIn">
            <div className="text-5xl mb-4 text-center">⏳</div>
            <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Timing Check</h2>
            <p className="text-center text-gray-600 mb-8 italic">If it's still on your mind in 7 days, it's probably worth it!</p>
            
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => { setTimingChoice('wait'); handleNext(); }}
                className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition shadow-lg"
              >
                I'll Wait 7 Days ⏰
              </button>
              <button 
                onClick={() => { setTimingChoice('now'); handleNext(); }}
                className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl transition shadow-lg"
              >
                No, I Want It Now! 🔥
              </button>
            </div>
            <button 
              onClick={handleBack}
              className="w-full py-2 text-gray-600 font-semibold hover:text-gray-800 transition"
            >
              ← Back
            </button>
          </div>
        )}

        {/* PAGE 5 */}
        {page === 5 && (
          <div className="animate-fadeIn">
            <div className="text-6xl mb-4 text-center">
              {needWantUnsure === 'need' ? '✅' : needWantUnsure === 'want' ? '💭' : timingChoice === 'wait' ? '⏰' : '🔥'}
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">The Verdict</h2>
            
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 border-2 border-orange-300 rounded-xl p-6 mb-6">
              {needWantUnsure === 'want' && blocker !== 'timing' && (
                <div>
                  <p className="text-gray-900 font-bold mb-3">Hey {name || 'friend'}! 👋</p>
                  <p className="text-gray-800"><span className="font-bold">{itemName}</span> is a want—and that's totally okay! {hasRefund === 'yes' ? 'You can return it, so' : ''} go for it if you're still excited tomorrow. Sleep on it first though! Real joy doesn't fade overnight. 💭</p>
                </div>
              )}
              {needWantUnsure === 'need' && (
                <div>
                  <p className="text-gray-900 font-bold mb-3">Hey {name || 'friend'}! 👋</p>
                  <p className="text-gray-800">This sounds essential! Don't wait too long. But quick tip: can you find it cheaper secondhand or in a bundle? 🔍</p>
                </div>
              )}
              {timingChoice === 'wait' && (
                <div>
                  <p className="text-gray-900 font-bold mb-3">Smart move! ⏰</p>
                  <p className="text-gray-800">Set a reminder for 7 days. If you're still thinking about <span className="font-bold">{itemName}</span>, that's your answer. 😊</p>
                </div>
              )}
              {timingChoice === 'now' && (
                <div>
                  <p className="text-gray-900 font-bold mb-3">You want it now! 🔥</p>
                  <p className="text-gray-800">That's your call to make! You've thought it through. Good luck with <span className="font-bold">{itemName}</span>! 🎉</p>
                </div>
              )}
            </div>

            <button 
              onClick={() => { setPage(1); setName(''); setItemName(''); setNeedWantUnsure(''); setBlocker(''); setMoneyDebt(''); setHasRefund(''); setReviewsRead(''); setExcitement(''); setTimingChoice(''); }}
              className="w-full py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold rounded-xl hover:from-orange-500 hover:to-pink-500 transition shadow-lg"
            >
              Start Over 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
