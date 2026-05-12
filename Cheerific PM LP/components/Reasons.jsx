// Reasons.jsx — numbered reason rows. Modeled after Grüns: alternating image/text,
// numbered heading, short problem→solution paragraphs, no CTA.

const reasonsStyles = {
  section: {
    background: 'var(--paper-2)',
    padding: '40px 14px 32px',
    position: 'relative',
  },
  chevronDivider: {
    position: 'absolute',
    top: -1,
    left: 0,
    width: '100%',
    height: 40,
    display: 'block',
    pointerEvents: 'none',
  },
  row: {
    background: 'var(--paper-3)',
    borderRadius: 18,
    padding: 18,
    maxWidth: 720,
    margin: '0 auto 28px',
    border: '1.5px solid var(--ink)',
    boxShadow: '6px 6px 0 var(--ink)',
    overflow: 'hidden',
  },
  rowLast: {
    marginBottom: 0,
  },
  rule: {
    height: 2,
    background: 'var(--green)',
    border: 0,
    borderRadius: 1,
    margin: '0 0 18px',
  },
  lede: {
    fontWeight: 700,
    color: 'var(--accent)',
  },
  imgPh: {
    width: '100%',
    aspectRatio: '4 / 5',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 12px, var(--ph-2) 12px 24px)',
    border: '1px solid var(--rule)',
    borderRadius: 14,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 14,
    margin: '0 0 18px',
    overflow: 'hidden',
    position: 'relative',
  },
  imgPhPhoto: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imgPhLabel: {
    background: 'var(--paper)',
    border: '1px solid var(--rule)',
    padding: '4px 8px',
    borderRadius: 4,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--ink-soft)',
  },
  headRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    margin: '0 0 14px',
  },
  badge: {
    flex: '0 0 auto',
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 24,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 6px 14px rgba(48,8,4,0.18)',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(22px, 5.6vw, 28px)',
    lineHeight: 1.15,
    letterSpacing: '-0.005em',
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
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 14px',
    textWrap: 'pretty',
  },
  pLast: {
    margin: 0,
  },
};

function ReasonImage({ label, src, alt }) {
  return (
    <div style={reasonsStyles.imgPh}>
      {src ? (
        <img src={src} alt={alt || label} style={reasonsStyles.imgPhPhoto} loading="lazy" />
      ) : (
        <span style={reasonsStyles.imgPhLabel}>{label}</span>
      )}
    </div>
  );
}

function Reason({ index, total, eyebrow, headline, body, imageLabel, imageSrc }) {
  const isLast = index === total;
  return (
    <div
      className="reasons-row rail"
      style={{ ...reasonsStyles.row, ...(isLast ? reasonsStyles.rowLast : {}) }}
      data-screen-label={`02 Reason ${String(index).padStart(2, '0')}`}
    >
      <div className="reasons-row-img">
        <ReasonImage label={imageLabel} src={imageSrc} />
      </div>
      <div className="reasons-row-text">
        <div style={reasonsStyles.headRow}>
          <span style={reasonsStyles.badge} aria-label={eyebrow}>{index}</span>
          <h3 style={reasonsStyles.h}>{window.tmify(headline)}</h3>
        </div>
        <hr style={reasonsStyles.rule} />
        {body.map((para, i) => {
          const last = i === body.length - 1;
          const baseStyle = { ...reasonsStyles.p, ...(last ? reasonsStyles.pLast : {}) };
          if (typeof para === 'string') {
            return <p key={i} style={baseStyle}>{window.tmify(para)}</p>;
          }
          return (
            <p key={i} style={baseStyle}>
              <span style={reasonsStyles.lede}>{window.tmify(para.lede)}</span>
              {para.tail ? <> {window.tmify(para.tail)}</> : null}
            </p>
          );
        })}
      </div>
    </div>
  );
}

