import React, { useState } from 'react'

interface Props {
  headers?: Array<string>
  children?: Array<React.ReactNode>
}

const Tabs = ({headers, children}: Props) => {
  const [activeTab, setActiveTab] = useState(0)

  const onTabChange = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div>
      <div className='flex'>
        {
          headers?.map((header, index) => (
            index === activeTab ?
            <div className='border-b-2 p-2 border-black cursor-pointer' key={index} onClick={() => onTabChange(index)}>{header}</div> :
            <div className='p-2 cursor-pointer' key={index} onClick={() => onTabChange(index)}>{header}</div>
          ), [])
        }
      </div>
      {
        children && children[activeTab]
      }
    </div>
  )
}

export default Tabs