import axios from 'axios'

    export const baseURL = "https://api.mlab.com/api/1/databases/notification/collections/suggestions?apiKey=lnns9ZsrNRgq7odDP7WSAeFqwaToPRFl"
    export function postsHaveError(bool) {
        return {
            type: 'POSTS_HAVE_ERROR',
            hasError: bool
        };
    }

    export function postsAreLoading(bool) {
        return {
            type: 'POSTS_ARE_LOADING',
            isLoading: bool
        };
    }

    export function postsFetchDataSuccess(posts) {
        return {
            type: 'POSTS_FETCH_DATA_SUCCESS',
            posts
        };
    }

    export function singlePostDataSuccess(post) {
        return {
            type: 'POST_FETCH_DATA_SUCCESS',
            post
        };
    }

	export function FetchPostsData(url) {
	    return (dispatch) => {
	        dispatch(postsAreLoading(true));

	        return axios.get(url)
	            .then((response) => {
	                if (response.status !== 200) {
	                    throw Error(response.statusText);
	                }

	                dispatch(postsAreLoading(false));

	                return response;
	            })
	            .then((response) => dispatch(postsFetchDataSuccess(response.data)))
	            .catch(() => dispatch(postsHaveError(true)));
	    };
	}

    export function FetchSinglePost(url) {
        return (dispatch) => {
            dispatch(postsAreLoading(true));

            return axios.get(url)
                .then((response) => {
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(postsAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(singlePostDataSuccess(response.data)))
                .catch(() => dispatch(postsHaveError(true)));
        };
    }

