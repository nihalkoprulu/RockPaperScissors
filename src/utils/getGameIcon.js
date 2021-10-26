import rockIcon from '../assets/images/rock_icon.svg'
import paperIcon from '../assets/images/paper_icon.svg'
import scissorsIcon from '../assets/images/scissors_icon.svg'


export const getGameIcon= (type) =>{
    if (type==="paper") return paperIcon;
    if (type==="rock") return rockIcon;
    if (type==="scissors") return scissorsIcon;
}