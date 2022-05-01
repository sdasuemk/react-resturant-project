import Drink from "./Drink";

//Functional Component
function DrinksMenu(){
    return(
        <div>
            <h3>Drinks Menu</h3>
            <Drink />
            <Drink />
        </div>
        
    );
}

export default DrinksMenu;