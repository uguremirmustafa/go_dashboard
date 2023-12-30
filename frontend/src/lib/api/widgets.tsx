import { Widget } from '../../types';

export const useWidgets = (): Widget[] => {
  const items: Widget[] = [
    {
      id: '1',
      name: 'Json Compare',
      description: 'Compare two json objects.',
    },
  ];

  return items;
};
