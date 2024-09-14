export type Pool =
  | "Blood in the Water"
  | "Bloody Perch Swarm"
  | "Calm Surfacing Ripple"
  | "Festering Rotpool"
  | "Swarm of Slum Sharks";
export type Rarity = "Common" | "Uncommon" | "Rare";

export interface Fish {
  name: string;
  schools: Pool[];
  found: boolean;
  rarity: Rarity;
  customText?: string;
}

export let fish: Fish[] = [
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
];
