import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import GitInssues from '~/pages/GitIssues';

const Routes = () => createAppContainer(
  createSwitchNavigator({
    GitInssues,
  }),
);

export default Routes;
