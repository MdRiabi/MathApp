import { AbstractControl } from "@angular/forms";

export class MathValidators {

static addition(traget: string , sourceOne:string,sourceTwo:string){
return(form: AbstractControl) =>{
    const sum = form.value[traget];
    const firstNumber = form.value[sourceOne];
    const secondNumber = form.value[sourceTwo];

    if(firstNumber + secondNumber === parseInt(sum)){

        return null;
    }
    return { addition: true };
};
    
    

}




}
