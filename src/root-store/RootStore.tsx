// RootStore.js
import {types} from 'mobx-state-tree';
import CounterStore from '../store/CountStore';

const RootStore = types.model('RootStore', {
  counterStore: types.optional(CounterStore, {}),
});

export default RootStore.create();
