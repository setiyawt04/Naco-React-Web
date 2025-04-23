import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard({title, subheader, image, price, description}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardHeader sx={{fontFamily: 'DynaPuff', textAlign:'center', color: '#f7cc54'}}
        title={title}
        subheader={subheader}
        titleTypographyProps={{
          fontSize: '24px',
          fontWeight: 'bold',
        }}
        subheaderTypographyProps={{
          fontSize:'16px',
          fontWeight: '100',
        }}
      />
      <CardMedia
        component="img"
        height={42}
        image={image}
        alt="produk-image"
      />
      <CardContent>
        <Typography variant="body2" sx={{fontFamily:'Dynapuff',  color: 'text.secondary', textAlign: 'center', fontSize: '18px'}}>
          {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <DescriptionIcon />
          <Typography> Description</Typography>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2, fontSize: '16px'}}>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
