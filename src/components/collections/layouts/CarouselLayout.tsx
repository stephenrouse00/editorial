import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import type { CardCollectionItem } from '../../../types/card'
import { cn } from '../../cards/cardVariants'
import { ContentCard } from '../../cards/ContentCard'

type CarouselLayoutProps = {
  items: CardCollectionItem[]
  visibleSlides?: 1 | 2 | 3 | 4
  adjacentSlides?: 'hidden' | 'peek'
}

const GAP_PX = 16

function getPeekFactor(visibleSlides: number): number {
  return visibleSlides === 1 ? 0.85 : 0.92
}

function getSlideWidthPercent(
  visibleSlides: number,
  adjacentSlides: 'hidden' | 'peek',
): string {
  const gapTotal = (visibleSlides - 1) * GAP_PX

  if (adjacentSlides === 'hidden') {
    return `calc((100% - ${gapTotal}px) / ${visibleSlides})`
  }

  const peekFactor = getPeekFactor(visibleSlides)
  return `calc(((100% - ${gapTotal}px) / ${visibleSlides}) * ${peekFactor})`
}

export function CarouselLayout({
  items,
  visibleSlides = 1,
  adjacentSlides = 'hidden',
}: CarouselLayoutProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<Array<HTMLDivElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const peek = adjacentSlides === 'peek'
  const slideWidth = getSlideWidthPercent(visibleSlides, adjacentSlides)
  const maxIndex = Math.max(0, items.length - visibleSlides)

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex))
    slideRefs.current[clamped]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: peek ? 'center' : 'start',
    })
    setActiveIndex(clamped)
  }, [maxIndex, peek])

  useEffect(() => {
    const track = trackRef.current
    if (!track) {
      return
    }

    const handleScroll = () => {
      const trackRect = track.getBoundingClientRect()
      const trackCenter = trackRect.left + trackRect.width / 2

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      slideRefs.current.forEach((slide, index) => {
        if (!slide) {
          return
        }

        const slideRect = slide.getBoundingClientRect()
        const slideCenter = slideRect.left + slideRect.width / 2
        const distance = Math.abs(slideCenter - trackCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(Math.min(closestIndex, maxIndex))
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [maxIndex, items.length])

  const handlePrevious = () => scrollToIndex(activeIndex - 1)
  const handleNext = () => scrollToIndex(activeIndex + 1)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      handlePrevious()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      handleNext()
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Page carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={cn(
          'flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory',
          '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          peek ? 'px-[7.5%]' : '',
        )}
      >
        {items.map(({ page, variant }, index) => (
          <div
            key={page.id}
            ref={(element) => {
              slideRefs.current[index] = element
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
            className={cn(
              'shrink-0 snap-always',
              peek ? 'snap-center' : 'snap-start',
            )}
            style={{
              flexBasis: slideWidth,
              minWidth: slideWidth,
            }}
          >
            <ContentCard page={page} variant={variant} />
          </div>
        ))}
      </div>

      {items.length > visibleSlides && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
              className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex >= maxIndex}
              aria-label="Next slide"
              className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Next
            </button>
          </div>
          <p className="text-sm text-neutral-500" aria-live="polite">
            {activeIndex + 1}–{Math.min(activeIndex + visibleSlides, items.length)} of{' '}
            {items.length}
          </p>
        </div>
      )}
    </div>
  )
}
