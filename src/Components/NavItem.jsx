export default function NavItem({ href, children, className = "" }) {
  const base = "px-3 py-1 rounded transition duration-150 transform hover:scale-105 hover:text-blue-600 hover:bg-white/10";

  return (
    <li>
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    </li>
  );
}
