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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">

        {/* PAGE 1: INITIAL INPUT */}
        {page === 1 && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">ToBuyOrNot</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name (Optional)</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Item Name (Required)</label>
              <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="What do you want to buy?" />
            </div>
            <button onClick={handleNext} disabled={!itemName} className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 transition">Next</button>
          </div>
        )}

        {/* PAGE 2: THE VIBE CHECK */}
        {page === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">The Vibe Check</h2>
            <p className="text-gray-700 font-medium mb-4">Is this a need, a want, or are you not sure?</p>
            <div className="space-y-3 mb-6">
              <button onClick={() => { setNeedWantUnsure('need'); handleNext(); }} className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition font-medium text-gray-800"><span className="font-bold">Need:</span> I'll face a real problem if I don't have this.</button>
              <button onClick={() => { setNeedWantUnsure('want'); handleNext(); }} className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition font-medium text-gray-800"><span className="font-bold">Want:</span> It's nice to have, but life goes on without it.</button>
              <button onClick={() => setNeedWantUnsure('unsure')} className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition font-medium text-gray-800"><span className="font-bold">Not sure:</span> It might be a need for my lifestyle.</button>
            </div>
            <button onClick={handleBack} className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition">Back</button>
          </div>
        )}

        {/* PAGE 2B: UNSURE FOLLOW-UP */}
        {page === 2 && needWantUnsure === 'unsure' && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Let's Dig Deeper</h2>
            <p className="text-gray-700 font-medium mb-4">If you don't buy {itemName}, will it seriously disrupt your daily routine, work, health, or emotional well-being?</p>
            <div className="space-y-3 mb-6">
              <button onClick={() => { setNeedWantUnsure('need'); handleNext(); }} className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition">Yes, it's a Need</button>
              <button onClick={() => { setNeedWantUnsure('want'); handleNext(); }} className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition">No, it's a Want</button>
            </div>
            <button onClick={() => setNeedWantUnsure('')} className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition">Back</button>
          </div>
        )}

        {/* PAGE 3: THE HOLD-UP */}
        {page === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">The Hold-Up</h2>
            <p className="text-gray-700 font-medium mb-4">What's holding you back?</p>
            <div className="space-y-3 mb-6">
              <button onClick={() => { setBlocker('money'); handleNext(); }} className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition font-medium text-gray-800"><span className="font-bold">Money:</span> I'm worried about the cost.</button>
              <button onClick={() => { setBlocker('uncertainty'); handleNext(); }} className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition font-medium text-gray-800"><span className="font-bold">Uncertainty:</span> I'm not sure I'll use or love it.</button>
              <button onClick={() => { setBlocker('timing'); handleNext(); }} className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition font-medium text-gray-800"><span className="font-bold">Timing:</span> Maybe later—but not right now.</button>
            </div>
            <button onClick={handleBack} className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition">Back</button>
          </div>
        )}

        {/* PAGE 4: SMART CHECK-IN */}
        {page === 4 && blocker === 'money' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Money Check</h2>
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-4">Will this put you in overdraft or debt?</p>
              <div className="space-y-2">
                <button onClick={() => setMoneyDebt('yes')} className={`w-full p-3 rounded-lg font-semibold transition ${moneyDebt === 'yes' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Yes</button>
                <button onClick={() => setMoneyDebt('no')} className={`w-full p-3 rounded-lg font-semibold transition ${moneyDebt === 'no' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>No</button>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-4">Do you have a refund window?</p>
              <input type="text" value={refundDays} onChange={(e) => setRefundDays(e.target.value)} placeholder="e.g., 30 days" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2" />
            </div>
            <button onClick={handleNext} className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition mb-2">Continue</button>
            <button onClick={handleBack} className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition">Back</button>
          </div>
        )}

        {page === 4 && blocker === 'uncertainty' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Uncertainty Check</h2>
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-4">Have you read recent reviews?</p>
              <div className="space-y-2">
                <button onClick={() => setReviewsRead('yes')} className={`w-full p-3 rounded-lg font-semibold transition ${reviewsRead === 'yes' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Yes</button>
                <button onClick={() => setReviewsRead('no')} className={`w-full p-3 rounded-lg font-semibold transition ${reviewsRead === 'no' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>No</button>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-4">Excitement Level (1-10)</p>
              <input type="range" min="1" max="10" value={excitement} onChange={(e) => setExcitement(e.target.value)} className="w-full mb-2" />
              <p className="text-center text-lg font-bold text-indigo-600">{excitement || '?'}/10</p>
            </div>
            <button onClick={handleNext} className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition mb-2">Continue</button>
            <button onClick={handleBack} className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition">Back</button>
          </div>
        )}

        {page === 4 && blocker === 'timing' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Timing Check</h2>
            <p className="text-gray-700 text-center mb-6 italic">If it's still important in 7 days, it'll still be worth buying.</p>
            <div className="space-y-3">
              <button onClick={() => { setTimingChoice('wait'); handleNext(); }} className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition">I'll Wait 7 Days</button>
              <button onClick={() => { setTimingChoice('now'); handleNext(); }} className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition">No, I Want It Now</button>
            </div>
            <button onClick={handleBack} className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition mt-3">Back</button>
          </div>
        )}

        {/* PAGE 5: THE VERDICT */}
        {page === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">The Verdict</h2>
            {needWantUnsure === 'want' && blocker !== 'timing' && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="text-gray-800">Hey {name || 'friend'}, here's our take on <strong>{itemName}</strong>:</p>
                <p className="text-gray-800 mt-2">It's a want—and that's okay! You're not risking financial harm. You can return it within {refundDays || 'the window'}. Go for it—if you're still excited tomorrow. Sleep on it. Real joy doesn't fade overnight.</p>
              </div>
            )}
            {needWantUnsure === 'need' && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
                <p className="text-gray-800">Hey {name || 'friend'}, this sounds essential for <strong>{itemName}</strong>.</p>
                <p className="text-gray-800 mt-2">Don't delay if it solves a real problem. But: Can you find a cheaper alternative? Check secondhand or bundles.</p>
              </div>
            )}
            {timingChoice === 'wait' && (
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-6">
                <p className="text-gray-800">Smart move! Set a phone reminder for 7 days from now. If you still want <strong>{itemName}</strong> then—it's probably worth it.</p>
              </div>
            )}
            {timingChoice === 'now' && (
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-6">
                <p className="text-gray-800">You want it now—and that's your call! Just make sure you've thought it through. Good luck with <strong>{itemName}</strong>!</p>
              </div>
            )}
            <button onClick={() => { setPage(1); setName(''); setItemName(''); setNeedWantUnsure(''); setBlocker(''); setMoneyDebt(''); setRefundDays(''); setReviewsRead(''); setExcitement(''); setTimingChoice(''); }} className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition">Start Over</button>
          </div>
        )}
      </div>
    </div>
  );
}
