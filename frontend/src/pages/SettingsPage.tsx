/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import { useSettings } from '../lib/api/settings';
import { Setting } from '../types';
import { Controller, useForm } from 'react-hook-form';

function SettingsPage(): JSX.Element {
  const settings = useSettings();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <FormComponent items={settings} />
      </Grid>
    </Grid>
  );
}

export default SettingsPage;

interface FormProps {
  items: Setting[];
}

const FormComponent: React.FC<FormProps> = ({ items }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: items.reduce((acc, item) => {
      acc[item.code] = item.value;
      return acc;
    }, {} as Record<string, any>),
  });

  const onSubmit = (data: Record<string, any>) => {
    console.log(data); // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        {items.map((item) => {
          switch (item.typeCode) {
            case 'LIST_MULTI':
              return (
                <Controller
                  key={item.code}
                  name={item.code}
                  control={control}
                  render={({ field }) => {
                    const valStr = field.value as string;
                    const val = valStr.length === 0 ? [] : valStr.split(',');

                    return (
                      <FormControl>
                        <Autocomplete
                          filterSelectedOptions
                          multiple
                          id={item.code}
                          options={item.options}
                          defaultValue={val}
                          value={val}
                          onChange={(_e, value) => {
                            if (value.length > 0) {
                              field.onChange(value.join(','));
                            } else {
                              field.onChange('');
                            }
                          }}
                          renderInput={(params) => (
                            <TextField {...params} label={item.name} size="small" />
                          )}
                        />
                      </FormControl>
                    );
                  }}
                />
              );
            case 'BOOLEAN':
              return (
                <Controller
                  key={item.code}
                  name={item.code}
                  control={control}
                  render={({ field }) => {
                    return (
                      <FormControl>
                        <FormControlLabel
                          label={item.name}
                          control={
                            <Checkbox
                              id={item.code}
                              value={field.value}
                              onChange={field.onChange}
                            />
                          }
                        />
                      </FormControl>
                    );
                  }}
                />
              );
            case 'LIST_SINGLE':
              return (
                <Controller
                  key={item.code}
                  name={item.code}
                  control={control}
                  render={({ field }) => {
                    return (
                      <FormControl>
                        <Autocomplete
                          size="small"
                          id={item.code}
                          options={item.options}
                          defaultValue={field.value}
                          value={field.value}
                          onChange={(_e, value) => {
                            field.onChange(value);
                          }}
                          renderInput={(params) => (
                            <TextField {...params} label={item.name} size="small" />
                          )}
                          disableClearable
                        />
                      </FormControl>
                    );
                  }}
                />
              );
            case 'STRING':
              return (
                <Controller
                  key={item.code}
                  name={item.code}
                  control={control}
                  render={({ field }) => {
                    return (
                      <FormControl>
                        <TextField {...field} label={item.name} />
                      </FormControl>
                    );
                  }}
                />
              );
            case 'LIST_ORDERED':
              return (
                <Controller
                  key={item.code}
                  name={item.code}
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <pre>{JSON.stringify(field, null, 2)}</pre>
                      </div>
                    );
                  }}
                />
              );
            default:
              return null;
          }
        })}
        <button type="submit">Submit</button>
      </Stack>
    </form>
  );
};
