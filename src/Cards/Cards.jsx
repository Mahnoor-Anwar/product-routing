import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function Cards({title , image , desc, id }) {
    const navigate = useNavigate()
    const handleAdd = () => {
        navigate(`/cardDetails/${id}`)
    }
  return (
    <Card sx={{ maxWidth: 345 , marginBottom:"50px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {desc.slice(0,200)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAdd}>Add</Button>
      </CardActions>
    </Card>
  );
}
