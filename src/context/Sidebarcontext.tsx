import React, { useState, createContext } from 'react'


type SidebarContextProviderProps = {
  children: React.ReactNode
}

type SidebarContextType = {
  togglesidebar: boolean
  settoggle: React.Dispatch<React.SetStateAction<boolean>>
}
// export const UserContext = createContext<UserContextType | null>(null)
export const SidebarContext = createContext({} as SidebarContextType)

export const SidebarContextProvider = ({children}: SidebarContextProviderProps) => {
  const [togglesidebar, settoggle] = useState(false)

  return (
    <SidebarContext.Provider value={{ togglesidebar, settoggle }}>
      {children}
    </SidebarContext.Provider>
  )
}
