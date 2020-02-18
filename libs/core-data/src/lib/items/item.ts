export interface Item {
  id: number;
  name: string;
  description: string;
}

export const emptyItem: Item = {
  id: null,
  name: '',
  description: ''
};
