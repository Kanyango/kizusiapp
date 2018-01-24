
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'plan-component',
    templateUrl: './plan.html'
})

export class PlanComponent {
    items: Array<any> = [];
    todos: Array<any> = [];

    public planForm: FormGroup;
    public toDoForm: FormGroup;
    constructor(private _fb: FormBuilder)
            {
                this.makeForm();
                this.todoForm();
            }

        makeForm()
        {
            this.planForm = this._fb.group(
                {
                    plan_item: ['', Validators.required]
                })
        }
        todoForm()
        {
            this.toDoForm = this._fb.group(
                {
                    todo_item: ['', Validators.required]
                })
        }
        onSubmit()
        {
            let one = this.planForm.value.plan_item;
            this.items.push(one);
            console.log(this.items);
            this.planForm.value.plan_item = '';
        }
        ontodo()
        {
            let one = this.toDoForm.value.todo_item;
            this.todos.push(one);
            console.log(this.todos);
            this.planForm.value.todo_item = '';
        }
}
