import { Route, Routes } from "react-router-dom"
import { MexrentRoutes } from "../mexrent/routes/MexrentRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        {/* Web */}
        <Route path="/*" element={<MexrentRoutes />} />
    </Routes>
  )
}
