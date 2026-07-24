import type { CardContent, CardCTAVariant, CardVariant } from '../../types/card'
import { cn } from './cardVariants'
import {
  mergeVariants,
  ResolvedVariantProvider,
  resolveCardClasses,
  useCollectionVariant,
} from './CardVariantContext'
import { CardCTA } from './CardCTA'
import { CardExcerpt } from './CardExcerpt'
import { CardLabel } from './CardLabel'
import { CardMedia } from './CardMedia'
import { CardTitle, type HeadingLevel } from './CardTitle'
import { CardCTALabel } from './CardCTALabel'


export type ContentCardProps = {
  page: CardContent
  variant?: CardVariant
  className?: string
  ctaLabel?: string
  ctaVariant?: CardCTAVariant
  titleHeadingLevel?: HeadingLevel
}

export function ContentCard({ page, variant, className, ctaLabel, ctaVariant, titleHeadingLevel }: ContentCardProps) {
  const collectionVariant = useCollectionVariant()
  const resolvedVariant = mergeVariants(collectionVariant, variant)
  const classes = resolveCardClasses(resolvedVariant)
  const compact = resolvedVariant.density === 'compact'
  const pageURL = page.type + 's/' + page.slug

  if (compact) {
    return (
      <ResolvedVariantProvider variant={resolvedVariant}>
        <article className={cn(classes.root, className)}>
          <a href={pageURL} className={classes.compactLink}>
            {page.imageUrl && (
              <CardMedia
                src={page.imageUrl}
                alt={page.imageAlt ?? page.title}
              />
            )}
            <CardTitle titleHeadingLevel={titleHeadingLevel} >{page.title}</CardTitle>
          </a>
        </article>
      </ResolvedVariantProvider>
    )
  }

  return (
    <ResolvedVariantProvider variant={resolvedVariant}>
      <article className={cn(classes.root, className)}>
        {page.imageUrl && (
          <a
            href={pageURL}
            className={classes.mediaLink}
            tabIndex={-1}
            aria-hidden="true"
          >
            <CardMedia
              src={page.imageUrl}
              alt={page.imageAlt ?? page.title}
            />
          </a>
        )}
        <div className={classes.body}>
          <CardLabel>{page.category}</CardLabel>
          <CardTitle titleHeadingLevel={titleHeadingLevel} >{page.title}</CardTitle>
          <CardExcerpt>{page.excerpt}</CardExcerpt>
          <CardCTA href={pageURL} variant={ctaVariant}>
            <CardCTALabel page={page} ctaLabel={ctaLabel} />
          </CardCTA>
        </div>
      </article>
    </ResolvedVariantProvider>
  )
}
