export function useClassMerge(defaultClasses: string) {
  const props = defineProps<{
    additionalClasses?: string;
  }>();

  const combinedClasses = computed(() => {
    return `${defaultClasses} ${props.additionalClasses || ''}`;
  });

  return {
    combinedClasses,
  };
}