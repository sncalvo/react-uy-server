import { sql } from "@vercel/postgres";

import type { Event } from "../types/event";

export async function getEvents() {
  const { rows } = await sql<
    Event & {
      "presenter.id": number;
      "presenter.name": string;
      "presenter.image": string;
      "presenter.email": string;
    }
  >`
    SELECT 
      "Event"."id" AS "id",
      "Event"."name" AS "name",
      "Event"."description" AS "description",
      "Event"."date" AS "date",
      "Event"."link" AS "link",
      "Event"."image" AS "image",
      "Presenter"."id" AS "presenter.id",
      "Presenter"."email" AS "presenter.email",
      "Presenter"."name" AS "presenter.name",
      "Presenter"."image" AS "presenter.image"
    FROM "Event"
      LEFT JOIN "PresenterOnEvents" ON "Event"."id" = "PresenterOnEvents"."eventId"
      LEFT JOIN "Presenter" ON "Presenter"."id" = "PresenterOnEvents"."presenterId"
      ORDER BY "id" ASC`;

  const events = rows.reduce((events: Event[], row) => {
    const event = events.find((event) => event.id === row.id);
    if (event) {
      event.presenters.push({
        id: row["presenter.id"],
        email: row["presenter.email"],
        name: row["presenter.name"],
        image: row["presenter.image"],
      });
    } else {
      events.push({
        id: row.id,
        name: row.name,
        description: row.description,
        date: row.date,
        link: row.link,
        image: row.image,
        presenters: [
          {
            id: row["presenter.id"],
            email: row["presenter.email"],
            name: row["presenter.name"],
            image: row["presenter.image"],
          },
        ],
      });
    }
    return events;
  }, []);

  return events;
}
