import { HomePage } from './pages/HomePage'
import { ArticlePage } from './pages/Article'
import { ProductPage } from './pages/Product'
import { Page404 } from './pages/Page404'
import { pages } from './data/pages'

function App() {
  if (window.location.pathname.startsWith('/pages/')) {
    const slug = window.location.pathname.replace('/pages/', '')
    const page = pages.find((p) => p.slug === slug)
    if (page?.type === 'article') {
      return <ArticlePage page={page} />
    }
    if (page?.type === 'product') {
      return <ProductPage />
    }
    return <Page404 />

  }
  return <HomePage />
}

export default App
