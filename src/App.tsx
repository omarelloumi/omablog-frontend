import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "@/components/layouts/AppLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import BlogDetailPage from "@/pages/BlogDetailPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import SignUpPage from "@/pages/SignUpPage.tsx";
import CreateBlogPage from "@/pages/CreateBlogPage.tsx";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<AppLayout />}>
                      <Route index element={<HomePage />} />
                      <Route path="detail/:slug" element={<BlogDetailPage/>} />
                      <Route path="signup/" element={<SignUpPage/>}/>
                      <Route path="createBlog/" element={<CreateBlogPage/>} />
                      {/*<Route path="profile" element={<ProfilePage />} />*/}
                  </Route>
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
