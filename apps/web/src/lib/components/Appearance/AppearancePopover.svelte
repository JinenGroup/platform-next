<script lang="ts">
    import { resetToDefaults } from '$lib/utils/appearance';
    import Icon from '@iconify/svelte';
    import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
    import AppearanceBorderRadius from './AppearanceBorderRadius.svelte';
    import AppearanceFontSize from './AppearanceFontSize.svelte';
    import AppearancePrimaryColor from './AppearancePrimaryColor.svelte';
    import AppearanceTheme from './AppearanceTheme.svelte';

    const handleReset = () => {
        resetToDefaults();
    };
</script>

<Popover
    class="popover"
    let:open
>
    <PopoverButton class="popover-button button">
        <Icon
            icon="line-md:paint-drop-half-filled-twotone"
            class="text-xl"
        />

        Apariencia

        {#if open}
            <Icon icon="ph:caret-up" />
        {:else}
            <Icon icon="ph:caret-down" />
        {/if}
    </PopoverButton>

    <PopoverPanel
        class="popover-panel popover-panel-br"
        let:close
    >
        <div
            class="grid grid-cols-[repeat(1,_minmax(250px,_1fr))] gap-6 md:grid-cols-[repeat(2,_minmax(250px,_1fr))] lg:grid-cols-[repeat(3,_minmax(250px,_1fr))] xl:grid-cols-[repeat(4,_minmax(250px,_1fr))]"
        >
            <AppearancePrimaryColor />
            <AppearanceBorderRadius />
            <AppearanceFontSize />
            <AppearanceTheme />
        </div>

        <hr class="border-token my-4" />

        <div class="button-group button-group-end pb-2">
            <button
                class="button button-ghost"
                on:click={() => {
                    handleReset();
                    close(null);
                }}
            >
                <Icon icon="line-md:check-list-3-filled" />

                Restablecer
            </button>

            <button
                class="button button-solid"
                on:click={() => {
                    close(null);
                }}
            >
                <Icon icon="line-md:clipboard-check" />

                Aceptar
            </button>
        </div>
    </PopoverPanel>
</Popover>
