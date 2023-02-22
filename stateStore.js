import { create } from "zustand";

const stateStore = create((set) => ({
    count: 0,
    addCount: () => set(state => ({ count: state.count + 1 })),
    subtractCount: () => set(state => ({ count: state.count - 1 })),
    list: 0,
    setList: (pr) => set(state => ({ list: pr })),

}));

export default stateStore;