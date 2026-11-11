'use client';

import React, { useState } from 'react';
import { TaskKanbanColumn, KanbanTask } from './TaskKanbanColumn';

const INITIAL_TASKS: KanbanTask[] = [
  { id: 1, title: 'Implement Auth with JWT', col: 'In Progress', priority: 'High' },
  { id: 2, title: 'Optimize Bundle with Dynamic Imports', col: 'To Do', priority: 'Medium' },
  { id: 3, title: 'Design System Typography Audit', col: 'Done', priority: 'Low' }
];

export const TaskKanbanPreview: React.FC = () => {
  const [tasks, setTasks] = useState<KanbanTask[]>(INITIAL_TASKS);
  const [newTaskInput, setNewTaskInput] = useState('');

  const handleAddTask = () => {
    if (newTaskInput.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTaskInput.trim(), col: 'To Do', priority: 'High' }
      ]);
      setNewTaskInput('');
    }
  };

  const handleCycleStatus = (taskId: number, current: KanbanTask['col']) => {
    const nextCol: Record<KanbanTask['col'], KanbanTask['col']> = {
      'To Do': 'In Progress',
      'In Progress': 'Done',
      'Done': 'To Do'
    };
    setTasks(tasks.map((t) => (t.id === taskId ? { ...t, col: nextCol[current] } : t)));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h4 className="font-bold text-white">Sprint 14 Kanban Board</h4>
          <p className="text-xs text-[#A1A1AA]">Reactive State Synchronization</p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Add rapid task..."
            value={newTaskInput}
            onChange={(e) => setNewTaskInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
            className="bg-[#171C26] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#059669]"
          />
          <button
            onClick={handleAddTask}
            className="px-3 py-1.5 rounded-lg bg-[#059669] text-white text-xs font-semibold hover:bg-[#047857]"
          >
            + Add
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(['To Do', 'In Progress', 'Done'] as const).map((col) => (
          <TaskKanbanColumn
            key={col}
            columnName={col}
            tasks={tasks}
            onCycleStatus={handleCycleStatus}
          />
        ))}
      </div>
    </div>
  );
};
