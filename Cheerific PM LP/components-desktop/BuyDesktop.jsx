// BuyDesktop.jsx — Gruns-inspired desktop buy block.
// Centered intro band above (headline + subhead + rating), then 2-col layout:
//   left:  product gallery + trust row + accordion FAQ
//   right: plan picker + CTA + secondary one-time card

const buyDStyles = {
  // ===== Intro band (above the 2-col split) =====
  intro: {
    background: 'var(--paper-3)',
    padding: '88px 0 36px',
    borderTop: '1px solid var(--rule)',
    textAlign: 'center',
  },
  introInner: {
    maxWidth: 880,
    margin: '0 auto',
    padding: '0 48px',
  },
  introHeadline: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(40px, 4.4vw, 60px)',
    lineHeight: 1.04,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 auto 22px',
    textWrap: 'balance',
    maxWidth: 760,
  },
  introSub: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: '0 auto 22px',
    maxWidth: 620,
    textWrap: 'pretty',
  },
  introRating: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 14,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--ink-soft)',
  },
  introStars: { color: '#c08423', letterSpacing: '0.04em', fontSize: 16 },
  introDivider: {
    color: 'var(--rule)',
    userSelect: 'none',
  },

  // ===== Buy section (2-col) =====
  section: {
    background: 'var(--paper-3)',
    padding: '12px 0 96px',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 48px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 56,
    alignItems: 'flex-start',
  },

  // ----- Left col: gallery -----
  imgPh: {
    width: '100%',
    aspectRatio: '1 / 1',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',
    border: '1px solid var(--rule)',
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 24px 60px rgba(48,8,4,0.10)',
  },
  imgPhPhoto: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  promoStrip: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    background: 'var(--green-deep)',
    color: 'var(--paper)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: '10px 12px',
    zIndex: 2,
  },
  thumbRow: {
    display: 'flex',
    gap: 10,
    margin: '14px 0 0',
  },
  thumb: {
    flex: '1 1 0',
    aspectRatio: '1 / 1',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 8px, var(--ph-2) 8px 16px)',
    border: '1px solid var(--rule)',
    borderRadius: 10,
    overflow: 'hidden',
    cursor: 'pointer',
    padding: 0,
  },
  thumbImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  thumbActive: {
    borderColor: 'var(--accent)',
    outline: '2px solid var(--accent)',
    outlineOffset: -3,
  },

  // ----- Left col: trust row -----
  trustStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 18,
    margin: '24px 0 0',
    padding: '20px 0 24px',
    borderTop: '1px solid var(--rule)',
    borderBottom: '1px solid var(--rule)',
  },
  trustItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    fontFamily: 'var(--font-sans)',
  },
  trustLabel: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
  },
  trustSub: {
    fontWeight: 500,
    fontSize: 12,
    color: 'var(--ink-soft)',
    lineHeight: 1.4,
  },

  // ----- Left col: accordion -----
  accordion: {
    margin: '8px 0 0',
  },
  accItem: {
    borderBottom: '1px solid var(--rule)',
  },
  accBtn: {
    width: '100%',
    appearance: 'none',
    border: 0,
    background: 'transparent',
    padding: '20px 4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    cursor: 'pointer',
    textAlign: 'left',
  },
  accIcon: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 1,
    color: 'var(--ink-mid)',
    transition: 'transform 0.2s ease',
  },
  accBody: {
    padding: '0 4px 22px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.6,
    color: 'var(--ink-soft)',
  },

  // ----- Right col: offer card -----
  // ----- Right col: offer card -----
  offerColTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 14px',
    textAlign: 'center',
  },
  offerCard: {
    border: '2px solid var(--accent)',
    borderRadius: 18,
    padding: '22px 22px 24px',
    background: 'var(--paper)',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 18px 40px rgba(48,8,4,0.10)',
    position: 'relative',
  },
  offerCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 0 16px',
  },
  offerCardTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 18,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: 0,
  },
  offerPriceCluster: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
  },
  offerBadge: {
    padding: '6px 12px',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 11,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    borderRadius: 999,
    margin: '0 0 14px',
    display: 'inline-block',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    margin: '0 0 18px',
  },
  option: {
    position: 'relative',
    display: 'flex',
    gap: 14,
    alignItems: 'center',
    padding: '16px 18px',
    border: '1.5px solid var(--rule)',
    background: 'var(--paper-3)',
    borderRadius: 12,
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    fontFamily: 'var(--font-sans)',
    transition: 'background 0.15s, border-color 0.15s',
  },
  optionActive: {
    borderColor: 'var(--ink)',
    background: 'var(--paper-2)',
  },
  optionBody: { flex: 1, minWidth: 0 },
  optionTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: '0.02em',
    color: 'var(--ink)',
    margin: '0 0 4px',
  },
  optionPriceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
    flexWrap: 'wrap',
  },
  priceNow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 18,
    color: 'var(--ink)',
  },
  priceWas: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--ink-soft)',
    textDecoration: 'line-through',
  },
  perDay: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 13,
    color: 'var(--ink-soft)',
    margin: '4px 0 0',
  },
  badge: {
    position: 'absolute',
    top: '50%',
    right: 14,
    transform: 'translateY(-50%)',
    padding: '6px 12px',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 11,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: 999,
  },

  perks: {
    listStyle: 'none',
    padding: 0,
    margin: '4px 0 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  perk: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.45,
    color: 'var(--ink)',
  },
  perkCheck: {
    flex: '0 0 auto',
    color: 'var(--green-deep)',
    fontWeight: 800,
    marginTop: 1,
  },

  cta: {
    width: '100%',
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '18px 20px',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 14px 30px rgba(48,8,4,0.18)',
  },
  discountPill: {
    display: 'block',
    margin: '12px auto 0',
    padding: '8px 14px',
    background: '#fff5b8',
    border: '1px solid rgba(48,8,4,0.18)',
    borderRadius: 999,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    textAlign: 'center',
    width: 'fit-content',
    textDecoration: 'underline',
    textDecorationThickness: '1.5px',
    textUnderlineOffset: 3,
  },

  // ----- Right col: guarantee strip -----
  guarantee: {
    margin: '16px 0 0',
    padding: '16px 18px',
    background: 'var(--paper-2)',
    border: '1px solid var(--rule)',
    borderRadius: 14,
    display: 'flex',
    gap: 14,
    alignItems: 'center',
  },
  guaranteeSeal: {
    flex: '0 0 auto',
    width: 52,
    height: 52,
    borderRadius: 26,
    background: 'var(--green)',
    color: 'var(--ink)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 11,
    letterSpacing: '0.04em',
    textAlign: 'center',
    lineHeight: 1.05,
  },
  guaranteeBody: { flex: 1, minWidth: 0 },
  guaranteeTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 4px',
  },
  guaranteeText: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 1.45,
    color: 'var(--ink-soft)',
    margin: 0,
  },

  oneTimeCta: {
    width: '100%',
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '14px 18px',
    marginTop: 16,
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 10px 22px rgba(48,8,4,0.16)',
  },

  // ----- Right col: secondary one-time card -----
  oneTimeCard: {
    marginTop: 16,
    border: '1.5px solid var(--rule)',
    borderRadius: 14,
    padding: '18px 20px',
    background: 'var(--paper-3)',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'var(--font-sans)',
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    transition: 'border-color 0.15s, background 0.15s',
  },
  oneTimeCardActive: {
    borderColor: 'var(--ink)',
    background: 'var(--paper-2)',
  },
  oneTimeBody: { flex: 1, minWidth: 0 },
  oneTimeTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 4px',
  },
};

