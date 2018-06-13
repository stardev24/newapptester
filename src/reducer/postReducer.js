export function postsHaveError(state = false, action) {
    switch (action.type) {
        case 'POSTS_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function postsAreLoading(state = false, action) {
    switch (action.type) {
        case 'POSTS_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function postsData(state = [], action) {
    switch (action.type) {
        case 'POSTS_FETCH_DATA_SUCCESS':
            return action.posts;

        default:
            return state;
    }
}

export function singlepostData(state = [], action) {
    switch (action.type) {
        case 'POST_FETCH_DATA_SUCCESS':
            return action.post;

        default:
            return state;
    }
}