import { HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

export default function AddTodo() {

  function handleSubmit(params) {
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='4'>
        <Input variant='filled' placeholder="what do you need todo?"></Input>
        <Button colorScheme='pink' px='8' rounded='lg' >Add Task</Button>
      </HStack>
    </form>
  )
}
