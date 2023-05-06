'use client'

import Rive from '@rive-app/react-canvas';

// import { signIn } from 'next-auth/react';

const PresentationSection = () => {
  return (
    <div className="flex min-h-screen w-full flex-row items-center justify-center px-8 xl:px-56">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          ></path>
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2596be"></stop>
              <stop offset="1" stopColor="#91dae8"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          ></path>
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC"></stop>
              <stop offset="1" stopColor="#2596be"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col gap-5 md:w-1/2 lg:pr-24">
        <div className="flex items-center gap-4 self-start rounded-full bg-gray-200 p-3 text-center dark:bg-gray-700 md:px-5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
          <p className="text-sm text-gray-900 dark:text-gray-200 md:text-lg">
            La comunidad del framework más famoso
          </p>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
          ¡Bienvenidos a la comunidad ReactJS Uruguay!
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-400 md:text-lg">
          Nuestra comunidad está formada por desarrolladores apasionados de ReactJS y su ecosistema.
          Creemos en el poder de esta tecnología y en su capacidad para transformar la forma en que
          se construyen aplicaciones web modernas. Como tal, nos hemos comprometido a ayudar a que
          la comunidad ReactJS en Uruguay crezca y se fortalezca.
        </p>

        <div className="flex flex-row gap-4 pt-3">
          {/* <Button variant="primary" onClick={() => void signIn()}> */}
          {/*   Empecemos! */}
          {/* </Button> */}
          {/* <Button variant="secondary" onClick={() => void signIn()}> */}
          {/*   Registrarse */}
          {/* </Button> */}
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 lg:pl-24">
        <div className="aspect-square w-full max-w-lg rounded-full bg-white shadow duration-[10000ms] motion-safe:animate-spin-slow dark:bg-gray-800">
          <Rive
            src="/rive-animations/react.riv"
            aria-label="Rive logo by Dante from Rive community - https://creativecommons.org/licenses/by/4.0/"
          />
        </div>
      </div>
    </div>
  );
};

export default PresentationSection;
