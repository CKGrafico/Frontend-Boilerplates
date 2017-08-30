import { Vue } from 'vue-property-decorator';

export * from 'vue-property-decorator';

export class BaseComponent extends Vue {
    public static readonly tag: string;
}