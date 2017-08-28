import { Vue } from 'vue-property-decorator';
import { AppComponent } from './app.component';

// APP bootstraping
export class App {
    constructor() {
        this.bootstrap();
    }

    public bootstrap(): any {
        let options = {
            el: '.app',
            render: create => create(AppComponent)
        };

        return new Vue(options);
    }
}

new App();