import React from 'react';
import { Collapse, Button, Well, Modal} from 'react-bootstrap';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderRecipe = this.renderRecipe.bind(this);
        this.state = {
            showModal: false,
            name: '',
            ingredients: ''
        };
      }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    // Handles the edited changes to the recipe
    handleChange(event,key){
        event.preventDefault();
        const updatedRecipe = {
            ...this.props.recipes,
            [event.target.name]: event.target.value
        }
        this.props.updateRecipe(key,updatedRecipe);
     
    }

    renderRecipe() {
        console.log("haloo!!!")
        const { recipes } = this.props;
        let ingredients;
        const key = this.props.idx;
        if (recipes !== undefined || recipes !== null) {
            return (
                <div>
                <h3 onClick={ ()=> this.setState({ open: !this.state.open })}>{recipes.name}</h3>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                    
                        <ul>
                            {recipes.ingredients.split(',').map(ingredient => <li>{ingredient}</li>)}
                        </ul>
                            <Button
                            onClick={this.open}>
                            Edit
                            </Button>
                            <Modal show={this.state.showModal} onHide={this.close}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit {recipes.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form className="recipe-edit" onSubmit={this.handleChange} >
                                        <input  type="text" name="name" value={this.props.recipes.name} placeholder="Recipe name" readOnly onChange={(e)=> this.handleChange(e, key)} /><br/>
                                        <textarea type="text" name="ingredients" defaultValue={this.props.recipes.ingredients}  placeholder="Ingredients" onChange={(e)=> this.handleChange(e, key)} ></textarea><br/>
                                        <button type="submit">Save</button>
                                        <button type="submit" onClick={()=>this.props.removeRecipe(key)}>Delete</button>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button onClick={this.close}>Close</Button>
                                
                                </Modal.Footer>
                            </Modal>
                        </Well>
                    </div>
                </Collapse>     
                </div>       
            )
        }

    }
    
    render() {

        const { recipes } = this.props;
        let ingredientList;
        if (recipes) {
        ingredientList = recipes.ingredients.split(',').map(ingredient => <li>{ingredient}</li>)
        }

        const key = this.props.idx;
        const renderRecipe = (
        <div>
         <h3 onClick={ ()=> this.setState({ open: !this.state.open })}>{recipes.name}</h3>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                    
                        <ul>
                            {ingredientList}
                        </ul>
                        <Button className="buttons" bsStyle="danger" type="submit" onClick={()=>this.props.removeRecipe(key)}>Delete</Button>
                            <Button className="buttons"
                            onClick={this.open}>
                            Edit
                            </Button>
                            <Modal show={this.state.showModal} onHide={this.close}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit {recipes.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form className="recipe-edit" onSubmit={this.handleChange} >
                                        <input  type="text" name="name" value={this.props.recipes.name} placeholder="Recipe name" readOnly onChange={(e)=> this.handleChange(e, key)} /><br/>
                                        <textarea type="text" name="ingredients" defaultValue={this.props.recipes.ingredients}  placeholder="Ingredients" onChange={(e)=> this.handleChange(e, key)} ></textarea><br/>
                                        
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button onClick={this.close}>Close</Button>
                                
                                </Modal.Footer>
                            </Modal>
                        </Well>
                    </div>
                </Collapse>     
            </div>
        )


        return (
            <div>
                {recipes && renderRecipe}
            </div>
        );

    }
}
export default Recipe;
