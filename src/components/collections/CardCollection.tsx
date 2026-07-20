import type { CardCollectionConfig } from '../../types/card'
import { CardVariantProvider } from '../cards/CardVariantContext'
import { CarouselLayout } from './layouts/CarouselLayout'
import { FeaturedLayout } from './layouts/FeaturedLayout'
import { GridLayout } from './layouts/GridLayout'

export function CardCollection({
  title,
  variant,
  layout,
  ctaLabel,
  ctaVariant,
  items,
}: CardCollectionConfig) {
  return (
    <CardVariantProvider variant={variant}>
      <section className="py-10" aria-labelledby={title ? `${title}-heading` : undefined}>
        {title && (
          <h2
            id={`${title}-heading`}
            className="mb-6 text-2xl font-semibold text-neutral-900"
          >
            {title}
          </h2>
        )}
        {layout.type === 'featured' ? (
          <FeaturedLayout items={items} heroWidth={layout.heroWidth} ctaLabel={ctaLabel} ctaVariant={ctaVariant} />
        ) : layout.type === 'carousel' ? (
          <CarouselLayout
            ctaLabel={ctaLabel}
            ctaVariant={ctaVariant}
            items={items}
            visibleSlides={layout.visibleSlides}
            adjacentSlides={layout.adjacentSlides}
          />
        ) : (
          <GridLayout items={items} columns={layout.columns} ctaLabel={ctaLabel} ctaVariant={ctaVariant} />
        )}
      </section>
    </CardVariantProvider>
  )
}
