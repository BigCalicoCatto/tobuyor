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
    <div style={{ backgroundColor: '#2a2a2a', minHeight: '100vh', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* PAGE 1 */}
        {page === 1 && (
          <div>
            <h1 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '700', marginBottom: '40px', letterSpacing: '0.5px' }}>ToBuyOrNot</h1>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: '#ffffff', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Your Name (Optional)</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Your name"
                style={{ width: '100%', padding: '10px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', fontSize: '13px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ color: '#ffffff', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Item Name (Required)</label>
              <input 
                type="text" 
                value={itemName} 
                onChange={(e) => setItemName(e.target.value)} 
                placeholder="What do you want to buy?"
                style={{ width: '100%', padding: '10px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', fontSize: '13px', boxSizing: 'border-box' }}
              />
            </div>
            <button 
              onClick={handleNext} 
              disabled={!itemName}
              style={{ width: '100%', padding: '10px', backgroundColor: itemName ? '#444' : '#333', color: '#999', border: 'none', borderRadius: '3px', fontSize: '13px', cursor: itemName ? 'pointer' : 'default', fontWeight: '500' }}
            >
              Next
            </button>
          </div>
        )}

        {/* PAGE 2 */}
        {page === 2 && needWantUnsure !== 'unsure' && (
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>The Vibe Check</h2>
            <p style={{ color: '#cccccc', fontSize: '14px', marginBottom: '20px' }}>Is this a need, a want, or are you not sure?</p>
            <div style={{ marginBottom: '20px' }}>
              <button 
                onClick={() => { setNeedWantUnsure('need'); handleNext(); }}
                style={{ width: '100%', textAlign: 'left', padding: '15px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', marginBottom: '10px', cursor: 'pointer', fontSize: '13px' }}
              >
                <span style={{ fontWeight: '600' }}>Need</span> - I'll face a real problem if I don't have this.
              </button>
              <button 
                onClick={() => { setNeedWantUnsure('want'); handleNext(); }}
                style={{ width: '100%', textAlign: 'left', padding: '15px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', marginBottom: '10px', cursor: 'pointer', fontSize: '13px' }}
              >
                <span style={{ fontWeight: '600' }}>Want</span> - It's nice to have, but life goes on without it.
              </button>
              <button 
                onClick={() => setNeedWantUnsure('unsure')}
                style={{ width: '100%', textAlign: 'left', padding: '15px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                <span style={{ fontWeight: '600' }}>Not sure</span> - It might be a need for my lifestyle.
              </button>
            </div>
            <button 
              onClick={handleBack}
              style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: '#999', border: 'none', borderRadius: '3px', fontSize: '13px', cursor: 'pointer' }}
            >
              Back
            </button>
          </div>
        )}

        {/* PAGE 2B */}
        {page === 2 && needWantUnsure === 'unsure' && (
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Let's Dig Deeper</h2>
            <p style={{ color: '#cccccc', fontSize: '14px', marginBottom: '20px' }}>If you don't buy {itemName}, will it seriously disrupt your daily routine, work, health, or emotional well-being?</p>
            <div style={{ marginBottom: '20px' }}>
              <button 
                onClick={() => { setNeedWantUnsure('need'); handleNext(); }}
                style={{ width: '100%', padding: '12px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', marginBottom: '10px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}
              >
                Yes, it's a Need
              </button>
              <button 
                onClick={() => { setNeedWantUnsure('want'); handleNext(); }}
                style={{ width: '100%', padding: '12px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}
              >
                No, it's a Want
              </button>
            </div>
            <button 
              onClick={() => setNeedWantUnsure('')}
              style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: '#999', border: 'none', borderRadius: '3px', fontSize: '13px', cursor: 'pointer' }}
            >
              Back
            </button>
          </div>
        )}

        {/* PAGE 3 */}
        {page === 3 && (
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>The Hold-Up</h2>
            <p style={{ color: '#cccccc', fontSize: '14px', marginBottom: '20px' }}>What's holding you back?</p>
            <div style={{ marginBottom: '20px' }}>
              <button 
                onClick={() => { setBlocker('money'); handleNext(); }}
                style={{ width: '100%', textAlign: 'left', padding: '15px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', marginBottom: '10px', cursor: 'pointer', fontSize: '13px' }}
              >
                <span style={{ fontWeight: '600' }}>Money</span> - I'm worried about the cost.
              </button>
              <button 
                onClick={() => { setBlocker('uncertainty'); handleNext(); }}
                style={{ width: '100%', textAlign: 'left', padding: '15px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', marginBottom: '10px', cursor: 'pointer', fontSize: '13px' }}
              >
                <span style={{ fontWeight: '600' }}>Uncertainty</span> - I'm not sure I'll use or love it.
              </button>
              <button 
                onClick={() => { setBlocker('timing'); handleNext(); }}
                style={{ width: '100%', textAlign: 'left', padding: '15px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                <span style={{ fontWeight: '600' }}>Timing</span> - Maybe later—but not right now.
              </button>
            </div>
            <button 
              onClick={handleBack}
              style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: '#999', border: 'none', borderRadius: '3px', fontSize: '13px', cursor: 'pointer' }}
            >
              Back
            </button>
          </div>
        )}

        {/* PAGE 4 - Money */}
        {page === 4 && blocker === 'money' && (
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Money Check</h2>
            <p style={{ color: '#cccccc', fontSize: '14px', marginBottom: '15px' }}>Will this put you in overdraft or debt?</p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button 
                onClick={() => setMoneyDebt('yes')}
                style={{ flex: 1, padding: '10px', backgroundColor: moneyDebt === 'yes' ? '#555' : '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                Yes
              </button>
              <button 
                onClick={() => setMoneyDebt('no')}
                style={{ flex: 1, padding: '10px', backgroundColor: moneyDebt === 'no' ? '#555' : '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                No
              </button>
            </div>
            <p style={{ color: '#cccccc', fontSize: '14px', marginBottom: '10px' }}>Do you have a refund window?</p>
            <input 
              type="text" 
              value={refundDays} 
              onChange={(e) => setRefundDays(e.target.value)} 
              placeholder="e.g., 30 days"
              style={{ width: '100%', padding: '10px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', fontSize: '13px', marginBottom: '20px', boxSizing: 'border-box' }}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={handleNext}
                style={{ flex: 1, padding: '10px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                Continue
              </button>
              <button 
                onClick={handleBack}
                style={{ flex: 1, padding: '10px', backgroundColor: '#333', color: '#999', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4 - Uncertainty */}
        {page === 4 && blocker === 'uncertainty' && (
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Uncertainty Check</h2>
            <p style={{ color: '#cccccc', fontSize: '14px', marginBottom: '15px' }}>Have you read recent reviews?</p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button 
                onClick={() => setReviewsRead('yes')}
                style={{ flex: 1, padding: '10px', backgroundColor: reviewsRead === 'yes' ? '#555' : '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                Yes
              </button>
              <button 
                onClick={() => setReviewsRead('no')}
                style={{ flex: 1, padding: '10px', backgroundColor: reviewsRead === 'no' ? '#555' : '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                No
              </button>
            </div>
            <p style={{ color: '#cccccc', fontSize: '14px', marginBottom: '10px' }}>Excitement Level (1-10)</p>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={excitement} 
              onChange={(e) => setExcitement(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <p style={{ textAlign: 'center', color: '#cccccc', fontSize: '14px', marginBottom: '20px' }}>{excitement || '?'}/10</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={handleNext}
                style={{ flex: 1, padding: '10px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                Continue
              </button>
              <button 
                onClick={handleBack}
                style={{ flex: 1, padding: '10px', backgroundColor: '#333', color: '#999', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4 - Timing */}
        {page === 4 && blocker === 'timing' && (
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Timing Check</h2>
            <p style={{ color: '#cccccc', fontSize: '14px', marginBottom: '25px', fontStyle: 'italic' }}>If it's still important in 7 days, it'll still be worth buying.</p>
            <div style={{ marginBottom: '20px' }}>
              <button 
                onClick={() => { setTimingChoice('wait'); handleNext(); }}
                style={{ width: '100%', padding: '12px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', marginBottom: '10px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}
              >
                I'll Wait 7 Days
              </button>
              <button 
                onClick={() => { setTimingChoice('now'); handleNext(); }}
                style={{ width: '100%', padding: '12px', backgroundColor: '#3a3a3a', border: 'none', color: '#ffffff', borderRadius: '3px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}
              >
                No, I Want It Now
              </button>
            </div>
            <button 
              onClick={handleBack}
              style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: '#999', border: 'none', borderRadius: '3px', fontSize: '13px', cursor: 'pointer' }}
            >
              Back
            </button>
          </div>
        )}

        {/* PAGE 5 */}
        {page === 5 && (
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>The Verdict</h2>
            <div style={{ backgroundColor: '#3a3a3a', padding: '20px', borderRadius: '3px', marginBottom: '20px' }}>
              {needWantUnsure === 'want' && blocker !== 'timing' && (
                <>
                  <p style={{ color: '#ffffff', fontSize: '14px', marginBottom: '10px' }}>Hey {name || 'friend'}, here's our take on <strong>{itemName}</strong>:</p>
                  <p style={{ color: '#cccccc', fontSize: '14px' }}>It's a want—and that's okay! You can return it within {refundDays || 'the window'}. Go for it—if you're still excited tomorrow. Sleep on it.</p>
                </>
              )}
              {needWantUnsure === 'need' && (
                <>
                  <p style={{ color: '#ffffff', fontSize: '14px', marginBottom: '10px' }}>Hey {name || 'friend'}, this sounds essential for <strong>{itemName}</strong>.</p>
                  <p style={{ color: '#cccccc', fontSize: '14px' }}>Don't delay if it solves a real problem. But can you find a cheaper alternative? Check secondhand or bundles.</p>
                </>
              )}
              {timingChoice === 'wait' && (
                <p style={{ color: '#cccccc', fontSize: '14px' }}>Smart move! Set a reminder for 7 days. If you still want <strong>{itemName}</strong> then—it's probably worth it.</p>
              )}
              {timingChoice === 'now' && (
                <p style={{ color: '#cccccc', fontSize: '14px' }}>You want it now—and that's your call! Good luck with <strong>{itemName}</strong>!</p>
              )}
            </div>
            <button 
              onClick={() => { setPage(1); setName(''); setItemName(''); setNeedWantUnsure(''); setBlocker(''); setMoneyDebt(''); setRefundDays(''); setReviewsRead(''); setExcitement(''); setTimingChoice(''); }}
              style={{ width: '100%', padding: '10px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '3px', fontSize: '13px', cursor: 'pointer', fontWeight: '500' }}
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
