import { atom } from 'recoil';

export const bingoState = atom({
  key: 'bingoState',
  default: Array.from({ length: 9 }, (_, index) => ({ location: index, title: '' })),
});

export const usernameState = atom({
  key: 'usernameState',
  default: '',
});

export const startDateState = atom({
  key: 'startDateState',
  default: '',
});

export const endDateState = atom({
  key: 'endDateState',
  default: '',
});

export const titleState = atom({
  key: 'titleState',
  default: Array.from({ length: 9 }, (_, index) => ({ location: index, title: '' })),
});

export const bingoIdState = atom({
  key: 'bingoIdState',
  default: [],
});