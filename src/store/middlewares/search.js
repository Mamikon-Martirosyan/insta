export const ignoreSearchSpace = state => next => action => {   
    if (action.type === 'search/toggleSearch') {
         action.payload = action.payload.replaceAll(' ', '')
    }

    next(action)
}


export const ignoreAllCapitalSize = state => next => action => {

    if (action.type === 'search/toggleSearch') {
         action.payload = action.payload.toLowerCase()
    }

    next(action)
}