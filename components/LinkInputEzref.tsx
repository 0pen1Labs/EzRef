'use client'
import { GlobeIcon, MagicWandIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import { setDomain, setLinkCode } from '@/redux/slices/GenerateLinkSlice'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'

const formId = nanoid(16)

type Props = {
  type: 'ezref' | 'custom'
}
function LinkInputEzref({ type }: Props) {
  const randomFormId = useSelector(
    (state) => state.rootReducer.referralLink.linkCode,
  )
  const domain = useSelector((state) => state.rootReducer.referralLink.domain)
  const dispatch = useDispatch()

  useEffect(() => {
    if (randomFormId === '') {
      dispatch(setLinkCode(formId))
    }
  }, [])
  return (
    <div className="peer/endDomain flex flex-row rounded-md border border-foreground/20 bg-background px-4 py-1">
      <div className="flex flex-row items-center space-x-4">
        <GlobeIcon className="h-6 w-6 text-foreground" />
        {type == 'ezref' ? (
          <div className="flex flex-row space-x-1">
            <span className="text-lg font-light text-foreground/60">
              {`https://${domain}`}
            </span>
            <span className="rotate-12 text-lg font-thin text-foreground/60">
              |
            </span>
          </div>
        ) : (
          <div className="flex flex-row items-center space-x-1">
            <input
              id="domain"
              type="text"
              name="domain"
              value={domain}
              onChange={(e) => dispatch(setDomain(e.target.value))}
              className="w-full rounded-md border border-foreground/10 bg-gray-50 p-1 text-base font-light text-foreground/80 outline-none hover:border-foreground/20 dark:bg-foreground/5"
            />
            <span className="rotate-12 text-lg font-thin text-foreground/60">
              |
            </span>
          </div>
        )}
      </div>
      <div className="ms-2 flex w-full flex-grow flex-row items-center justify-between space-x-4">
        <input
          id="endDomain"
          type="text"
          name="endDomain"
          value={randomFormId}
          onChange={(e) => dispatch(setLinkCode(e.target.value))}
          className="w-full rounded-md border border-foreground/10 bg-gray-50 p-1 text-base font-light text-foreground/80 outline-none hover:border-foreground/20 dark:bg-foreground/5"
        />
        <button
          type="submit"
          className="flow-row group group ms-2 flex items-center border-none bg-transparent outline-none"
        >
          <span className="text-base font-bold text-primary/80 group-hover:text-primary">
            Generate
          </span>
          <MagicWandIcon className="mx-4 h-10 w-5 text-foreground opacity-80 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  )
}

export default LinkInputEzref
