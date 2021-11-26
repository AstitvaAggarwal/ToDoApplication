import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ({title,onAdd,showAdd})/*or ({title}) for destructure*/ => {

const Location=useLocation()

    return (
        <header className='header'>
            <h1>Task Tracker</h1>

            {Location.pathname==='/' && <Button color={showAdd ?'red':'green'} 
            text={showAdd?'Close':'Add'} onClick={onAdd} />}
            
            {/* <Button color='blue' text='Wassup No 2'/> */}
           
            {/*for destructure*/}
            {/* <h1>Task Tracker {title}</h1> */}

            {/* Inline styling */}
            {/* <h1 style={{color:'red',backgroundColor:'black'}}>Task Tracker {props.title}</h1> */}

            {/* Dynamic styling (CSS IN JS)   */}
            {/* <h1 style={headingStyle}>Task Tracker {props.title}</h1> */}
        </header>
    )
}


Header.defaultProps = {
    title: 'task Tracker default'
}

Header.propTypes = {
    // title:PropTypes.string,
    title: PropTypes.string.isRequired,

}


// //CSS in Js
// const headingStyle={
//     color:'red',backgroundColor:'black'
// }
export default Header
