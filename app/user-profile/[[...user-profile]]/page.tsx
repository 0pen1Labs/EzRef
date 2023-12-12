'use client'

import { useTheme } from 'next-themes'
import { UserProfile } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { dark } from '@clerk/themes'

const UserProfilePage = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center justify-center py-20">
      <UserProfile
        path="/user-profile"
        routing="path"
        appearance={
          theme === 'dark'
            ? {
                baseTheme: dark,
              }
            : {
                baseTheme: undefined,
              }
        }
      />
    </div>
  )
}

export default UserProfilePage
