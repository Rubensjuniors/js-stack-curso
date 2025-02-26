import { lazy, Suspense } from 'react'

import ErrorBoundary from '@/components/ErrorBoundary'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

const Password = lazy(() => import ('./password'))
const Account = lazy(() => import ('./Account'))

export default function Home() {
  return (
    <>
    <button onClick={() => {throw new Error('This is your first error!')}}>Break the world</button>;
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Suspense fallback={(
              <h1>Loading...</h1>
            )}
            >
              <Account />

            </Suspense>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ErrorBoundary fallback={(<h1>Deu Ruim</h1>)}>
          <Suspense fallback={(
              <h1>Loading...</h1>
            )}
          >
            <Password />

            </Suspense>

            </ErrorBoundary>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </>
  )
}
