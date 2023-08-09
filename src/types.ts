export type TAuto = {
  id: number;
  name: string;
  link: string;
};

export type TBrandModel = {
  id: number;
  name: string;
  link: string;
  parent_id: number;
};

export type TModifications = {
  id: number;
  name: string;
  link: string;
  parent_id: number;
};
export type TModParams = {
  length1: string;
  length2: string;
  length3?: string;
  fasten: string;
};
