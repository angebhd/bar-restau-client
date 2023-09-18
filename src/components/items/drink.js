function DrinkList (){
            const drinks = [{
                id:1,
                name:"Burger fries",
                image:'https://wallpapercave.com/wp/wp7029336.jpg',
            },
            {
                id:1,
                name:"Korean Food",
                image:'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg',
            },
            {
                id:1,
                name:"Korean Food",
                image:'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg',
            },
        ]

    return (
        <div>
            {drinks.map((drink)=>(
                <>
                <p>{drink.name}</p>
                <img src={drink.image}></img>
                </>
            ))}
        </div>
    )

}

export default DrinkList