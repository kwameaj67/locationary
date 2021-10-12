import { Category, Location } from '../../pages/index'
import {MdLocationOn} from 'react-icons/md'
import {MdCategory} from 'react-icons/md'


const tabs = [
    {
      path: "/category",
      exact: true,
      title:"Category",
      icon:<MdCategory size={20} color="#55575b"/>,
      main: () => <Category/>
    },
    {
      path: "/location",
      exact: true,
      title:"Location",
      icon:<MdLocationOn size={20} color="#55575b"/>,
      main: () => <Location/>
    }
]

export default tabs