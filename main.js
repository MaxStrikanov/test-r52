import 'normalize.css'
import './style.scss'

// import { changeLanguage } from './components/changeLanguage';
import { burgerMenu } from './components/burgerMenu';
import { scrollMenu } from './components/scrollMenu';


const init = () => {
  scrollMenu();
  burgerMenu();
}

init()







