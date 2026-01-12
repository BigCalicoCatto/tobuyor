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

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #FEF3E2 0%, #FEE5D9 50%, #FCE4EC 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '550px',
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    padding: '40px 30px',
  };

  const emojiStyle: React.CSSProperties = {
    fontSize: '60px',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '36px',
    fontWeight: '900',
    color: '#000000',
    textAlign: 'center',
    margin: '0 0 10px 0',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#666666',
    textAlign: 'center',
    marginBottom: '30px',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1a1a1a',
    display: 'block',
    marginBottom: '10px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    fontSize: '14px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    marginBottom: '20px',
    boxSizing: 'border-box',
    outline: 'none',
  };

  const primaryButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(90deg, #FF9A56 0%, #FF6BB6 100%)',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.3s ease',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    background: 'transparent',
    color: '#666666',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '15px',
  };

  const optionButtonGreen: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    border: '2px solid #4CAF50',
    borderRadius: '12px',
    backgroundColor: '#F1F8E9',
    cursor: 'pointer',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  };

  const optionButtonBlue: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    border: '2px solid #2196F3',
    borderRadius: '12px',
    backgroundColor: '#E3F2FD',
    cursor: 'pointer',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  };

  const optionButtonPurple: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    border: '2px solid #9C27B0',
    borderRadius: '12px',
    backgroundColor: '#F3E5F5',
    cursor: 'pointer',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  };

  const optionButtonRed: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    border: '2px solid #F44336',
    borderRadius: '12px',
    backgroundColor: '#FFEBEE',
    cursor: 'pointer',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  };

  const optionButtonYellow: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    border: '2px solid #FFC107',
    borderRadius: '12px',
    backgroundColor: '#FFFDE7',
    cursor: 'pointer',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  };

  const optionButtonOrange: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    border: '2px solid #FF9800',
    borderRadius: '12px',
    backgroundColor: '#FFF3E0',
    cursor: 'pointer',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>

        {/* PAGE 1 */}
        {page === 1 && (
          <div>
            <div style={emojiStyle}>☀️</div>
            <h1 style={titleStyle}>ToBuyOrNot</h1>
            <p style={subtitleStyle}>Let's figure this out together!</p>
            
            <div style={{ marginTop: '30px' }}>
              <label style={labelStyle}>Your Name (Optional)</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="What should we call you?"
                style={inputStyle}
              />
              <label style={labelStyle}>What do you want to buy?</label>
              <input 
                type="text" 
                value={itemName} 
                onChange={(e) => setItemName(e.target.value)} 
                placeholder="Tell us the item..."
                style={inputStyle}
              />
              <button 
                onClick={handleNext} 
                disabled={!itemName}
                style={{...primaryButtonStyle, opacity: itemName ? 1 : 0.5, cursor: itemName ? 'pointer' : 'not-allowed'}}
              >
                Let's Go! 🚀
              </button>
            </div>
          </div>
        )}

        {/* PAGE 2 */}
        {page === 2 && needWantUnsure !== 'unsure' && (
          <div>
            <div style={emojiStyle}>🤔</div>
            <h2 style={titleStyle}>The Vibe Check</h2>
            <p style={subtitleStyle}>Is this a need, a want, or are you not sure?</p>
            
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={() => { setNeedWantUnsure('need'); handleNext(); }}
                style={optionButtonGreen}
              >
                <div style={{ fontWeight: '700', color: '#2E7D32' }}>✓ Need</div>
                <div style={{ fontSize: '12px', color: '#558B2F' }}>I'll face a real problem without it</div>
              </button>
              <button 
                onClick={() => { setNeedWantUnsure('want'); handleNext(); }}
                style={optionButtonBlue}
              >
                <div style={{ fontWeight: '700', color: '#1565C0' }}>✨ Want</div>
                <div style={{ fontSize: '12px', color: '#0D47A1' }}>Nice to have, but I'll survive</div>
              </button>
              <button 
                onClick={() => setNeedWantUnsure('unsure')}
                style={optionButtonPurple}
              >
                <div style={{ fontWeight: '700', color: '#6A1B9A' }}>❓ Not Sure</div>
                <div style={{ fontSize: '12px', color: '#4A148C' }}>Could be a need for my lifestyle</div>
              </button>
            </div>
            <button onClick={handleBack} style={secondaryButtonStyle}>← Back</button>
          </div>
        )}

        {/* PAGE 2B */}
        {page === 2 && needWantUnsure === 'unsure' && (
          <div>
            <div style={emojiStyle}>🔍</div>
            <h2 style={titleStyle}>Let's Dig Deeper</h2>
            <p style={{...subtitleStyle, marginTop: '20px'}}>If you don't buy <strong>{itemName}</strong>, will it seriously disrupt your daily routine, work, or well-being?</p>
            
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={() => { setNeedWantUnsure('need'); handleNext(); }}
                style={{...primaryButtonStyle, background: '#4CAF50'}}
              >
                Yes, it's essential 💚
              </button>
              <button 
                onClick={() => { setNeedWantUnsure('want'); handleNext(); }}
                style={{...primaryButtonStyle, background: '#2196F3'}}
              >
                No, it's a nice-to-have 💙
              </button>
            </div>
            <button onClick={() => setNeedWantUnsure('')} style={secondaryButtonStyle}>← Back</button>
          </div>
        )}

        {/* PAGE 3 */}
        {page === 3 && (
          <div>
            <div style={emojiStyle}>🛑</div>
            <h2 style={titleStyle}>What's Holding You Back?</h2>
            <p style={subtitleStyle}>What's the main thing stopping you?</p>
            
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={() => { setBlocker('money'); handleNext(); }}
                style={optionButtonRed}
              >
                <div style={{ fontWeight: '700', color: '#C62828' }}>💸 Money</div>
                <div style={{ fontSize: '12px', color: '#D32F2F' }}>I'm worried about the cost</div>
              </button>
              <button 
                onClick={() => { setBlocker('uncertainty'); handleNext(); }}
                style={optionButtonYellow}
              >
                <div style={{ fontWeight: '700', color: '#F57F17' }}>⚠️ Uncertainty</div>
                <div style={{ fontSize: '12px', color: '#F57C00' }}>Will I actually use or love it?</div>
              </button>
              <button 
                onClick={() => { setBlocker('timing'); handleNext(); }}
                style={optionButtonOrange}
              >
                <div style={{ fontWeight: '700', color: '#E65100' }}>⏰ Timing</div>
                <div style={{ fontSize: '12px', color: '#EF6C00' }}>Maybe later, not right now</div>
              </button>
            </div>
            <button onClick={handleBack} style={secondaryButtonStyle}>← Back</button>
          </div>
        )}

        {/* PAGE 4 - Money */}
        {page === 4 && blocker === 'money' && (
          <div>
            <div style={emojiStyle}>💰</div>
            <h2 style={titleStyle}>Money Reality Check</h2>
            
            <div style={{ backgroundColor: '#FFEBEE', border: '1px solid #F44336', borderRadius: '12px', padding: '20px', marginTop: '25px', marginBottom: '20px' }}>
              <p style={{ color: '#000', fontWeight: '600', marginBottom: '15px' }}>Will this put you in overdraft or debt?</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={() => setMoneyDebt('yes')}
                  style={{flex: 1, padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', backgroundColor: moneyDebt === 'yes' ? '#F44336' : '#FFF', color: moneyDebt === 'yes' ? '#FFF' : '#000', borderLeft: '2px solid #F44336'}}
                >
                  Yes 😰
                </button>
                <button 
                  onClick={() => setMoneyDebt('no')}
                  style={{flex: 1, padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', backgroundColor: moneyDebt === 'no' ? '#4CAF50' : '#FFF', color: moneyDebt === 'no' ? '#FFF' : '#000', borderLeft: '2px solid #4CAF50'}}
                >
                  No 😊
                </button>
              </div>
            </div>

            <div style={{ backgroundColor: '#E3F2FD', border: '1px solid #2196F3', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
              <p style={{ color: '#000', fontWeight: '600', marginBottom: '15px' }}>Do you have a return/refund policy?</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={() => setHasRefund('yes')}
                  style={{flex: 1, padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', backgroundColor: hasRefund === 'yes' ? '#2196F3' : '#FFF', color: hasRefund === 'yes' ? '#FFF' : '#000', borderLeft: '2px solid #2196F3'}}
                >
                  Yes ✓
                </button>
                <button 
                  onClick={() => setHasRefund('no')}
                  style={{flex: 1, padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', backgroundColor: hasRefund === 'no' ? '#FF9800' : '#FFF', color: hasRefund === 'no' ? '#FFF' : '#000', borderLeft: '2px solid #FF9800'}}
                >
                  No ✗
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={handleNext}
                style={{flex: 1, ...primaryButtonStyle, marginTop: 0}}
              >
                Continue
              </button>
              <button 
                onClick={handleBack}
                style={{flex: 1, padding: '12px', background: '#EEE', color: '#333', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer'}}
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4 - Uncertainty */}
        {page === 4 && blocker === 'uncertainty' && (
          <div>
            <div style={emojiStyle}>🤷</div>
            <h2 style={titleStyle}>Uncertainty Check</h2>
            
            <div style={{ backgroundColor: '#FFFDE7', border: '1px solid #FFC107', borderRadius: '12px', padding: '20px', marginTop: '25px', marginBottom: '20px' }}>
              <p style={{ color: '#000', fontWeight: '600', marginBottom: '15px' }}>Have you read recent reviews?</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={() => setReviewsRead('yes')}
                  style={{flex: 1, padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', backgroundColor: reviewsRead === 'yes' ? '#4CAF50' : '#FFF', color: reviewsRead === 'yes' ? '#FFF' : '#000', borderLeft: '2px solid #4CAF50'}}
                >
                  Yes 📖
                </button>
                <button 
                  onClick={() => setReviewsRead('no')}
                  style={{flex: 1, padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', backgroundColor: reviewsRead === 'no' ? '#F44336' : '#FFF', color: reviewsRead === 'no' ? '#FFF' : '#000', borderLeft: '2px solid #F44336'}}
                >
                  No 👀
                </button>
              </div>
            </div>

            <div style={{ backgroundColor: '#F3E5F5', border: '1px solid #9C27B0', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
              <p style={{ color: '#000', fontWeight: '600', marginBottom: '15px' }}>How excited are you? (1-10)</p>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={excitement} 
                onChange={(e) => setExcitement(e.target.value)}
                style={{ width: '100%' }}
              />
              <p style={{ textAlign: 'center', fontSize: '28px', fontWeight: '900', color: '#6A1B9A', margin: '15px 0 0 0' }}>{excitement || '?'}/10</p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={handleNext}
                style={{flex: 1, ...primaryButtonStyle, marginTop: 0}}
              >
                Continue
              </button>
              <button 
                onClick={handleBack}
                style={{flex: 1, padding: '12px', background: '#EEE', color: '#333', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer'}}
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4 - Timing */}
        {page === 4 && blocker === 'timing' && (
          <div>
            <div style={emojiStyle}>⏳</div>
            <h2 style={titleStyle}>Timing Check</h2>
            <p style={{...subtitleStyle, marginTop: '20px', fontStyle: 'italic'}}>If it's still on your mind in 7 days, it's probably worth it!</p>
            
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={() => { setTimingChoice('wait'); handleNext(); }}
                style={{...primaryButtonStyle, background: '#4C63D2'}}
              >
                I'll Wait 7 Days ⏰
              </button>
              <button 
                onClick={() => { setTimingChoice('now'); handleNext(); }}
                style={{...primaryButtonStyle, background: '#FF6BB6'}}
              >
                No, I Want It Now! 🔥
              </button>
            </div>
            <button onClick={handleBack} style={secondaryButtonStyle}>← Back</button>
          </div>
        )}

        {/* PAGE 5 */}
        {page === 5 && (
          <div>
            <div style={emojiStyle}>
              {needWantUnsure === 'need' ? '✅' : needWantUnsure === 'want' ? '💭' : timingChoice === 'wait' ? '⏰' : '🔥'}
            </div>
            <h2 style={titleStyle}>The Verdict</h2>
            
            <div style={{ backgroundColor: '#FFF3E0', border: '1px solid #FF9800', borderRadius: '12px', padding: '24px', marginTop: '25px', marginBottom: '25px' }}>
              {needWantUnsure === 'want' && blocker !== 'timing' && (
                <div>
                  <p style={{ color: '#000', fontWeight: '600', marginBottom: '10px' }}>Hey {name || 'friend'}! 👋</p>
                  <p style={{ color: '#333', fontSize: '14px' }}><strong>{itemName}</strong> is a want—and that's totally okay! {hasRefund === 'yes' ? 'You can return it, so ' : ''}go for it if you're still excited tomorrow. Sleep on it first! 💭</p>
                </div>
              )}
              {needWantUnsure === 'need' && (
                <div>
                  <p style={{ color: '#000', fontWeight: '600', marginBottom: '10px' }}>Hey {name || 'friend'}! 👋</p>
                  <p style={{ color: '#333', fontSize: '14px' }}>This sounds essential! Don't wait too long. But quick tip: can you find it cheaper secondhand or in a bundle? 🔍</p>
                </div>
              )}
              {timingChoice === 'wait' && (
                <div>
                  <p style={{ color: '#000', fontWeight: '600', marginBottom: '10px' }}>Smart move! ⏰</p>
                  <p style={{ color: '#333', fontSize: '14px' }}>Set a reminder for 7 days. If you're still thinking about <strong>{itemName}</strong>, that's your answer. 😊</p>
                </div>
              )}
              {timingChoice === 'now' && (
                <div>
                  <p style={{ color: '#000', fontWeight: '600', marginBottom: '10px' }}>You want it now! 🔥</p>
                  <p style={{ color: '#333', fontSize: '14px' }}>That's your call to make! You've thought it through. Good luck with <strong>{itemName}</strong>! 🎉</p>
                </div>
              )}
            </div>

            <button 
              onClick={() => { setPage(1); setName(''); setItemName(''); setNeedWantUnsure(''); setBlocker(''); setMoneyDebt(''); setHasRefund(''); setReviewsRead(''); setExcitement(''); setTimingChoice(''); }}
              style={primaryButtonStyle}
            >
              Start Over 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
