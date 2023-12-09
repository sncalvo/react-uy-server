import { Presenter } from "./presenter";

export type Event = {
  id: number;
  name: string;
  description: string;
  date: string;
  link: string;
  image: string;
  presenters: Presenter[];
}
