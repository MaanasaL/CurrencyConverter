
import { ElementRef, HostListener, Directive } from '@angular/core';

@Directive({
  selector: '[inputValidatorDirective]'
})

// Directive for input validations
export class InputValidatorDirective {
   
   
    private regularExp: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);

    private validKeyEvents: Array<string> = [ 'Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown','Tab', 'Delete', 'End', 'Home' ];

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('keypress', [ '$event' ])
    onKeyDown(keyboardevent: KeyboardEvent) {
      let inputValue: string = this.elementRef.nativeElement.value;
    // to allow only few special keys
     if (this.validKeyEvents.indexOf(keyboardevent.key) !== -1) {
        return;
     }     
 
    if(inputValue=='0' && keyboardevent.key=='0'){
      keyboardevent.preventDefault();
    }
    // to allow only 2 digits after decimal
    
    if ((inputValue.indexOf('.') != -1) && (keyboardevent.which != 0 && keyboardevent.which != 8)) {
      let pos = this.elementRef.nativeElement.selectionStart;
    
        if(inputValue.substring(inputValue.indexOf('.')).length > 2 && pos > inputValue.indexOf('.'))
           keyboardevent.preventDefault();
    }
    // do not allow any special characters after the inputvalue
    let checkNextInput: string = inputValue.concat(keyboardevent.key);
    if (checkNextInput && !String(checkNextInput).match(this.regularExp)) {
      keyboardevent.preventDefault();
    }
    
  }  
   
    
}

