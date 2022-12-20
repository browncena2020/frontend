<template>
  <div class="jumbotron vertical-center">
      <div class = "container">
          <div class = "row">
              <div class = "col-sm-12">
                  <h1>Recipes</h1>
                  <hr />
                  <!-- Allert Message -->
        <b-alert v-if="showMessage" variant="success" show>{{
          message
        }}</b-alert>
        <!-- b-alert v-if="error" variant="danger" show>{{ error }}</b-alert-->

        <button
          type="button"
          class="btn btn-success btn-sm"
          v-b-modal.recipe-modal
        >
          Create 
        </button>
                  <br /> <br />
                  <table class = "table table-hover">
                      <thead>
                          <tr>
                              <th scope = "col">  Name </th>
                              <th scope = "col">  Ingredients </th>
                              <th scope = "col">  Instructions </th>
                              <th scope = "col">  Favorite </th>
                              <th scope = "col">  Rating </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for= "recipe in recipes" :key = "recipe.id">
                              <td> {{ recipe.name }} </td>
                              <td> {{ recipe.ingredients }} </td>
                              <td> {{ recipe.instructions }} </td>
                              <td>
                                  <b-icon 
                                  v-if="recipe.favorite == true" icon="heart-fill">
                                  </b-icon>
                                  <b-icon v-if="(recipe.favorite == false)" icon="heart">
                                  </b-icon>
                              </td>
                                <td> 
                                    <div>
                                        <b-form-rating v-model= "recipe.rating" readonly variant="warning" class="mb-2"></b-form-rating>
                                        <p class="mt-2"></p>
                                    </div> 
                                 </td>
                              
                               <td> 
                                  <div class="btn-group" role="group">
                                      <button
                                      type="button"
                                      class="btn btn-info btn-sm"
                                      v-b-modal.edit-recipe-modal
                                      @click="editRecipe(recipe)"
                                      >
                                      Edit
                                      </button>
                                      <button
                                      type="button"
                                      class="btn btn-info btn-sm"
                                      @click="deleteRecipe(recipe)"
                                      >
                                      Delete
                                      </button>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <footer class = "text-center">
                  </footer>
              
              </div>
          </div>
          <!-- Beginning of Modal for Create -->
              <div>   <b-modal 
              ref = "addRecipeModal"
              id="recipe-modal"
              title="Add Recipe"
              hide-backdrop
              hide-footer
              >
              <b-form @submit="onSubmit" class="w-100">
              <b-form-group
                  id="name"
              label="Recipe Name:"
              label-for="name"
              description="Name ."
              >
              <b-form-input
              id="name"
              type="text"
              v-model="createRecipeForm.name"
              placeholder="name"
              required
              >
              </b-form-input>
              </b-form-group>
              <b-form-group
              id="ingredients"
              label="Recipe Ingredients:"
              label-for="ingredients"
              description="Ingredients."
              >
              <b-form-input
              id="ingredients"
              type="text"
              v-model="createRecipeForm.ingredients"
              placeholder="ingredients"
              required
              ></b-form-input>
              </b-form-group>
              <b-form-group
              id="instructions"
              label="Recipe Instructions:"
              label-for="instructions"
              description="Instructions ."
              >
              <b-form-input
              id="instructions"
              type="text"
              v-model="createRecipeForm.instructions"
              placeholder="Recipe Instructions"
              required
              ></b-form-input>
              </b-form-group>
              <b-form-group
              id="form-favorite-group"    
              label="Recipe Favorite:"
              label-for="form-edit-favorite-input"
              description="favorite"
              >
              <b-form-checkbox
              id="form-favorite-input"
              v-model="createRecipeForm.favorite"
              switch
              ></b-form-checkbox>
              </b-form-group>
              <b-form-group
              id="rating"
              label="Recipe Rating:"
              label-for="form-rating-input"
              description=" 1-5"
              >
              <b-form-rating
              id="rating"
              type="integer"
              v-model="createRecipeForm.rating"
              ></b-form-rating>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
          </b-modal>

          
          <b-modal
          ref = "editRecipeModal"
          id="edit-recipe-modal"
          title="Edit Recipe"
          hide-backdrop
          hide-footer
          >
          <b-form @submit="onSubmitUpdate" class="w-100">
          <b-form-group
          id="form-name-group"
          label="name:"
          label-for="form-name-input"
          description="Enter the name."
          >
          <b-form-input
          id="form-name-input"
          type="text"
          v-model="updateRecipeForm.name"
          placeholder="name"
          
          >
          </b-form-input>
          </b-form-group>
          <b-form-group
          id="form-ingredients-group"
          label="ingredients:"
          label-for="form-ingredients-input"
          description="Enter the ingredients."
          >
          <b-form-input
          id="form-ingredients-input"
          type="text"
          v-model="updateRecipeForm.ingredients"
          placeholder="ingredients"
          >
          </b-form-input>
          </b-form-group>
          <b-form-group
          id="form-instructions-group"
          label="Recipe Instructions:"
          label-for="form-instructions-input"
          description="Enter the instructions ."
          >
          <b-form-input

          id="form-instructions-input"
          type="text"
          v-model="updateRecipeForm.instructions"
          placeholder="Recipe Instructions"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group

          id="form-favorite-group"
          label="Recipe Favorite:"
          label-for="form-favorite-input"
          description="Let us know"
          >
          <b-form-checkbox
          id="form-favorite-input"
          v-model="updateRecipeForm.favorite"
          switch
          ></b-form-checkbox>
          </b-form-group>
          <b-form-group
          id="form-rating-group"
          label="Recipe Rating:"
          label-for="form-rating-input"
          description="1-5"
          >
          <b-form-rating
          id="form-rating-input"
          type="integer"
          v-model="updateRecipeForm.rating"
          ></b-form-rating>
          </b-form-group>
  
          <b-button type="submit" variant="primary">Update</b-button>
          </b-form>
          </b-modal>
          <!-- End of Modal for Edit Recipe-->

      </div>
      
  
  </div>
