import { useAppContext } from '../context/AppContext';
import { Filter } from '../types/Filter';

export function useFilterTodos(filterType: Filter) {
  const { setTodos } = useAppContext();

  function filterTodos() {
    switch (filterType) {
      case 'active':
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
        break;
      case 'completed':
        setTodos(prevTodos => prevTodos.filter(todo => todo.completed));
        break;
      default:
        setTodos(prevTodos => prevTodos);
        break;
    }
  }

  return filterTodos;
}
