import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class AddRecipeForm extends React.Component {
    constructor(...args) {
        super(...args);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

        this.state = {
            showModal: false
        }
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    createRecipe(event) {
        event.preventDefault();
        const recipe = {
            name: this.name.value,
            ingredients: this.ingredients.value,
        }
        this.props.addRecipe(recipe); 
    }
        render(){
            return (
                 <div>
                    <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={this.open}
                    >
                    Add Recipe
                    </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title><strong>Add recipe</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form ref={(input) => this.recipeForm = input} className="recipe-edit" onSubmit={(e)=> this.createRecipe(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Recipe name"/><br/>
                <textarea ref={(input) => this.ingredients = input} type="text" placeholder="Ingredients"></textarea><br/>
                <Button type="submit">Add</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
            )
        }
    }
export default AddRecipeForm;

