'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

type GetRoomsApiResponse = Array<{
  id: string
  name: string
  description: string
  createdAt: string
}>

export default function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsApiResponse = await response.json()
      return result
    },
  })

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <div className="flex flex-col gap-2">
        {data?.map((room) => {
          return (
            <Link href={`/room/${room.id}`} key={room.id}>
              {room.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
