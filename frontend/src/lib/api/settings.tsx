import { Setting } from '../../types';

export const useSettings = (): Setting[] => {
  return [
    {
      id: '1',
      code: 'ACTIVE_WIDGETS',
      name: 'Active Widgets',
      typeCode: 'LIST_MULTI',
      value: 'Pomodoro,Timer',
      options: ['Pomodoro', 'Timer'],
    },
    {
      id: '2',
      code: 'MAX_WIDTH',
      name: 'Homepage container max width',
      typeCode: 'LIST_SINGLE',
      value: 'md',
      options: ['sm', 'md', 'lg', 'xl'],
    },

    {
      id: '4',
      code: 'WIDGET_SECTION_TITLE',
      name: 'Widget section title',
      typeCode: 'STRING',
      value: 'Awesome widgets',
      options: [],
    },
    {
      id: '3',
      code: 'WIDGETS_ENABLED',
      name: 'Widgets enabled',
      typeCode: 'BOOLEAN',
      value: false,
      options: [],
    },
  ];
};
