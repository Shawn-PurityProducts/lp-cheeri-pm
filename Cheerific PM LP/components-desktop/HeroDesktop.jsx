// HeroDesktop.jsx — Desktop hero w/ 3 variants: split / editorial / overlay
// Plus the long-form Intro block beneath the hero (full editorial column).

const heroDStyles = {
  // Promo bar
  promoBar: {
    background: 'var(--ink)',
    color: 'var(--paper)',
    fontSize: 13,
    lineHeight: 1.3,
    textAlign: 'center',
    padding: '10px 24px',
    fontFamily: 'var(--font-sans)',
    letterSpacing: '0.02em',
  },
  // Nav (logo only)
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 24px',
    background: 'var(--paper)',
    borderBottom: '1px solid var(--rule)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backdropFilter: 'blur(8px)',
  },
  navLogo: {
    height: 36,
    width: 'auto',
    display: 'block',
  },

  // SECTION shells
  section: {
    background: 'var(--paper)',
  },
  inner: {
    maxWidth: 1320,
    margin: '0 auto',
    padding: '48px 48px 24px',
  },

  // ── Variant A: Editorial Split ──────────────────────────────────────────
  splitGrid: {
    display: 'grid',
    gridTemplateColumns: '1.05fr 0.95fr',
    gap: 64,
    alignItems: 'center',
    minHeight: '78vh',
  },
  splitLeft: { maxWidth: 620 },
  splitEyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 24px',
  },
  splitH1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(44px, 4.4vw, 64px)',
    lineHeight: 1.02,
    letterSpacing: '-0.015em',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 22px',
    textWrap: 'balance',
  },
  splitH1Accent: { color: 'var(--ink-mid)' },
  splitSub: {
    fontFamily: 'var(--font-sans)',
    fontSize: 18,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: '0 0 28px',
    maxWidth: 520,
    textWrap: 'pretty',
    fontWeight: 500,
  },
  splitImg: {
    width: '100%',
    aspectRatio: '4 / 5',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',
    border: '1px solid var(--rule)',
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 24px 60px rgba(48,8,4,0.10)',
  },
  splitImgInner: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  splitImgLabel: {
    position: 'absolute',
    top: 16,
    left: 16,
    background: 'var(--paper)',
    border: '1px solid var(--rule)',
    padding: '5px 10px',
    borderRadius: 4,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--ink-soft)',
  },

  // ── Variant B: Editorial Centered ───────────────────────────────────────
  editorialWrap: {
    maxWidth: 980,
    margin: '0 auto',
    textAlign: 'center',
    padding: '24px 0 8px',
  },
  editorialIssue: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    color: 'var(--ink-soft)',
    margin: '0 0 20px',
  },
  editorialH1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(48px, 5.2vw, 76px)',
    lineHeight: 0.98,
    letterSpacing: '-0.02em',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 24px',
    textWrap: 'balance',
  },
  editorialRule: {
    width: 64,
    height: 2,
    background: 'var(--ink-mid)',
    margin: '0 auto 24px',
  },
  editorialSub: {
    fontFamily: 'var(--font-sans)',
    fontSize: 19,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: '0 auto 36px',
    maxWidth: 640,
    textWrap: 'pretty',
    fontWeight: 500,
  },
  editorialImg: {
    width: '100%',
    aspectRatio: '16 / 9',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',
    border: '1px solid var(--rule)',
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 24px 60px rgba(48,8,4,0.08)',
    margin: '0 0 40px',
  },

  // ── Variant C: Magazine Cover (full-bleed image, headline overlay) ──────
  coverWrap: {
    width: '100%',
    minHeight: 'min(86vh, 820px)',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
  },
  coverScrim: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(20,8,4,0.10) 0%, rgba(20,8,4,0.0) 30%, rgba(20,8,4,0.55) 100%)',
  },
  coverIssueChip: {
    position: 'absolute',
    top: 28,
    left: 48,
    background: 'var(--paper)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    padding: '7px 12px',
    borderRadius: 4,
    border: '1px solid var(--rule)',
  },
  coverImgLabel: {
    position: 'absolute',
    top: 28,
    right: 48,
    background: 'var(--paper)',
    color: 'var(--ink-soft)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 10,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '6px 10px',
    borderRadius: 4,
    border: '1px solid var(--rule)',
  },
  coverInner: {
    position: 'relative',
    maxWidth: 1320,
    margin: '0 auto',
    padding: '48px',
    width: '100%',
    color: 'var(--paper)',
  },
  coverH1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(48px, 5.4vw, 80px)',
    lineHeight: 0.98,
    letterSpacing: '-0.02em',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--paper)',
    margin: '0 0 18px',
    maxWidth: 1100,
    textWrap: 'balance',
  },
  coverH1Accent: { color: 'var(--green)' },
  coverSub: {
    fontFamily: 'var(--font-sans)',
    fontSize: 19,
    lineHeight: 1.5,
    color: 'rgba(248,243,231,0.86)',
    margin: '0 0 28px',
    maxWidth: 720,
    textWrap: 'pretty',
    fontWeight: 500,
  },

  // Social proof + CTA — shared
  socialRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    fontSize: 13,
    fontFamily: 'var(--font-sans)',
    color: 'var(--ink-soft)',
    margin: '0 0 24px',
    fontWeight: 500,
  },
  socialDot: {
    width: 3,
    height: 3,
    borderRadius: '50%',
    background: 'var(--ink-soft)',
  },
  socialNum: { fontWeight: 800, color: 'var(--ink)' },

  ctaWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    flexWrap: 'wrap',
  },
  cta: {
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '18px 32px',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 1px 0 rgba(0,0,0,0.06), 0 14px 30px rgba(48, 8, 4, 0.20)',
    transition: 'transform .15s ease, box-shadow .15s ease',
  },
  ctaArrow: { marginLeft: 10 },
  ctaSecondary: {
    appearance: 'none',
    border: '1.5px solid var(--ink)',
    borderRadius: 999,
    padding: '16px 28px',
    background: 'transparent',
    color: 'var(--ink)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  trustRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: 22,
    fontFamily: 'var(--font-sans)',
    fontSize: 12.5,
    lineHeight: 1.35,
    margin: '24px 0 0',
    justifyContent: 'start',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: 'var(--ink-soft)',
    fontWeight: 500,
  },
  trustCheck: {
    width: 16,
    height: 16,
    flex: '0 0 16px',
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    fontWeight: 700,
  },
};

