import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import type { FC } from 'react'
import '@/App.css'

const App: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <form>
      <Input />
      <Button>送信</Button>
    </form>
  )
}

export default App
