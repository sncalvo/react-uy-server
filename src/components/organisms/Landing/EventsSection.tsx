import SectionWrapper from '@/components/molecules/SectionWrapper';
import prisma from '@/lib/db';

import type { Event } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  event: Event;
  onClick?: () => void;
};

const EventCard = ({ event }: Props) => {
  return (
    <Link href={`/events/${event.id}`} className="relative flex h-48 min-w-min  max-w-xs flex-col items-center justify-center overflow-hidden rounded-lg p-4 shadow-lg transition-all hover:scale-105">
      <figure className="absolute h-full w-full">
        <Image
          src={event.image}
          alt={`Banner image for ${event.name}`}
          fill
          className="object-cover blur-sm"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </figure>
      <div className="z-10 flex h-full flex-col text-start">
        <h2 className="text-2xl font-bold text-white">{event.name}</h2>
        <p className="overflow-hidden text-ellipsis text-gray-200">{event.description}</p>
      </div>
    </Link>
  );
};

function getEvents() {
  return prisma.event.findMany();
}

const EventsSection = async () => {
  const events = await getEvents();
  
  return (
    <SectionWrapper right background="alt">
      <h2 className="mb-4 text-6xl font-bold text-gray-800 dark:text-gray-100">Nuestros eventos</h2>

      <p className="mb-8 px-12 text-gray-600 dark:text-gray-400 md:px-32 xl:px-72">
        Si estás interesado en aprender más sobre ReactJS y conectarte con otros desarrolladores
        apasionados por esta tecnología, ¡estás en el lugar correcto! Te invitamos a participar en
        nuestros eventos, donde tendrás la oportunidad de conocer a otros miembros de la comunidad,
        compartir tus conocimientos y aprender de otros expertos.
      </p>

      <div className="flex flex-col gap-4 md:flex-row">
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EventsSection;
