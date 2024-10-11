import { createContext, ReactNode, useState } from "react";

export type DietProps ={
    foodName: string
    foodDescription: string
    foodDate: string
    foodTime: string
    insideDiet: string 
    id: string
}

type DietContextProps ={
    dietList: DietProps[]
    setDietList: React.Dispatch<React.SetStateAction<DietProps[]>>
    editMeal: DietProps
    setEditMeal: React.Dispatch<React.SetStateAction<DietProps>>
    selectedMeal: DietProps
    setSelectedMeal: React.Dispatch<React.SetStateAction<DietProps>>
}

type DietContextProviderProps={
    children: ReactNode
}
export const DietContext = createContext({} as DietContextProps)

export function DietContextProvider({children}:DietContextProviderProps ){

    const [dietList, setDietList ] = useState<DietProps[]>([])

    const [editMeal, setEditMeal] = useState({} as DietProps)

    const [selectedMeal, setSelectedMeal] = useState({} as DietProps)
   
    return(
        <DietContext.Provider value={{
        dietList,setDietList,
        editMeal,setEditMeal,
        selectedMeal, setSelectedMeal

        
        }}>
            {children}
        </DietContext.Provider>
    )

}
