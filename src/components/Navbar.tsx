export default function Navbar() {
  return (
    <nav className="bg-secondary p-10">
      <ul className="flex items-center justify-center gap-10 h-40 text-white custom-container">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Badges</a>
        </li>
      </ul>
    </nav>
  );
}
