import { Box } from '@chakra-ui/react'

function Card(props){
    return (
<Box display='flex' alignItems='center' textAlign='center' bg='gray'      p={2}  color='white'  borderWidth='1px' borderRadius='lg'>
  {props.children}
</Box>
    )

}

export default Card;