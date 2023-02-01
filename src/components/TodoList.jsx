import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from "react-icons/fa";


export default function TodoList({todos, deleteTodo}) {

  if(!todos.length){
    return (
      <Badge p={'2'} colorScheme='green' variant='subtle' borderRadius='lg'> No Todo Right now ✨ </Badge>
    )
  }

  return (
    <VStack
      divider={<StackDivider borderColor='gray.300' />}
      borderColor='gray.200'
      borderWidth='2px'
      p = '4'
      borderRadius='lg'
      width= '100%'
      maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
      alignItems= 'stretch'
      >
      {todos.map( todo => (
        <HStack key={todo.id}>
          <Text fontWeight='bold'> {todo.body} </Text>
          <Spacer/>
          <IconButton icon={<FaTrash />} isRound="true" onClick={() => deleteTodo(todo.id)}></IconButton>
        </HStack>
      ))}
    </VStack>
  )
}
