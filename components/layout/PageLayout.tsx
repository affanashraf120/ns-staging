import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
    children: React.ReactNode
}

const PageLayout = (props: Props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default PageLayout