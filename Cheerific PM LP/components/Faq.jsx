// Faq.jsx — mobile FAQ accordion. Sits between Testimonials and FinalCta.

const faqStyles = {
  section: {
    background: 'var(--paper)',
    padding: '40px 14px 40px',
  },
  inner: {
    maxWidth: 720,
    margin: '0 auto',
  },
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 8px',
    textAlign: 'center',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(24px, 6vw, 30px)',
    lineHeight: 1.1,
    letterSpacing: '-0.005em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 24px',
    textWrap: 'balance',
    textAlign: 'center',
  },
  list: {
    border: '1.5px solid var(--ink)',
    borderRadius: 14,
    overflow: 'hidden',
    background: 'var(--paper-3)',
    boxShadow: '6px 6px 0 var(--ink)',
  },
  item: {
    borderBottom: '1px solid var(--rule)',
  },
  itemLast: {
    borderBottom: 0,
  },
  btn: {
    width: '100%',
    appearance: 'none',
    background: 'transparent',
    border: 0,
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    cursor: 'pointer',
    textAlign: 'left',
    fontFamily: 'var(--font-sans)',
  },
  q: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 1.4,
    color: 'var(--ink)',
    margin: 0,
    flex: 1,
    minWidth: 0,
  },
  icon: {
    flex: '0 0 auto',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1,
    color: 'var(--ink-mid)',
    transition: 'transform .15s ease',
    display: 'inline-block',
  },
  body: {
    padding: '0 16px 16px',
  },
  bodyP: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: '0 0 10px',
    textWrap: 'pretty',
  },
  bodyPLast: {
    margin: 0,
  },
};

