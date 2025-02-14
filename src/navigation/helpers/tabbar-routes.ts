import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import { BottomTabBarOptionByRouteName } from "~navigation/helpers/tabbar-options";
import { RouteNames } from "../route-names";
import HomeStack from "../stacks/home";
import ProfileStack from "../stacks/profile";
import { BottomTabParamList } from "../types";
import AuthStack from "~navigation/stacks/auth";

export const BottomTabBarRoutes: Array<
  RouteConfig<
    BottomTabParamList,
    keyof BottomTabParamList,
    StackNavigationState<BottomTabParamList>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >
> = [
  {
    options: BottomTabBarOptionByRouteName[RouteNames.homeStack],
    name: RouteNames.homeStack,
    component: HomeStack,
  },
  {
    options: BottomTabBarOptionByRouteName[RouteNames.profileStack],
    name: RouteNames.profileStack,
    component: ProfileStack,
  },
  {
    options: BottomTabBarOptionByRouteName[RouteNames.login],
    name: RouteNames.login,
    component: AuthStack,
  }
];
