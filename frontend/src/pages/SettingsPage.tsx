import { Button, Grid } from '@mui/material';
import { useSettings } from '../lib/api/settings';
import SettingForm from '../components/form/SettingForm';
import { useState } from 'react';
import { SettingGroup } from '../types';

function SettingsPage(): JSX.Element {
  const settingGroups = useSettings();

  const [selectedSettingGroup, setSelectedSettingGroup] = useState<SettingGroup | null>(
    settingGroups && settingGroups.length > 0 ? settingGroups[0] : null
  );

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        {settingGroups.map((x) => {
          return (
            <Button key={x.groupId} onClick={() => setSelectedSettingGroup(x)}>
              {x.groupName}
            </Button>
          );
        })}
      </Grid>
      <Grid item xs={12} md={4}>
        <SettingForm
          key={selectedSettingGroup?.groupId}
          items={selectedSettingGroup ? selectedSettingGroup.settings : []}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        {/* <pre>{JSON.stringify(selectedSettingGroup, null, 2)}</pre> */}
      </Grid>
    </Grid>
  );
}

export default SettingsPage;