function PromoBarD() {
  return (
    <div style={heroDStyles.promoBar}>
      <span style={{ fontWeight: 700 }}>Limited Time Sale:</span>
      <span style={{ opacity: 0.85, marginLeft: 6 }}>
        Get 50% off + free shipping on your first order
      </span>
    </div>
  );
}

function NavD() {
  return (
    <nav style={heroDStyles.nav}>
      <img src="assets/cheerific-logo.avif" alt="Cheerific" style={heroDStyles.navLogo} />
    </nav>
  );
}

function SocialProofD({ light }) {
  const c = light ? 'rgba(248,243,231,0.85)' : 'var(--ink-soft)';
  const num = light ? 'var(--paper)' : 'var(--ink)';
  return (
    <div style={{ ...heroDStyles.socialRow, color: c }}>
      <span><span style={{ ...heroDStyles.socialNum, color: num }}>126</span> reviews</span>
      <span style={{ ...heroDStyles.socialDot, background: c }}></span>
      <span><span style={{ ...heroDStyles.socialNum, color: num }}>4.8★</span> rating</span>
      <span style={{ ...heroDStyles.socialDot, background: c }}></span>
      <span><span style={{ ...heroDStyles.socialNum, color: num }}>10,000+</span> members</span>
    </div>
  );
}

function CTAButtonD({ label = 'Shop Cheerific — 50% Off' }) {
  return (
    <button
      style={heroDStyles.cta}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {window.tmify(label)}<span style={heroDStyles.ctaArrow}>→</span>
    </button>
  );
}

function TrustRowD() {
  return (
    <div style={heroDStyles.trustRow}>
      <div style={heroDStyles.trustItem}>
        <span style={heroDStyles.trustCheck}>✓</span>
        Zero caffeine
      </div>
      <div style={heroDStyles.trustItem}>
        <span style={heroDStyles.trustCheck}>✓</span>
        Free shipping
      </div>
      <div style={heroDStyles.trustItem}>
        <span style={heroDStyles.trustCheck}>✓</span>
        30-day guarantee
      </div>
      <div style={heroDStyles.trustItem}>
        <span style={heroDStyles.trustCheck}>✓</span>
        Made in the USA
      </div>
    </div>
  );
}

