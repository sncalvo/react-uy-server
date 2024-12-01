"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Suspense, useState } from "react";
import NavLink from "../atoms/NavLink";
import { Dialog } from "@headlessui/react";
import Rive from "@rive-app/react-canvas";
import Link from "next/link";

const navigationLinks = [
  { name: "Inicio", href: "#" },
  { name: "Eventos", href: "#events" },
  { name: "Ser Presentador", href: "#become-speaker" },
  { name: "Organizadores", href: "#organizers" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-gray-800">
              <Suspense>
                <Rive
                  src="/rive-animations/react.riv"
                  aria-label="Rive logo by Dante from Rive community - https://creativecommons.org/licenses/by/4.0/"
                />
              </Suspense>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <ul className="hidden lg:flex lg:gap-x-12">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900"> */}
          {/*   Log in <span aria-hidden="true">&rarr;</span> */}
          {/* </a> */}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-gray-800">
                <Suspense>
                  <Rive
                    src="/rive-animations/react.riv"
                    aria-label="Rive logo by Dante from Rive community - https://creativecommons.org/licenses/by/4.0/"
                  />
                </Suspense>
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationLinks.map((link) => (
                  <NavLink key={link.name} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                {/* <a */}
                {/*   href="#" */}
                {/*   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" */}
                {/* > */}
                {/*   Log in */}
                {/* </a> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navigation;
