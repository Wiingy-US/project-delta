export function HeroDecor() {
  return (
    <div className="hero-decor" aria-hidden>
      <div className="graph-container">
        <img
          className="hero-decor__graph"
          src="/assets/hero/Graph.png"
          alt=""
          width={571}
          height={678}
          loading="lazy"
          decoding="async"
        />
      </div>
      <img
        className="hero-decor__pencil"
        src="/assets/hero/pencil.png"
        alt=""
        width={37}
        height={612}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
