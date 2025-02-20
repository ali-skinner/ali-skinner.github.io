export type AppState = typeof initialState;
export type AppStateContextValue = typeof initialState | null;

export type AppAction = { type: "SET_FILTER_TAB", payload: string } | { type: "TEST" }//TODO: add more app action types HERE
export type AppDispatchContextValue = React.Dispatch<AppAction> | null;

export const initialState = {
    drawerIsOpen: false,
    selectedFilterTags: [],
}

export default function reducer(previousState: AppState, action: AppAction) {
    switch (action.type) {
        case 'SET_FILTER_TAB':
            return { ...previousState, drawerIsOpen: !previousState.drawerIsOpen }
        case "TEST":
    }
}