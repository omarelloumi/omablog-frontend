import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "@/components/layouts/AppLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import ProfilePage from "@/pages/ProfilePage.tsx";
import BlogDetailPage from "@/pages/BlogDetailPage.tsx";


function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<AppLayout />}>
                      <Route index element={<HomePage />} />
                      <Route path="detail" element={<BlogDetailPage banner={"banner.jpg"} />} />
                      <Route path="profile" element={<ProfilePage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
  )
}

export default App
