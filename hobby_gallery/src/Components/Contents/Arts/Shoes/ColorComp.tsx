import '../Shoes/Shoes.scss';
import Constants from './constants/Constants';
import { 
  List,
  ListItem,
  IconButton,
  ListItemText,
  Typography
} from '@mui/material';

import { colorState } from './atoms/Atoms';
import { useRecoilState } from 'recoil';

export default function ColorComp(){


  //전역 상태저장 Recoil
  const [selectedColor, setSelectedColor ] = useRecoilState(colorState);
  
  //컬러박스 길이 
  const padding = 16;
	const btnWidth = 32;
	const width = Constants.COLOR_ARR.length * (btnWidth + padding * 2);

  const colorClick = (idx:number) => {
      setSelectedColor(idx);
	};
  return(
    <div className={'color-wrap'} >
      <div className={'color-inner-wrap'} style={{width:width}}  >
        <Typography className="current-part">
        { Constants.COLOR_ARR[selectedColor] != undefined ? Constants.COLOR_ARR[selectedColor].name  : <></>}
        </Typography>
        <br/>
        <List className={'list-wrap'} >
            {
              Constants.COLOR_ARR.map((color, idx) => (
                <ListItem className="color-item" key={'color-'+idx}>
                  <IconButton 
                  onClick={()=>colorClick(idx)} 
                  className={idx ? "color-btn selected" : "color-btn"} 
                  style={{backgroundColor:color.color}}
                  >
                  </IconButton>
                  {
                    selectedColor === idx ?
                      <ListItemText className="color-name" primary={color.name} />
                    :
                      <></>
                  }
                </ListItem>
              ))
            }
        </List>
      </div>
    </div>
  )
}