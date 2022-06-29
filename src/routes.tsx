import { Route, Switch } from 'wouter';

import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';

export default () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};
