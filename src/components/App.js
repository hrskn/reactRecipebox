import React, { Component } from 'react';
import Recipes from './Recipes';
import Recipe from './Recipe';

class App extends Component {
  constructor(props) {
    super(props);
    this.addRecipe = this.addRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.state = {
      recipes: {}
    }
  }

  componentWillMount(){
    const localStorageRef = localStorage.getItem('recipes');

    if(localStorageRef) {
      this.setState({
        recipes: JSON.parse(localStorageRef)
      });
    }
  }
  componentWillUpdate(nextProps,nextState) {
    localStorage.setItem('recipes', JSON.stringify(nextState.recipes));
  }

  // Add new recipe to the list
  addRecipe(recipe) {
    // update state recipes
    const recipes = {...this.state.recipes}
    const timestamp = Date.now();
    recipes[`recipe+${timestamp}`] = recipe;
    this.setState({ recipes });
  }
  // Updates recipe after edit
  updateRecipe(key,updatedRecipe){
    const recipes = {...this.state.recipes}
   
    recipes[key] = updatedRecipe;
  
    this.setState({recipes});
  }
  // Remove recipe
  removeRecipe(key) {
    const recipes = {...this.state.recipes};
    recipes[key] = '';
    this.setState({recipes});
  }


  render() {
    return (
      <div className="App">
        <div className="container">
        <Recipes
          addRecipe={this.addRecipe}
          recipes={this.state.recipes}
          updateRecipe={this.updateRecipe}
          />
        <ul>
          {
            Object
            .keys(this.state.recipes)
            .map(key => <Recipe key={key} idx={key} recipes={this.state.recipes[key]} removeRecipe={this.removeRecipe} updateRecipe={this.updateRecipe}/>)
          }
        </ul>

        
        </div>
      </div>
    );
  }
}

export default App;
