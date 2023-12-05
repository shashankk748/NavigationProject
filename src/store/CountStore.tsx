// import {Instance, types} from 'mobx-state-tree';
// // import {makeObservable, observable, action, computed} from 'mobx';

// export const CountStore = types
//   .model('CountStore')
//   .props({
//     value: types.maybe(types.number),
//   })
//   .actions(self => ({
//     getCountValue: () => {
//       return self.value || 0;
//     },
//     setValue: (value: number) => {
//       self.value = value;
//     },
//     increment: () => {
//       if (self.value != null) {
//         self.value++;
//       }
//     },
//     decrement: () => {
//       if (self.value != null) {
//         self.value--;
//       }
//     },
//   }));

// export interface SearchProductStore extends Instance<typeof CountStore> {}

// export const createCountStore = () => CountStore.create({value: 0});

//////////////////////////////new//////////////////////////
// CounterStore.js
import {types} from 'mobx-state-tree';

const CounterStore = types
  .model('CountStoreModel', {
    count: types.optional(types.number, 0),
  })
  .actions(self => ({
    increment() {
      self.count += 1;
    },
    decrement() {
      self.count -= 1;
    },
  }));

export default CounterStore;
