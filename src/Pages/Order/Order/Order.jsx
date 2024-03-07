import Cover from "../../Shared/Cover/Cover";
import orderCover from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import 'react-tabs/style/react-tabs.css';
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories = ["salad","pizza","soup","dessert",'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    return (
        <div className="  ">
             <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <Cover img={orderCover} title={'Order Food'}></Cover>
            <Tabs className={'my-10 mx-20'} selectedTabClassName=" text-yellow-600 py-1 border-yellow-600 border-b-2" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'text-center my-5'}>
                    <Tab className={"font-semibold uppercase hover:cursor-pointer outline-none inline mr-3"}>Salad</Tab>
                    <Tab className={"font-semibold uppercase hover:cursor-pointer outline-none inline mr-3"}>Pizza</Tab>
                    <Tab className={"font-semibold uppercase hover:cursor-pointer outline-none inline mr-3"}>Soup</Tab>
                    <Tab className={"font-semibold uppercase hover:cursor-pointer outline-none inline mr-3"} >Dessert</Tab>
                    <Tab className={"font-semibold uppercase hover:cursor-pointer outline-none inline mr-3"}>Drinks</Tab>
                </TabList>
                <TabPanel> <OrderTab items={salad}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={dessert}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={drinks}></OrderTab></TabPanel>
            </Tabs>




        </div>
    );
};

export default Order;