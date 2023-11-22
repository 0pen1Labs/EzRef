'use client'
import { createWrapperAndAppendToBody } from '@/utils/util'
import { ReactNode, ReactPortal, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: ReactNode
  wrapperId: string
}

export default function ReactPortal({
  children,
  wrapperId = 'react-portal-wrapper',
}: Props): ReactPortal | null {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false

    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
      console.log(element)
    }
    setWrapperElement(element)

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}
