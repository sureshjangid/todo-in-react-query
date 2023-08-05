import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

const createTodo = (text) => {
  return () => {
    fetch('http://localhost:8000/todo/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: text }),
    })
  }
}
const Form = () => {
  const [text, setText] = useState('')
const queryClient = useQueryClient();
  const todomutation = useMutation(createTodo(text), {
    onSuccess: () => {
      console.log('success')
      queryClient.invalidateQueries(['todo'])
    },
    onError: (error) => {
      console.log(error, 'error')
    },
  })
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="button"
        onClick={() => todomutation.mutate()}
        value="create"
      />
    </div>
  )
}

export default Form
