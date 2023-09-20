const validations = (useData) => {

    
    const  errors = {};
    
    if(useData.name.length === 0){
        errors.name = 'The name has not been empty.'
    } else if (useData.name.length > 0 && useData.name.length < 2){
        errors.name = 'The name must have more than one word.'
    } else if (useData.name.length > 30){
        errors.name = 'The name must be less than thirty words.'
    }

    if(useData.description.length === 0){
        errors.description = 'The description has not been empty.'
    } else if (useData.description.length > 0 && useData.description.length <= 20){
        errors.description = 'The description must have more than twenty words.'
    } else if (useData.description.length > 200){
        errors.description = 'The name must be less than two hundred words.'
    }

    if(useData.released === ''){
        errors.released = 'The released has not been empty.'
    }

    if(useData.rating === ''){
        errors.rating = 'The rating has not been empty.'
    }

    return errors;
}

export default validations;