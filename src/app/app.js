import React, {useState} from 'react';
import NavigationBar from "../nav-bar";
import Content from "../content";
import Footer from "../footer/footer";
import StateList from "../state-list";
import ItemList from "../item-list";
import './app.css';

const MenuTopNamesArr = [
    {name: 'Home'},
    {name: 'Store'},
    {name: 'Blog'},
    {name: 'Support'}
];

const MenuFooterNamesArr = [
    {name: 'FAQs'},
    {name: 'Media'},
    {name: 'Promotions'},
    {name: 'About Us'}
];

const ListOfItemsBase = [
    {itemName: 'Jordan Air Jordan Retro 3', startAmount: 0, id: 1},
    {itemName: 'Nike Kobe Mamba Focus', startAmount: 0, id: 2},
    {itemName: 'Nike Adapt BB 2.0', startAmount: 0, id: 3},
    {itemName: "Under Armour Men's Harper", startAmount: 0, id: 4},
    {itemName: "Adidas Predator 20+ FG", startAmount: 0, id: 5}
];

const startCounterAmount = 0;

const Copyright = '© Mark K Group, LLC. 2020';


function App () {
    const [StateArr, setStateArr] = useState([]);
    const [ListOfItems, setListOfItems] = useState(ListOfItemsBase);

    const [startAmountReader, setStartAmountReader] = useState(0);

    const [totalCount, setTotalCount] = useState(startCounterAmount);

    const totalCountChangeUp = () => {
        setTotalCount(totalCount +1);
    };

    const totalCountChangeDown = () => {
        setTotalCount(totalCount -1);
    };

    const onAmountChanging = (amount) => {
        setStartAmountReader(amount);
    };

    const onSubmittingAddition = (id) => {

        const findIndex = ListOfItems.findIndex((el) => el.id === id);

        let addingToggle = true;

        for(let i=0; i<StateArr.length;i++)
        {
            if(StateArr[i].id === id){
                addingToggle = false;
            }
        }

        if (addingToggle)
        {
            const tempArr = [...StateArr];
            tempArr.push(ListOfItems[findIndex]);

            if(!isNaN(startAmountReader))
            {
                tempArr[tempArr.length-1].startAmount= parseInt(startAmountReader);
            }
            else {
                tempArr[tempArr.length-1].startAmount= 0;
            }
            setStateArr(tempArr);
            setTotalCount(totalCount + parseInt(tempArr[tempArr.length-1].startAmount));
            setStartAmountReader(0);

            /**************************************************************
             * ЭТО ВЕРСИЯ С УДАЛЕНИЕМ ЭЛЕМЕНТА ИЗ МЕНЮ ВВЕРХУ (закомментируй тогда цикл for и addingToggle)
             * **********************************************************
            const tempListOfItemsArr = [
                ...ListOfItems.slice(0, findIndex),
                ...ListOfItems.slice(findIndex+1)];
            setListOfItems(tempListOfItemsArr);*/
        }
    };

   function buttonClicked(name) {
        console.log("CLICKED!!! " + name)
   }

    return (
        <div>
            <NavigationBar menuData={MenuTopNamesArr}/>
            <Content bc={buttonClicked}/>

            <ItemList itemList={ListOfItems}
                      onAmountChanging={onAmountChanging}
                      onSubmittingAddition={onSubmittingAddition}
            />
            <hr/>
            <StateList startArray = {StateArr}
                   totalCountChangeUp={totalCountChangeUp}
                   totalCountChangeDown={totalCountChangeDown}
                   totalCount={totalCount}
            />

            <Footer topMenuData={MenuTopNamesArr}
                    footMenuData={MenuFooterNamesArr}
                    textBar={Copyright}/>
        </div>
    )
}

export default App;
