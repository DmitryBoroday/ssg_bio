'use client'
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'

type Props = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode
}

export default function Dialog({ title, onClose, onOk, children }: Props) {
    const SearchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = SearchParams.get('showDialog')
  
  useEffect(() => {
    if (showDialog === 'y') {
        dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
      }
    })

  return (
    <div>
      
    </div>
  )
}
