import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useTodos } from './useTodos';

export const useStore = () => {
	const [ testKeyValue, getKeyValue, setKeyValue ] = useLocalStorage('todos');
	const initialState = () => (testKeyValue() ? getKeyValue() : []);
	const [ state, addTodo, editTodo, removeTodo ] = useTodos(initialState);

	useEffect(
		() => {
			if (testKeyValue()) {
				const localStore = getKeyValue();
				if (state !== localStore) {
					setKeyValue(state);
				}
			} else {
				setKeyValue([]);
			}
		},
		[ state ],
	);

	return [ state, addTodo, editTodo, removeTodo ];
};
