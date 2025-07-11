'use client'

import { useRoomQuestions } from '@/http/use-room-questions'
import { QuestionItem } from './question-item'

interface QuestionListProps {
  roomId: string
}

export default function QuestionList(props: QuestionListProps) {
  const { data, error } = useRoomQuestions(props.roomId)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {error && <p className="text-destructive">Erro ao carregar perguntas</p>}
      {data?.map((question) => {
        return <QuestionItem key={question.id} question={question} />
      })}
    </div>
  )
}
