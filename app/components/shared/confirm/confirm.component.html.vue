<template>
  <div class="confirm">
    <div class="confirm-handler" v-b-modal="'modalConfirm' + id" @click.stop>
        <slot></slot>
    </div>

    <b-modal class="confirm-modal" :id="'modalConfirm' + id" ref="modal" centered :title="title" @ok="onOk" @cancel="onCancel" :okTitle="$t('actions.confirm')" :cancelTitle="$t('actions.cancel')">
        <div class="confirm-body">
            <slot name="modal"></slot>
        </div>
    </b-modal>
</div>
</template>