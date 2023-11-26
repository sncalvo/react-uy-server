import Image from 'next/image';

import SectionWrapper from '@/components/molecules/SectionWrapper';

const OrganizersSection = () => (
  <SectionWrapper right background="alt">
    <h2 className="mb-4 text-6xl font-bold text-gray-800 dark:text-gray-100">Organizado por:</h2>

    <ul className="flex flex-col gap-10 md:flex-row mt-5">
      <li className="flex flex-col gap-4 md:w-1/2">
        <Image src="/images/organizers/1.jpeg" alt="Foto Santiago Calvo" width={200} height={200} className="rounded-full" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Santiago Calvo</h3>
      </li>
      <li className="flex flex-col gap-4 md:w-1/2">
        <Image src="/images/organizers/2.jpeg" alt="Foto Leonel More" width={200} height={200} className="rounded-full" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Leonel More</h3>
      </li>
      <li className="flex flex-col gap-4 md:w-1/2">
        <Image src="/images/organizers/3.jpeg" alt="Foto Malú Gago" width={200} height={200} className="rounded-full" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Malú Gago</h3>
      </li>
    </ul>
  </SectionWrapper>
);

export default OrganizersSection;
