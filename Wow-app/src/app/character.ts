import { Guild } from './guild';
import { Item } from './item';
import { Pvp } from './pvp';

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
  items: {
    averageItemLevelEquipped: number;
    head: Item;
    neck: Item;
    shoulder: Item;
    back: Item;
    chest: Item;
    shirt: Item;
    tabard: Item;
    wrist: Item;
    hands: Item;
    waist: Item;
    legs: Item;
    feet: Item;
    finger1: Item;
    finger2: Item;
    trinket1: Item;
    trinket2: Item;
    mainHand: Item;
    offHand: Item;
    relics: any[];
  }
  pvp: Pvp;
  stats: {
    health: number;
    powerType: string;
    power: number;
    str: number;
    agi: number;
    int: number;
    sta: number;
  }
}
