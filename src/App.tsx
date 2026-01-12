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
    <div style={{ minHeight: '100vh', backgroundColor: '#2a2a2a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '500px', width: '100%', padding: '40px' }}>

        {/* PAGE 1: INITIAL INPUT */}
        {page === 1 && (
          <div>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '30px', letterSpacing: '2px' }}>ToBuyOrNot</h1>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: '#ccc' }}>Your Name (Optional)</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={{ width: '100%', padding: '12px', backgroundColor: '#3a3a3a', border: 'none', color: '#fff', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: '#ccc' }}>Item Name (Required)</label>
              <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="What do you want to buy?" style={{ width: '100%', padding: '12px', backgroundColor: '#3a3a3a', border: 'none', color: '#fff', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
            <button onClick={handleNext} disabled={!itemName} style={{ width: '100%', padding: '12px', backgroundColor: itemName ? '#555' : '#444', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: itemName ? 'pointer' : 'default', fontWeight: '500' }}>Next</button>
          </div>
        )}

        {/* PAGE 2: THE VIBE CHECK */}
        {page === 2 && needWantUnsure !== 'unsure' && (
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>The Vibe Check</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px', color: '#ccc' }}>Is this a need, a want, or are you not sure?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <button onClick={() => { setNeedWantUnsure('need'); handleNext(); }} style={{ textAlign: 'left', padding: '16px', backgroundColor: '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3a3a3a'}><span style={{ fontWeight: 'bold' }}>Need:</span> I'll face a real problem if I don't have this.</button>
              <button onClick={() => { setNeedWantUnsure('want'); handleNext(); }} style={{ textAlign: 'left', padding: '16px', backgroundColor: '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3a3a3a'}><span style={{ fontWeight: 'bold' }}>Want:</span> It's nice to have, but life goes on without it.</button>
              <button onClick={() => setNeedWantUnsure('unsure')} style={{ textAlign: 'left', padding: '16px', backgroundColor: '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3a3a3a'}><span style={{ fontWeight: 'bold' }}>Not sure:</span> It might be a need for my lifestyle.</button>
            </div>
            <button onClick={handleBack} style={{ width: '100%', padding: '12px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>Back</button>
          </div>
        )}

        {/* PAGE 2B: UNSURE FOLLOW-UP */}
        {page === 2 && needWantUnsure === 'unsure' && (
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Let's Dig Deeper</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px', color: '#ccc' }}>If you don't buy {itemName}, will it seriously disrupt your daily routine, work, health, or emotional well-being?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '25px' }}>
              <button onClick={() => { setNeedWantUnsure('need'); handleNext(); }} style={{ width: '100%', padding: '14px', backgroundColor: '#4a4a4a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}>Yes, it's a Need</button>
              <button onClick={() => { setNeedWantUnsure('want'); handleNext(); }} style={{ width: '100%', padding: '14px', backgroundColor: '#4a4a4a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}>No, it's a Want</button>
            </div>
            <button onClick={() => setNeedWantUnsure('')} style={{ width: '100%', padding: '12px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>Back</button>
          </div>
        )}

        {/* PAGE 3: THE HOLD-UP */}
        {page === 3 && (
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>The Hold-Up</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px', color: '#ccc' }}>What's holding you back?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <button onClick={() => { setBlocker('money'); handleNext(); }} style={{ textAlign: 'left', padding: '16px', backgroundColor: '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3a3a3a'}><span style={{ fontWeight: 'bold' }}>Money:</span> I'm worried about the cost.</button>
              <button onClick={() => { setBlocker('uncertainty'); handleNext(); }} style={{ textAlign: 'left', padding: '16px', backgroundColor: '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3a3a3a'}><span style={{ fontWeight: 'bold' }}>Uncertainty:</span> I'm not sure I'll use or love it.</button>
              <button onClick={() => { setBlocker('timing'); handleNext(); }} style={{ textAlign: 'left', padding: '16px', backgroundColor: '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3a3a3a'}><span style={{ fontWeight: 'bold' }}>Timing:</span> Maybe later—but not right now.</button>
            </div>
            <button onClick={handleBack} style={{ width: '100%', padding: '12px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>Back</button>
          </div>
        )}

        {/* PAGE 4: SMART CHECK-IN */}
        {page === 4 && blocker === 'money' && (
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Money Check</h2>
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontSize: '16px', marginBottom: '15px', color: '#ccc' }}>Will this put you in overdraft or debt?</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setMoneyDebt('yes')} style={{ flex: 1, padding: '10px', backgroundColor: moneyDebt === 'yes' ? '#555' : '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', cursor: 'pointer' }}>Yes</button>
                <button onClick={() => setMoneyDebt('no')} style={{ flex: 1, padding: '10px', backgroundColor: moneyDebt === 'no' ? '#555' : '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', cursor: 'pointer' }}>No</button>
              </div>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontSize: '16px', marginBottom: '10px', color: '#ccc' }}>Do you have a refund window?</p>
              <input type="text" value={refundDays} onChange={(e) => setRefundDays(e.target.value)} placeholder="e.g., 30 days" style={{ width: '100%', padding: '10px', backgroundColor: '#3a3a3a', border: 'none', color: '#fff', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
            <button onClick={handleNext} style={{ width: '100%', padding: '12px', backgroundColor: '#555', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', marginBottom: '10px' }}>Continue</button>
            <button onClick={handleBack} style={{ width: '100%', padding: '12px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>Back</button>
          </div>
        )}

        {page === 4 && blocker === 'uncertainty' && (
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Uncertainty Check</h2>
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontSize: '16px', marginBottom: '15px', color: '#ccc' }}>Have you read recent reviews?</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setReviewsRead('yes')} style={{ flex: 1, padding: '10px', backgroundColor: reviewsRead === 'yes' ? '#555' : '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', cursor: 'pointer' }}>Yes</button>
                <button onClick={() => setReviewsRead('no')} style={{ flex: 1, padding: '10px', backgroundColor: reviewsRead === 'no' ? '#555' : '#3a3a3a', border: 'none', borderRadius: '4px', color: '#fff', cursor: 'pointer' }}>No</button>
              </div>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontSize: '16px', marginBottom: '10px', color: '#ccc' }}>Excitement Level (1-10)</p>
              <input type="range" min="1" max="10" value={excitement} onChange={(e) => setExcitement(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
              <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', color: '#ccc' }}>{excitement || '?'}/10</p>
            </div>
            <button onClick={handleNext} style={{ width: '100%', padding: '12px', backgroundColor: '#555', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', marginBottom: '10px' }}>Continue</button>
            <button onClick={handleBack} style={{ width: '100%', padding: '12px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>Back</button>
          </div>
        )}

        {page === 4 && blocker === 'timing' && (
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Timing Check</h2>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#ccc', textAlign: 'center', fontStyle: 'italic' }}>If it's still important in 7 days, it'll still be worth buying.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '15px' }}>
              <button onClick={() => { setTimingChoice('wait'); handleNext(); }} style={{ width: '100%', padding: '14px', backgroundColor: '#4a4a4a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}>I'll Wait 7 Days</button>
              <button onClick={() => { setTimingChoice('now'); handleNext(); }} style={{ width: '100%', padding: '14px', backgroundColor: '#4a4a4a', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}>No, I Want It Now</button>
            </div>
            <button onClick={handleBack} style={{ width: '100%', padding: '12px', backgroundColor: '#444', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>Back</button>
          </div>
        )}

        {/* PAGE 5: THE VERDICT */}
        {page === 5 && (
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>The Verdict</h2>
            {needWantUnsure === 'want' && blocker !== 'timing' && (
              <div style={{ backgroundColor: '#3a3a3a', padding: '20px', borderRadius: '4px', marginBottom: '30px' }}>
                <p style={{ fontSize: '15px', color: '#fff', marginBottom: '12px' }}>Hey {name || 'friend'}, here's our take on <strong>{itemName}</strong>:</p>
                <p style={{ fontSize: '15px', color: '#ccc' }}>It's a want—and that's okay! You can return it within {refundDays || 'the window'}. Go for it—if you're still excited tomorrow. Sleep on it.</p>
              </div>
            )}
            {needWantUnsure === 'need' && (
              <div style={{ backgroundColor: '#3a3a3a', padding: '20px', borderRadius: '4px', marginBottom: '30px' }}>
                <p style={{ fontSize: '15px', color: '#fff', marginBottom: '12px' }}>Hey {name || 'friend'}, this sounds essential for <strong>{itemName}</strong>.</p>
                <p style={{ fontSize: '15px', color: '#ccc' }}>Don't delay if it solves a real problem. But can you find a cheaper alternative? Check secondhand or bundles.</p>
              </div>
            )}
            {timingChoice === 'wait' && (
              <div style={{ backgroundColor: '#3a3a3a', padding: '20px', borderRadius: '4px', marginBottom: '30px' }}>
                <p style={{ fontSize: '15px', color: '#fff' }}>Smart move! Set a reminder for 7 days. If you still want <strong>{itemName}</strong> then—it's probably worth it.</p>
              </div>
            )}
            {timingChoice === 'now' && (
              <div style={{ backgroundColor: '#3a3a3a', padding: '20px', borderRadius: '4px', marginBottom: '30px' }}>
                <p style={{ fontSize: '15px', color: '#fff' }}>You want it now—and that's your call! Good luck with <strong>{itemName}</strong>!</p>
              </div>
            )}
            <button onClick={() => { setPage(1); setName(''); setItemName(''); setNeedWantUnsure(''); setBlocker(''); setMoneyDebt(''); setRefundDays(''); setReviewsRead(''); setExcitement(''); setTimingChoice(''); }} style={{ width: '100%', padding: '12px', backgroundColor: '#555', color: '#999', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}>Start Over</button>
          </div>
        )}
      </div>
    </div>
  );
}
