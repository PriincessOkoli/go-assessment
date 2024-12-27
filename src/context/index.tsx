import { createContext, ReactNode, useReducer } from 'react'
import { ActionContextState, AppContextState } from '../types'

const initialState: AppContextState = {
  isMenuExpanded: true,
  profile: null,
}

export const AppContext = createContext<AppContextState>(initialState)
export const ActionsContext = createContext<ActionContextState>({
  expandMenu: () => null,
})

const reducer = (
  previousState: AppContextState,
  action: { type: string; payload?: any }
): AppContextState => {
  switch (action.type) {
    case 'expand_menu': {
      return { ...previousState, isMenuExpanded: !previousState.isMenuExpanded }
    }
    default: {
      throw new Error('Invalid app reducer action type')
    }
  }
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const expandMenu = () => {
    dispatch({
      type: 'expand_menu',
    })
  }

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <ActionsContext.Provider value={{ expandMenu}}>
      <AppContext.Provider
        value={{
          isMenuExpanded: state.isMenuExpanded,
          profile: state.profile,
        }}
      >
        {children}
      </AppContext.Provider>
    </ActionsContext.Provider>
  )
}
