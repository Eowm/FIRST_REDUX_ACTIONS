import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const addComment = text => {
	return {
	type: 'ADD_COMMENT',
	text,
	id: uuid.v4()
	}
}

const boundAddComment = text => dispatch(addComment(text));



const removeComment = id => {
	return {
	type: 'REMOVE_COMMENT',
	id
	}
}

const boundRemoveComment = id => dispatch(removeComment(id));



const editComment = (text, id) => {
	return {
		type: 'EDIT_COMMENT',
		text,
		id
	}
}

const boundEditComment = (text, id) => dispatch(editComment(text, id));



const thumbUpComment = (id, ups) => {
	return {
		type: 'THUMB_UP_COMMENT',
		id,
		ups: ++ups
	}
}

const boundthumbUpComment = (id, ups) => dispatch(thumbUpComment(id, ups));



const thumbDownComment = (id, downs) => {
	return {
		type: 'THUMB_DOWN_COMMENT',
		id,
		downs: ++downs
	}
}

const boundthumbDownComment = (id, thumbs) => dispatch(thumbDownComment(id, downs));

