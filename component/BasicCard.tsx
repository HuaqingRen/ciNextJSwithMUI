// standard MUI component
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

// nextjs and react component
import { useState } from "react";
import Image from 'next/image'

// customezied component and interface
import AvatorwithDefinedColor from "./AvatarwithDefinedColor";
import { CiItem } from "../interfaces/interface";


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props_Local {
  inputItem: CiItem;
}

function stringToInteger(string: string, maxNumber : number) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    return Math.floor(hash%maxNumber);
  }


export default function BasicCard(props: Props_Local) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 const displayedLine : number = stringToInteger(props.inputItem.paragraphs[0], props.inputItem.paragraphs.length)

  return (
    <Card sx={{ minWidth: 250,   maxWidth: 700}}>
      <CardHeader
        avatar={<AvatorwithDefinedColor inputItem={props.inputItem.author} />}
        title={
          <Typography variant="h5" component="div">
            {props.inputItem.title}
          </Typography>
        }
      />
       <CardMedia
        component="img"
        height="100%"
        image="http://www.chinatrip.jp/FileUpload/UserFiles/image/techan/shanshuihua-1.jpg"
        alt="background image"
      />
      <CardContent>
        <Typography variant="body2">{props.inputItem.paragraphs[displayedLine]}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleExpandClick}>
          查看全词
        </Button>
      </CardActions>
      <div>
      <Collapse in={expanded} timeout="auto" unmountOnExit> <Typography paragraph>
      <CardContent> 
             <Typography sx={{ mb: 1.5 }} color="text.secondary">
             {props.inputItem.author}
      </Typography>
            <Typography variant="body2">
              {props.inputItem.paragraphs}
            </Typography>
          </CardContent>
          </Typography> </Collapse>
      </div>
    </Card>
  );
}
