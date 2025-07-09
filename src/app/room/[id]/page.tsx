import { redirect } from 'next/navigation'

interface RoomPageProps {
  params: {
    id: string
  }
}

export default function Room({ params }: RoomPageProps) {
  if (!params.id) {
    return redirect('/create-room')
  }

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}
