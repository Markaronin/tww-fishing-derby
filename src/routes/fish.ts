export type Pool =
  | "Blood in the Water"
  | "Bloody Perch Swarm"
  | "Calm Surfacing Ripple"
  | "Festering Rotpool"
  | "Swarm of Slum Sharks"
  | "Glimmerpool";
export type Rarity = "Common" | "Uncommon" | "Rare";
export type WowLocation =
  | "Isle of Dorn"
  | "Ringing Deeps"
  | "Hallowfall"
  | "Azj-Kahet";

export interface Fish {
  name: string;
  schools: Pool[];
  found: boolean;
  rarity: Rarity;
  customText?: string;
}

export let defaultFish: Fish[] = [
  {
    name: "Bloody Perch",
    schools: [
      "Blood in the Water",
      "Bloody Perch Swarm",
      "Calm Surfacing Ripple",
      "Festering Rotpool",
      "Swarm of Slum Sharks",
    ],
    found: false,
    rarity: "Common",
  },
  {
    name: "Nibbling Minnow",
    schools: ["Calm Surfacing Ripple"],
    found: false,
    rarity: "Uncommon",
  },
  {
    name: "Bismuth Bitterling",
    schools: ["Glimmerpool"],
    found: false,
    rarity: "Common",
  },
];

export function poolLocations(pool: Pool): WowLocation[] {
  switch (pool) {
    case "Blood in the Water":
      return ["Hallowfall"];
    default:
      throw "Unimplemented";
  }
}