</div>
 
  

</template>


<script>
  
  
  import axios from 'axios';
  export default
  {
    name: 'AppRecipes',
    data()
    {
        return {
            recipes: [],
            createRecipeForm: {
                name: '',
                ingredients: '',
                instructions: '',
                favorite: false,
                rating: 0
            },
  
            updateRecipeForm: {
                name: '',
                ingredients: '',
                instructions: '',
                favorite: false,
                rating: 0
            },
  
            showMessage: false,
            message: '',
  
        };
    },
    methods: {
  
      
      
        //GET Recipes
        RESTgetRecipes() {
        const path = `${process.env.VUE_APP_ROOT_URL}/recipes`;
        axios
            .get(path)
            .then((response) => {
                this.recipes = response.data.recipe;
                this.message = response.data.recipe;
                    // To actually show the message
                    this.showMessage = true;
                    // To hide the message after 5 seconds
                    setTimeout(() => {
                      this.showMessage = false;
                    }, 100000);
            }
            )
            .catch((error) => {
                console.log(error);
            });
        },
  
        //POST Recipes
        RESTcreateRecipe(payload){
            const path = `${process.env.VUE_APP_ROOT_URL}/recipe`;
            axios
                .post(path,payload)
                .then((response) => {
                    this.RESTgetRecipes();
                    this.message = "Recipe Created succesfully!";
                    // To actually show the message
                    this.showMessage = true;
                    // To hide the message after 5 seconds
                    setTimeout(() => {
                      this.showMessage = false;
                    }, 50000);
                })
                .catch((error) => {
                    console.log(error);
                    this.RESTgetRecipes()
                });
        },
  
        RESTupdateRecipe(payload, id){
            const path = `${process.env.VUE_APP_ROOT_URL}/recipe/${id}`;
            axios
                .put(path,payload)
                .then((response) => {
                    this.RESTgetRecipes();
  
                      this.message = " Updated Successfully"
                      this.showMessage = true;
                      setTimeout(() => {
                          this.showMessage = false;
                      }, 3000);
                      
                })
                .catch((error) => {
                    console.log(error);
                    this.RESTgetRecipes()
                });
        },
  
  
        RESTdeleteRecipe(id){
            const path = `${process.env.VUE_APP_ROOT_URL}/recipe/${id}`;
            axios
                .delete(path)
                .then((response) => {
                    this.RESTgetRecipes();
                    this.message = "Recipe Deleted "
                    this.showMessage = true;
                    set.TimeOut(() => {
                        this.showMessage = false;
                    }, 3000);
  
                })
                .catch((error) => {
                    console.log(error);
                    this.RESTgetRecipes()
                });
        },
  
        initForm(){
            this.createRecipeForm = {
                name: '',
                ingredients: '',
                instructions: '',
                favorite: false,
                rating: 0
            };
            this.updateRecipeForm = {
                name: '',
                ingredients: '',
                instructions: '',
                favorite: false,
                rating: 0
            };
  
        },
        onSubmit(e) {
            e.preventDefault(); 
            this.$refs.addRecipeModal.hide(); 
            const payload = {
                name: this.createRecipeForm.name,
                ingredients: this.createRecipeForm.ingredients,
                instructions: this.createRecipeForm.instructions,
                favorite: this.createRecipeForm.favorite,
                rating: this.createRecipeForm.rating
            };
            this.RESTcreateRecipe(payload);
            this.initForm();
        },
        onSubmitUpdate(e) {
          e.preventDefault(); 
          this.$refs.editRecipeModal.hide(); 
          const payload = {
              name: this.updateRecipeForm.name,
              ingredients: this.updateRecipeForm.ingredients,
              instructions: this.updateRecipeForm.instructions,
              favorite: this.updateRecipeForm.favorite,
              rating: this.updateRecipeForm.rating
          };
          this.RESTupdateRecipe(payload, this.updateRecipeForm.id);
          this.initForm();
      },
  
        deleteRecipe(recipe) {
            this.RESTdeleteRecipe(recipe.id);
        },
  
        editRecipe(recipe) {
            this.updateRecipeForm = recipe;
        },
  
        
  
    },
   
  
    created() {
        this.RESTgetRecipes();
    },
  };
  
  </script>
<style>
.vertical-center {
  min-height: 100%;  
  min-height: 100vh; 

  display: flex;
  align-items: center;
}
</style>

