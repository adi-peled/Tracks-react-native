import { NavigationActions } from 'react-navigation'

let navigator;


export const setNavigator = (nav) => {
    navigator = nav
}


export const navigate = (routeName, params) => {
    console.log('here navigate', { NavigationActions });
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}