function Reasons() {
  return (
    <section style={reasonsStyles.section}>
      <svg
        style={reasonsStyles.chevronDivider}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 720,80 1440,0 1440,0 0,0" fill="var(--paper)" />
      </svg>
      <Reason
        index={1}
        total={7}
        eyebrow="Reason 01"
        headline="Your Afternoon Coffee Turned On You. Cheerific Doesn't."
        imageLabel="REASON 01 · IMAGE"
        imageSrc="assets/reasons/mobile/r1.webp"
        body={[
          'Remember when one cup of coffee meant **ready? Focused. Steady. Dressed. On with your day.**',
          'The morning cup might still do that for you. But that 2pm cup? It lands like a shot of **espresso-flavored anxiety** now. Racing heart. A weird, wired edge. **A crash at 4 that takes you out at the knees.** And somehow you\u2019re still tired.',
          { lede: 'It\u2019s not in your head.', tail: 'Perimenopause changes how your body processes caffeine \u2014 your liver clears it slower, your nervous system reacts to it harder, and **the hormonal runway that used to smooth it all out isn\u2019t there anymore.** Which is exactly why the afternoon cup stopped working first.' },
          'So Cheerific is built around something different. Something most women have never heard of.',
          'It\u2019s called **Chocamine\u00ae** \u2014 a patented, clinically studied cocoa extract that delivers the focused, feel-good lift of real chocolate without the caffeine.',
          '**No jitters. No racing heart. No 4pm crash.**',
          'Just *calm, clear, steady energy* \u2014 the kind that used to just show up on its own.',
          'Here\u2019s what most women don\u2019t expect: it doesn\u2019t just replace the 2pm coffee. **It replaces the 3pm cookie drawer too.**',
          'The creamy dark chocolate hits the same sweet craving that usually sends you rummaging through the pantry at 3:15 \u2014 except instead of a sugar crash twenty minutes later, you feel steady. Calm. Focused. Like the version of yourself you used to be before your body decided to rewrite the rules.',
          '**One ritual. Two bad habits retired.** That\u2019s why it sticks.',
          '**One scoop. Zero caffeine.** Chocolate that works with your system instead of against it.',
        ]}
      />
      {[
        {
          n: 2,
          headline: "Your Gut Got Loud. Your Mood Got Weird. Here's What's Actually Happening.",
          body: [
            '**The bloating that shows up out of nowhere.**',
            'The digestion that\u2019s suddenly unpredictable **after 25 years of being fine.**',
            'The mood that seems weirdly tied to what you ate two hours ago.',
            'Your gut and your brain are in constant conversation through something called **the gut-brain axis.** Once perimenopause hits, **that line gets staticky.** Which is why so many women describe this season as feeling **chemically off** \u2014 not sad exactly, not sick exactly, just\u2026 not right.',
            'What helps is supporting the conversation itself.',
            'Cheerific includes **CP2305** \u2014 a clinically studied postbiotic (sometimes called a psychobiotic) shown to support **calm mood, digestive comfort under stress, and better sleep quality during stressful periods.**\u2009*',
            'It\u2019s not an energy ingredient. It\u2019s not a mood-lifter you feel in 20 minutes. It\u2019s quiet, daily support for the gut-brain connection that runs underneath everything.',
            'A few weeks in, most women describe the same thing: ***the static isn\u2019t as loud anymore.***',
          ],
        },
        {
          n: 3,
          headline: "The Real Reason You're Face-Down On Your Desk By 3PM",
          body: [
            '**2:47pm. The lights go out.**',
            'You\u2019re staring at the same email for ten minutes. You\u2019d give real money for 20 minutes on the couch. And **whatever\u2019s in the pantry is starting to look medicinal.**',
            '**You\u2019re not imagining it.** **Blood sugar shifts harder in perimenopause than it used to.** The same lunch that carried you through the afternoon five years ago now leaves you wrecked by mid-afternoon.',
            'Most women reach for another coffee (which, as we covered, isn\u2019t really working anymore) or sugar (which **buys 30 minutes and costs you 3 hours.**)',
            '**Cheerific solves the crash two ways at once.**',
            'Chocamine\u00ae gives you the focused, feel-good lift of real chocolate without caffeine \u2014 so you get **steady afternoon energy with no jitters and no secondary crash.** And with less than 1g of sugar per serving, there\u2019s no blood sugar spike chasing you into the evening either.',
            '**No second crash at 5. No \u201cwhat did I just eat\u201d regret at 3:45.**',
            'Just **a steady afternoon that feels like it used to.**',
            '(Some women love it first thing in the morning. Most use it as their 2pm ritual. Either works \u2014 but the 2-to-4pm window is where it earns its place in your day.)',
          ],
        },
        {
          n: 4,
          headline: "17 Organic Superfoods, Sneaking In On The Days You Can't Even.",
          body: [
            '**Nobody actually wants to drink a kale-spinach-broccoli smoothie.**',
            'Especially not on a day where getting dressed counted as cardio.',
            'Cheerific quietly slips **17 organic superfoods** into **a mug of melted dark chocolate**: chlorella, kale, spinach, broccoli, beet, acai, blueberry, pomegranate, acerola cherry, and nine more.',
            '***You\u2019re not choking down kale. You\u2019re sipping dessert.***',
            'Your body is getting exactly what it\u2019s been quietly asking for \u2014 on **the exact days you don\u2019t have it in you to make it happen any other way.**',
          ],
        },
        {
          n: 5,
          headline: "Real Daily Fiber. Without The Cleanse-Week Drama.",
          body: [
            'Let\u2019s talk about **the thing no one talks about.**',
            'Digestive sluggishness in perimenopause is a thing. **A very common, very unspoken thing.** The kind of thing you don\u2019t bring up at brunch but absolutely **text your sister about.**',
            'Each scoop of Cheerific delivers **approximately 4g of real fiber from actual food sources** \u2014 gently woven into the cocoa, greens, and fruit blends. **Not a harsh cleanse. Not a laxative.** ***Not three days of regret.***',
            'Just **real, daily fiber doing real, daily work.**',
            'As one customer, Jen, 47, put it:',
            '*\u201cSo delicious and it def makes you go!!\u201d*',
            'We\u2019ll let that one speak for itself.',
            '***Results may vary.****',
          ],
        },
        {
          n: 6,
          headline: "Perimenopause Sleep Has A Personality. Afternoon Caffeine Makes It Worse.",
          body: [
            '**You know the drill by now.**',
            'You finally fall asleep around 11:30. You\u2019re **wide awake at 3:47am for no reason you can name.** **Hot. Then cold. Then just\u2026 awake.** By the time the alarm goes off at 6, you feel **like you didn\u2019t sleep at all.**',
            'The last thing that whole situation needs is **2pm caffeine still circulating through your bloodstream at midnight.**',
            'Cheerific **is caffeine free, less than 1g of sugar, no artificial sweeteners, no weird aftertaste.** You can swap it in for the afternoon cup **without jitters or late-day edge.**',
            'And the CP2305 postbiotic we mentioned earlier? It\u2019s been clinically studied for supporting calm mood and digestive comfort during stressful periods.*',
            '**A calmer nervous system during the day tends to mean a calmer one at night too.**',
          ],
        },
        {
          n: 7,
          headline: "You Feel It Build. Week Over Week. The Way Real Things Do.",
          body: [
            '**Almost nothing out there is built for where you actually are.**',
            'The 4-to-10 years before menopause. **The long, messy, underexplained in-between.** The years you\u2019re **still you \u2014 but somehow not.**',
            'Cheerific is. And women describe it the same way, in stages\u2026',
            '**Day 1:** That\u2019s Chocamine\u00ae doing its work. **A calmer, smoother energy than that afternoon coffee\u2019s given you in a long time.** **No jitters. No crash.** Tastes like dessert. Acts like real support.',
            '**Week 2:** The CP2305 postbiotic starts doing its quiet work. **Mood feels a little more even. Digestion, a little easier. Sleep, a little more restful.**\u2009*',
            '**Week 8:** The line we hear over and over: ***\u201cI feel like myself again.\u201d*** **Not reinvented. Just recovered.**',
            'It won\u2019t fix everything in a week. It\u2019s **a 60-second daily ritual that builds the way real things do.**',
          ],
        },
      ].map((r) => (
        <Reason
          key={r.n}
          index={r.n}
          total={7}
          eyebrow={`Reason 0${r.n}`}
          headline={r.headline}
          imageLabel={`REASON 0${r.n} · IMAGE`}
          imageSrc={`assets/reasons/mobile/r${r.n}.webp`}
          body={r.body}
        />
      ))}
    </section>
  );
}

Object.assign(window, { Reasons });
