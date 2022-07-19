export type User = {
  firstName: string;
  lastName: string;
  phone: string;
  address?: string;
  email?: string;
};
export type Pokemon = {
  abilities: {}[];
  base_experience: number;
  forms: {}[];
  game_indices: {}[];
  height: number;
  held_items: {}[];
  id: number;
  location_area_encounters: string;
  moves: {}[];
  name: string;
  order: number;
  past_types: [];
  species: { name: string; url: string };
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny: string;
    front_shiny_female?: string;
    other: {
      dream_world?: {
        front_default?: string;
        front_female?: string;
      };
      home: {
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  stats: {}[];
  types: {}[];
  weight: number;
};
