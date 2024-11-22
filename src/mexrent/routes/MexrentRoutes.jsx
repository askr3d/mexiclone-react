import { Route, Routes } from "react-router-dom"
import { Home } from "../pages"

export const MexrentRoutes = () => {
  return (
    <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
    </Routes>
  )
}
