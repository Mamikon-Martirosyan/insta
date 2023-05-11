import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import { useDispatch } from 'react-redux'
import { addComment } from '../../store/slices/posts/postsSlice'
import { withShowComments } from '../../hoc/withShowComments'

function Post({id, img, name, likesCount, postText, timeAgo, comments, isShow, openComments}) {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addComment({
            postId: id,
            username: 'test-name',
            body: formRef.current[0].value
        }))

        formRef.current.reset()
    }

  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={img} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            <p className="description"><span>{name} </span> {postText}</p>
            <p className="post-time">{timeAgo}</p>
            {
                isShow ? 
                comments.map(comment => (
                    <p key={comment.id} className="description"><span>{comment.username} </span> {comment.body}</p>
                )) : <h1 onClick={openComments} style={{cursor: 'pointer'}}>Show all comments</h1>
            }
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input onFocus={openComments} type="text" className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
            </div>
        </form>
    </div>
  )
}

export default withShowComments(Post)