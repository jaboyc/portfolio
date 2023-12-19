export default function Header() {
  return (
    <header className="sticky top-0 z-[100] flex bg-background px-16 py-3 justify-center">
      <nav>
        <h5 className="text-primary text-center text-[20px] md:text-[24px] transition hover:brightness-[120%]">
          <a className="no-underline" href="/">
            JAKE BOYCHENKO
          </a>
        </h5>
      </nav>
    </header>
  );
}
