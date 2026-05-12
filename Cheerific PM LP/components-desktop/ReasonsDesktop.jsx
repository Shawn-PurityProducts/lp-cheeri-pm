// ReasonsDesktop.jsx — alternating zig-zag image/text rows.

const reasonsDStyles = {
  section: {
    background: 'var(--paper-2)',
    padding: '80px 0 32px',
    position: 'relative',
  },
  chevronDivider: {
    position: 'absolute',
    top: -1,
    left: 0,
    width: '100%',
    height: 80,
    display: 'block',
    pointerEvents: 'none',
  },
  inner: {
    maxWidth: 1320,
    margin: '0 auto',
    padding: '0 48px',
  },
  sectionHead: {
    textAlign: 'center',
    margin: '0 auto 56px',
    maxWidth: 1080,
  },
  sectionEyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 14px',
  },
  sectionH: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(36px, 4vw, 52px)',
    lineHeight: 1.04,
    letterSpacing: '-0.015em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: 0,
    textWrap: 'balance',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 56,
    alignItems: 'center',
    padding: 32,
    background: 'var(--paper-3)',
    borderRadius: 24,
    marginBottom: 40,
    border: '2px solid var(--ink)',
    boxShadow: '10px 10px 0 var(--ink)',
  },
  rowFirst: {},
  rule: {
    height: 2,
    background: 'var(--green)',
    border: 0,
    borderRadius: 1,
    margin: '0 0 22px',
  },
  lede: {
    fontWeight: 700,
    color: 'var(--accent)',
  },
  imgCol: {
    width: '100%',
  },
  imgPhPhoto: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imgPh: {
    width: '100%',
    aspectRatio: '4 / 5',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',    border: '1px solid var(--rule)',
    borderRadius: 18,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 16,
    overflow: 'hidden',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 24px 60px rgba(48,8,4,0.08)',
  },
  imgPhLabel: {
    background: 'var(--paper)',
    border: '1px solid var(--rule)',
    padding: '5px 9px',
    borderRadius: 4,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--ink-soft)',
  },
  textCol: {
    maxWidth: 540,
  },
  headRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    margin: '0 0 20px',
  },
  badge: {
    flex: '0 0 auto',
    width: 72,
    height: 72,
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 34,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 10px 24px rgba(48,8,4,0.20)',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(28px, 2.6vw, 36px)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: 0,
    textWrap: 'balance',
    flex: 1,
    minWidth: 0,
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 14px',
    textWrap: 'pretty',
  },
  pLast: { margin: 0 },
};

function ReasonRow({ index, total, eyebrow, headline, body, imageLabel, imageSrc }) {
  const imgLeft = index % 2 === 1; // 1,3,5,7 → image LEFT; 2,4,6 → image RIGHT
  const isFirst = index === 1;
  const ImgEl = (
    <div style={reasonsDStyles.imgCol}>
      <div style={{...reasonsDStyles.imgPh, position: 'relative'}}>
        {imageSrc ? (
          <img src={imageSrc} alt={imageLabel} style={reasonsDStyles.imgPhPhoto} />
        ) : (
          <span style={reasonsDStyles.imgPhLabel}>{imageLabel}</span>
        )}
      </div>
    </div>
  );
  const TextEl = (
    <div style={reasonsDStyles.textCol}>
      <div style={reasonsDStyles.headRow}>
        <span style={reasonsDStyles.badge} aria-label={eyebrow}>{index}</span>
        <h3 style={reasonsDStyles.h}>{window.tmify(headline)}</h3>
      </div>
      <hr style={reasonsDStyles.rule} />
      {body.map((para, i) => {
        const last = i === body.length - 1;
        const baseStyle = { ...reasonsDStyles.p, ...(last ? reasonsDStyles.pLast : {}) };
        if (typeof para === 'string') {
          return <p key={i} style={baseStyle}>{window.tmify(para)}</p>;
        }
        return (
          <p key={i} style={baseStyle}>
            <span style={reasonsDStyles.lede}>{window.tmify(para.lede)}</span>
            {para.tail ? <> {window.tmify(para.tail)}</> : null}
          </p>
        );
      })}
    </div>
  );
  return (
    <div
      style={{ ...reasonsDStyles.row, ...(isFirst ? reasonsDStyles.rowFirst : {}) }}
      data-screen-label={`02 Reason ${String(index).padStart(2, '0')}`}
    >
      {imgLeft ? <>{ImgEl}{TextEl}</> : <>{TextEl}{ImgEl}</>}
    </div>
  );
}

