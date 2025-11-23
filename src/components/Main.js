function Main() {
  return (
    <main>
      {/* Hero section */}
      <section aria-labelledby="hero-heading">
        <h1 id="hero-heading">Little Lemon</h1>
        <p>Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button type="button">
          Reserve a table
        </button>
      </section>

      {/* Highlights / Specials section */}
      <section aria-labelledby="highlights-heading">
        <h2 id="highlights-heading">This week&apos;s specials</h2>
        {/* Buraya sonra kartlar əlavə edəcəksən */}
      </section>

      {/* Testimonials section */}
      <section aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading">Testimonials</h2>
        {/* Review kartları üçün placeholder-lar */}
      </section>

      {/* About section */}
      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About Little Lemon</h2>
        {/* Mətn və şəkil placeholderləri */}
      </section>
    </main>
  );
}

export default Main;