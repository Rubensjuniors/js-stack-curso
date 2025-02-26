import { SidebarTrigger } from './ui/sidebar'

type Response = {
  userName: string
}

export function Appbar() {
  const response: Response = {
    userName: 'Rubens'
  }

  return (
    <header className="border-b flex items-center bg-background h-[49px] sticky top-0 z-50 px-4">
      <SidebarTrigger />

      <span>Ola, {response.userName}</span>
    </header>
  )
}
