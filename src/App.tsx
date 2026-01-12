import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [itemName, setItemName] = useState('');
  const [needWantUnsure, setNeedWantUnsure] = useState('');
  const [blocker, setBlocker] = useState('');
  const [moneyDebt, setMoneyDebt] = useState('');
  const [refundDays, setRefundDays] = useState('');
  const [reviewsRead, setReviewsRead] = useState('');
  const [excitement, setExcitement] = useState('');
  const [timingChoice, setTimingChoice] = useState('');

  const handleNext = () => setPage(page + 1);
  const handleBack = () => setPage(page - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">

        {/* PAGE 1 */}
        {page === 1 && (
          <div className="animate-fadeIn">
            <h1 className="text-6xl font-black text-white mb-16 tracking-tight">ToBuyOrNot</h1>
            <div className="space-y-6">
              <div>
                <label className="text-sm text-slate-300 mb-2 block">Your Name (Optional)</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Your name" 
                  className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300 mb-2 block">Item Name (Required)</label>
                <input 
                  type="text" 
                  value={itemName} 
                  onChange={(e) => setItemName(e.target.value)} 
                  placeholder="What do you want to buy?" 
                  className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <button 
                onClick={handleNext} 
                disabled={!itemName}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition mt-8"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* PAGE 2 */}
        {page === 2 && needWantUnsure !== 'unsure' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-12">The Vibe Check</h2>
            <p className="text-slate-300 text-lg mb-8">Is this a need, a want, or are you not sure?</p>
            <div className="space-y-4 mb-8">
              <button 
                onClick={() => { setNeedWantUnsure('need'); handleNext(); }}
                className="w-full text-left p-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <div className="font-bold text-lg">Need</div>
                <div className="text-slate-300 text-sm mt-1">I'll face a real problem if I don't have this.</div>
              </button>
              <button 
                onClick={() => { setNeedWantUnsure('want'); handleNext(); }}
                className="w-full text-left p-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <div className="font-bold text-lg">Want</div>
                <div className="text-slate-300 text-sm mt-1">It's nice to have, but life goes on without it.</div>
              </button>
              <button 
                onClick={() => setNeedWantUnsure('unsure')}
                className="w-full text-left p-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <div className="font-bold text-lg">Not sure</div>
                <div className="text-slate-300 text-sm mt-1">It might be a need for my lifestyle.</div>
              </button>
            </div>
            <button 
              onClick={handleBack}
              className="w-full py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition"
            >
              Back
            </button>
          </div>
        )}

        {/* PAGE 2B */}
        {page === 2 && needWantUnsure === 'unsure' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-8">Let's Dig Deeper</h2>
            <p className="text-slate-300 text-lg mb-12">If you don't buy <span className="font-bold">{itemName}</span>, will it seriously disrupt your daily routine, work, health, or emotional well-being?</p>
            <div className="space-y-4 mb-8">
              <button 
                onClick={() => { setNeedWantUnsure('need'); handleNext(); }}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
              >
                Yes, it's a Need
              </button>
              <button 
                onClick={() => { setNeedWantUnsure('want'); handleNext(); }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                No, it's a Want
              </button>
            </div>
            <button 
              onClick={() => setNeedWantUnsure('')}
              className="w-full py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition"
            >
              Back
            </button>
          </div>
        )}

        {/* PAGE 3 */}
        {page === 3 && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-12">The Hold-Up</h2>
            <p className="text-slate-300 text-lg mb-8">What's holding you back?</p>
            <div className="space-y-4 mb-8">
              <button 
                onClick={() => { setBlocker('money'); handleNext(); }}
                className="w-full text-left p-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <div className="font-bold text-lg">Money</div>
                <div className="text-slate-300 text-sm mt-1">I'm worried about the cost.</div>
              </button>
              <button 
                onClick={() => { setBlocker('uncertainty'); handleNext(); }}
                className="w-full text-left p-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <div className="font-bold text-lg">Uncertainty</div>
                <div className="text-slate-300 text-sm mt-1">I'm not sure I'll use or love it.</div>
              </button>
              <button 
                onClick={() => { setBlocker('timing'); handleNext(); }}
                className="w-full text-left p-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <div className="font-bold text-lg">Timing</div>
                <div className="text-slate-300 text-sm mt-1">Maybe later—but not right now.</div>
              </button>
            </div>
            <button 
              onClick={handleBack}
              className="w-full py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition"
            >
              Back
            </button>
          </div>
        )}

        {/* PAGE 4 - Money */}
        {page === 4 && blocker === 'money' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-12">Money Check</h2>
            <div className="bg-slate-700 p-8 rounded-lg mb-8">
              <p className="text-slate-300 mb-4">Will this put you in overdraft or debt?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setMoneyDebt('yes')}
                  className={`flex-1 py-2 rounded-lg font-semibold transition ${moneyDebt === 'yes' ? 'bg-red-600 text-white' : 'bg-slate-600 text-slate-300 hover:bg-slate-500'}`}
                >
                  Yes
                </button>
                <button 
                  onClick={() => setMoneyDebt('no')}
                  className={`flex-1 py-2 rounded-lg font-semibold transition ${moneyDebt === 'no' ? 'bg-green-600 text-white' : 'bg-slate-600 text-slate-300 hover:bg-slate-500'}`}
                >
                  No
                </button>
              </div>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg mb-8">
              <p className="text-slate-300 mb-4">Do you have a refund window?</p>
              <input 
                type="text" 
                value={refundDays} 
                onChange={(e) => setRefundDays(e.target.value)} 
                placeholder="e.g., 30 days" 
                className="w-full px-4 py-2 bg-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <button 
                onClick={handleNext}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Continue
              </button>
              <button 
                onClick={handleBack}
                className="flex-1 py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4 - Uncertainty */}
        {page === 4 && blocker === 'uncertainty' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-12">Uncertainty Check</h2>
            <div className="bg-slate-700 p-8 rounded-lg mb-8">
              <p className="text-slate-300 mb-4">Have you read recent reviews?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setReviewsRead('yes')}
                  className={`flex-1 py-2 rounded-lg font-semibold transition ${reviewsRead === 'yes' ? 'bg-green-600 text-white' : 'bg-slate-600 text-slate-300 hover:bg-slate-500'}`}
                >
                  Yes
                </button>
                <button 
                  onClick={() => setReviewsRead('no')}
                  className={`flex-1 py-2 rounded-lg font-semibold transition ${reviewsRead === 'no' ? 'bg-red-600 text-white' : 'bg-slate-600 text-slate-300 hover:bg-slate-500'}`}
                >
                  No
                </button>
              </div>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg mb-8">
              <p className="text-slate-300 mb-4">Excitement Level (1-10)</p>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={excitement} 
                onChange={(e) => setExcitement(e.target.value)} 
                className="w-full"
              />
              <p className="text-center text-3xl font-bold text-blue-400 mt-4">{excitement || '?'}/10</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={handleNext}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Continue
              </button>
              <button 
                onClick={handleBack}
                className="flex-1 py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4 - Timing */}
        {page === 4 && blocker === 'timing' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-12">Timing Check</h2>
            <p className="text-slate-300 text-lg text-center mb-12 italic">If it's still important in 7 days, it'll still be worth buying.</p>
            <div className="space-y-4 mb-8">
              <button 
                onClick={() => { setTimingChoice('wait'); handleNext(); }}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
              >
                I'll Wait 7 Days
              </button>
              <button 
                onClick={() => { setTimingChoice('now'); handleNext(); }}
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition"
              >
                No, I Want It Now
              </button>
            </div>
            <button 
              onClick={handleBack}
              className="w-full py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition"
            >
              Back
            </button>
          </div>
        )}

        {/* PAGE 5 */}
        {page === 5 && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-12">The Verdict</h2>
            <div className="bg-slate-700 p-8 rounded-lg mb-8">
              {needWantUnsure === 'want' && blocker !== 'timing' && (
                <>
                  <p className="text-white text-lg mb-4">Hey {name || 'friend'}, here's our take on <span className="font-bold">{itemName}</span>:</p>
                  <p className="text-slate-300">It's a want—and that's okay! You can return it within {refundDays || 'the window'}. Go for it—if you're still excited tomorrow. Sleep on it.</p>
                </>
              )}
              {needWantUnsure === 'need' && (
                <>
                  <p className="text-white text-lg mb-4">Hey {name || 'friend'}, this sounds essential for <span className="font-bold">{itemName}</span>.</p>
                  <p className="text-slate-300">Don't delay if it solves a real problem. But can you find a cheaper alternative? Check secondhand or bundles.</p>
                </>
              )}
              {timingChoice === 'wait' && (
                <p className="text-slate-300">Smart move! Set a reminder for 7 days. If you still want <span className="font-bold">{itemName}</span> then—it's probably worth it.</p>
              )}
              {timingChoice === 'now' && (
                <p className="text-slate-300">You want it now—and that's your call! Good luck with <span className="font-bold">{itemName}</span>!</p>
              )}
            </div>
            <button 
              onClick={() => { setPage(1); setName(''); setItemName(''); setNeedWantUnsure(''); setBlocker(''); setMoneyDebt(''); setRefundDays(''); setReviewsRead(''); setExcitement(''); setTimingChoice(''); }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
