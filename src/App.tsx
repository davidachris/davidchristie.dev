
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Layout } from "@/components/Layout"
import { About } from "@/pages/About"
import { Experience } from "@/pages/Experience"
import { Contact } from "@/pages/Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/experience",
    element: (
      <Layout>
        <Experience />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
])

function App() {
  return (
    <ThemeProvider storageKey="portfolio-theme">
      <RouterProvider router={router} />
      {/* <Toaster /> */}
    </ThemeProvider>
  )
}

export default App
