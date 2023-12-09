import Image from 'next/image';
import Link from 'next/link';

const organizers = [
  {
    image: '/images/organizers/1.webp',
    name: 'Santiago Calvo',
    position: 'Team Leader @ eagerworks',
    link: 'https://scalvo.dev',
    alt: 'Foto Santiago Calvo',
  },
  {
    image: '/images/organizers/2.webp',
    name: '1950Labs',
    alt: 'Foto 1950Labs',
    link: 'https://1950labs.com',
  },
];

const OrganizersSection = () => (
  <div className="bg-white py-24 sm:py-32" id="organizers">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce Nuestros Organizadores</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Las meetups de React Uruguay son organizadas por las siguientes personas y empresas.
        </p>
      </div>

      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {organizers.map((organizer) => (
          <li key={organizer.name}>
            <Link href={organizer.link}>
              <div className="flex items-center gap-x-6">
                <Image className="h-16 w-16 rounded-full shadow-inner ring-1 ring-black/5" src={organizer.image} alt={organizer.alt} width={64} height={64} />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{organizer.name}</h3>
                  {organizer.position && (
                    <p className="text-sm font-semibold leading-6 text-react-600">{organizer.position}</p>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default OrganizersSection;
