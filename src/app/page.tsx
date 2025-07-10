import { CreateRoomForm } from '@/components/room/create-room-form'
import ListRoom from '@/components/room/list-room'

export default function CreateRoom() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />
          <ListRoom />
        </div>
      </div>
    </div>
  )
}
