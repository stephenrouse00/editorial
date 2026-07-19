import type { Article } from './article'

export type CardDensity = 'standard' | 'compact'
export type CardTheme = 'light' | 'dark'
export type CardCTAVariant = 'link' | 'button'

export type CardVariant = {
  density?: CardDensity
  theme?: CardTheme
}

export type CardContent = Article & {
  ctaLabel?: string
  ctaVariant?: CardCTAVariant
}

export type CardCollectionLayout =
  | { type: 'grid'; columns?: 1 | 2 | 3 | 4 }
  | { type: 'featured'; heroWidth?: '66' | '75' }
  | {
      type: 'carousel'
      visibleSlides?: 1 | 2 | 3 | 4
      adjacentSlides?: 'hidden' | 'peek'
    }

export type CardCollectionItem = {
  article: CardContent
  variant?: CardVariant
}

export type CardCollectionConfig = {
  title?: string
  variant?: CardVariant
  layout: CardCollectionLayout
  items: CardCollectionItem[]
}