function BuyImageD() {
  const photos = [
    'CheeriPak/Sachet Tile Image 1.png',
    'CheeriPak/Sachet Tile Image 2.png',
    'CheeriPak/Sachet Tile Image 3.png',
    'CheeriPak/Sachet Tile Image 4.png',
    'CheeriPak/Sachet Tile Image 5.png',
    'CheeriPak/Sachet Tile Image 6.png',
    'CheeriPak/Sachet Tile Image 7.png',
  ];
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <div style={buyDStyles.imgPh}>
        <div style={buyDStyles.promoStrip}>
          {'\u2728'} Limited time offer: 50% off your first box {'\u2728'}
        </div>
        <img src={photos[active]} alt="Cheerific product" style={buyDStyles.imgPhPhoto} />
      </div>
      <div style={buyDStyles.thumbRow}>
        {photos.map((src, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Product image ${i + 1}`}
            onClick={() => setActive(i)}
            style={{
              ...buyDStyles.thumb,
              ...(active === i ? buyDStyles.thumbActive : {}),
            }}
          >
            <img src={src} alt="" style={buyDStyles.thumbImg} />
          </button>
        ))}
      </div>
    </div>
  );
}

function BuyAccordionD() {
  const items = [
    {
      title: 'When will I start to feel a difference?',
      body: [
        'Most women notice something within the first few days — a softer afternoon, less reaching for chocolate at 3pm, a calmer mood, a brighter morning.',
        'The deeper benefits build over time. CP2305, the clinically studied probiotic in Cheerific, has been shown in research to help support sleep quality and stress resilience in as little as 2 weeks of daily use. The gut-brain and superfood benefits continue to compound through weeks 4, 8, and beyond.',
        'Cheerific is a daily ritual, not a quick fix — and most women tell us that around the 3-week mark is when they look up and realize they feel like themselves again.',
        'These statements have not been evaluated by the FDA.',
        '***Results may vary.****',
      ],
    },
    {
      title: 'Is Cheerific safe to take with HRT or other medications?',
      body: [
        "Cheerific is a food-based daily ritual — organic cocoa, 17 organic superfoods, ~4g of fiber, and a clinically studied probiotic. It's not a hormone product, not a medication, and not a stimulant.",
        "The vast majority of our customers use Cheerific alongside HRT, thyroid medication, or other prescriptions without issue. As with any new addition to your routine, we always recommend a quick check-in with your doctor if you're on prescription medications.",
      ],
    },
    {
      title: "What's actually in it — and what's NOT?",
      body: [
        'Cheerific is certified organic, gluten-free, dairy-free, and non-GMO. No soy, no artificial sweeteners, no sugar alcohols, no added sugar.',
        'Each scoop delivers:',
        {
          bullets: [
            'Chocamine® — patented cocoa extract for chocolate satisfaction without sugar',
            'CP2305 — clinically studied probiotic for sleep and stress resilience',
            '17 organic superfoods — acai, pomegranate, goji, kale, spinach, beet, and more',
            '~4g of real fiber from whole-food sources',
            'Less than 1g of sugar, 30 calories per cup',
            '5-10mg of naturally occurring caffeine — about 1/15th of a cup of coffee',
          ],
        },
        'Every batch is third-party tested and made in FDA-inspected, Certified U.S. Good Manufacturing facilities.',
      ],
    },
    {
      title: 'Will this make me gain weight?',
      body: [
        'No. One scoop of Cheerific is 30 calories with less than 1g of sugar — lighter than a single square of dark chocolate and a small fraction of a typical coffee drink.',
        'Many women tell us the opposite happens: Cheerific helps them stop reaching for the higher-calorie sweets and snacks they used to crave in the afternoon and evening, simply because the chocolate craving is finally being handled by something that actually works.',
        '***Results may vary.****',
      ],
    },
    {
      title: "What if I don't love it?",
      body: [
        'Try Cheerific for a full 30 days, completely on us.',
        "If you don't feel more like yourself again — calmer, steadier, the afternoon chocolate craving handled, your mornings feeling like yours again — just send back what you haven't used and we'll refund every dollar.",
        'No restocking fee. No "unopened only" fine print. No phone tree. No hoops.',
        "That's our 30-Day Feel Like Yourself Again Guarantee.",
      ],
    },
  ];

  const renderBody = (body) => {
    if (typeof body === 'string') return window.tmify(body);
    return body.map((p, j) => {
      if (typeof p === 'string') {
        return <p key={j} style={{ margin: j === 0 ? 0 : '10px 0 0' }}>{window.tmify(p)}</p>;
      }
      if (p && p.bullets) {
        return (
          <ul key={j} style={{ listStyle: 'none', padding: 0, margin: '10px 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {p.bullets.map((b, k) => (
              <li key={k} style={{ paddingLeft: 16, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--ink-mid)' }}>•</span>
                {window.tmify(b)}
              </li>
            ))}
          </ul>
        );
      }
      return null;
    });
  };

  const [open, setOpen] = React.useState(null);
  return (
    <div style={buyDStyles.accordion}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={buyDStyles.accItem}>
            <button
              type="button"
              style={buyDStyles.accBtn}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{window.tmify(it.title)}</span>
              <span
                style={{
                  ...buyDStyles.accIcon,
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && <div style={buyDStyles.accBody}>{renderBody(it.body)}</div>}
          </div>
        );
      })}
    </div>
  );
}

function BuyPlanOptionD({ active, onSelect, title, priceNow, priceWas, perDay, badge }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{ ...buyDStyles.option, ...(active ? buyDStyles.optionActive : {}) }}
      aria-pressed={active}
    >
      <span style={buyDStyles.optionBody}>
        <span style={buyDStyles.optionTitle}>{title}</span>
        <span style={buyDStyles.optionPriceRow}>
          <span style={buyDStyles.priceNow}>{priceNow}</span>
          {priceWas && <span style={buyDStyles.priceWas}>{priceWas}</span>}
        </span>
        <span style={buyDStyles.perDay}>{perDay}</span>
      </span>
      {badge && <span style={buyDStyles.badge}>{badge}</span>}
    </button>
  );
}

function BuyD() {
  const [plan, setPlan] = React.useState('subscription');
  const ctaPrice = plan === 'subscription' ? '$24.95' : '$49.95';
  return (
    <>
      {/* Centered intro band — sits above the 2-col layout */}
      <section style={buyDStyles.intro} data-screen-label="04 Buy Intro">
        <div style={buyDStyles.introInner}>
          <h2 style={buyDStyles.introHeadline}>
            CheeriPack<sup className="tm">{'\u2122'}</sup> Grab-and-Go Chocolate Ritual
          </h2>
          <p style={buyDStyles.introSub}>
            15 servings of cocoa, 17 organic superfoods, Chocamine{'\u00ae'}, and CP2305 postbiotic.
          </p>
          <div style={{ ...buyDStyles.introRating, justifyContent: 'center' }}>
            <span style={buyDStyles.introStars}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
            <span><strong style={{color: 'var(--ink)'}}>4.9</strong> stars</span>
            <span style={{color: 'var(--rule)', margin: '0 4px'}}>|</span>
            <span>126 reviews</span>
            <span style={{color: 'var(--rule)', margin: '0 4px'}}>|</span>
            <span>10K+ mornings</span>
          </div>
        </div>
      </section>

      {/* 2-col buy block */}
      <section style={buyDStyles.section} data-screen-label="04 Buy">
        <div style={buyDStyles.inner}>
          <div style={buyDStyles.grid}>
            {/* LEFT: gallery + trust + accordion */}
            <div>
              <BuyImageD />
              <div style={buyDStyles.trustStrip}>
                <div style={buyDStyles.trustItem}>
                  <span style={buyDStyles.trustLabel}>Ships in 24 hrs</span>
                  <span style={buyDStyles.trustSub}>Mon–Fri, from the US</span>
                </div>
                <div style={buyDStyles.trustItem}>
                  <span style={buyDStyles.trustLabel}>Free shipping</span>
                  <span style={buyDStyles.trustSub}>On every subscription order</span>
                </div>
                <div style={buyDStyles.trustItem}>
                  <span style={buyDStyles.trustLabel}>30-day refund</span>
                  <span style={buyDStyles.trustSub}>No forms, no hoops</span>
                </div>
              </div>
              <BuyAccordionD />
            </div>

            {/* RIGHT: offer card + secondary card */}
            <div>
              <p style={buyDStyles.offerColTitle}>Choose Your Plan</p>
              <div style={buyDStyles.offerCard}>
                <span style={buyDStyles.offerBadge}>50% off · Most popular</span>
                <div style={buyDStyles.offerCardHeader}>
                  <p style={buyDStyles.offerCardTitle}>Subscribe & Save</p>
                  <span style={buyDStyles.offerPriceCluster}>
                    <span style={buyDStyles.priceNow}>$24.95</span>
                    <span style={buyDStyles.priceWas}>$39.95</span>
                  </span>
                </div>
                <p style={{...buyDStyles.perDay, margin: '-6px 0 14px'}}>
                  Just $1.66 per chocolate reset every 30 days
                </p>
                <ul style={buyDStyles.perks}>
                  <li style={buyDStyles.perk}><span style={buyDStyles.perkCheck}>{'\u2713'}</span><span><strong style={{color:'var(--brand-green)'}}>50% off today</strong> + 20% off every future delivery</span></li>
                  <li style={buyDStyles.perk}><span style={buyDStyles.perkCheck}>{'\u2713'}</span><span>Countertop ritual dispenser + free shaker cup included</span></li>
                  <li style={buyDStyles.perk}><span style={buyDStyles.perkCheck}>{'\u2713'}</span><span><strong style={{color:'var(--brand-green)'}}>FREE shipping</strong> • adjust sachets anytime • pause/cancel anytime</span></li>
                </ul>
                <button type="button" style={buyDStyles.cta} onClick={() => window.CHEERI_SHOP.go('subscription')}>
                  Start Now
                </button>
                <span style={buyDStyles.discountPill}>
                  Discount Auto-Applied {'\u2705'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (plan === 'onetime') {
                    window.CHEERI_SHOP.go('onetime');
                  } else {
                    setPlan('onetime');
                  }
                }}
                style={{
                  ...buyDStyles.oneTimeCard,
                  ...(plan === 'onetime' ? buyDStyles.oneTimeCardActive : {}),
                  flexDirection: 'column',
                  alignItems: 'stretch',
                }}
                aria-pressed={plan === 'onetime'}
              >
                <span style={{...buyDStyles.oneTimeBody, display: 'flex', flexDirection: 'column'}}>
                  <span style={buyDStyles.oneTimeTitle}>One-Time Purchase</span>
                  <span style={buyDStyles.optionPriceRow}>
                    <span style={buyDStyles.priceNow}>$49.95</span>
                  </span>
                  <span style={buyDStyles.perDay}>$3.33 per day</span>
                </span>
                {plan === 'onetime' && (
                  <span
                    role="button"
                    style={{...buyDStyles.oneTimeCta, textAlign: 'center'}}
                  >
                    Try Now
                  </span>
                )}
              </button>

              <div style={buyDStyles.guarantee}>
                <span style={buyDStyles.guaranteeSeal} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
                    <path d="M12 2L4 5v6c0 5.4 3.4 9.5 8 11 4.6-1.5 8-5.6 8-11V5l-8-3z" fill="var(--ink)" />
                    <path d="M8.5 12l2.5 2.5 5-5" stroke="var(--paper)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div style={buyDStyles.guaranteeBody}>
                  <p style={buyDStyles.guaranteeTitle}>30 Day {'\u201C'}Feel Like Yourself Again{'\u201D'} Guarantee</p>
                  <p style={buyDStyles.guaranteeText}>
                    Don{'\u2019'}t love it? We{'\u2019'}ll refund you. No argument. No forms. No {'\u201C'}we{'\u2019'}re so sorry to see you go{'\u201D'} hoops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { BuyD });
