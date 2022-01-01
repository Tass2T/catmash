import { useEffect, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home({ data, setData, count, setCount }) {

    
    const [firstImage, setFirstImage] = useState(false)
    const [secondImage, setSecondImage] = useState(false)

    const setRandomImage = () => {
        let randomKey = Math.round(Math.random() * data.length - 1)
        setFirstImage(data[randomKey])
        setFirstImage(firstImage => ({...firstImage, key : randomKey}))
        randomKey = Math.round(Math.random() * data.length - 1)
        setSecondImage(data[randomKey])
        setSecondImage(secondImage => ({...secondImage, key: randomKey}))
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
            {firstImage && <div id="cat-left">
                <img className='catImage' src={firstImage.url} onClick={() => handleImageClick(firstImage.id)} alt="first random cat"/>
            </div>}
            {secondImage && <div id="cat-right">
                <img className='catImage' src={secondImage.url} onClick={() => handleImageClick(secondImage.id)}  alt="second random cat"/>
            </div>}
            <div className='page_link'>
                <Link to="list"><p>VOIR LES PLUS BEAUX CHATS </p></Link>
                <p>{count} votes</p>
            </div>
        </div>
    )
}