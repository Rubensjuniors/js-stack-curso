import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Response = {
  userName: string
}

const response: Response = {
  userName: 'Rubens'
}

const Password = () => (
    <>
      {response.user.name}
    <div className="space-y-1">
    <Label htmlFor="name">Name</Label>
    <Input id="name" defaultValue="Pedro Duarte" />
  </div>
  <div className="space-y-1">
    <Label htmlFor="username">Username</Label>
    <Input id="username" defaultValue="@peduarte" />
  </div>
    </>
  )

export default Password
