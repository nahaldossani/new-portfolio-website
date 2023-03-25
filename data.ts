import { RiComputerLine } from 'react-icons/ri'
import { IService, ISkill } from './type'
import {SiShopify} from 'react-icons/si'
import {BsCircleFill} from 'react-icons/bs'

export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: "Front-End Developer",
        about: "I offer <b>front-end development</b> for user-friendly websites.",
    },
    {
        Icon: SiShopify,
        title: "Shopify Ecommerce Website",
        about: "Build your online store with a <b>Shopify ecommerce website</b>.",
    },
]

export const langauges:ISkill[] = [
    {
        name:'HTML5',
        level:'85%',
        Icon:BsCircleFill
    },
    {
        name:'CSS3',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name:'Tailwind CSS',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name:'Nextjs',
        level:'55%',
        Icon:BsCircleFill
    },
    {
        name:'JavaScript',
        level:'60%',
        Icon:BsCircleFill
    },
    {
        name:'TypeScript',
        level:'50%',
        Icon:BsCircleFill
    },
    {
        name:'React',
        level:'60%',
        Icon:BsCircleFill
    },
]

export const tools:ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'PhotoShop',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'Illustrator',
        level: '85%'
    },
    {
        Icon: BsCircleFill,
        name: 'Framer',
        level: '60%'
    },
    {
        Icon: BsCircleFill,
        name: 'Adobe XD',
        level: '70%'
    }
]