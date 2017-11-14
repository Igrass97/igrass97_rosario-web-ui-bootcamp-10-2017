import { Guild } from './guild';
import { Pvp } from './pvp';
import { Items } from './items';
import { Stats } from './stats';

export interface Character {
  lastModified: number;
  name: string;
  realm: string;
  battlegroup: string;
  class: number;
  race: number;
  gender: number;
  level: number;
  achievementPoints: number;
  thumbnail: string;
  calcClass: string;
  faction: number;
  totalHonorableKills: number;
  guild: Guild;
  items: Items;
  pvp: Pvp;
  stats: Stats;
}
