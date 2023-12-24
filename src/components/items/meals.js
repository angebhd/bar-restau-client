function MealList (){
            const meals = [{
                id:1,
                name:"Burger fries",
                image:'https://wallpapercave.com/wp/wp7029336.jpg',
            },
            {
                id:2,
                name:"Pizza",
                image:'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg',
            },
            {
                id:3,
                name:"Korean Food",
                image:'https://c0.wallpaperflare.com/preview/527/381/127/cooked-meat-on-plate.jpg',
            },
            {
                id:4,
                name:"Chiken",
                image:'https://images.alphacoders.com/991/991362.jpg',
            },
            {
                id:5,
                name:"Sushi",
                image:'https://images6.alphacoders.com/910/910443.jpg',
            },
            {
                id:6,
                name:"Pizza",
                image:'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg',
            },
        ]
    return (
        <div className="items-container">
            {meals.map((meal)=>(
                <div className="items">
                <h5>{meal.name}</h5>
                <img src={meal.image} alt={meal.name}></img>
                </div>
            ))}
        </div>
    )

}

export default MealList