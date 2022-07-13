
import './App.css';
import './Counter'
import { Heading,Center, Container } from '@chakra-ui/react' 
import Counter from './Counter';



function App() {
  return(
    <Container
    border='1px'
    borderColor='teal'
    borderRadius='lg'
    p='3em'
    mt='6'
    bgGradient='linear(to-b, gray.500, gray.100)'
     width={[
      '100%',  
      '100%',
      '80%' 
       
    ]}>
    <Heading  as='h1'
     size='lg' 
     bgColor='teal.700' 
     bgClip='text'
     m='5' 
     pt='3'>
      <Center > My React/ChakraUI Counter</Center>
      </Heading>
     
      <Counter></Counter>
      
      </Container>
  )   
}

export default App
