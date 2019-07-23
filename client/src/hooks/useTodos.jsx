import { useReducer } from 'react';

export const useTodos = initialState => {
	const actionTypes = {
		ADD_TODO    : 'ADD_TODO',
		EDIT_TODO   : 'EDIT_TODO',
		DELETE_TODO : 'DELETE_TODO',
	};
	const rootReducer = (state, action) => {
		switch (action.type) {
			case actionTypes.ADD_TODO:
				return [ ...state, action.payload ];
			case actionTypes.EDIT_TODO:
				return state.map(todo => {
					if (todo.id === action.payload.id) {
						return action.payload;
					} else {
						return todo;
					}
				});
			case actionTypes.DELETE_TODO:
				return state.filter(todo => todo.id !== action.payload);
			default:
				return state;
		}
	};

	const addTodo = todo => {
		const newTodo = {
			id       : Date.now(),
			todo,
			complete : false,
		};
		dispatch({
			type    : actionTypes.ADD_TODO,
			payload : newTodo,
		});
	};

	const editTodo = todo => {
		dispatch({
			type    : actionTypes.EDIT_TODO,
			payload : todo,
		});
	};

	const deleteTodo = id => {
		dispatch({
			type    : actionTypes.DELETE_TODO,
			payload : id,
		});
	};

	const [ state, dispatch ] = useReducer(rootReducer, initialState);

	return [ state, addTodo, editTodo, deleteTodo ];
};
