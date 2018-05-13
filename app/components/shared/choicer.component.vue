<template>
  <ul class="choicer" v-if="value">
    <li class="choicer-item" :class="{'is-active': item === value}" v-for="(item, index) in items" :key="index" @click="onClickItem(item)">
      {{item}}
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class ChoicerComponent extends Vue {
  // v-model
  @Prop({type: String, required: true})
  value: string;

  @Prop({type: Array, required: true})
  items: string[];

  public onClickItem(item: string) {
    this.$emit('input', item);
  }
}
</script>

<style lang="scss" scoped>
@import '~/variables';

.choicer {
  display: flex;
  justify-content: space-between;
  list-style: none;

  &-item {
    cursor: pointer;

    &.is-active {
      color: $color-secondary;
      font-weight: $font-weight-bold;
    }

    &:hover {
      color: $color-secondary;
      text-decoration: underline;
    }
  }
}
</style>