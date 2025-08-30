import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "@/components/layouts/AppLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import ProfilePage from "@/pages/ProfilePage.tsx";
import BlogDetailPage from "@/pages/BlogDetailPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<AppLayout />}>
                      <Route index element={<HomePage />} />
                      <Route path="detail" element={<BlogDetailPage banner={"banner.jpg"} />} />
                      <Route path="profile" element={<ProfilePage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
