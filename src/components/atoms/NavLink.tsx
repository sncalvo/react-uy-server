import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  large?: boolean;
};

const NavLink = ({ href, children, large = false }: Props) => (
  <>
    {
      large ?
        <Link
          href={href}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          {children}
        </Link >
        :
        <Link href={href} className="group text-sm font-semibold leading-6 text-gray-900">
          {children}
          <span className="block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
        </Link>
    }
  </>
);

export default NavLink;
