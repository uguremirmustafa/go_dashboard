import { Grid } from '@mui/material';
import Scrollbar from '../layout/Scrollbar';
import { FileWithUrl } from './Dropzone';

interface IProps {
  setFiles: React.Dispatch<React.SetStateAction<FileWithUrl[]>>;
  files: FileWithUrl[];
  height?: string;
}

function ImgPreviewGallery(props: IProps): JSX.Element {
  const { files, height = `calc(100vh - 14rem)` } = props;
  if (!files.length) {
    return <span>No images here...</span>;
  }
  return (
    <Scrollbar height={height}>
      <Grid container spacing={2}>
        {files.map((x) => {
          return (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={x.url}
              onClick={() => {
                // onItemClick(x);
              }}
              sx={{
                height: 200,
              }}
            >
              <img src={x.url} alt={x.name} className="img-dropzone-preview" />
            </Grid>
          );
        })}
      </Grid>
    </Scrollbar>
  );
}

export default ImgPreviewGallery;
