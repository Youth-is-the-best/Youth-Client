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
  default: '',
});

export const endDateState = atom({
  key: 'endDateState',
  default: '',
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

// export const bingoBodyState = atom({
//   key: 'bingoBodyState',
//   default: {
//     size: 9,
//     start_date: '',
//     end_date: '',
//     bingo_obj: Array.from({ length: 9 }, (_, index) => 
//       ({ location: index, id: '', title: '', choice: '', todo: [] }))
//   },
// });

export const bingoObjectState = atom({
  key: 'bingoObjectState',
  default: Array.from({ length: 9 }, (_, index) => 
    ({ location: index.toString(), id: '', title: '', choice: "0", todo: [] }))
},
);