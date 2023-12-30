import { Widget } from '../../types';

export const useWidgets = (): Widget[] => {
  const items: Widget[] = [
    {
      id: '1',
      name: 'Json Compare',
      description: 'Compare two json objects.',
      icon: 'iconamoon:compare-duotone',
      path: 'json-compare',
    },
    {
      id: '2',
      name: 'Base64 Resolver',
      description: 'See the contents of base64 strings live',
      icon: 'mdi:cpu-64-bit',
      path: 'base64-resolver',
    },
  ];

  return items;
};
