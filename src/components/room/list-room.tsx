'use client'

import { ArrowRight, LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useRooms } from '@/http/use-rooms'
import { dayjs } from '@/lib/dayjs'

export default function ListRoom() {
  const { data, isLoading } = useRooms()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>Veja as salas criadas recentemente.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            Carregando salas <LoaderCircle className="animate-spin" />
          </div>
        )}
        {data?.map((room) => {
          return (
            <Link
              className="flex items-center justify-between rounded-lg border p-3 transition-colors duration-400 hover:bg-accent/50"
              href={`/room/${room.id}`}
              key={room.id}
            >
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="text-xs" variant="secondary">
                    {room.questionsCount} pergunta(s)
                  </Badge>
                  <Badge className="text-xs" variant="secondary">
                    {dayjs(room.createdAt).toNow()}
                  </Badge>
                </div>
              </div>
              <span className="flex items-center gap-1 text-sm">
                Entrar
                <ArrowRight className="size-3" />
              </span>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}
