'use client';

import React from 'react';

export interface KanbanTask {
  id: number;
  title: string;
  col: 'To Do' | 'In Progress' | 'Done';
  priority: string;
}

interface TaskKanbanColumnProps {
  columnName: 'To Do' | 'In Progress' | 'Done';
  tasks: KanbanTask[];
  onCycleStatus: (taskId: number, current: KanbanTask['col']) => void;
}

export const TaskKanbanColumn: React.FC<TaskKanbanColumnProps> = ({
  columnName,
  tasks,
  onCycleStatus
}) => {
  const columnTasks = tasks.filter((t) => t.col === columnName);

  return (
    <div className="p-3.5 rounded-xl bg-[#171C26] border border-white/10 space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold text-[#A1A1AA]">
        <span>{columnName}</span>
        <span className="w-5 h-5 rounded-full bg-[#11151D] flex items-center justify-center text-white text-[10px]">
          {columnTasks.length}
        </span>
      </div>
      <div className="space-y-2">
        {columnTasks.map((task) => (
          <div
            key={task.id}
            className="p-3 rounded-lg bg-[#11151D] border border-white/5 space-y-2 text-xs"
          >
            <p className="font-medium text-white">{task.title}</p>
            <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]">
              <span className="text-amber-400">{task.priority}</span>
              <button
                onClick={() => onCycleStatus(task.id, task.col)}
                className="text-[10px] text-[#57D6C5] hover:underline"
              >
                Move →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
