const validations = (state, name, setErrors, errors) => {

    const regexDate = /^(0[1-9]|1[0-2])[-/](0[1-9]|[12][0-9]|3[01])[-/]\d{4}$/;
    const regexImage = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;

    if(name === "name"){
        if(state.name === ''){
            setErrors({...errors, name: 'The field is required, the name has not been empty.'})
        } else if (state.name.length > 0 && state.name.length < 2){
            setErrors({...errors, name: 'The name must have more than one word.'})
        } else if (state.name.length > 30){
            setErrors({...errors, name: 'The name must be less than thirty words.'})
        } else {setErrors({...errors, name: ''})}
    }

    if(name === "description"){
        if(state.description.length === 0){
            setErrors({...errors, description: 'The field is required, the description has not been empty.'})
        } else if (state.description.length > 0 && state.description.length <= 20){
            setErrors({...errors, description: 'The description must have more than twenty words.'})      
        } else if (state.description.length > 200){
            setErrors({...errors, description: 'The name must be less than two hundred words.'})
        } else {setErrors({...errors, description: ''})}
    }

    if(name === "platform"){
        if(state.platforms.length <= 0){
            setErrors({...errors, platforms: 'The field is required, the platforms has not been empty.'}) 
        } else {setErrors({...errors, platforms: ''})}
    }

    if(name === "background_image"){
        if(state.background_image === ''){
            setErrors({...errors, background_image: 'The field is required, the image has not been empty.'})
        } else if(!regexImage.test(state.background_image)){
            setErrors({...errors, background_image: 'You must put an URL.'})
        } else {setErrors({...errors, background_image: ''})}
    }

    if(name === "released"){
        if(state.released === ''){
            setErrors({...errors, released: 'The field is required, the released has not been empty.'})
        } else if(!regexDate.test(state.released)){
            setErrors({...errors, released: 'You must use teh date expresion mm/dd/yyyy or mm-dd-yyyy.'})    
        } else {setErrors({...errors, released: ''})}
    }

    if(name === "rating"){
        if(state.rating === ''){
            setErrors({...errors, rating: 'The field is required, the rating has not been empty.'})
        } else if(isNaN(parseInt(state.rating))){
            setErrors({...errors, rating: 'You must put a number.'})
        } else if(state.rating > 5){
            setErrors({...errors, rating: 'The number must be equal or less than 5.'})
        } else if(state.rating < 1){
            setErrors({...errors, rating: 'The number must be more or equal than 1.'})
        } else {setErrors({...errors, rating: ''})}
    }

    if(name === "genre"){
        if(state.genres.length <= 0){
            setErrors({...errors, genres: 'The field is required, the genres has not been empty.'}) 
        } else {setErrors({...errors, genres: ''})}
    }

}

export default validations;