'use client'
import { Divider } from '@nextui-org/react'
import ListLinksItem from './ListLinksItem'
import { useEffect, useState } from 'react'
import { auth } from '@clerk/nextjs'

function HomeLinkList() {
  const [list, setList] = useState([])
  useEffect(() => {
    const fetchList = async () => {
      const { getToken } = auth()
      const token = await getToken()
      const response = await fetch(`${process.env.BASE_URL}/v1/api/ref/links`, {
        next: {
          tags: ['links'],
        },
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data.data)
      }
    }

    fetchList()

    return () => {
      fetchList
    }
  }, [])

  return (
    <div className="flex w-4/6 flex-col items-start justify-normal">
      <div className="text-2xl font-light text-foreground/50">Your Links</div>
      <div className="mt-3 flex w-full flex-col items-start justify-start overflow-hidden">
        {list.map((item: any) => {
          return (
            <ListLinksItem
              title={item.name ? item.name : ``}
              createdAt={'10-NOV-23 / 12:08'}
              key={item.id}
              status={item.status}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HomeLinkList
