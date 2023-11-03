import React from 'react'

const ColorCard = ({colorCode, id}) => {
  return (
    <div className="color-card" style={{ background: colorCode }}>
        <p>
            <span>{id}.</span> {colorCode}
        </p>
    </div>
  )
}

export default ColorCard
