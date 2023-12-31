/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from '@iconify/react/dist/iconify.js';
import { Stack, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export interface FileWithUrl extends File {
  url: string;
}

interface IProps {
  setFiles: React.Dispatch<React.SetStateAction<FileWithUrl[]>>;
  files: FileWithUrl[];
}

function Dropzone(props: IProps): JSX.Element {
  const { setFiles } = props;

  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles?.length) {
      setFiles((old) => [
        ...acceptedFiles.map((file: File) =>
          Object.assign(file, { url: URL.createObjectURL(file) })
        ),
        ...old,
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png', '.svg', '.jpg', '.webp', '.jpeg'],
    },
  });
  return (
    <form>
      <Stack gap={2}>
        <div
          {...getRootProps({
            className: 'dropzone',
          })}
        >
          <Typography variant="h2" gutterBottom>
            Drop files here...
          </Typography>
          <Icon icon="solar:file-broken" fontSize={40} />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </Stack>
    </form>
  );
}

export default Dropzone;
