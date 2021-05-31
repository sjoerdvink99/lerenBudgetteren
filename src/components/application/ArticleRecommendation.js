import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Typography } from '@material-ui/core'
import {db} from '../../firebase'
import './ArticleRecommendation.css'

export default function ArticleRecommendation() {
    const history = useHistory()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        db.collection('articles')
            .limit(4)
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setArticles(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title,
                    timestamp: doc.data().timestamp,
                })))
            )
    }, [])

    return (
        <div className='articleRecommendation'>
           <Typography variant='h5'>Articles for you</Typography>
           {articles.map(({id, title, timestamp}) => (
               <div key={id} className='article' onClick={() => history.push(`education/${id}`)}>
                   <Typography variant='body1'>{title}</Typography>
                   <Typography variant='body2'>{new Date(timestamp?.toDate()).toLocaleDateString("eu-NL", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}</Typography>
               </div>
           ))}
        </div>
    )
}