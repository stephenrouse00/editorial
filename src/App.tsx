import { HomePage } from './pages/HomePage'
import { ArticlePage } from './pages/Article'
import { ArticleHub } from './pages/Article'
import { ProductPage } from './pages/Product'
import { ProductHub } from './pages/Product'
import { Page404 } from './pages/Page404'
import { pages } from './data/pages'

function App() {
  const path = window.location.pathname
  
  if (path === '/') {
    return <HomePage />
  } else {
    const slug = window.location.pathname.replace('/', '')
    const page = pages.find((p) => p.slug === slug)

    console.log('Current slug: ', slug)
    if (page?.type === 'article') {
      return <ArticlePage page={page} />
    }
    if (page?.type === 'articles-hub') {
      return <ArticleHub />
    }
    if (page?.type === 'product') {
      return <ProductPage />
    }
    if (page?.type === 'products-hub') {
      return <ProductHub />
    }
    return <Page404 />

  }
}

export default App
