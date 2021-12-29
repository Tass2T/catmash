import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import './home.css'

export default function Home({ data, setData }) {

    const [count, setCount] = useState(0)
    const [firstImage, setFirstImage] = useState(false)
    const [secondImage, setSecondImage] = useState(false)

    const setRandomImage = () => {
        setFirstImage(data[Math.round(Math.random() * data.length)])
        setSecondImage(data[Math.round(Math.random() * data.length)])
    }

    const handleImageClick = (number) => {
        setCount(count + 1)
    }

    useEffect(() => {
        if (data) setRandomImage()
    }, [data])

    return (
        <div id="main">
            {firstImage && <div id="cat-left">
                <img className='catImage' src={firstImage.url} />
            </div>}
            {secondImage && <div id="cat-right">
                <img className='catImage' src={secondImage.url} />
            </div>}
        </div>
    )
}