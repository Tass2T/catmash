import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home({ data, setData, count, setCount }) {

    
    const [firstImage, setFirstImage] = useState(false)
    const [secondImage, setSecondImage] = useState(false)

    const setRandomImage = () => {
        let randomKey = Math.round(Math.random() * data.length)
        let randomKeyTwo = Math.round(Math.random() * data.length)
        setFirstImage(data[randomKey - 1])
        setFirstImage(firstImage => ({...firstImage, key : randomKey}))
        setSecondImage(data[randomKeyTwo - 1])
        setSecondImage(secondImage => ({...secondImage, key: randomKeyTwo}))
    }

    const handleImageClick = (number) => {
        setCount(count + 1)
        const newData = data;
        newData.find(x => x.id === number).vote++
        setData(newData)
    }

    useEffect(() => {
        if (data) setRandomImage()
    }, [data,count])

    return (
        <div id="main">
            <h1 id="app_title">CATMASH</h1>
            <h2>Cliquez pour voter pour le chat le plus mignon!</h2>
            {firstImage && <div id="cat-left">
                <img className='catImage' src={firstImage.url} onClick={() => handleImageClick(firstImage.id)} alt="first random cat"/>
            </div>}
            {secondImage && <div id="cat-right">
                <img className='catImage' src={secondImage.url} onClick={() => handleImageClick(secondImage.id)}  alt="second random cat"/>
            </div>}
            <Link to="list" className='link'>
                <div className='page_link'>
                    <p>VOIR LES PLUS BEAUX CHATS </p>
                    <p>{count} votes</p>
                </div>
            </Link>
            
        </div>
    )
}