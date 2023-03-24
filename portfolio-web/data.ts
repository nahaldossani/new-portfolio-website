import { RiComputerLine } from 'react-icons/ri'
import { IService } from './type'
import {SiShopify} from 'react-icons/si'

export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: "Front-End Developer",
        about: "I offer <b>front-end development</b> for user-friendly websites.",
    },
    {
        Icon: SiShopify,
        title: "Shopify Dropshipping Store Setup",
        about: "Setup your <b>Shopify dropshipping store</b> for easy online selling.",
    },
    {
        Icon: SiShopify,
        title: "Shopify Ecommerce Website",
        about: "Build your online store with a <b>Shopify ecommerce website</b>.",
    },
]