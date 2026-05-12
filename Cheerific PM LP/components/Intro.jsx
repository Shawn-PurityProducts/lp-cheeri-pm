// Intro.jsx — long-form editorial intro, sits beneath the hero image.
// No CTA, no bullets — just typography. Last two paragraphs get visual emphasis
// to land the "Welcome to perimenopause" pivot and the Cheerific reveal.

const introStyles = {
  wrap: {
    padding: '8px 2px 8px',
    fontFamily: 'var(--font-sans)',
    color: 'var(--ink)',
    maxWidth: 560,
    margin: '0 auto',
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 1em',
    textWrap: 'pretty',
    fontWeight: 500,
  },
  pSoft: {
    color: 'var(--ink-soft)',
  },
  // The "You're not lazy..." beat — just three statements, each on its own line.
  beats: {
    margin: '4px 0 18px',
  },
  beatsLine: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 17,
    lineHeight: 1.45,
    color: 'var(--ink)',
    margin: '0 0 2px',
  },
  beatsLineLast: {
    margin: 0,
  },
  // "Welcome to perimenopause" — single-line emphasis.
  welcome: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(18px, 4.6vw, 24px)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    margin: '24px 0 18px',
    whiteSpace: 'nowrap',
    textWrap: 'nowrap',
  },
  // The Cheerific paragraph — inline, just typographic emphasis on the brand.
  reveal: {
    margin: '0 0 18px',
  },
  revealBody: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: 0,
    textWrap: 'pretty',
  },
  brandName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
  // Closing line that hands off to the 7 reasons — same treatment as the
  // "Welcome to perimenopause" beat, but not uppercase.
  handoff: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(22px, 5.6vw, 28px)',
    lineHeight: 1.15,
    letterSpacing: '-0.005em',
    color: 'var(--accent)',
    margin: '24px 0 20px',
    textAlign: 'center',
    textWrap: 'balance',
  },
};

function Intro() {
  return (
    <div style={introStyles.wrap}>
      <p style={introStyles.p}>
        You catch yourself in the bathroom mirror at 2:47pm and think, <strong>who is this woman?</strong>
      </p>
      <p style={introStyles.p}>
        Not in a dramatic way. In a quiet, confusing way. The morning cup of coffee still
        does its job — that one you can count on. But this afternoon cup? The one you've
        been reaching for every day around 2pm for the last decade? It <strong>makes your heart
        race and your jaw clench, and somehow leaves you more exhausted than before you
        drank it.</strong>
      </p>
      <p style={introStyles.p}>
        An hour later you're pacing the kitchen, <strong>reaching for the cookie drawer you swore
        you'd stop raiding.</strong> You woke up at 3:14 last night — <strong>wide awake, hot, then
        freezing, then furious at your husband for breathing.</strong> The jeans you wore two
        Christmases ago are sitting on your closet floor because <strong>your stomach has
        apparently relocated.</strong>
      </p>
      <p style={introStyles.p}>
        And by mid-afternoon, <strong>the lights just… go out.</strong> You're staring at the same email
        for ten minutes wondering where you went.
      </p>

      <div style={introStyles.beats}>
        <p style={introStyles.beatsLine}>You're not lazy.</p>
        <p style={introStyles.beatsLine}>You're not broken.</p>
        <p style={{ ...introStyles.beatsLine, ...introStyles.beatsLineLast }}>
          You're not "just stressed."
        </p>
      </div>

      <h2 style={introStyles.welcome}>Welcome to perimenopause.</h2>

      <p style={introStyles.p}>
        The 4-to-10-year stretch that starts somewhere in your early 40s — years before
        actual menopause — when <strong>the body quietly rewrites the rules.</strong> Sleep. Mood. Gut.
        Energy. <strong>The woman you've always been.</strong>
      </p>
      <p style={introStyles.p}>
        <strong>Most women go through this without a roadmap.</strong> Without anything built for the
        in-between years. Just a quiet sense that something's shifted — and <strong>a longer and
        longer list of things that don't feel like you anymore.</strong>
      </p>
      <p style={introStyles.p}>
        Which is why thousands of women are quietly swapping their 2pm coffee for
        something that sounds almost suspicious at first…
      </p>

      <div style={introStyles.reveal}>
        <p style={introStyles.p}>
          A creamy mug of dark chocolate called{' '}
          <strong><span style={introStyles.brandName}>Cheerific<sup className="tm">{'™'}</sup></span></strong> — built around a patented,
          clinically studied cocoa extract called <em>Chocamine®</em> — formulated
          specifically for the woman who wants to <strong>feel like herself again.</strong>
        </p>
      </div>

      <p style={introStyles.handoff}>
        Here Are 7 Reasons It's Quietly Become The Favorite 60 Seconds of Their Day.
      </p>
    </div>
  );
}

Object.assign(window, { Intro });
