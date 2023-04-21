import express from "express";
import usersRoutes from './routes/users.js'
import postsRoutes from './routes/posts.js'
import likesRoutes from './routes/likes.js'
import commentsRoutes from './routes/comments.js'
import authRoutes from './routes/auth.js'

const app = express();

app.use('/api/users', usersRoutes)
app.use('/api/posts', postsRoutes)
app.use('/api/likes', likesRoutes)
app.use('/api/comments', commentsRoutes)
app.use('/api/auth', authRoutes)


app.listen(8800,()=>{
    console.log('serveur est demarrer')
})