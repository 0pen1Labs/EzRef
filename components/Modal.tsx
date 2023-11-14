type Props = {
  children: React.ReactNode
  className?: string
}
function Modal({ children, className = '' }: Props) {
  return (
    <div className={`absolute z-50 bg-gray-400 blur-md ${className}`}>
      {children}
    </div>
  )
}

export default Modal