function Faq() {
  const [open, setOpen] = React.useState(null);

  const items = [
    {
      q: 'When will I start to feel a difference?',
      a: [
        'Most women notice something within the first few days — a softer afternoon, less reaching for chocolate at 3pm, a calmer mood, a brighter morning.',
        'The deeper benefits build over time. CP2305, the clinically studied probiotic in Cheerific, has been shown in research to help support sleep quality and stress resilience in as little as 2 weeks of daily use. The gut-brain and superfood benefits continue to compound through weeks 4, 8, and beyond.',
        'Cheerific is a daily ritual, not a quick fix — and most women tell us that around the 3-week mark is when they look up and realize they feel like themselves again.',
        'Results may vary. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.',
      ],
    },
    {
      q: 'Is Cheerific safe to take with HRT or other medications?',
      a: [
        "Cheerific is a food-based daily ritual — organic cocoa, 17 organic superfoods, ~4g of fiber, and a clinically studied probiotic. It's not a hormone product, not a medication, and not a stimulant.",
        "The vast majority of our customers use Cheerific alongside HRT, thyroid medication, or other prescriptions without issue. As with any new addition to your routine, we always recommend a quick check-in with your doctor if you're on prescription medications.",
      ],
    },
    {
      q: "I'm in my 50s / I'm post-menopausal. Will this still work for me?",
      a: [
        "Absolutely. While many women find Cheerific during perimenopause, the ingredients support your body through every stage of life's changing seasons.",
        'Our reviews include women in their late 50s, 60s, and beyond who feel the benefits just as strongly — the steady mornings, the calmer afternoons, the chocolate craving handled, the better sleep. If you have a body, Cheerific was made for you.',
        'Results may vary.',
      ],
    },
    {
      q: "What if I don't like it? What's the guarantee?",
      a: [
        'Try Cheerific for a full 30 days, completely on us.',
        "If you don't feel more like yourself again — calmer, steadier, the afternoon chocolate craving handled, your mornings feeling like yours again — just send back what you haven't used and we'll refund every dollar.",
        'No restocking fee. No "unopened only" fine print. No phone tree. No hoops.',
        "This is our 30-Day Feel Like Yourself Again Guarantee, and it's the entire reason we feel comfortable asking you to try Cheerific in the first place.",
      ],
    },
    {
      q: "How do I take it? When's the best time?",
      a: [
        "One scoop in 6-8oz of hot or cold water, milk, or your favorite milk alternative. Stir or shake and you're done — the whole ritual takes about 60 seconds.",
        "Most women drink Cheerific as a morning ritual — the way they used to drink coffee — or as a late-afternoon pick-me-up to head off the 3pm crash and the evening chocolate craving. There's no wrong time.",
        "Some customers also blend it into smoothies, oatmeal, or yogurt. It's flexible.",
      ],
    },
    {
      q: 'Will this make me gain weight?',
      a: [
        'No. One scoop of Cheerific is 30 calories with less than 1g of sugar — lighter than a single square of dark chocolate and a small fraction of a typical coffee drink.',
        'Many women tell us the opposite happens: Cheerific helps them stop reaching for the higher-calorie sweets and snacks they used to crave in the afternoon and evening, simply because the chocolate craving is finally being handled by something that actually works.',
        'Results may vary.',
      ],
    },
    {
      q: 'Does this have caffeine?',
      a: [
        'Almost none. Cheerific contains 5-10mg of naturally occurring caffeine per serving — roughly 1/15th of a cup of coffee — from the organic cocoa and a small amount of green tea.',
        "The lift you feel from Cheerific doesn't come from caffeine. It comes from theobromine, a gentle, naturally occurring compound in cocoa that supports steady mood and focus without the jitter or crash of coffee.",
        'Most women drink Cheerific in the morning or afternoon without affecting their sleep.',
      ],
    },
    {
      q: 'How does Cheerific support gut health and bloating?',
      a: [
        'After the first 3-7 days of taking Cheerific, most women begin to notice the gentle benefits of the ~4g of prebiotic fiber from 17 organic superfoods — and the benefits continue to build from there.',
        "Cheerific also contains a clinically studied probiotic that supports a healthy intestinal tract and the growth of beneficial bacteria in the gut. In clinical research, it's been shown to help reduce occasional, minor bloating within 30 days.",
        'Results may vary. These statements have not been evaluated by the FDA.',
      ],
    },
    {
      q: 'Where did all the sugar and carbs go?',
      a: [
        'We figured out how to deliver the rich, indulgent taste of real dark chocolate without the sugar — using Chocamine®, a patented cocoa-based ingredient that captures the chocolate experience without the blood-sugar fallout.',
        'The result: less than 1g of sugar and only 30 calories per cup. All the chocolate. None of the regret.',
      ],
    },
    {
      q: 'Is Cheerific gluten-free, dairy-free, organic, and non-GMO?',
      a: [
        'Yes to all four. Cheerific is certified organic, certified gluten-free, certified dairy-free, and certified non-GMO. No soy, no artificial sweeteners, no sugar alcohols, no added sugar.',
        'If you have a specific allergy or sensitivity, the full ingredient list is available on every label and on our product page.',
      ],
    },
    {
      q: 'Is this third-party tested?',
      a: [
        "Yes. Every ingredient is tested for identity, purity, and safety. If it's on the label, it's in the canister — in the amount we say it is.",
        'Cheerific is manufactured in FDA-inspected, Certified U.S. Good Manufacturing facilities. Every finished lot is tested for purity and potency before it gets our final Quality Assurance approval.',
      ],
    },
    {
      q: 'Can I take more than one scoop a day?',
      a: [
        'Yes. One scoop is the standard daily serving, but many of our customers enjoy a second cup in the afternoon — especially during the 3pm window when energy and cravings tend to dip.',
        'Cheerific is food-based and gentle enough for daily, multi-serving use.',
      ],
    },
    {
      q: 'How many sachets are in one box?',
      a: ['There are 15 sachets in one box — a 15-day supply of daily rituals.'],
    },
    {
      q: 'How does subscribe and save work?',
      a: [
        "When you subscribe, you lock in 17% off every order, forever — plus you'll never have to worry about running out. Cheerific shows up at your door on your schedule, and you stay in control the whole time.",
      ],
    },
    {
      q: 'How do I manage or cancel my subscription?',
      a: [
        ['Easily. Update, modify, or cancel your subscription anytime from your account portal at ', { link: 'https://getcheeri.com/account?utm_source=vercel&utm_medium=landing_page&utm_campaign=pm', text: 'getcheeri.com/account' }, '. No phone calls, no hoops.'],
        ["If you'd rather have a human help, just email ", { link: 'mailto:care@getcheeri.com', text: 'care@getcheeri.com' }, " and we'll take care of it for you."],
      ],
    },
    {
      q: 'I have another question. Where can I ask it?',
      a: [
        ['Drop us a line at ', { link: 'mailto:care@getcheeri.com', text: 'care@getcheeri.com' }, " — we read every message and we're happy to help."],
      ],
    },
  ];

  // Render a single paragraph: string | array of (string | { link, text })
  function renderPara(p, key, lastStyle) {
    const style = lastStyle ? { ...faqStyles.bodyP, ...faqStyles.bodyPLast } : faqStyles.bodyP;
    if (typeof p === 'string') {
      return (
        <p key={key} style={style}>{window.tmify(p)}</p>
      );
    }
    return (
      <p key={key} style={style}>
        {p.map((seg, i) => {
          if (typeof seg === 'string') return <React.Fragment key={i}>{window.tmify(seg)}</React.Fragment>;
          return (
            <a key={i} href={seg.link} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              {seg.text}
            </a>
          );
        })}
      </p>
    );
  }

  return (
    <section style={faqStyles.section} data-screen-label="08a FAQ">
      <div style={faqStyles.inner}>
        <p style={faqStyles.eyebrow}>FAQ</p>
        <h2 style={faqStyles.h}>Frequently Asked Questions</h2>
        <div style={faqStyles.list}>
          {items.map((it, i) => {
            const isOpen = open === i;
            const isLast = i === items.length - 1;
            return (
              <div key={i} style={{ ...faqStyles.item, ...(isLast ? faqStyles.itemLast : {}) }}>
                <button
                  type="button"
                  style={faqStyles.btn}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span style={faqStyles.q}>{window.tmify(it.q)}</span>
                  <span style={{
                    ...faqStyles.icon,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div style={faqStyles.body}>
                    {it.a.map((p, j) => renderPara(p, j, j === it.a.length - 1))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Faq });
