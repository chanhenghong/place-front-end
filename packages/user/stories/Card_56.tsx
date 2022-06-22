import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import Checkbox from '@mui/material/Checkbox';
import styled from "styled-components";
import './card_56.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface CardProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    color?: string;
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    title: string;
    name: string;
    created: string;
    map: string;
    updated: string;
    viewCount: number;


    /**
     * Optional click handler
     */
    onClick?: () => void;
  }

  export const Card_56 = ({
    primary = false,
    size = 'medium',
    title,
    backgroundColor,
    color,
    name,
    created,
    map,
    updated,
    viewCount,

    ...props
  }: CardProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    let dateCreated: any = new Date(created ? created : "").toLocaleDateString(
        "en-US",
        { year: "numeric", month: "short", day: "numeric" },
      );
    let dateUpdated: any = new Date(updated ? updated : "").toLocaleDateString(
        "en-US",
        { year: "numeric", month: "short", day: "numeric" },
      );
  return (
    <Card className="card-style" sx={{backgroundColor, padding: "0px", borderRadius: "0px", border: "0.5px solid #9A999A", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
       {/* <Checkbox {...label} defaultChecked sx={{position: "absolute"}}/> */}
       <input type="checkbox" id="checkbox01" name="checkbox" value="checkbox" style={{position: "absolute", margin: "8.89px 227.58px"}}></input>
      <CardMedia
        component="img"
        height="160px"
        image={map}
        alt="mapPicture"
      />
      <CardContent sx={{padding: "0px"}}>
        <Typography className='title-style'  component="div" sx={{fontSize: "12px", color, margin: "12px 10px 0px "}}>
         {title}
        </Typography>
        <Typography className='description' sx={{fontSize: "12px", margin: "8px 10px 0px "}}>
          Owner: {name}
        </Typography>
        <Typography className='description' sx={{fontSize: "12px", margin: "8px 10px 0px"}}>
          Created: {dateCreated}
        </Typography>
        <Typography className='description' sx={{fontSize: "12px", margin: "8px 10px 0px "}}>
          Updated: {dateUpdated}
        </Typography>
        <Typography className='description' sx={{fontSize: "12px", margin: "8px 10px 0px "}}>
          View Count: {viewCount}
        </Typography>
      </CardContent>
      <CardActions sx={{padding: "0px", borderTop: "0.5px solid #9A999A "}}> 
        <ButtonBase>
            <img id="firstIcon" src='./Vector.svg' width={19.38} height={13.57}/>
        </ButtonBase>
        <ButtonBase >
            <img id="secondIcon" src='./Vector1.svg' width={15} height={14} />
        </ButtonBase>
      </CardActions>
    </Card>
  );
}



