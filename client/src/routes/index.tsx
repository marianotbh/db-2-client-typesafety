import {lazy, Suspense} from 'react'
import {Route, Switch} from 'react-router'

const Todos = lazy(() => import('../features/todos'))

export default function Routes() {
  return (
    <Suspense fallback="loading...">
      <Switch>
        <Route exact path="/todos" component={Todos} />
      </Switch>
    </Suspense>
  )
}
