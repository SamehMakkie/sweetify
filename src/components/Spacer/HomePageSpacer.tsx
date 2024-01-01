import React from 'react'

interface IProps {
    children: React.ReactNode
}

const HomePageSpacer: React.FC<IProps> = ({children}) => {
  return (
    <div className='flex flex-col w-full py-40 px-5 sm:px-8 md:px-24 lg:px-36 gap-40'>{children}</div>
  )
}

export default HomePageSpacer