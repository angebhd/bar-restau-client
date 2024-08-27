import axios from "axios";
const apiURL = "http://localhost:3001"

const getDrink = async () => {
    return await axios.get(`${apiURL}/api/menu/drink`);
}
const getFood = async () => {
    return await axios.get(`${apiURL}/api/menu/food`);
}

const getAll = async () => {
    return await axios.get(`${apiURL}/api/menu/all`);
}



const getFoodByType = async () => {
    try {
        const List = await menu.getFood();
        const TypeList = localFunctions.getMenuSubType(List.data);
        return localFunctions.getItemsBySubType(List.data, TypeList);
    } catch (error) {
        console.log(error);
    }
}
const getDrinkByType = async () => {
    try {
        const List = await menu.getDrink();
        const TypeList = localFunctions.getMenuSubType(List.data);
        return localFunctions.getItemsBySubType(List.data, TypeList);
    } catch (error) {
        console.log(error);
    }
}




const localFunctions = {
    getMenuSubType: (items) => {
        const allSubType = [];
        items.forEach(item => {
            allSubType.push(item.subType)
        });
        const subType = [...new Set(allSubType)];
        return subType;
    },
    getItemsBySubType: (items, subType) => {
        const itemsBySubType = [];
        subType.forEach(sub => {
            const name = sub;
            const element = [];
            items.forEach(item => {
                if (item.subType === sub) { element.push(item) }

            });
            itemsBySubType.push({ name, element });
        });
        return itemsBySubType;
    }

}




const menu = {
    getDrink: getDrink,
    getFood: getFood,
    getAll: getAll,
    getSorted: {
        foodBySubType: getFoodByType,
        drinkBySubType: getDrinkByType
    }
}

export { menu }
