import { Item } from './item';

export interface Items {
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