// ── Variant: Editorial Split (text-only, full width) ─────────────────────
function HeroSplit() {
  return (
    <section style={heroDStyles.section} data-screen-label="01 Hero · split">
      <div style={{ ...heroDStyles.inner, padding: '72px 48px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              ...heroDStyles.splitH1,
              fontSize: 'clamp(56px, 6vw, 88px)',
              lineHeight: 0.98,
              maxWidth: 1080,
              margin: '0 auto 28px',
              textAlign: 'center',
            }}
          >
            If Your 2pm Coffee Stopped Hitting The Way It Used To,{' '}
            <span style={heroDStyles.splitH1Accent}>
              Here's What Thousands Of Women Are Drinking Instead.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

// ── Variant: Editorial Centered ──────────────────────────────────────────
function HeroEditorialD() {
  return (
    <section style={heroDStyles.section} data-screen-label="01 Hero · editorial">
      <div style={{ ...heroDStyles.inner, padding: '56px 48px 32px' }}>
        <div style={heroDStyles.editorialWrap}>
          <p style={heroDStyles.editorialIssue}>— Issue No. 01 · For The Woman In Between —</p>
          <h1 style={heroDStyles.editorialH1}>
            If Your 2pm Coffee Stopped Hitting The Way It Used To, Here's What Thousands Of Women Are Drinking Instead.
          </h1>
          <div style={heroDStyles.editorialRule}></div>
          <div style={heroDStyles.editorialImg}>
            <img
              src="assets/product/p2.webp"
              alt="Cheerific lifestyle"
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SocialProofD />
          </div>
          <div style={{ ...heroDStyles.ctaWrap, justifyContent: 'center', marginTop: 8 }}>
            <CTAButtonD />
            <button type="button" style={heroDStyles.ctaSecondary}>Read The Story</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Variant: Magazine Cover ──────────────────────────────────────────────
function HeroCoverD() {
  return (
    <section data-screen-label="01 Hero · cover" style={heroDStyles.section}>
      <div style={heroDStyles.coverWrap}>
        <img
          src="assets/product/p1-hero-v2.webp"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }}
        />
        <div style={heroDStyles.coverScrim}></div>
        <span style={heroDStyles.coverIssueChip}>Issue No. 01</span>
        <span style={heroDStyles.coverImgLabel}>HERO · FULL BLEED</span>
        <div style={heroDStyles.coverInner}>
          <h1 style={heroDStyles.coverH1}>
            If Your 2pm Coffee Stopped Hitting The Way It Used To,{' '}
            <span style={heroDStyles.coverH1Accent}>Here's What Thousands Of Women Are Drinking Instead.</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <button
              style={{
                ...heroDStyles.cta,
                background: 'var(--paper)',
                color: 'var(--ink)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Shop Cheerific<sup className="tm">{'™'}</sup> — 50% Off<span style={heroDStyles.ctaArrow}>→</span>
            </button>
            <SocialProofD light />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroD({ variant = 'split' }) {
  if (variant === 'editorial') return <HeroEditorialD />;
  if (variant === 'cover') return <HeroCoverD />;
  return <HeroSplit />;
}

// ── Long-form Intro block ────────────────────────────────────────────────
const introDStyles = {
  section: { background: 'var(--paper)', padding: '8px 0 0' },
  inner: {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '0 48px',
    fontFamily: 'var(--font-sans)',
    color: 'var(--ink)',
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontSize: 20,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 1em',
    textWrap: 'pretty',
    fontWeight: 500,
  },
  beats: { margin: '14px 0 28px' },
  beatsLine: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 26,
    lineHeight: 1.4,
    color: 'var(--ink)',
    margin: '0 0 4px',
  },
  welcome: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(36px, 4vw, 52px)',
    lineHeight: 1.05,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    margin: '40px 0 28px',
  },
  brandName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
  handoff: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(32px, 3.6vw, 44px)',
    lineHeight: 1.15,
    letterSpacing: '-0.005em',
    color: 'var(--accent)',
    margin: '24px 0 0',
    textAlign: 'center',
    textWrap: 'balance',
  },
};

function IntroD() {
  return (
    <section style={introDStyles.section} data-screen-label="01b Intro">
      <div style={introDStyles.inner}>
        <p style={introDStyles.p}>
          You catch yourself in the bathroom mirror at 2:47pm and think, who is this woman?
        </p>
        <p style={introDStyles.p}>
          Not in a dramatic way. In a quiet, confusing way. The morning cup of coffee still does its job — that one you can count on. But this afternoon cup? The one you've been reaching for every day around 2pm for the last decade? It makes your heart race and your jaw clench, and somehow leaves you more exhausted than before you drank it.
        </p>
        <p style={introDStyles.p}>
          An hour later you're pacing the kitchen, reaching for the cookie drawer you swore you'd stop raiding. You woke up at 3:14 last night — wide awake, hot, then freezing, then furious at your husband for breathing. The jeans you wore two Christmases ago are sitting on your closet floor because your stomach has apparently relocated.
        </p>
        <p style={introDStyles.p}>
          And by mid-afternoon, the lights just… go out. You're staring at the same email for ten minutes wondering where you went.
        </p>

        <div style={introDStyles.beats}>
          <p style={introDStyles.beatsLine}>You're not lazy.</p>
          <p style={introDStyles.beatsLine}>You're not broken.</p>
          <p style={{ ...introDStyles.beatsLine, margin: 0 }}>You're not "just stressed."</p>
        </div>

        <h2 style={introDStyles.welcome}>Welcome to perimenopause.</h2>

        <p style={introDStyles.p}>
          The 4-to-10-year stretch that starts somewhere in your early 40s — years before actual menopause — when the body quietly rewrites the rules. Sleep. Mood. Gut. Energy. The woman you've always been.
        </p>
        <p style={introDStyles.p}>
          Most women go through this without a roadmap. Without anything built for the in-between years. Just a quiet sense that something's shifted — and a longer and longer list of things that don't feel like you anymore.
        </p>
        <p style={introDStyles.p}>
          Which is why thousands of women are quietly swapping their 2pm coffee for something that sounds almost suspicious at first…
        </p>
        <p style={introDStyles.p}>
          A creamy mug of dark chocolate called <span style={introDStyles.brandName}>Cheerific<sup className="tm">{'™'}</sup></span> — built around a patented, clinically studied cocoa extract called <em>Chocamine®</em> — formulated specifically for the woman who wants to feel like herself again.
        </p>

        <p style={introDStyles.handoff}>
          Here Are 7 Reasons It{'\u2019'}s Quietly Become The Favorite 60 Seconds Of Their Day.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { PromoBarD, NavD, HeroD, IntroD });
