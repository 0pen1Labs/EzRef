'use client'
import ReactPortal from './ReactPortal'
import { useHotKey } from '@/hooks/useHotKey'
import { Card, CardBody, CardHeader, Divider, Kbd } from '@nextui-org/react'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  title?: string
  onClose: () => void
}
function Modal({ children, isOpen, onClose, title }: Props) {
  useHotKey(['escape'], onClose)

  if (!isOpen) return null

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black/20 opacity-80 backdrop-blur-lg dark:bg-background">
        <div className="z-50 min-w-fit overflow-hidden rounded-md bg-background text-foreground backdrop-blur-none">
          <Card
            className="overflow-hidden p-3 text-foreground"
            radius="sm"
            shadow="sm"
          >
            <CardHeader className="flex items-center justify-between p-2">
              {title && <div className="text-md font-semibold">{title}</div>}
              <Kbd
                keys={['escape']}
                onClick={onClose}
                className="h-5 rounded hover:cursor-pointer"
              >
                Esc
              </Kbd>
            </CardHeader>
            <Divider />
            <CardBody className="p-2">{children}</CardBody>
          </Card>
        </div>
      </div>
    </ReactPortal>
  )
}

export default Modal
