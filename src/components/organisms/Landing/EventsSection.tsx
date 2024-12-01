import dayjs from "dayjs";
import "dayjs/locale/es";
import Image from "next/image";
import Link from "next/link";

import { getEvents } from "@/lib/services/events";

import type { Event } from "@/lib/types/event";

type Props = {
  event: Event;
  onClick?: () => void;
};

dayjs.locale("es");

const EventCard = ({ event }: Props) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <figure className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src={event.image}
          alt={`Banner image for ${event.name}`}
          fill
          className="object-cover"
        />
      </figure>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <div className="z-10 flex h-full flex-col text-start">
        <h2 className="text-2xl font-bold text-white">{event.name}</h2>
        <p className="overflow-hidden text-ellipsis text-gray-200">
          {event.description}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-y-1 text-sm leading-6 text-gray-300">
        <time
          dateTime={dayjs(event.date).format("YYYY-MM-DD")}
          className="mr-8"
        >
          {dayjs(event.date).format("MMMM D, YYYY")}
        </time>
        <div className="-ml-4 flex items-center gap-x-4">
          <svg
            viewBox="0 0 2 2"
            className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
          >
            <title>Presenters</title>
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="flex space-x-[-0.5rem]">
            {event.presenters?.map((presenter) => (
              <Image
                src={presenter.image}
                alt=""
                className="h-6 w-6 flex-none rounded-full bg-white/10 shadow-inner ring-1 ring-black/5"
                key={presenter.id}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <Link href={event.link}>
          <span className="absolute inset-0" />
          {event.name}
        </Link>
      </h3>
    </article>
  );
};

const EventsSection = async () => {
  const events = await getEvents();

  return (
    <div className="py-24 sm:py-32" id="events">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Eventos Anteriores
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Ve temas que se hayan tratado previamente.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
