import React from 'react';
import AddRecipeForm from './AddRecipeForm';

class Recipes extends React.Component {
    render() {
        return (
            <div>
                <h2>Recipes</h2>
                <AddRecipeForm addRecipe={this.props.addRecipe}/>
                <ul>
                </ul>
            </div>
        )
    }
}
export default Recipes;