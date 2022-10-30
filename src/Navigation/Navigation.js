import React from 'react'
import "./Navigation.css"
import NavigationList from './NavigationList'

const Navigation = () => {
  return (
    <div className="Navigation">
        {NavigationList.map((val) => (
            <div key={val.id} className="NavigationElements">
                    {val.text.toUpperCase()}
            </div>
        ))}
    </div>
  )
}

export default Navigation;