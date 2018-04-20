import { Vue, Prop } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class ConfirmComponent extends Vue {
    @Prop({type: Function, default: () => {}})
    onOk: any;

    @Prop({type: Function, default: () => {}})
    onCancel: any;

    @Prop({type: String, default: 'Info'})
    title: string;

    public id = performance.now();
}