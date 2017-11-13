import { Emblem } from './emblem';

export interface Guild {
  name: string;
  realm: string;
  battlegroup: string;
  members: number;
  achievementPoints: number;
  emblem: Emblem;
}
