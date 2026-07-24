import { HomePage } from './pages/HomePage'
import { ArticlePage } from './pages/Article'
import { ArticlesHub } from './pages/Article'
import { ProductPage } from './pages/Product'
import { ProductsHub } from './pages/Product'
import { CuratedPage } from './pages/Curated'
import { Page404 } from './pages/Page404'
import { pages } from './data/pages'

function App() {
  const path = window.location.pathname
  const pathParts = path.split('/').filter(part => part !== '')
  const pageType = pathParts[0]
  const slug = pathParts[1]
  const page = pages.find((p) => p.slug === slug)

  
console.log('Current pageType: ', pageType)
console.log('Current slug: ', slug)

  if (pathParts.length > 0) {
    if (pageType === 'articles' || pageType === 'insights') {
      if (page !== undefined) {
        return <ArticlePage page={page} />
      } else {
        return <ArticlesHub />
      }
    }
    if (pageType === 'products') {
      if (page !== undefined) {
        return <ProductPage page={page} />
      } else {
        return <ProductsHub />
      }
    }
    if (pageType === 'curated-pages') {
      return <CuratedPage page={page} />
    }
    return <Page404 />
  } else {
    return <HomePage />
  }
}

export default App
