export interface Guild {
  name: string;
  realm: string;
  battlegroup: string;
  members: number;
  achievementPoints: number;
  emblem: {
    icon: number;
    iconColor: string;
    iconColorId: number;
    border: number;
    borderColor: string;
    borderColorId: number;
    backgroundColor: string;
    backgroundColorId: number;
  };
}
