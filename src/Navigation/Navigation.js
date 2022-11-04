import React from 'react'
import "./style.js"
import NavigationList from './NavigationList'
import { Navigation, NavigationElements } from './style.js'

const NavigationContainer = () => {
  return (
    <Navigation>
        {NavigationList.map((val) => (
            <NavigationElements key={val.id} className="NavigationElements">
                    {val.text.toUpperCase()}
            </NavigationElements>
        ))}
    </Navigation>
  )
}

export default NavigationContainer;