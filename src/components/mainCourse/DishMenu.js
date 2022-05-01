import Dish from "./Dish";

//Functional Component
function DishMenu(){
    return(
        <div>
             <h3>Dish Menu</h3>
             <Dish />
             <Dish />
        </div>
       
    );
}

export default DishMenu;