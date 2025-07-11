import { ArrowLeft, Radio } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { QuestionForm } from '@/components/room/question-form'
import QuestionList from '@/components/room/question-list'
import { Button } from '@/components/ui/button'

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
    <div className="min-h-screen bg-zinc-950">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 size-4" />
                Voltar ao Início
              </Button>
            </Link>
            <Link href={`/room/${params.id}/audio`}>
              <Button className="flex items-center gap-2" variant="secondary">
                <Radio className="size-4" />
                Gravar Áudio
              </Button>
            </Link>
          </div>
          <h1 className="mb-2 font-bold text-3xl text-foreground">
            Sala de Perguntas
          </h1>
          <p className="text-muted-foreground">
            Faça perguntas e receba respostas com IA
          </p>
        </div>

        <div className="mb-8">
          <QuestionForm roomId={params.id} />
        </div>

        <QuestionList roomId={params.id} />
      </div>
    </div>
  )
}
