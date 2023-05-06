import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: Props) => (
  <div
    className="rounded-lg text-lg text-white md:py-4"
  >
    <Link href={href} className="group">
      {children}
      <span className="block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
    </Link>
  </div>
);

export default NavLink;
