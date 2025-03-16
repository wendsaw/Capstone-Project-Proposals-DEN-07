
import { useTheme } from '../hooks/useTheme';
import './ThemeSelector.css'


const themeColors=['#249c6b', '#E2E8F0', '#38BDF8']

const ThemeSelector = () => {

    const{changeColor}=useTheme()


    return ( 

        <div className='theme-selector'>
        <div className="theme-buttons">
          {themeColors.map(color => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color }}
              className="color-button"
            />
          ))}
        </div>
      </div>
     );
}
 
export default ThemeSelector;