function ReasonsD() {
  const reasons = [
    {
      n: 1,
      headline: "Your Afternoon Coffee Turned On You. Cheerific Doesn't.",
      body: [
        'Remember when one cup of coffee meant ready? Focused. Steady. Dressed. On with your day.',
        "The morning cup might still do that for you. But that 2pm cup? It lands like a shot of espresso-flavored anxiety now. Racing heart. A weird, wired edge. A crash at 4 that takes you out at the knees. And somehow you're still tired.",
        { lede: "It's not in your head.", tail: "Perimenopause changes how your body processes caffeine — your liver clears it slower, your nervous system reacts to it harder, and the hormonal runway that used to smooth it all out isn't there anymore." },
        'So Cheerific is built around something different. It\u2019s called Chocamine® — a patented, clinically studied cocoa extract that delivers the focused, feel-good lift of real chocolate without the caffeine.',
        '**No jitters. No racing heart. No 4pm crash.** Just *calm, clear, steady energy* — the kind that used to just show up on its own.',
      ],
    },
    {
      n: 2,
      headline: "Your Gut Got Loud. Your Mood Got Weird. Here's What's Actually Happening.",
      body: [
        'The bloating that shows up out of nowhere. The digestion that\u2019s suddenly unpredictable after 25 years of being fine. The mood that seems weirdly tied to what you ate two hours ago.',
        'Your gut and your brain are in constant conversation through something called the gut-brain axis. Once perimenopause hits, that line gets staticky. Which is why so many women describe this season as feeling chemically off — not sad exactly, not sick exactly, just\u2026 not right.',
        'Cheerific includes CP2305 — a clinically studied postbiotic shown to support **calm mood**, **digestive comfort under stress**, and **better sleep quality during stressful periods**.*',
        'A few weeks in, most women describe the same thing: the static isn\u2019t as loud anymore.',
      ],
    },
    {
      n: 3,
      headline: "The Real Reason You're Face-Down On Your Desk By 3PM",
      body: [
        '**2:47pm. The lights go out.** You\u2019re staring at the same email for ten minutes. You\u2019d give real money for 20 minutes on the couch.',
        'Blood sugar shifts harder in perimenopause than it used to. Most women reach for another coffee (which isn\u2019t really working anymore) or sugar (which buys 30 minutes and costs you 3 hours).',
        'Cheerific solves the crash two ways at once. Chocamine® gives you the focused lift of real chocolate without caffeine. And with less than 1g of sugar per serving, there\u2019s no blood sugar spike chasing you into the evening either.',
        'Just a steady afternoon that feels like it used to.',
      ],
    },
    {
      n: 4,
      headline: "17 Organic Superfoods, Sneaking In On The Days You Can't Even.",
      body: [
        'Nobody actually wants to drink a kale-spinach-broccoli smoothie. Especially not on a day where getting dressed counted as cardio.',
        'Cheerific quietly slips **17 organic superfoods** into a mug of melted dark chocolate: chlorella, kale, spinach, broccoli, beet, acai, blueberry, pomegranate, acerola cherry, and nine more.',
        '*You\u2019re not choking down kale. You\u2019re sipping dessert.* Your body is getting exactly what it\u2019s been quietly asking for — on the exact days you don\u2019t have it in you to make it happen any other way.',
      ],
    },
    {
      n: 5,
      headline: "Real Daily Fiber. Without The Cleanse-Week Drama.",
      body: [
        'Let\u2019s talk about the thing no one talks about. Digestive sluggishness in perimenopause is a thing. A very common, very unspoken thing.',
        'Each scoop of Cheerific delivers **approximately 4g of real fiber** from actual food sources — gently woven into the cocoa, greens, and fruit blends. Not a harsh cleanse. Not a laxative. *Not three days of regret.*',
        'As one customer, Jen, 47, put it: \u201cSo delicious and it def makes you go!!\u201d',
        'We\u2019ll let that one speak for itself.',
        '***Results may vary.****',
      ],
    },
    {
      n: 6,
      headline: "Perimenopause Sleep Has A Personality. Afternoon Caffeine Makes It Worse.",
      body: [
        'You finally fall asleep around 11:30. You\u2019re wide awake at 3:47am for no reason you can name. Hot. Then cold. Then just\u2026 awake.',
        'The last thing that whole situation needs is 2pm caffeine still circulating through your bloodstream at midnight.',
        'Cheerific **is caffeine free, less than 1g of sugar, no artificial sweeteners**. You can swap it in for the afternoon cup without jitters or late-day edge.',
        'A calmer nervous system during the day tends to mean a calmer one at night too.',
      ],
    },
    {
      n: 7,
      headline: "You Feel It Build. Week Over Week. The Way Real Things Do.",
      body: [
        'Almost nothing out there is built for where you actually are. The 4-to-10 years before menopause. The long, messy, underexplained in-between.',
        'Day 1: Chocamine® doing its work. A calmer, smoother energy than that afternoon coffee\u2019s given you in a long time.',
        'Week 2: The CP2305 postbiotic starts doing its quiet work. Mood feels a little more even. Digestion, a little easier. Sleep, a little more restful.*',
        'Week 8: The line we hear over and over: \u201cI feel like myself again.\u201d Not reinvented. Just recovered.',
      ],
    },
  ];
  return (
    <section style={reasonsDStyles.section}>
      <svg
        style={reasonsDStyles.chevronDivider}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 720,80 1440,0 1440,0 0,0" fill="var(--paper)" />
      </svg>
      <div style={reasonsDStyles.inner}>
        {reasons.map((r) => (
          <ReasonRow
            key={r.n}
            index={r.n}
            total={7}
            eyebrow={`Reason 0${r.n}`}
            headline={r.headline}
            body={r.body}
            imageLabel={`REASON 0${r.n} · IMAGE`}
            imageSrc={`assets/reasons/r${r.n}.png`}
          />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { ReasonsD });
