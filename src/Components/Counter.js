import { HStack } from "@chakra-ui/react";
import { useState } from "react";
import { Button, VStack, Center} from '@chakra-ui/react';
import Card from './Card'

function Counter (){

    const [count, setCount]= useState(0);

return (
    <VStack spacing='24px' alignItems='center' >
        <HStack spacing='1em' justifyContent='space-evenly' >
<Card> 
<Button colorScheme='green' p={8}
onClick={()=>setCount(count+1)}
>Increment</Button>
</Card>
<Card>
<Button colorScheme='red' p={8}
onClick={()=>setCount(count-1)}
disabled={count===0}
>Decrement</Button>
</Card>
<Card>
<Button colorScheme='teal' p={8}
onClick={()=>setCount(0)}
disabled={count===0}
>Reset</Button>
</Card>

</HStack>
<Card>
<Center m='auto' p='3'>{count} </Center>
</Card>
</VStack>
)}

export default Counter;