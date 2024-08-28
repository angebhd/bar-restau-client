function TableList (){
            const tables = [{
                id:1,
                name:"Table for one",
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N-1vG7iO2V_ChaAy_w5mqD_iEliiIAZ16w&s',
            },
            {
                id:2,
                name:"Table for two",
                image:'https://5.imimg.com/data5/BJ/SN/ZA/SELLER-43846947/restaurant-tables-chairs-and-counters-6--500x500.jpeg',
            },
            {
                id:3,
                name:"Table for three",
                image:'https://image.made-in-china.com/2f0j00WQDcOzwaCvgK/Temper-Glass-Table-Top-Low-Seating-Dining-Table-Sets-Restaurant-Furniture-3-Seater-6-Seater-Multicolor-Table-Sets.jpg',
            },
            {
                id:4,
                name:"Table for four",
                image:'https://cdnimg.webstaurantstore.com/uploads/seo_category/2019/5/table-dining-sets.jpg',
            },
            {
                id:5,
                name:"Table for eight",
                image:'https://www.webstaurantstore.com/images/products/medium/404793/1716754.jpg',
            },
            {
                id:6,
                name:"Table for ten",
                image:'https://i.etsystatic.com/16086164/r/il/857dec/3350335768/il_fullxfull.3350335768_c6of.jpg',
            },
        ]
    return (
        <div className="items-container">
            {tables.map((table)=>(
                <div className="items" key={table.id}>
                <h5>{table.name}</h5>
                <img src={table.image} alt={table.name}></img>
                </div>
            ))}
        </div>
    )

}

export default TableList