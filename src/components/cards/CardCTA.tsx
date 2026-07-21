import type { ReactNode } from 'react'
import type { CardCTAVariant } from '../../types/card'
import { isCompact, resolveCardClasses, useResolvedVariant } from './CardVariantContext'

type CardCTAProps = {
  slug: string
  variant?: CardCTAVariant
  children: ReactNode
}

export function CardCTA({ slug, variant = 'link', children }: CardCTAProps) {
  const resolvedVariant = useResolvedVariant()

  if (isCompact(resolvedVariant)) {
    return null
  }

  const classes = resolveCardClasses(resolvedVariant)

  if (variant === 'button') {
    return (
      <a href={slug} className={classes.ctaButton}>
        {children}
      </a>
    )
  }

  return (
    <a href={slug} className={classes.ctaLink}>
      {children}
    </a>
  )
}
