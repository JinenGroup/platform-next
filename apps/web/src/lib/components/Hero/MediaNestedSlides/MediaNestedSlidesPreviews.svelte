<script lang="ts">
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    import type { HeroMediaNestedSlidesPreview } from '../types';

    export let previews: HeroMediaNestedSlidesPreview[];

    let containerRef: HTMLDivElement | null = null;

    let currentIndex = 0;
    let direction = 0;

    onMount(() => scrollToActive());

    export function resetState() {
        currentIndex = 0;

        scrollToActive(0);
    }

    async function go(index: number) {
        currentIndex = index;

        scrollToActive();
    }

    async function goBack() {
        direction = -1;

        currentIndex -= 1;

        if (currentIndex < 0) {
            currentIndex = previews.length - 1;
        }

        scrollToActive();
    }

    async function goNext() {
        direction = 1;

        currentIndex += 1;

        if (currentIndex === previews.length) {
            currentIndex = 0;
        }

        scrollToActive();
    }

    function scrollToActive(index?: number) {
        if (containerRef) {
            const activeElement = containerRef.querySelector(
                `[data-index="${index || currentIndex}"]`,
            );

            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest',
                });
            }
        }
    }

    const resolveBackground = (preview: HeroMediaNestedSlidesPreview): string => {
        if (typeof preview.background === 'object') {
            return preview.background.url ?? '';
        }

        return preview.background ?? '';
    };
</script>

{#if previews?.length}
    <div class="xl:absolute xl:right-0 xl:top-1/2 xl:max-w-[45%] xl:-translate-y-1/2">
        <div
            class="flex cursor-grab snap-x snap-mandatory flex-nowrap overflow-x-hidden xl:py-20 xl:pl-6 xl:pr-[100%]"
            bind:this={containerRef}
        >
            {#each previews as preview, index}
                <div
                    class="w-full shrink-0 snap-start xl:w-[350px] xl:pl-12 2xl:w-[450px]"
                    class:transition-opacity={currentIndex > index && direction === 1}
                    data-index={index}
                >
                    <button
                        class="xl:rounded-token group relative h-[450px] w-full overflow-hidden shadow-2xl transition xl:skew-y-12 xl:hover:skew-y-3 xl:hover:scale-110"
                        on:click={() => go(index)}
                    >
                        <div
                            class="absolute inset-x-0 top-0 z-10 w-full bg-white/5 py-1 text-lg font-semibold capitalize text-white backdrop-blur-3xl"
                        >
                            {preview.title}
                        </div>

                        <img
                            src={resolveBackground(preview)}
                            alt="Carousel preview item"
                            loading="lazy"
                            class="z-0 h-full w-full object-cover transition-transform duration-[10s] group-hover:blur-none"
                            class:blur-sm={index !== currentIndex}
                        />
                    </button>
                </div>
            {/each}
        </div>

        <div class="flex items-center justify-between px-3 py-3 xl:mt-6 xl:px-6">
            <div class="flex gap-3">
                {#if previews.length > 1}
                    <button
                        class="rounded-token bg-white/30 p-2 font-medium text-white hover:bg-white/70 active:scale-90"
                        on:click={() => goBack()}
                    >
                        <Icon
                            icon="line-md:arrow-left"
                            class="text-2xl"
                        />
                    </button>

                    <button
                        class="rounded-token bg-white/30 px-2 font-medium text-white hover:bg-white/70 active:scale-90"
                        on:click={() => goNext()}
                    >
                        <Icon
                            icon="line-md:arrow-right"
                            class="text-2xl"
                        />
                    </button>
                {/if}
            </div>

            <div class="text-lg text-white">
                <span>{currentIndex + 1}</span>
                <span>/</span>
                <span>{previews?.length}</span>
            </div>
        </div>
    </div>
{/if}

<style lang="postcss">
    .transition-opacity {
        opacity: 0;
        transition-timing-function: ease-in;
        transition-duration: 800ms;
        transition-property: opacity;
    }

    .transition-opacity button {
        transform: skewY(0);
    }
</style>
