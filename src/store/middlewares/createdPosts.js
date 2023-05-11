import { addData } from "../slices/posts/postsSlice";


export const addCreatedPosts = store => next => action => {

    if (action.type === 'createdPosts/addCrPosts' && action.payload.img.length) {

        store.dispatch(addData(action.payload))
        
    }

    next(action)
}


export const addCrPostInUser = store => next => action => {

    console.log(store.getState().users.usersData.find(user => user.id === action.payload?.currentId));
    if (action.type === 'createdPosts/addCrPosts') {
    }

    next(action)
}