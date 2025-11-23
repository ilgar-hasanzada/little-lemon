function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This week&apos;s specials</h2>
        <button type="button" className="secondary-button">
          Order online
        </button>
      </div>
      <div className="specials-grid">
        <article className="card">Special 1</article>
        <article className="card">Special 2</article>
        <article className="card">Special 3</article>
      </div>
    </section>
  );
}

export default Specials;