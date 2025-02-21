import { useReducer, } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Search from './Search'
import LandingPage from './LandingPage'
import Header from './Header.tsx'
import reducer, { initialState } from './AppReducer'
import { AppStateContext, AppDispatchContext } from './AppContext.ts'



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state} >
    <AppDispatchContext.Provider value={dispatch} >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Header />}>
            <Route path="/projects" index element={<Search />} />
            <Route path="/projects/simon" index element={<iframe style={{ marginTop: "65px", height: "90vh", width: "100vw" }} src="../public/simon/index.html" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export default App
