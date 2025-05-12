// you can put your types here
export type Country = {
  code: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
    id: string;
  };
};
export type Continent = {
  name: string;
  id: string;
};
