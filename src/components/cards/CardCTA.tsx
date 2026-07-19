import type { ReactNode } from 'react'
import type { CardCTAVariant } from '../../types/card'
import { isCompact, resolveCardClasses, useResolvedVariant } from './CardVariantContext'

type CardCTAProps = {
  href: string
  variant?: CardCTAVariant
  children: ReactNode
}

export function CardCTA({ href, variant = 'link', children }: CardCTAProps) {
  const resolvedVariant = useResolvedVariant()

  if (isCompact(resolvedVariant)) {
    return null
  }

  const classes = resolveCardClasses(resolvedVariant)

  if (variant === 'button') {
    return (
      <a href={href} className={classes.ctaButton}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} className={classes.ctaLink}>
      {children}
    </a>
  )
}
