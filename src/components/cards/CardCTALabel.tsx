import type { CardContent } from '../../types/card'

type CardCTALabelProps = {
  page: CardContent
  ctaLabel?: string
}


export function CardCTALabel({ page,ctaLabel }: CardCTALabelProps) {
  if (!ctaLabel) {
    if (page.type === 'article') {
      return <span>Read more</span>
    }
    if (page.type === 'product') {
      return <span>Preview</span>
    }
    return <span>Explore</span>
  }
  return <span>{ctaLabel}</span>
}