import { Grid, Paper, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { base64ToImgUrl } from '../../../lib/utils/base64';

function ImgBase64Resolver(): JSX.Element {
  const [str, setStr] = useState('');

  const [url, setUrl] = useState('');

  useEffect(() => {
    if (str) {
      try {
        const url = base64ToImgUrl(str);
        setUrl(url);
      } catch (error) {
        console.error(error);
      }
    }
  }, [str]);

  return (
    <Stack gap={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            value={str}
            onChange={(e) => setStr(e.target.value)}
            fullWidth
            minRows={20}
            maxRows={25}
            multiline
            placeholder="Insert/paste your base64 string here..."
            InputProps={{ sx: { fontFamily: 'monospace' }, spellCheck: 'false' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            {url ? (
              <img src={url} />
            ) : (
              'Paste a valid base64 to the left pane to see the image here'
            )}
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default ImgBase64Resolver;
