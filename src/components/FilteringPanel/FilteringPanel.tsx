/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { useAppContext } from '../../context/AppContext';
import { useRemoveCompletedTodos } from '../../utils/todoHandlers';
import { Filter } from './Filter/Filter';

export const FilteringPanel: React.FC = () => {
  const context = useAppContext();
  const { isClearButtonDisabled, setIsClearButtonDisabled, todos } = context;
  const removeCompletedTodos = useRemoveCompletedTodos();

  function handleRemoveCompletedTodos() {
    removeCompletedTodos();
  }

  useEffect(() => {
    if (!todos.find(todo => todo.completed)) {
      setIsClearButtonDisabled(true);
    }
  }, [todos]);

  return (
    <footer className="todoapp__filtering-panel" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {todos.filter(todo => !todo.completed).length} items left
      </span>

      <Filter />

      <button
        type="button"
        className="todoapp__clear-completed"
        disabled={isClearButtonDisabled}
        data-cy="ClearCompletedButton"
        onClick={() => handleRemoveCompletedTodos()}
      >
        Clear completed
      </button>
    </footer>
  );
};
