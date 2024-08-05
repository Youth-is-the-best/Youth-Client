import { atom } from 'recoil';

export const username = atom({
  key: 'usernameState',
  default: '',
});

export const bingoState = atom({
  key: 'bingoState',
  default: [],
});

export const usernameState = atom({
  key: 'usernameState',
  default: '',
});

export const startDateState = atom({
  key: 'startDateState',
  default: '2024.08.07',
});

export const endDateState = atom({
  key: 'endDateState',
  default: '2024.11.06',
});

export const Day1State = atom({
  key: 'Day1State',
  default: '휴학+??',
});

export const Day2State = atom({
  key: 'Day2State',
  default: '복학-??',
});

export const prepDateState = atom({
  key: 'prepDateState',
  default: [],
});

export const titleState = atom({
  key: 'titleState',
  default: Array.from({ length: 9 }, (_, index) => ({ location: index, title: '' })),
});

export const bingoIdState = atom({
  key: 'bingoIdState',
  default: [],
});

export const bingoObjectState = atom({
  key: 'bingoObjectState',
  default: Array.from({ length: 9 }, (_, index) => 
    ({ location: index.toString(), id: '', title: '', choice: "0", todo: [] }))
},
);