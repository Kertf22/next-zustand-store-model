interface Cat {
    id: string;
    name: string;
    age: number;
    avatar: string;
}

export interface ICatsStore {
    cats: Cat[];
    selectedCat: Cat | null;
    setCats: (cats: Cat[]) => void;
    addCats: (cats: Cat) => void;
    removeCat: (id: string) => void;
    setSelectedCat: (id: string) => void;
}

// Initial state of the store
export const initialCatsStoreState: ICatsStore = {
    cats: [],
    selectedCat: null,
    setCats: () => { },
    addCats: () => { },
    removeCat: () => { },
    setSelectedCat: () => { },
}

// Here you are going to create your store
export const createCatsStore = (set: any, get: any, api: any) => ({
    setCats: (cats: Cat[]) => set({ cats }),
    addCats: (cats: Cat) => set({ cats: [...get().cats, cats] }),
    removeCat: (id: string) => set({ cats: get().cats.filter((cat: Cat) => cat.id !== id) }),
    setSelectedCat: (id: string) => set({ selectedCat: get().cats.find((cat: Cat) => cat.id === id) }),
})





