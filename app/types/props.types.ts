import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RouteType = {
    Home: undefined;
    Playing: undefined;
    Categories: undefined;
    Options: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteType>

export type Action = {
    type: string;
    payload: any;
}

export type ButtonMenuPropsType = {
    text: string;
    func: () => void;
}