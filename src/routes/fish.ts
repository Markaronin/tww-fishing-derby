export type Pool =
  | "Calm Surfacing Ripple"
  | "River Bass Pool"
  | "Glimmerpool"
  | "Blood in the Water"
  | "Swarm of Slum Sharks"
  | "Bloody Perch Swarm"
  | "Festering Rotpool"
  | "Infused Ichor Spill"
  | "Stargazer Swarm"
  | "Anglerseeker Torrent"
  | "Royal Ripple";
export const pools: Pool[] = [
  "Calm Surfacing Ripple",
  "River Bass Pool",
  "Glimmerpool",
  "Blood in the Water",
  "Swarm of Slum Sharks",
  "Bloody Perch Swarm",
  "Festering Rotpool",
  "Infused Ichor Spill",
  "Stargazer Swarm",
  "Anglerseeker Torrent",
  "Royal Ripple",
];

export type Rarity = "Common" | "Uncommon" | "Rare";

export type WowLocation =
  | "Isle of Dorn"
  | "Ringing Deeps"
  | "Hallowfall"
  | "Azj-Kahet";
export const locations: WowLocation[] = [
  "Isle of Dorn",
  "Ringing Deeps",
  "Hallowfall",
  "Azj-Kahet",
];

export interface Fish {
  name: string;
  schools: Pool[];
  found: boolean;
  rarity: Rarity;
  customText?: string;
  weird: boolean;
}

export let defaultFish: Fish[] = [
  // Common fish
  {
    name: "Bismuth Bitterling",
    schools: ["Glimmerpool"],
    found: false,
    rarity: "Common",
    weird: false,
  },
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
    weird: false,
  },
  {
    name: "Crystalline Sturgeon",
    schools: ["Glimmerpool"],
    found: false,
    rarity: "Common",
    weird: false,
  },
  {
    name: "Dilly-Dally Dace",
    schools: [
      "Blood in the Water",
      "Calm Surfacing Ripple",
      "Festering Rotpool",
    ],
    found: false,
    rarity: "Common",
    weird: false,
  },
  // Uncommon fish
  {
    name: "Arathor Hammerfish",
    schools: ["Blood in the Water"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Dornish Pike",
    schools: ["Calm Surfacing Ripple"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Goldengill Trout",
    schools: ["Festering Rotpool", "Glimmerpool", "Infused Ichor Spill"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Kaheti Slum Shark",
    schools: ["Blood in the Water", "Swarm of Slum Sharks"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Nibbling Minnow",
    schools: ["Calm Surfacing Ripple"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Pale Huskfish",
    schools: ["Festering Rotpool", "Infused Ichor Spill"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Quiet River Bass",
    schools: ["Calm Surfacing Ripple", "River Bass Pool"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Roaring Anglerseeker",
    schools: ["Anglerseeker Torrent"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Specular Rainbowfish",
    schools: ["Glimmerpool"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  {
    name: "Whispering Stargazer",
    schools: ["Stargazer Swarm"],
    found: false,
    rarity: "Uncommon",
    weird: false,
  },
  // Rare fish
  {
    name: "Queen's Lurefish",
    schools: ["Royal Ripple"],
    found: false,
    rarity: "Rare",
    customText:
      "Can be attracted by throwing Regal Dottyback into the water for the buff",
    weird: false,
  },
  {
    name: "Regal Dottyback",
    schools: ["Royal Ripple"],
    found: false,
    rarity: "Rare",
    weird: false,
  },
  {
    name: "Sanguine Dogfish",
    schools: ["Blood in the Water", "Bloody Perch Swarm"],
    found: false,
    rarity: "Rare",
    customText:
      "Can be attracted by throwing Bloody Perch into the water for the buff",
    weird: false,
  },
  {
    name: "Spiked Sea Raven",
    schools: [
      "Anglerseeker Torrent",
      "Calm Surfacing Ripple",
      "Glimmerpool",
      "Stargazer Swarm",
    ],
    found: false,
    rarity: "Rare",
    weird: false,
  },
  // Weird fish
  {
    name: "Awoken Coelacanth",
    schools: [],
    found: false,
    rarity: "Rare",
    customText:
      "Can be fished in Azj-Kahet by throwing Whispering Stargazers into the water for the buff",
    weird: true,
  },
  {
    name: "Cursed Ghoulfish",
    schools: [],
    found: false,
    rarity: "Rare",
    customText:
      "Can be fished in any pool, and supposedly has a chance to be fished when fishing above your skill level",
    weird: true,
  },
];

export function poolLocations(pool: Pool): WowLocation[] {
  switch (pool) {
    case "Calm Surfacing Ripple":
      return ["Isle of Dorn", "Ringing Deeps", "Hallowfall", "Azj-Kahet"];
    case "River Bass Pool":
      return ["Isle of Dorn", "Ringing Deeps"];
    case "Glimmerpool":
      return ["Isle of Dorn", "Ringing Deeps", "Hallowfall", "Azj-Kahet"];
    case "Blood in the Water":
      return ["Hallowfall"];
    case "Swarm of Slum Sharks":
      return ["Hallowfall", "Azj-Kahet"];
    case "Bloody Perch Swarm":
      return ["Isle of Dorn", "Hallowfall"];
    case "Festering Rotpool":
      return ["Isle of Dorn"];
    case "Infused Ichor Spill":
      return ["Hallowfall", "Azj-Kahet"];
    case "Stargazer Swarm":
      return ["Isle of Dorn"];
    case "Anglerseeker Torrent":
      return ["Ringing Deeps", "Hallowfall"];
    case "Royal Ripple":
      return ["Hallowfall", "Azj-Kahet"];
    default:
      throw "Unimplemented";
  }
}
