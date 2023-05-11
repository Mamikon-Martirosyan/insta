import React, { useRef } from 'react';
import IMAGES from '../../images';
import './CreatePost.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCrPosts, selectCrPosts } from '../../store/slices/createdPosts/createdPostsSlice';
import { selectUsers } from '../../store/slices/users/usersSlice';
const CreatePost = () => {
    const formRef = useRef(null)
    const createdPosts = useSelector(selectCrPosts)
    const dispatch = useDispatch()
    const { currentUser } = useSelector(selectUsers)


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addCrPosts({
            id: new Date().getTime().toString(),
            currentId: currentUser?.id,
            img: formRef.current[0].value,
            name: currentUser?.username,
            likesCount: Math.round(Math.random() * 500 + 300),
            postText: 'Hello World',
            timeAgo: Math.round(Math.random() * 7 + 2) + ' Minutes Ago',
            comments: [
                        {id: new Date().getTime().toString(), username: currentUser?.username, body: 'ffdsjfhdsfsdf'},
                        {id: new Date().getTime().toString(), username: currentUser?.username, body: 'ffdsjfhdsfsdf'},
                        {id: new Date().getTime().toString(), username: currentUser?.username, body: 'ffdsjfhdsfsdf'},
                        {id: new Date().getTime().toString(), username: currentUser?.username, body: 'ffdsjfhdsfsdf'}
            ]
        }))

        formRef.current.reset()

    }


    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form style={{marginTop: '50px'}} onSubmit={handleSubmit} ref={formRef}>
                <input type="text" placeholder='img'/><br/><br/>
                <label className="input-file">
                    <input type="submit" style={{display: 'none'}} name="file"/>		
                    <span>Выберите файл</span>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;
