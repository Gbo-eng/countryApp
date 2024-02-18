export interface Country {
  name: {
    common: string;
  };
  capital: string;
  region: string;
  flags: {
    png: string;
    alt: string;
  };
  population: number;
  coatOfArms: {
    svg: string
  };
  ccn3: string;
}

