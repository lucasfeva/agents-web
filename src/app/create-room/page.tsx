'use client'

import { useQuery } from '@tanstack/react-query'

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
      <h1>Create Room</h1>
      {isLoading && <p>Loading...</p>}
      <div>
        {data?.map((room) => {
          return <p key={room.id}>{room.name}</p>
        })}
      </div>
    </div>
  )
}
