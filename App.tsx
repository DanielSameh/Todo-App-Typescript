import React,{FC} from 'react'
import { TodoProvider} from './src/context/TodoContext'
import OnboardingScreen from './src/screens/OnboardingScreen'


const App: FC = () => {
  return (
<TodoProvider>
    <OnboardingScreen/>
    </TodoProvider>
  )
}

export default App
