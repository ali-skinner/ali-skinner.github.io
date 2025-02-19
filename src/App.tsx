import { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Ali from "./Home"
import Project1 from "./Project1"

const initialState = {
  drawerIsOpen: false,
  selectedFilterTags: [],
}

const reducer = (previousState, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return { ...previousState, drawerIsOpen: !previousState.drawerIsOpen }
    case 'SET_FILTER_TAGS':
      return { ...previousState, selectedFilterTags: action.payload }
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, "0");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ali />}>
          <Route path="/project1" index element={<Project1 />}/>
          <Route path="/project2" index element={<h1>page a</h1>} />
          <Route path="/project3" index element={<h1>page b</h1>} />
          <Route path="/project4" index element={<h1>page c</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
