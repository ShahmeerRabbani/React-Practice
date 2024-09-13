import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard({desc, img, title, id}) {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/product/${id}`)
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0, 15)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc.slice(0, 50)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleNavigate}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
