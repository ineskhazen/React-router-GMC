
import * as React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import{Link}  from "react-router-dom";


  const MovieCard = ({
    movie: {id,name, image, date, type, rating, description,Trailer},
    handleName,
  }) => {
 
  return (
    <Card style={{width:"25%", margin:"2%"}}>
      <CardMedia style={{width:"100%", height: "400px"}}
        component="img"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" onClick={() => handleName(name)} >
        {name}
        </Typography>
       
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
         
          </ul>
        </div>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        
      </CardContent>
      <CardActions>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={rating} readOnly />
      </Box>
      </CardActions>
      <div>{Trailer}</div>
      <div className="card_right__button">
         {/* <Link to={{pathname:`/description/${id}`,
         state:{movie:{id,name, image, date, type, rating, description ,Trailer}}}}> SEE TRAILER </Link> */}
         <Link to={{pathname:`/description/${id}`,state:{movie:{name, image, date, type, rating, description ,id}}}}>
         See Trailer
         </Link>
        </div>
        
    </Card>
  );
    }
    export default MovieCard
