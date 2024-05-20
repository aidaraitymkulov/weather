import { useEffect } from 'react'
export const Product = () => {
    useEffect(() => {
        console.log('Я родился')
        return () => {
            console.log('Я умер')
        }
    }, [])
    return(
        <>
        This is ProductPage
        </>
    )
}