import React from 'react'
import UserDetail from './UserDetail'
import ReceivedOrder from './ReceivedOrder'
import FoodItems from './FoodItems'
import HomeAdmin from './HomeAdmin'

export default function PageSpace({page}) {
    switch (page) {
        case 2:
          return (<UserDetail/>)
        case 3:
          return (<ReceivedOrder/>)
        case 4:
          return (<FoodItems/>)
        default:
          return (<HomeAdmin/>)
    }
}
